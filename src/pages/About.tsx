import React from 'react';
import { Box, Typography, Button, Grid, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

import HeroBanner from '../components/HeroBanner';
import Section from '../components/Section';

import cabinetImage from '../assets/images/cabinet-image.jpeg';
import jadePhilippeImage from '../assets/images/jade-philippe-chiro.jpg';
import { cabinet } from '../config/cabinet';

const About = () => {
  return (
    <Box>
      <HeroBanner
        title="À Propos"
        subtitle={`Découvrez le ${cabinet.name} et notre approche de la chiropraxie`}
        backgroundImage={cabinetImage}
      />

      <Section
        title="Notre Centre"
        background="white"
      >
        <Typography paragraph>
          Le {cabinet.name} a été fondé avec une mission claire : offrir des soins de chiropraxie de qualité dans un environnement accueillant et professionnel. Notre centre allie expertise technique et approche humaine pour vous accompagner vers une meilleure santé vertébrale.
        </Typography>

        <Typography paragraph>
          Situé à {cabinet.city}, notre centre en rez-de-chaussée, vous offre un accès de plain-pied à proximité d'un parking dédié.
        </Typography>

        <Box sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Notre Espace
          </Typography>
          <Typography paragraph>
            Découvrez notre centre lumineux, conçu pour vous offrir un environnement apaisant lors de vos séances de chiropraxie.
          </Typography>
          <Typography paragraph>
            Équipé de matériel moderne et performant, le {cabinet.name} vous garantit des soins de qualité dans les meilleures conditions.
          </Typography>
        </Box>

        <Box sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Localisation
          </Typography>
          <Typography paragraph>
            Le {cabinet.name} est situé à {cabinet.city}, {cabinet.address}, parking dédié.
          </Typography>
        </Box>
      </Section>

      <Section
        title="Notre Localisation"
        background="white"
        centered
      >
        <Typography paragraph>
          Le {cabinet.name} est situé à {cabinet.city}, {cabinet.address}, parking dédié.
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
            src={cabinet.maps.embed}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy"
            title={`Localisation du ${cabinet.name}`}
          ></iframe>
        </Box>
      </Section>

      <Section
        title="Votre Chiropracteure"
        background="light"
        centered
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar
                src={jadePhilippeImage}
                alt="Dr. Jade Philippe"
                sx={{ 
                  width: 200, 
                  height: 200, 
                  mb: 3,
                  borderRadius: '50%',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
                }}
              />
              <Typography variant="h5" fontWeight={600} gutterBottom>
                Dr. Jade Philippe
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                Chiropracteure D.C.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography paragraph>
              Diplômée de l'Institut Franco-Européen de Chiropratique (IFEC), Dr. Jade Philippe pratique depuis plus de 12 ans. Passionnée par les approches non-invasives du traitement des douleurs vertébrales, elle a développé une expertise dans diverses techniques chiropratiques.
            </Typography>
            <Typography paragraph>
              Sa philosophie de soin est centrée sur le patient et son bien-être global. Elle croit fermement que notre corps a une capacité naturelle d'auto-guérison que la chiropratique peut aider à optimiser. Son approche combine différentes techniques en fonction des besoins spécifiques de chaque patient.
            </Typography>
          </Grid>
        </Grid>
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