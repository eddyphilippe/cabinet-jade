import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
} from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import Section from '../components/Section';
import Seo from '../components/Seo';

import cabinetImage from '../assets/images/cabinet-image.jpeg';
import {
  cabinet,
  fullAddress,
  openingHoursSentence,
  openingHoursSummary,
} from '../config/cabinet';
import { seo } from '../config/seo';

const Contact = () => {
  return (
    <Box>
      <Seo page={seo.pages.contact} />
      <HeroBanner
        title="Contactez-Nous"
        subtitle="À votre écoute pour répondre à vos questions"
        backgroundImage={cabinetImage}
      />

      <Section
        title="Votre Chiropracteure"
      >
        <Grid container spacing={4}>
          
          <Grid item xs={12} md={6}>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              N'hésitez pas à nous contacter pour toute question concernant nos services, 
              pour prendre rendez-vous ou pour obtenir plus d'informations sur notre approche chiropratique.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Votre chiropracteure est disponible pour vous répondre {openingHoursSentence}.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ backgroundColor: 'primary.light', boxShadow: 'none', borderRadius: 2 }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  Informations de Contact
                </Typography>
                
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    <strong>Adresse :</strong> {fullAddress}
                  </Typography>
                  {cabinet.phone && (
                    <Typography variant="body1" gutterBottom>
                      <strong>Téléphone :</strong> {cabinet.phone.display}
                    </Typography>
                  )}
                  <Typography variant="body1" gutterBottom>
                    <strong>Email :</strong> {cabinet.email}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Horaires :</strong> {openingHoursSummary}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Section>
    </Box>
  );
};

export default Contact; 