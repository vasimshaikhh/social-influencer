import { Card, CardActionArea, CardMedia, Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import img from '../../../assets/network-3154899.jpg'
import DialogueImageElement from './DialogueImageElement'
import { useGetImageIdMutation } from '../../../services/api'


const AccountImages = () => {
   const user_id = localStorage.getItem('userId')
   const [resInfoId, responsebyId] = useGetImageIdMutation()
   const [getid, setGetID] = useState()
   const [ids, setIds] = useState([]);
   const [open, setOpen] = React.useState(false);
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
      }
  }, [responsebyId.isSuccess])
  
  useEffect(() => {
      var imgId = [];
      if (getid !== undefined || null) {
          for (var i = 0; i <= getid.length; i++){
              imgId = getid.map((img) => {
                  return img.image_id
              })
          }
      }
      if (imgId !== null || undefined) {
          setIds(imgId);
        }
  },[getid])

  const arr = [];
  useEffect(() => {
      const requestOptions = {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        };
      if (ids !== undefined || null) {
          for (var i = 0; i <= ids.length; i++){
              fetch(`http://localhost:2000/img1/${ids[i]}`,requestOptions)
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
   
   // console.log(make,'make')
   





  return (
    
    <Container maxWidth='md' sx={{mt:'1rem',color:'black'}}>
          <Grid container spacing={2} sx={{display:'flex',justifyContent:'center'}}>
           {make !== undefined || null ? make.map((el, i) => {
              return (
               <Grid item md={4} sm={6} xs={12} key={i} >
               <Card sx={{ maxWidth: 345 }} onClick={handleClickOpen} >
                  <CardActionArea>
                    <CardMedia 
                     component="img"
                     height="200"
                     image={el.image}
                     // image={img}
                     alt="green iguana"
                    />
                   </CardActionArea>
               </Card>
               <DialogueImageElement open ={open} setOpen={setOpen} onClose={handleClose} />
            </Grid>
               )
            }):null}
                                                   
                                      
                  
          </Grid>
    </Container>
  
  )
}

export default AccountImages