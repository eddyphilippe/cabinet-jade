import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import Section from '../components/Section';

import cabinetImage from '../assets/images/cabinet-image.jpeg';

const Equipment = () => {
  const equipmentList = [
    {
      title: 'Table d\'Ajustement',
      description: 'Bénéficiez d\'une toute nouvelle table spécialisée qui permet des ajustements précis de la colonne vertébrale et des articulations. Équipée de sections mobiles pour faciliter différentes techniques d\'ajustement.',
      image: cabinetImage
    },
    {
      title: 'Appareil à Ultrasons',
      description: 'Utilise des ondes sonores haute fréquence pour traiter les douleurs musculaires, améliorer la circulation et favoriser la guérison des tissus profonds.',
      image: cabinetImage
    },
    {
      title: 'Électrothérapie',
      description: 'Système de stimulation électrique qui aide à soulager la douleur, réduire l\'inflammation et favoriser la récupération musculaire après une blessure.',
      image: cabinetImage
    },
    {
      title: 'Système d\'Imagerie Posturale',
      description: 'Technologie avancée qui permet d\'analyser votre posture avec précision pour identifier les déséquilibres et suivre vos progrès au fil du temps.',
      image: cabinetImage
    }
  ];

  return (
    <Box>
      <HeroBanner
        title="Notre Équipement"
        subtitle="Des technologies modernes au service de votre santé"
        backgroundImage={cabinetImage}
      />

      <Section
        title="Technologies et Équipements"
        subtitle="Des outils spécialisés pour des soins chiropratiques optimaux"
        centered
      >
        <Grid container spacing={4}>
          {equipmentList.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.12)',
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section
        background="light"
        centered
      >
        <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary">
            Tous nos appareils sont régulièrement entretenus et mis à jour pour garantir des traitements efficaces et sécurisés. Notre engagement est de combiner expertise chiropratique et technologies modernes pour optimiser votre parcours de guérison.
          </Typography>
        </Box>
      </Section>
    </Box>
  );
};

export default Equipment; 