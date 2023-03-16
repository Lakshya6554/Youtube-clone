import { useState, useEffect, React } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./sidebar";
import Videos from "./videos";
import { fetchFromApi } from "../utilis/fetchfromApi";
const Feed = () => {
  const [selectedcategory, setselectedcategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromApi(`search?part=snippet&q=${selectedcategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedcategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedcategory={selectedcategory}
          setselectedcategory={setselectedcategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright © 2023 LAKSHAY ARORA
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedcategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos}></Videos>
      </Box>
    </Stack>
  );
};

export default Feed;
