import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  IconButton, 
  Typography, 
  Menu, 
  Container, 
  Button, 
  MenuItem,
  useScrollTrigger,
  Slide,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const pages = [
  { name: 'Accueil', path: '/' },
  { name: 'Le Cabinet', path: '/about' },
  { name: 'Soins Proposés', path: '/services' },
  { name: 'Équipement', path: '/equipment' },
  { name: 'Tarifs', path: '/pricing' },
  { name: 'Contact', path: '/contact' },
];

// Créer des wrapper components pour les icônes
const MenuIcon = () => <FiMenu />;
const CloseIcon = () => <FiX />;

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <HideOnScroll>
      <AppBar 
        position="fixed" 
        sx={{ 
          bgcolor: scrolled ? 'white' : 'transparent',
          boxShadow: scrolled ? 1 : 'none',
          transition: 'all 0.3s ease',
          color: scrolled ? 'text.primary' : 'white'
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              CABINET JADE
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                {anchorElNav ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem 
                    key={page.name} 
                    onClick={handleCloseNavMenu}
                    component={Link}
                    to={page.path}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              CABINET JADE
            </Typography>
            
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              {pages.map((page) => (
                <motion.div
                  key={page.name}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <Button
                    component={Link}
                    to={page.path}
                    onClick={handleCloseNavMenu}
                    sx={{ 
                      my: 2, 
                      mx: 1,
                      color: 'inherit', 
                      display: 'block',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '0%',
                        height: '2px',
                        bottom: '5px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: 'primary.main',
                        transition: 'width 0.3s ease'
                      },
                      '&:hover::after': {
                        width: '80%'
                      }
                    }}
                  >
                    {page.name}
                  </Button>
                </motion.div>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Button 
                variant="contained" 
                color="primary"
                component={Link}
                to="/contact"
                sx={{ 
                  borderRadius: '50px',
                  px: 3
                }}
              >
                Rendez-vous
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar; 