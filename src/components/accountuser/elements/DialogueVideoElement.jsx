import React from 'react'
import { Dialog } from '@mui/material'
import { Box, Button, Card, CardMedia, Container, Grid } from "@mui/material";
import videoplayback from "../../../assets/videoplayback.mp4";


const DialogueVideoElement = (props) => {
    const { onClose, open, setOpen } = props;
    
    

    const handleClose = () => {
        setOpen(false);
      };
  return (
    <Dialog onClose={handleClose} open={open}>
      <Grid
      container
      sx={{
        // mt: { md: "5rem", xs: "5rem" },
        display: "flex",
        justifyContent: "center",
        alignItems:'center'
      }}
    >
   
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
              <Card sx={{backgroundColor:'#fff' ,maxWidth: '100%', margin: "0", padding: "0"}}>            
            <CardMedia
                  component="iframe"
                  height={400}
          // width={100.le}
          sx={{ padding: 0, objectFit: "contain" }}

              src={videoplayback}
              title="green iguana"
            />
          </Card>
      </Grid>
    
    </Grid>
    </Dialog>
  )
}

export default DialogueVideoElement