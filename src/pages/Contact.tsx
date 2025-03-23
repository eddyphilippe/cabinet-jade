import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

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
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" gutterBottom>
                Nous Sommes à Votre Écoute
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                N'hésitez pas à nous contacter pour toute question concernant nos services, 
                pour prendre rendez-vous ou pour obtenir plus d'informations sur notre approche chiropratique.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Notre équipe est disponible pour vous répondre du lundi au vendredi de 9h à 19h
                et le samedi de 9h à 13h.
              </Typography>
            </Box>

            <Card sx={{ mb: 4, backgroundColor: 'primary.light', boxShadow: 'none', borderRadius: 2 }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  Informations de Contact
                </Typography>
                
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    <strong>Adresse:</strong> 63 Rue de Caen, 14480 Creully sur Seulles
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    <strong>Téléphone:</strong> 0695112755
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    <strong>Email:</strong> edd.philippe@gmail.com
                  </Typography>
                  <Typography variant="body1">
                    <strong>Horaires:</strong> Lun-Ven: 9h-19h | Sam: 9h-13h
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 2, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
                  Informations de Contact
                </Typography>
                
                <Box sx={{ mt: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                    <FiMapPin style={{ marginRight: '16px', marginTop: '4px', color: '#8ecae6' }} />
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>Adresse</Typography>
                      <Typography variant="body1" color="text.secondary">
                        63 Rue de Caen, 14480 Creully sur Seulles
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                    <FiPhone style={{ marginRight: '16px', marginTop: '4px', color: '#8ecae6' }} />
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>Téléphone</Typography>
                      <Typography variant="body1" color="text.secondary">
                        0695112755
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                    <FiMail style={{ marginRight: '16px', marginTop: '4px', color: '#8ecae6' }} />
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>Email</Typography>
                      <Typography variant="body1" color="text.secondary">
                        edd.philippe@gmail.com
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <FiClock style={{ marginRight: '16px', marginTop: '4px', color: '#8ecae6' }} />
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>Horaires d'ouverture</Typography>
                      <Typography variant="body1" color="text.secondary">
                        Lundi - Vendredi: 9h - 19h
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        Samedi: 9h - 13h
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        Dimanche: Fermé
                      </Typography>
                    </Box>
                  </Box>
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