import React from 'react';
import { Box, Typography, Button, Grid, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

import HeroBanner from '../components/HeroBanner';
import MapEmbed from '../components/MapEmbed';
import Section from '../components/Section';
import Seo from '../components/Seo';

import cabinetImage from '../assets/images/cabinet-image.jpeg';
import coinEnfantsImage from '../assets/images/cabinet-coin-enfants.jpg';
import jadePhilippeImage from '../assets/images/jade-philippe-chiro.jpg';
import { cabinet } from '../config/cabinet';
import { seo } from '../config/seo';

const About = () => {
  return (
    <Box>
      <Seo page={seo.pages.about} />
      <HeroBanner
        title="Le cabinet"
        subtitle={`Découvrez le cabinet de ${cabinet.practitioner} à ${cabinet.city}`}
        backgroundImage={cabinetImage}
      />

      <Section
        title="Un cabinet à votre écoute"
        background="white"
      >
        <Typography paragraph>
          {cabinet.practitioner} vous reçoit dans un cadre accueillant pour une prise en charge personnalisée. Elle prend le temps d’écouter vos attentes et de vous expliquer les soins proposés.
        </Typography>

        <Typography paragraph>
          Situé à {cabinet.city}, le cabinet est installé en rez-de-chaussée, avec un accès sans marche et un parking dédié.
        </Typography>

        <Box sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Un espace accueillant
          </Typography>

          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography paragraph>
                Le cabinet vous accueille dans un espace lumineux et calme pour vos consultations.
              </Typography>
              <Typography paragraph>
                Les techniques et le matériel utilisés sont choisis en fonction de votre situation et des résultats de l’examen.
              </Typography>
              <Typography paragraph>
                Un coin de jeux est à la disposition des enfants : vous pouvez venir accompagné de vos enfants pour votre consultation.
              </Typography>
            </Grid>

            <Grid item xs={12} md={5}>
              <Box
                component="img"
                src={coinEnfantsImage}
                alt="Coin de jeux du cabinet : table et chaises d'enfants avec des jouets en bois"
                loading="lazy"
                sx={{
                  width: '100%',
                  height: { xs: 320, md: 420 },
                  // La photo est au format portrait très allongé (473x1024) :
                  // le cadrage privilégie le bas, où se trouvent la table et
                  // les chaises, tout en gardant un peu de papier peint.
                  objectFit: 'cover',
                  objectPosition: 'center 85%',
                  display: 'block',
                  borderRadius: '8px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                }}
              />
            </Grid>
          </Grid>
        </Box>


      </Section>

      <Section
        title="Où se trouve le cabinet ?"
        background="white"
        centered
      >
        <Typography paragraph>
          Le {cabinet.name} est situé à {cabinet.city}, {cabinet.address}, parking dédié.
        </Typography>
        
        <Box sx={{ mt: 3 }}>
          <MapEmbed />
        </Box>
      </Section>

      <Section
        title="Votre chiropracteur"
        background="light"
        centered
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar
                src={jadePhilippeImage}
                alt={`${cabinet.practitioner}, ${cabinet.profession.toLowerCase()} à ${cabinet.city}`}
                sx={{ 
                  width: 200, 
                  height: 200, 
                  mb: 3,
                  borderRadius: '50%',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
                }}
              />
              <Typography variant="h5" fontWeight={600} gutterBottom>
                {cabinet.practitioner}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                {cabinet.profession}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography paragraph>
              Diplômée de l'Institut Franco-Européen de Chiropraxie (<strong>IFEC</strong>), {cabinet.practitioner} s'est formée en complément à la <strong>prise en charge du sportif</strong> et au <strong>Dry Needling</strong>. Son approche privilégie les techniques manuelles, adaptées aux besoins de chaque patient.
            </Typography>
            <Typography paragraph>
              Jade Philippe construit la prise en charge avec vous, en tenant compte de vos symptômes, de vos activités et de vos objectifs. Elle associe les techniques adaptées à votre situation à des conseils et à des exercices personnalisés.
            </Typography>
          </Grid>
        </Grid>
      </Section>

      <Section
        title="Des questions sur la prise en charge ?"
        background="primary"
        centered
        maxWidth="md"
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ mb: 4, color: 'white', opacity: 0.9 }}>
            Contactez le cabinet pour poser vos questions avant une consultation.
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
            Contacter le cabinet
          </Button>
        </Box>
      </Section>
    </Box>
  );
};

export default About; 