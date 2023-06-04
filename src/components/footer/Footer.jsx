import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box
              sx={{ textAlign: "center",background: 'linear-gradient(315deg, #a40606 0%, #d98324 74%)', opacity: ".88" , color: "white", p: 3, position: 'static', mt: '5rem' }}
            //   sx={{ background: 'linear-gradient(315deg, #a40606 0%, #d98324 74%)', opacity: ".88" ,position:'fixed'}}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
          <InstagramIcon />
          <TwitterIcon />
          <GitHubIcon />
          <YouTubeIcon />
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; Social Influencer
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
