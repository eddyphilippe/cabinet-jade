import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh',
          textAlign: 'center',
          py: 8
        }}
      >
        <Typography 
          variant="h1" 
          component="h1"
          sx={{ 
            fontSize: { xs: '6rem', md: '10rem' },
            fontWeight: 700,
            color: 'primary.main',
            letterSpacing: '-3px',
            mb: 2
          }}
        >
          404
        </Typography>
        
        <Typography 
          variant="h4" 
          component="h2"
          gutterBottom
          sx={{ 
            mb: 3,
            fontWeight: 600
          }}
        >
          Page Non Trouvée
        </Typography>
        
        <Typography 
          variant="body1"
          color="text.secondary"
          sx={{ 
            maxWidth: 450,
            mb: 5
          }}
        >
          La page que vous recherchez n'existe pas ou a été déplacée.
          Vérifiez l'URL ou retournez à la page d'accueil.
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            variant="contained" 
            color="primary"
            component={Link}
            to="/"
            size="large"
          >
            Retour à l'Accueil
          </Button>
          
          <Button 
            variant="outlined" 
            color="primary"
            component={Link}
            to="/contact"
            size="large"
          >
            Nous Contacter
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default NotFound; 