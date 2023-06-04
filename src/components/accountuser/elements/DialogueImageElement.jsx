import React from 'react'
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ContactEmergencyIcon from '@mui/icons-material/Contacts';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Avatar from "@mui/material/Avatar";
import image from '../../../assets/network-3154899.jpg'
import {
  Container,
  Grid,
  Stack,Card,CardMedia,CardActions,IconButton,CardHeader,CardContent,Typography,Dialog
} from "@mui/material";

const DialogueImageElement = (props) => {
    const { onClose, open ,setOpen } = props;

    const handleClose = () => {
        setOpen(false);
      };

    return (
        <Dialog onClose={handleClose} open={open}>
             <Container maxWidth='sm' sx={{my:'1rem'}}>
    
                <Grid container>       
                      <Grid item xs={12}>
                      <Card sx={{ width: "100%" }}>
                          {/* <Card sx={{ maxWidth: 345 }}> */}
                          <CardHeader
                            avatar={
                              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                R
                              </Avatar>
                            }
                            action={
                              <IconButton aria-label="settings">
                                <MoreVertIcon />
                              </IconButton>
                            }
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                          />
                          <CardMedia component="img"
                            height="220"
                            image={image}
                            alt="Paella dish"
                          />
                          <CardContent>
                            <Typography variant="body2" color="text.secondary">
                              This impressive paella is a perfect party dish and a fun meal to
                              cook together with your guests. Add 1 cup of frozen peas along
                              with the mussels, if you like.
                            </Typography>
                          </CardContent>
                          <CardActions sx={{display:'flex',justifyContent:'space-around'}}>
                            <IconButton aria-label="add to favorites">
                              <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share"sx={{color:'#0077B7'}}>
                              <ShareIcon />
                            </IconButton>
                            <IconButton aria-label="contact"sx={{color:'black'}}>
                            <ContactEmergencyIcon/>
                            </IconButton>
                            <IconButton aria-label="Facebook"sx={{color:'#0077B7'}}>
                            <FacebookIcon/>
                            </IconButton>
                            <IconButton aria-label="instagram"sx={{color:'red'}}>
                            <InstagramIcon/>
                            </IconButton>
                            <IconButton aria-label="linkedin" sx={{color:'#0077B7'}}>
                            <LinkedInIcon/>
                        </IconButton>
                        
                        

                        
                          </CardActions>
                        </Card>
                      </Grid>
             
    </Grid>
            </Container>
            </Dialog>
  )
}

export default DialogueImageElement