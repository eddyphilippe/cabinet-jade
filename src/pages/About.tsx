import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import HeroBanner from '../components/HeroBanner';
import Section from '../components/Section';

import cabinetImage from '../assets/images/cabinet-image.jpeg';

const About = () => {
  return (
    <Box>
      <HeroBanner
        title=""
        subtitle="Découvrez le Cabinet Jade Philippe et notre approche de la chiropraxie"
        backgroundImage={cabinetImage}
      />

      <Section
        title="Notre Cabinet"
        subtitle="Un espace dédié à votre santé et à votre bien-être"
        centered
        background="white"
      >
        <Typography paragraph>
          Le Cabinet Jade Philippe a été fondé avec une mission claire : offrir des soins de chiropraxie de qualité dans un environnement accueillant et professionnel. Notre cabinet allie expertise technique et approche humaine pour vous accompagner vers une meilleure santé vertébrale.
        </Typography>
        
        <Typography paragraph>
          Situé à Creully sur Seulles, notre cabinet en rez-de-chaussée, vous offre un accès de plain-pied à proximité d'un parking dédié.
        </Typography>
      </Section>

      <Section
        background="jade-light"
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom color="primary.main">
              Notre Espace
            </Typography>
            <Typography paragraph>
              Découvrez notre cabinet lumineux, conçu pour vous offrir un environnement apaisant lors de vos séances de chiropraxie.
            </Typography>
            <Typography paragraph>
              Équipé de matériel moderne et performant, le Cabinet Jade Philippe vous garantit des soins de qualité dans les meilleures conditions.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={cabinetImage}
              alt="Photo du Cabinet Jade"
              sx={{
                width: '100%',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              }}
            />
          </Grid>
        </Grid>
      </Section>

      <Section
        title="Notre Localisation"
        background="white"
        centered
      >
        <Typography paragraph>
          Le Cabinet Jade Philippe est situé à Creully sur Seulles, 63 rue de Caen, parking dédié.
        </Typography>
        
        <Box sx={{ 
          width: '100%', 
          height: '400px', 
          mt: 3,
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.0633173599486!2d-0.5394614842061502!3d49.28914207933026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480a66dbf8b7f579%3A0x32ddab656ecaa68c!2s63%20Rue%20de%20Caen%2C%2014480%20Creully%20sur%20Seulles!5e0!3m2!1sfr!2sfr!4v1654321987654!5m2!1sfr!2sfr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy"
            title="Localisation du Cabinet Jade Philippe"
          ></iframe>
        </Box>
      </Section>

      <Section
        title="Des questions sur notre approche ?"
        background="primary"
        centered
        maxWidth="md"
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ mb: 4, color: 'white', opacity: 0.9 }}>
            N'hésitez pas à nous contacter pour toute information complémentaire.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            color="secondary"
            size="large"
            sx={{ 
              px: 4, 
              py: 1.5, 
              borderRadius: '50px',
              color: 'white',
              fontWeight: 600
            }}
          >
            Nous Contacter
          </Button>
        </Box>
      </Section>
    </Box>
  );
};

export default About; 