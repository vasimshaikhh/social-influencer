import { Box, Button, Card, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PhotoIcon from '@mui/icons-material/Photo';
import img from '../../../assets/network-3154899.jpg'
import FileOpenIcon from '@mui/icons-material/FileOpen';
import { useImageUploadMutation, usePostImgAndVidMutation } from '../../../services/api';
import { useNavigate } from 'react-router-dom';

const ImagesUpload = () => {
    const [upImage, response] = useImageUploadMutation()
    const [imgVidid,imgVidRes] = usePostImgAndVidMutation()
    const [selectedFile, setSelectedFile] = useState();
    const [image_id,setImgId] = useState()
    console.log(selectedFile, 'Selected Files')
    const fileInput = React.useRef();
    const [image, setimage] = useState()
    // user_id,image_id
    const user_id = localStorage.getItem('userId')
    const ad = JSON.stringify({ user_id, image_id })
    const navigate=useNavigate()

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedFile(URL.createObjectURL(event.target.files[0]));
            setimage(event.target.files[0]);  
        }
    }   

    const onUpload = async() => {
        await upImage({image});
    }
    useEffect(() => {
        console.log(response)
        if (response.isSuccess === true) {
            // console.log(response.data.result.insertId,'imgId')
            setImgId(response.data.result.insertId)
        }
    }, [response])
    
    useEffect(() => {
        (async () => {
            if (user_id && image_id !== undefined || null) {
                await imgVidid(ad)
            }           
        })()
       
    }, [user_id, image_id])
    
    useEffect(() => {
        if (imgVidRes.isSuccess === true) {
            console.log(imgVidRes, 'ResponseIDDATA')
            navigate('/account')
            navigate(0)
        }
       
    },[imgVidRes])

  return (
      <>
        <Container maxWidth='xs' sx={{mt:'2rem'}}>
              <Card sx={{ height: '24rem', width: '100%',display:'block',justifyContent:'center',alignItems:'end'}}>
                  <Box component='img' src={selectedFile ? selectedFile : null} sx={{ width: '100%',height:'21rem' }} />
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'end',width:'100%',gap:2}}>
                    <input onChange={onImageChange}style={{ display: 'none' }} id="newFile" accept="image/*" ref={fileInput} type="file" />                        
                     
                      <Button onClick={() => fileInput.current.click()} variant='outlined' startIcon={<FileOpenIcon />}>Select image</Button>
                      
                      <Button onClick={onUpload} disabled={selectedFile===undefined||null ? true:false } variant='contained' endIcon={<PhotoIcon />}>Upload</Button>
                    
                  </Box>
              </Card>
        </Container>
      </>
  )
}

export default ImagesUpload