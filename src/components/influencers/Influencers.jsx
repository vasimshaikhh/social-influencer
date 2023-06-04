import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import ImageIcon from '@mui/icons-material/Image';
import PersonIcon from '@mui/icons-material/Person';

export default function Influencers() {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();

  return (
    <Box sx={{ width: '100%', mb:'5rem',display:'block',position:'absolute',bottom:0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Photos" onClick={()=>navigate('/influencers')} icon={<ImageIcon sx={{color:'green'}}  />} />
        <BottomNavigationAction value={value} onClick={()=>navigate('/influencers/videos')} label="videos" icon={<PlayCircleFilledIcon />} />
        <BottomNavigationAction label="Account" onClick={()=>navigate('/account')} icon={<PersonIcon sx={{color:'black  '}} />} />
      </BottomNavigation>
    </Box>
  );
}