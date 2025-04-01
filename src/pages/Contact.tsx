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

import cabinetImage from '../assets/images/cabinet-image.jpeg';

const Contact = () => {
  return (
    <Box>
      <HeroBanner
        title="Contactez-Nous"
        subtitle="Nous sommes à votre écoute pour répondre à vos questions"
        backgroundImage={cabinetImage}
      />

      <Section>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4" component="h2" gutterBottom>
              Nous Sommes à Votre Écoute
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              N'hésitez pas à nous contacter pour toute question concernant nos services, 
              pour prendre rendez-vous ou pour obtenir plus d'informations sur notre approche chiropratique.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Notre équipe est disponible pour vous répondre du lundi au vendredi de 9h à 19h
              et le samedi de 9h à 13h.
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
                    <strong>Adresse:</strong> 63 Rue de Caen, 14480 Creully sur Seulles
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    <strong>Téléphone :</strong> 06 12 34 56 78
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    <strong>Email :</strong> jadephilippe.chiropraxie@gmail.com
                  </Typography>
                  <Typography variant="body1">
                    <strong>Horaires:</strong> Lun-Ven: 9h-19h | Sam: 9h-13h
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