import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import appbarimg from "../../assets/network-3154899.jpg";
import { Link, useNavigate } from "react-router-dom";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import HomeIcon from '@mui/icons-material/Home';
import Groups3Icon from '@mui/icons-material/Groups3';
import Person3Icon from '@mui/icons-material/Person3';




const settings = ['signin','signup','logout'];

function Appbar() {
  const userId = localStorage.getItem("userId");
  const [id,setId]= React.useState()

  const pages = [
    { 'icon': <HomeIcon sx={{color:'red',fontSize:32}} />, 'route': 'home' },
    { 'icon': <Groups3Icon sx={{color:'#6D9808',fontSize:32}}  />, 'route': 'influencers' },
    { 'icon': <Person3Icon sx={{color: id===true ? 'black': '#A8A8A8',fontSize:32}} />, 'route': 'account' },
  ]
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate=useNavigate()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  React.useEffect(() => {
    if (userId !== null) {
      setId(true)
    }
    
  },[userId])

  return (
    <AppBar
      position="fixed"
      sx={{ background: 'linear-gradient(315deg, #a40606 0%, #d98324 74%)',position:'fixed'}}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <EqualizerIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Social Influencer
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page,i) => (
                <MenuItem key={i} onClick={handleCloseNavMenu}>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/${page.route}`}
                  >
                    {page.route}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                  <IconButton sx={{width:'10rem'}} onClick={()=>navigate('/')}>
                  <HomeIcon sx={{color:'red',fontSize:32}} />
                  </IconButton>
                  
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                  <IconButton sx={{width:'10rem'}} onClick={()=>navigate('/influencers')}>
                  <Groups3Icon sx={{color:'#6D9808',fontSize:32}}  />
                  </IconButton>
                  
              </Button>
              <Button
                onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block", }}
              >
                  <IconButton sx={{width:'10rem'}} onClick={()=> {id===true? navigate('/account') : navigate('/signin')}}>
                  <Person3Icon sx={{color: id===true ? 'black': '#A8A8A8',fontSize:32}} />
                  </IconButton>
                  
              </Button>
            {/* {pages.map((page,i) => (
              <Button
                key={i}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                  <IconButton sx={{width:'10rem'}} onClick={()=>navigate(`/${page.route}`)}>
                  {page.icon}
                  </IconButton>
                  
              </Button>
            ))} */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            > 
                <MenuItem  onClick={handleCloseUserMenu}>
                  <Link to={`/signin`}>
                    <Typography textAlign="center">signin</Typography>
                  </Link>
                </MenuItem>
                <MenuItem  onClick={handleCloseUserMenu}>
                  <Link to={`/signup`}>
                    <Typography textAlign="center">signup</Typography>
                  </Link>
                </MenuItem>
              <MenuItem sx={{ display: id===true  ? 'block' : 'none' }} onClick={() => { navigate('/signin'); localStorage.removeItem('userId'); navigate(0)}}>
                    <Typography textAlign="center">logout</Typography>
                </MenuItem>
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Link to={`/${setting}`}>
                    <Typography textAlign="center">{setting}</Typography>
                  </Link>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Appbar;
