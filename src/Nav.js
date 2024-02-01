import * as React from 'react'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './App.css'



const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];


function Nav(props) {
    const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}} >
      <Typography variant="h6" sx={{ my: 2 }}>
        Asan
      </Typography>
      <Divider />
      <List>
      <div className='header'>
            <ul>
           
              <li><a href='#aboutsection'>Home</a></li>
              <li><a href='#section-twobg'>About</a></li>
              <li><a href='#skils'>Skils</a></li>
              <li><a href='#potfolio-section'>Projects</a></li>
              <li><a href='#form-section'>Contact</a></li>
              
            </ul>
          </div>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" className='colorbala'>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            marginTop={4} 
            marginLeft={5}
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            ASAN
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <div className='headers'>
            <ul>
           
              <li><a href='#aboutsection'>Home</a></li>
              <li><a href='#section-twobg'>About</a></li>
              <li><a href='#skils'>Skils</a></li>
              <li><a href='#potfolio-section'>Projects</a></li>
              <li><a href='#form-section'>Contact</a></li>
              
            </ul>
          </div>
          </Box>
        </Toolbar>
      </AppBar>
      <nav className='colorbala'>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

    </Box>
  );
}

Nav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Nav;




