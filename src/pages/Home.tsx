import React from 'react';
import { Box, Typography, Button, Grid, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

import AppointmentButton from '../components/AppointmentButton';
import HeroBanner from '../components/HeroBanner';
import Section from '../components/Section';
import Seo from '../components/Seo';

import cabinetImage from '../assets/images/cabinet-image.jpeg';
import jadePhilippeImage from '../assets/images/jade-philippe-chiro.jpg';
import { addressInSentence, cabinet } from '../config/cabinet';
import { seo } from '../config/seo';

const Home = () => {
  return (
    <Box>
      <Seo page={seo.pages.home} />
      <HeroBanner
        title={`${cabinet.practitioner}, chiropracteur à ${cabinet.city}`}
        subtitle="Une prise en charge personnalisée des douleurs musculaires et articulaires"
        backgroundImage={cabinetImage}
        height="45vh"
      />

      <Section
        title="Un accompagnement adapté à vos besoins"
        centered
        background="white"
        titleVariant="h5"
      >
        <Typography paragraph>
          {cabinet.practitioner} vous accueille pour faire le point sur vos douleurs, vos difficultés de mouvement et vos attentes. Les techniques manuelles et les conseils proposés sont adaptés à votre situation.
        </Typography>

        <Typography paragraph>
          Le cabinet se situe {addressInSentence} à {cabinet.city},
          dans le {cabinet.department}, en {cabinet.region}. Il est installé en
          rez-de-chaussée, avec un accès sans marche et un parking dédié.
        </Typography>

        <Box sx={{ mt: 4 }}>
          <AppointmentButton size="large" sx={{ px: 4, py: 1.5, mr: 2, mb: { xs: 2, sm: 0 } }} />
          <Button variant="outlined" color="primary" component={Link} to="/contact">
            Voir le plan d'accès
          </Button>
        </Box>
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
                src={jadePhilippeImage}
                alt={cabinet.practitioner}
              />
              <Typography variant="h5" gutterBottom>
                {cabinet.practitioner}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Chiropracteur diplômée de l'Institut Franco-Européen de Chiropraxie (<strong>IFEC</strong>)
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Formation complémentaire en <strong>prise en charge du sportif</strong> et en <strong>Dry Needling</strong>
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom>
              Votre prise en charge avec Jade Philippe
            </Typography>
            
            <Typography paragraph>
              La consultation permet de faire le point sur vos symptômes, vos antécédents et vos habitudes de vie. Jade Philippe s’appuie sur cet échange et sur un examen pour vous proposer une prise en charge adaptée.
            </Typography>
            
            <Typography paragraph>
              Les soins peuvent associer des techniques manuelles, un travail musculaire et des exercices personnalisés. Les objectifs sont définis avec vous, en tenant compte de vos activités quotidiennes et sportives.
            </Typography>
            
            <Box sx={{ mt: 3 }}>
              <Button 
                variant="contained" 
                color="primary"
                component={Link}
                to="/services"
                sx={{ mr: 2 }}
              >
                Découvrir les soins
              </Button>
              <AppointmentButton variant="outlined" />
            </Box>
          </Grid>
        </Grid>
      </Section>

      <Section title="Comment se déroule une première consultation ?" background="light">
        <Typography variant="h6" component="h3" gutterBottom>Un échange pour comprendre votre situation</Typography>
        <Typography paragraph>
          Vous échangez avec Jade Philippe sur le motif de votre visite, vos antécédents et vos attentes.
        </Typography>
        <Typography variant="h6" component="h3" gutterBottom>Un examen et des explications</Typography>
        <Typography paragraph>
          L’examen permet d’évaluer votre situation et de discuter des soins qui peuvent vous être proposés.
          Jade Philippe vous explique les techniques envisagées et répond à vos questions avant tout soin.
        </Typography>
        <Typography variant="h6" component="h3" gutterBottom>Une prise en charge adaptée</Typography>
        <Typography paragraph>
          Un premier soin peut être proposé si votre situation le permet. La suite de la prise en charge
          est définie avec vous selon les résultats de l’examen et vos besoins.
        </Typography>
        <Typography paragraph>
          Si vous disposez de comptes rendus ou d’examens en lien avec votre motif de consultation,
          vous pouvez les apporter. Pour connaître la durée à prévoir ou poser une question avant votre visite,
          contactez le cabinet.
        </Typography>
        <AppointmentButton size="large" />
      </Section>
    </Box>
  );
};

export default Home; 