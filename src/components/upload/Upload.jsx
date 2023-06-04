import { BottomNavigation, BottomNavigationAction, Box, Grid } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import ImageIcon from '@mui/icons-material/Image';
import UploadIcon from '@mui/icons-material/Upload';



const Upload = () => {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate()
  return (
    <Grid container spacing={2} sx={{mt:'5rem'}} >
    <Grid item xs={12} sx={{width:'100%'}}>
        
    <Box sx={{width:'100%'}}>
        <BottomNavigation showLabels value={value}onChange={(event, newValue) => {setValue(newValue);}}>
           <BottomNavigationAction label="Photos" onClick={()=>navigate('/upload')} icon={<ImageIcon />} />
           <BottomNavigationAction value={value} onClick={()=>navigate('/upload/videos')} label="videos" icon={<UploadIcon />} />
         </BottomNavigation>    
    </Box>
</Grid>
</Grid>
  )
}

export default Upload