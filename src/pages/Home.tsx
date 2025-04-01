import React from 'react';
import { Box, Typography, Button, Grid, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

import HeroBanner from '../components/HeroBanner';
import Section from '../components/Section';

import cabinetImage from '../assets/images/cabinet-image.jpeg';

const Home = () => {
  return (
    <Box>
      <HeroBanner
        title="Cabinet de Chiropraxie"
        subtitle="Jade Philippe"
        backgroundImage={cabinetImage}
      />

      <Section
        title="Bienvenue dans un espace dédié à votre santé vertébrale et à votre bien-être"
        centered
        background="white"
      >
        <Typography paragraph>
          Votre thérapeute vous accueille dans un espace calme et apaisant pour prendre soin de votre santé.
          Notre approche de la chiropraxie est globale, douce et adaptée à chaque patient.
        </Typography>
      </Section>

      <Section
        background="white"
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Avatar
                sx={{ 
                  width: 120, 
                  height: 120, 
                  margin: '0 auto 16px auto',
                  bgcolor: 'primary.main' 
                }}
              >
                JP
              </Avatar>
              <Typography variant="h5" gutterBottom>
                Jade Philippe
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Chiropracteure diplômée de l'Institut Franco-Européen de Chiropraxie (IFEC)
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
              Parcours et Formations
            </Typography>
            
            <Typography paragraph>
              Après l'obtention de son diplôme à l'IFEC en 2023, Jade Philippe a complété sa formation par des certifications en chiropraxie sportive et en Dry Needing. Sa pratique est enrichie par une approche intégrative de la santé.
            </Typography>
            
            <Typography paragraph>
              Sa philosophie de soins repose sur la nécessité d'une prise en charge individualisée. Elle considère qu'un réalignement correcte de la structure vertébrale est la pierre angulaire qui permettra la mise en place d'un plan de réhabilitation adapté, menant à une optimisation de sa locomotricité et de son bien-être.
            </Typography>
            
            <Box sx={{ mt: 3 }}>
              <Button 
                variant="contained" 
                color="primary"
                component={Link}
                to="/services"
                sx={{ mr: 2 }}
              >
                Découvrir nos soins
              </Button>
              <Button 
                variant="outlined" 
                color="primary"
                component={Link}
                to="/contact"
              >
                Prendre Rendez-vous
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Section>

      <Section
        background="beige-light"
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" color="primary.main" gutterBottom>
              Votre Santé, Notre Priorité
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 4,
                border: '1px solid rgba(74, 124, 89, 0.2)',
                borderRadius: '8px',
                bgcolor: 'white',
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              }}
            >
              <Typography variant="h5" gutterBottom color="secondary.main">
                "La santé est un état de complet bien-être physique, mental et social."
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Organisation Mondiale de la Santé
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Section>
    </Box>
  );
};

export default Home; 