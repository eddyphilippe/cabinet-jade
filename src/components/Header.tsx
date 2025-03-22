import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Box, 
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Le Cabinet', path: '/about' },
    { name: 'Soins Proposés', path: '/services' },
    { name: 'Équipement', path: '/equipment' },
    { name: 'Tarifs', path: '/pricing' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', py: 2 }}>
      <Typography variant="h6" component="div" sx={{ mb: 2 }}>
        Cabinet Jade Philippe
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.name}
            component={Link}
            to={item.path}
            sx={{
              color: isActive(item.path) ? 'primary.main' : 'text.primary',
              textDecoration: 'none',
            }}
          >
            <ListItemText 
              primary={item.name} 
              primaryTypographyProps={{ 
                align: 'center',
                fontWeight: isActive(item.path) ? 600 : 400
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="default" elevation={1} sx={{ bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                mr: 2,
                fontWeight: 700,
                color: 'primary.dark',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              Cabinet Jade Philippe
            </Typography>

            {/* Desktop Menu */}
            {!isMobile && (
              <Box sx={{ display: 'flex' }}>
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    component={Link}
                    to={item.path}
                    color="inherit"
                    sx={{
                      mx: 1,
                      color: isActive(item.path) ? 'primary.main' : 'text.primary',
                      fontWeight: isActive(item.path) ? 600 : 400,
                      '&:hover': {
                        bgcolor: 'transparent',
                        color: 'primary.main',
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ ml: 2 }}
              >
                <div style={{ width: 24, height: 24 }}>
                  <Box
                    sx={{
                      width: 24,
                      height: 2,
                      bgcolor: 'text.primary',
                      mt: '5px',
                      mb: '5px',
                    }}
                  />
                  <Box
                    sx={{
                      width: 24,
                      height: 2,
                      bgcolor: 'text.primary',
                      mt: '5px',
                      mb: '5px',
                    }}
                  />
                  <Box
                    sx={{
                      width: 24,
                      height: 2,
                      bgcolor: 'text.primary',
                      mt: '5px',
                      mb: '5px',
                    }}
                  />
                </div>
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Header; 