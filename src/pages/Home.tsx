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
        titleVariant="h5"
      >
        <Typography paragraph>
          Votre thérapeute vous accueille dans un espace calme et apaisant pour prendre soin de votre santé.
          Son approche de la chiropraxie est globale, douce et adaptée à chaque patient.
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
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Chiropracteure diplômée de l'Institut Franco-Européen de Chiropraxie (<strong>IFEC</strong>)
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Formation complémentaire en <strong>prise en charge du sportif</strong> et en <strong>Dry Needling</strong>
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
              Rôle de votre Chiropracteure
            </Typography>
            
            <Typography paragraph>
              Le travail d'un chiropracteur consiste à diagnostiquer, traiter et prévenir les troubles neuro-musculo-squelettiques, en particulier ceux liés à la colonne vertébrale. Votre thérapeute utilise la manipulation manuelle des articulations, principalement la colonne vertébrale, pour améliorer leur mobilité, soulager la douleur et optimiser le fonctionnement du système nerveux. Cela peut inclure des ajustements vertébraux, des conseils sur la posture, des exercices de rééducation ainsi que des conseils sur votre mode de vie.
            </Typography>
            
            <Typography paragraph>
              Les chiropracteurs traitent des douleurs diverses comme les douleurs lombaires, cervicales, les migraines, les tendinopathies, les douleurs articulaires et les troubles liés au stress et aux déséquilibres posturaux. Ils abordent souvent le corps de façon global, cherchant à améliorer le bien-être général du patient en se concentrant sur l'origine mécanique des douleurs.
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
                href="https://www.doctolib.fr/chiropracteur/creully-sur-seulles/jade-philippe"
                target="_blank"
                rel="noopener noreferrer"
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