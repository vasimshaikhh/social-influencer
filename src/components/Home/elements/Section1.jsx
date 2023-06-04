import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ContactEmergencyIcon from '@mui/icons-material/Contacts';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Grid,
  Stack,
} from "@mui/material";
import image from "../../../assets/network-3154899.jpg";
import { useNavigate } from "react-router-dom";
import { useInfluencerQuery } from "../../../services/api";

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

export default function Section1() {
  const { data, isError, isSuccess } = useInfluencerQuery();
  console.log(data, 'data')
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: "7rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={3}>       
        <Grid item xs={12} sm={8}>
          <Grid container spacing={2}>
          {isSuccess === true ? data.data?.map((element, i) => {
            return (
            <Grid item xs={12}>
            <Card sx={{ width: "100%" }}>
                {/* <Card sx={{ maxWidth: 345 }}> */}
                <CardHeader
                  avatar={
                    // <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    // </Avatar>
                    <Avatar alt="Remy Sharp" src={element.image} />
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
                    <a href={element.insta}>
                  <IconButton aria-label="instagram"sx={{color:'red'}}>
                  <InstagramIcon/>
                      </IconButton></a>
                      <a href={element.linkdin}>
                  <IconButton aria-label="linkedin" sx={{color:'#0077B7'}}>
                  <LinkedInIcon/>
              </IconButton> </a>
                </CardActions>
              </Card>
            </Grid>
              )
            })
          : null}
          </Grid>                                  
          </Grid>              
                   
        <Grid item md={4} sx={{ width: "100%" }}>
          <Stack spacing={1}>
            {isSuccess === true ? data.data?.map((element, i) => {
              return (
                <Accordion>
                <AccordionSummary
                  sx={{ width: "100%", margin: 0, padding: 0 }}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <CardHeader
                    avatar={
                      // <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      //   R
                      // </Avatar>
                      <Avatar alt="Remy Sharp" src={element.image} />
                    }
                    title={element.name}
                    subheader={element.date}
                  />
                </AccordionSummary>
              
              </Accordion>
              )
            }) : null}
       
          </Stack>
        </Grid>
      </Grid>
    </Container> 
  );
}
