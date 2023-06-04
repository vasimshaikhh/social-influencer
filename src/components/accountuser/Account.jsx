import { BottomNavigation, BottomNavigationAction, Box, Card, CardActionArea, CardMedia, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import img from '../../assets/network-3154899.jpg'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import ImageIcon from '@mui/icons-material/Image';
import PersonIcon from '@mui/icons-material/Person';

import { useNavigate } from 'react-router-dom';
import UploadIcon from '@mui/icons-material/Upload';
import Images from './elements/AccountImages';
import EditIcon from '@mui/icons-material/Edit';
import { useGetProfileeMutation } from '../../services/api';

const Account = () => {
  const [value, setValue] = React.useState(0);
    const id = JSON.stringify( localStorage.getItem('userId'))
    const user_id = localStorage.getItem('userId')
    const navigate = useNavigate();
    const [idata, setiData] = useState()
    const [resInfo, response] = useGetProfileeMutation('nothing')


    useEffect(() => {
        (async() => {
            await resInfo(id)
        }
        )()
    }, [id])

    useEffect(() => {
        if (response.isSuccess === true) {
            console.log(response,'resp')
            setiData(response.data.data)
        }
    }, [response.isSuccess])    
console.log(response,'res')


return (
      <>
          <Container maxWidth='md' sx={{mt:'7rem',color:'black'}}>
                  {response.isSuccess===true ? idata?.map((el,i)=>{
                      return (
                        <Grid key={i} spacing={5} container sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <Grid item md={4} xs={12} sx={{display:'flex',justifyContent:{md:'end',xs:'center'},alignItems:'center'}}>
                        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Box component={'img'} src={el.image} sx={{height:'8rem',width:'8rem',borderRadius:'5rem'}} />
                        </Box>
                    </Grid>
                      
                      <Grid item md={8} sx={{mt:'1rem',display:'flex',justifyContent:'start',alignItems:'center'}}>
                          <Stack spacing={1} justifyContent={'center'}>
                            <Stack direction={'row'} justifyContent={'space-between'}>
                              <Typography variant='h5'>{el.name}</Typography>
                              <EditIcon onClick={()=>navigate('/editprofile')} sx={{cursor:'pointer'}} />
                              </Stack>
                              <Typography variant='body1'>bio:  {el.bio}</Typography>
                              <Stack direction={'row'} spacing={1}>
                                  <Typography variant='h5'> <strong>40</strong>  Images |</Typography>
                                  <Typography variant='h5'><strong>40</strong> Videos |</Typography>
                                  <Typography variant='h5'><strong>40</strong> Total post </Typography>
                              </Stack>
                          </Stack>
                              </Grid>
                        </Grid>
                             )
                     }):null}
                      <Divider sx={{mt:'1rem'}} />
                   
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{width:'100%'}}>
                        
                    <Box sx={{width:'100%'}}>
                        <BottomNavigation showLabels value={value}onChange={(event, newValue) => {setValue(newValue);}}>
                           <BottomNavigationAction label="Photos" onClick={()=>navigate('/account/images')} icon={<ImageIcon />} />
                           <BottomNavigationAction value={value} onClick={()=>navigate('/account/videos')} label="videos" icon={<PlayCircleFilledIcon />} />
                           <BottomNavigationAction value={value} onClick={()=>navigate('/upload')} label="Upload" icon={<UploadIcon />} />
                         </BottomNavigation>
                    </Box>
              </Grid>
            </Grid>
         </Container>
      </>
  )
}

export default Account


