import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Container, Grid, IconButton, Typography } from '@mui/material'
import { styled } from "@mui/material/styles";

import React from 'react'
import { red } from "@mui/material/colors";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ContactEmergencyIcon from '@mui/icons-material/Contacts';
import Carousel from "react-elastic-carousel";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import { ExpandMore } from '@mui/icons-material';
import image from '../../../assets/network-3154899.jpg'
import { useInfluencerQuery } from '../../../services/api';
import { useNavigate } from 'react-router-dom';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    //   marginLeft: 'auto',
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const Images = () => {
    const [expanded, setExpanded] = React.useState(false);
    const { data, isError, isSuccess } = useInfluencerQuery();
    console.log(data, 'data')
    const navigate = useNavigate();
    // const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    
  return (
      <Container maxWidth='sm' sx={{mt:'6rem'}}>
    
      <Grid container>
      <Grid item xs={12}>
        <Carousel>
        {isSuccess === true ?  
          data.data?.map((element, i) => {
            return (
            <Grid item xs={12}>
            <Card sx={{ width: "100%" }}>
                {/* <Card sx={{ maxWidth: 345 }}> */}
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      {/* element. */}
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={element.name}
                  subheader={element.date}
                />
                <CardMedia component="img"
                  height="250"
                  image={element.image}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                   {element.bio}
                  </Typography>
                </CardContent>
                <CardActions sx={{display:'flex',justifyContent:'space-around'}}>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share"sx={{color:'#0077B7'}}>
                    <ShareIcon />
                  </IconButton>
                  <IconButton aria-label="contact"sx={{color:'black'}} onClick={()=>navigate('/contactinfluencer') } >
                  <ContactEmergencyIcon />
                  </IconButton>
                  <a href={element.facebook}>
                  <IconButton aria-label="Facebook"sx={{color:'#0077B7'}} >
                  <FacebookIcon/>
                  </IconButton>
                  </a>
                  <IconButton aria-label="instagram"sx={{color:'red'}}>
                  <InstagramIcon/>
                  </IconButton>
                  <IconButton aria-label="linkedin" sx={{color:'#0077B7'}}>
                  <LinkedInIcon/>
              </IconButton>
              
             

                
                </CardActions>
              </Card>
            </Grid>
              )
            })
          : null}
        </Carousel>
        </Grid>

       
         
           
       
          
        </Grid>
    </Container>
  )
}

export default Images