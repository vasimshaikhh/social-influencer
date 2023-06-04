import { Box, Button, Card, CardMedia, Container, Grid } from "@mui/material";
import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import screenfull from "screenfull";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import videoplayback from "../../../assets/videoplayback.mp4";
import Carousel from "react-elastic-carousel";
import { useVideopostQuery } from "../../../services/api";


const Videos = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const { data, isSuccess, isError } = useVideopostQuery()
  console.log(data,'daata')
  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <Container  maxWidth='sm' sx={{mt:'6rem'}}>
    <Grid
      container
      sx={{
        mt: { md: "5rem", xs: "5rem" },
        display: "flex",
        justifyContent: "center",
        alignItems:'center'
      }}
    >
   
        <Carousel>
          {isSuccess === true ? data.data?.map((el, i) => {
            return (
              <Grid key={i} item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
              <Card sx={{backgroundColor:'#fff' ,maxWidth: '100%', margin: "0", padding: "0"}}>            
            <CardMedia
                  component="iframe"
                  height={400}
          // width={100.le}
          sx={{ padding: 0, objectFit: "contain" }}

              src={el.video}
              // src={videoplayback}
              title="green iguana"
            />
          </Card>
      </Grid>
          )})
     
    :null}
      </Carousel>
    </Grid>
    </Container>
  );
};

export default Videos;
