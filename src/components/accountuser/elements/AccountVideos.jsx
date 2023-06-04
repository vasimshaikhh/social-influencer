import { Card, CardActionArea, CardMedia, Container, Grid , Box , Typography} from '@mui/material'
import React, { useEffect, useState } from 'react'
import videoplayback from '../../../assets/videoplayback.mp4'
import DialogueVideoElement from './DialogueVideoElement';
import { useGetVideoIdMutation } from '../../../services/api';

const AccountVideos = () => {
  const [open, setOpen] = React.useState(false);
  const user_id = localStorage.getItem('userId')
  const [resInfoId, responsebyId] = useGetVideoIdMutation()
  const [getid, setGetID] = useState()
  const [ids, setIds] = useState([]);
  const [dataById, setDatabyId] = useState([]);
  const [make,setMake] = useState([])

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    (async() => {
        await resInfoId(user_id)
    }
    )() 
}, [user_id])

 useEffect(() => {
   if (responsebyId.isSuccess === true) {
     setGetID(responsebyId.data.data) 
     console.log('responsebyId.data.data',responsebyId.data.data)
    }
}, [responsebyId.isSuccess])

useEffect(() => {
    var imgId = [];
  if (getid !== undefined || null) {
      console.log(getid.length,'length is here')
      console.log(getid,'getid is here')
        for (var i = 0; i <= getid.length; i++){
            imgId = getid.map((img) => {
                return img.video_id
            })
        }
    }
    if (imgId !== null || undefined) {
        setIds(imgId);
      }
}, [getid])  
  
console.log(make,'make')

const arr = [];
useEffect(() => {
    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
    if (ids !== undefined || null) {
        for (var i = 0; i <= ids.length; i++){
            fetch(`http://localhost:2000/vi1/${ids[i]}`,requestOptions)
            .then((response) => response.json())
            .then((data) => arr.push(data));
       }
       setDatabyId(arr, "sdsd");
    }
}, [ids])
 // console.log(dataById, 'databyid')
 
 useEffect(() => {
    setTimeout(() => {
       const imake = []
       if (dataById !== undefined || null) {
          dataById.forEach((element) => {
             element.data.forEach((element2) => {
                imake.push(element2)
                setMake(imake)
             })   
          })
       }
    }, 500);  
   
 }, [dataById])
   console.log(make,'make')



  return (
    <Container maxWidth='sm' sx={{ mt:'1rem',color: 'black' }}>
      <Grid container>
      {make !== undefined || null ? make.map((el, i) => {
         return (
      <Grid sx={{mt:'1rem'}} item md={4} sm={6} xs={12}>
                    <Card sx={{ maxWidth: {md:170,xs:350} }} onClick={handleClickOpen} >
                 <CardActionArea>
                   <CardMedia
                     component="iframe"
                     height="300"
                     src={el.video}
                    //  src={videoplayback}
                     alt="green iguana"
              />
              
            </CardActionArea>
            <Box sx={{height:'1.3rem',width:'100%',backgroundColor:'black',color:'#fff',cursor:'pointer'}}>
            <Typography sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>Watch</Typography>
            </Box>
          </Card>
          <DialogueVideoElement  open ={open} setOpen={setOpen} onClose={handleClose} />
      </Grid>
      )
    }):null}
      </Grid>
    </Container>
  )
}

export default AccountVideos