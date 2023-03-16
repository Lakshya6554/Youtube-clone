import { useState, useEffect, React } from "react";
import { Box, Typography } from "@mui/material";
import Videos from "./videos";
import { fetchFromApi } from "../utilis/fetchfromApi";
import { useParams } from "react-router-dom";
const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();
  useEffect(() => {
    setVideos(null);

    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search results for:{" "}
        <span style={{ color: "#FC1503" }}>{searchTerm}</span> Videos
      </Typography>

      <Videos videos={videos}></Videos>
    </Box>
  );
};

export default SearchFeed;
