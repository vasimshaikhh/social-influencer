import { Stack, TextField , Button } from '@mui/material';
import React, { useState } from 'react'

const Hello = () => {
  const fileInput = React.useRef();
  const [name,setName] = useState()
  const [profile,setProfile] = useState()
  const [description,setDescription] = useState()
  const [vehiclename, setVehicleName] = useState()


  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setProfile(URL.createObjectURL(event.target.files[0]));
    }
  }
  
  const formdata = new FormData()
  formdata.append('profile',profile)
  formdata.append('name',name)
  formdata.append('description',description)
  formdata.append('vehiclename', vehiclename)
  
  const user_id = 12

  const ab = JSON.stringify({ user_id, profile })
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.By2r2BwheJsbrEGrHOaMQwrrmlY7wHVFzWtuEmv39fM'
  
  const onHandleUpdate = async () => {
    // console.warn("email,password", email, password)
    let result = await fetch('http://localhost:7000/update_rider/26', {
    // let result = await fetch('https://anniecabs.com/rental/api/upload_profile', {
        method: 'POST',
        // method: 'PATCH',
        // body: JSON.stringify({ profile, name,description,vehiclename }),
        // body: ab,
        body: formdata,
        headers: {
          // 'Content-Type': 'application/json',
          // "authorization" :   `Bearer ${token}`
      },
  
    });
  
    result =  result.json().then((resp)=>{
        console.log(resp,'result');
  
    });
    // localStorage.setItem("user", JSON.stringify(result));
    if (result) {
        // navigate("/");
    }
  }


    return (
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',backgroundColor:'#fff'}}>
          <Stack>
          <input 
                            // onChange={onImageChange}
                            onChange={(e)=>setProfile(e.target.files[0])}                                                    
            style={{ display: 'none' }} id="newFile" accept="image/*" ref={fileInput} type="file" />
                                    <Button onClick={()=>fileInput.current.click()} variant='outlined'>Change image</Button>


                                <TextField sx={{ width: '100%' }} id="outlined-basic" value={name} onChange={(e)=>{setName(e.target.value)}} variant="outlined" />
                                  <TextField sx={{width:'100%'}} id="outlined-textarea" value={description} onChange={(e)=>{setDescription(e.target.value)}} rows={2} multiline />
        <TextField sx={{ width: '100%' }} id="outlined-basic" value={vehiclename} onChange={(e) => { setVehicleName(e.target.value) }} variant="outlined" />
        <Button onClick={onHandleUpdate} variant='contained'>update</Button> 
        </Stack>      
      </div>
  )
}

export default Hello



