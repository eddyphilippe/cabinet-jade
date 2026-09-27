import React from 'react';
import {
  Box,
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
  Link as MuiLink,
  Stack,
} from '@mui/material';

import AppointmentButton from '../components/AppointmentButton';
import HeroBanner from '../components/HeroBanner';
import MapEmbed from '../components/MapEmbed';
import Section from '../components/Section';
import Seo from '../components/Seo';

import cabinetImage from '../assets/images/cabinet-image.jpeg';
import {
  addressInSentence,
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
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Votre chiropracteure est disponible pour vous répondre {openingHoursSentence}.
            </Typography>

            <AppointmentButton size="large" sx={{ px: 4, py: 1.5 }} />
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
              La prise de rendez-vous se fait en ligne sur Doctolib.
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
                      <strong>Téléphone :</strong>{' '}
                      <MuiLink href={`tel:${cabinet.phone.e164}`} color="inherit">
                        {cabinet.phone.display}
                      </MuiLink>
                    </Typography>
                  )}
                  <Typography variant="body1" gutterBottom>
                    <strong>Email :</strong>{' '}
                    <MuiLink href={`mailto:${cabinet.email}`} color="inherit">
                      {cabinet.email}
                    </MuiLink>
                  </Typography>
                  <Typography variant="body1">
                    <strong>Horaires :</strong> {openingHoursSummary}
                  </Typography>
                </Box>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 3 }}>
                  <Button
                    variant="outlined"
                    color="inherit"
                    href={cabinet.maps.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Calculer mon itinéraire
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Section>

      <Section title="Accès au cabinet" background="light">
        <Typography paragraph>
          Le cabinet se situe {addressInSentence} à {cabinet.city},
          dans le {cabinet.department}. Il est installé en rez-de-chaussée, avec
          un accès de plain-pied et un parking dédié.
        </Typography>
        <MapEmbed />
      </Section>
    </Box>
  );
};

export default Contact; 