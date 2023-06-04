import React, { useEffect, useState } from 'react'
import { Box, Button, Card, Container, Divider, Grid, Stack, TextField, Typography } from '@mui/material'
import image from '../../../assets/img1.jpg'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useRiderDetailByIdQuery } from '../../../services/adminapi';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import { useUpdateRiderDetailMutation } from '../../../services/adminapi';

const RidersDetail = () => {

    const id = localStorage.getItem('adminid')
    const { data, isSuccess, isError,refetch } = useRiderDetailByIdQuery(id)
    const [infoResp,response] = useUpdateRiderDetailMutation()
    const [upp, setUpp] = useState(false)
    const fileInput = React.useRef();
    const [name,setName] = useState()
    const [profile,setProfile] = useState()
    const [description,setDescription] = useState()
    const [vehiclename, setVehicleName] = useState()
    const [getData, setGetData] = useState();
    const [img, setImg] = useState();

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            // setProfile(URL.createObjectURL(event.target.files[0]));
            setProfile(event.target.files[0]);  
        }
    }    
    const onHandleUpdate = async (e) => {
        // e.preventDefault();
        if (profile || name || description || vehiclename) {
            await infoResp({ id, profile, name, description, vehiclename })
            if (response.isSuccess === true) {
                alert('Data updated Succesfully')
                setUpp(false)
                window.location.reload(false);
            }  
        } 
           
    } 
    console.log(response, 'response')
    

  return (
      <Container maxWidth='md' sx={{ display: 'flex', justifyContent: 'center', mt: '7rem', height: '100vh' }}>
                            {isSuccess === true ? data.data?.map((el,i)=>{return(
                            // {isSuccess === true ? getData.data?.map((el,i)=>{return(

          <Card key={i} sx={{height: upp === true ? '90vh' : '70vh',width:'80%'}}>
              <Container>                  
                  <Grid container>    
                      <Grid  sx={{display: upp === true ? 'none' : 'block'}} item md={6} xs={12}>
                      <Box sx={{ height: '15rem', width: '20rem' }}>
                          <Box component={'img'} src={el.image} sx={{ width: '100%', height: '100%' }} />
                      </Box>
                          <Stack justifyContent={'center'} alignItems={'center'} spacing={2} sx={{ mt: '0.5rem' }}>
                              <Stack direction='row' spacing={2}>
                                  <Typography variant='body1'>Name:<strong> {el.name}</strong></Typography>     
                                  <Box sx={{display:'flex'}}>
                                      <Typography sx={{ display: 'flex', textAlign: 'center' }}>edit </Typography>
                                      <div onClick={()=>setUpp(true)}>
                                          <ModeEditIcon  sx={{ height: '20px', width: '20px' }} />
                                      </div>
                                     
                                      </Box>
                              </Stack> 
                              <Typography sx={{ display: 'flex', textAlign: 'center',textDecoration:'underline overline',color:'red' }}><strong>Discription</strong></Typography>
                              <Typography sx={{ display: 'flex', textAlign: 'center' }}>{el.description }</Typography>

                      </Stack>
                      </Grid>

                                            
                      <Grid sx={{display: upp === true ? 'block' : 'none'}} item md={6} xs={12}>
                      <Box sx={{ height: '15rem', width: '20rem' }}>
                          <Box component={'img'} src={el.image} sx={{ width: '100%', height: '100%' }} />                       
                          </Box>
                            <input 
                            onChange={onImageChange}
                             style={{ display: 'none' }} id="newFile" accept="image/*" ref={fileInput} type="file" />
                          
                          <Button 
                          onClick={()=>fileInput.current.click()} 
                        //   onClick={()=>fileInput.current.click()} 
                          variant='outlined'startIcon={<FileOpenIcon />}>Select image</Button>
                          <Stack justifyContent={'center'} alignItems={'center'} spacing={2} sx={{ mt: '0.5rem' }}>
                                  <TextField sx={{ width: '100%' }} defaultValue={el.name} id="outlined-basic" value={name} onChange={(e)=>{setName(e.target.value)}} variant="outlined" />
                                  <TextField sx={{width:'100%'}} id="outlined-textarea" defaultValue={el.description} value={description} onChange={(e)=>{setDescription(e.target.value)}} rows={2} multiline />
                                  <TextField sx={{ width: '100%' }}  defaultValue={el.vehiclename} id="outlined-basic" value={vehiclename} onChange={(e)=>{setVehicleName(e.target.value)}}  variant="outlined" />
                                  <Button onClick={onHandleUpdate} variant='contained'>update</Button>                                
                          </Stack>
                          </Grid>
                    


                      
                      



                     

                      <Grid item md={6} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Divider orientation="vertical" flexItem sx={{ mr: '1rem',display:{md:'block',xs:'none'} }}  />
                      <Stack justifyContent={'center'} alignItems={'center'}spacing={1} >
                          <Typography variant='h6'><strong>Total Rides Performed 23</strong></Typography>
                          <Typography variant='h6'><strong>Skills rating (33/50)</strong></Typography>
                          <Typography variant='body2'>popularity 67</Typography>
                          <Typography variant='body2'>last Updated. 6h ago</Typography>
                          <Typography variant='body2'>Vehicle Owned :  {el.vehiclename}</Typography>
                             <Button onClick={()=>navigate('/carinfo')} variant='outlined'>View Rider's Car</Button>
                              
                      </Stack>
              </Grid>
                      {/* </Grid> */}
                  </Grid>
                     
                 
                {/* </Stack> */}
              </Container>              
          </Card>
          )})  : null}    
     </Container>
  )
}

export default RidersDetail