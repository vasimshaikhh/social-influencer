import React, { useState } from 'react'
import { Box, Button, Card, Container, Divider, Grid, Stack, TextField, Typography } from '@mui/material'
import FileOpenIcon from '@mui/icons-material/FileOpen';

const EditProfile = () => {
    const fileInput = React.useRef();
    const [name, setName] = useState();
    const [bio, setbio] = useState()
    const [post,setPost] = useState()

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedFile(URL.createObjectURL(event.target.files[0]));
            setimage(event.target.files[0]);  
        }
    }  
    const onHandleUpdate = () => {
        
    }
    

    return (
        <Container maxWidth='md' sx={{mt:'8rem',display:'flex',justifyContent:'center'}}>
      <Grid container sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    <Grid  item md={6} xs={12} sx={{gap:4}} >
    <Box sx={{ height: '15rem', width: '20rem' }}>
        <Box component={'img'} src={'img'} sx={{ width: '100%', height: '100%' }} />                       
        </Box>
          <input 
          onChange={onImageChange}
           style={{ display: 'none' }} id="newFile" accept="image/*" ref={fileInput} type="file" />
        
        <Button         variant='outlined'startIcon={<FileOpenIcon />}>Select image</Button>
        <Stack justifyContent={'center'} alignItems={'center'} spacing={2} sx={{ mt: '0.5rem' }}>
                <TextField sx={{ width: '100%' }} defaultValue='hii' id="outlined-basic" value={name} onChange={(e)=>{setName(e.target.value)}} variant="outlined" />
                <TextField sx={{width:'100%'}} id="outlined-textarea" defaultValue='hii' value={bio} onChange={(e)=>{setbio(e.target.value)}} rows={2} multiline />
                <Button onClick={onHandleUpdate} variant='contained'>update</Button>                                
        </Stack>
            </Grid>
            </Grid>
            </Container>
  )
}

export default EditProfile


