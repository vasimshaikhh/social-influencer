
import { Box, Button, Card, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PhotoIcon from '@mui/icons-material/Photo';
import img from '../../../assets/network-3154899.jpg'
import FileOpenIcon from '@mui/icons-material/FileOpen';
import { usePostVidMutation, useVideoUploadMutation } from '../../../services/api';
import { useNavigate } from 'react-router-dom';

const VideosUpload = () => {
    const [upvideo, response] = useVideoUploadMutation()
    const [imgVidid,imgVidRes] = usePostVidMutation()
    const [selectedFile, setSelectedFile] = useState();
    const [video_id,setImgId] = useState()
    console.log(selectedFile, 'Selected Files')
    const fileInput = React.useRef();
    const [video, setvideo] = useState()
    const user_id = localStorage.getItem('userId')
    const ad = JSON.stringify({ user_id, video_id })
const navigate = useNavigate()
    const onvideoChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedFile(URL.createObjectURL(event.target.files[0]));
            setvideo(event.target.files[0]);  
        }
    }   

    const onUpload = async() => {
        await upvideo({video});
    }
    useEffect(() => {
        console.log(response)
        if (response.isSuccess === true) {
            // console.log(response.data.result.insertId,'imgId')
            console.log(response,'response')
            setImgId(response.data.result.insertId)
        }
    }, [response])
    
    useEffect(() => {
        (async () => {
            if (user_id && video_id !== undefined || null) {
                await imgVidid(ad)
            }           
        })()
       
    }, [user_id, video_id])
    
    useEffect(() => {
        if (imgVidRes.isSuccess === true) {
            console.log(imgVidRes,'ResponseIDDATA')
            navigate('/account/videos')
            navigate(0)


        }
    },[imgVidRes])



  return (
      <>
        <Container maxWidth='xs' sx={{mt:'2rem'}}>
              <Card sx={{ height: '24rem', width: '100%',display:'block',justifyContent:'center',alignItems:'end'}}>
                  <Box component='iframe' src={selectedFile ? selectedFile : null} sx={{ width: '100%',height:'21rem' }} />
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'end',width:'100%',gap:2}}>
                    <input onChange={onvideoChange}style={{ display: 'none' }} id="newFile" accept="video/mp4,video/x-m4v,video/*" ref={fileInput} type="file" />                        
                     
                      <Button onClick={() => fileInput.current.click()} variant='outlined' startIcon={<FileOpenIcon />}>Select video</Button>
                      
                      <Button onClick={onUpload} disabled={selectedFile===undefined||null ? true:false } variant='contained' endIcon={<PhotoIcon />}>Upload</Button>
                    
                  </Box>
              </Card>
        </Container>
      </>
  )
}

export default VideosUpload