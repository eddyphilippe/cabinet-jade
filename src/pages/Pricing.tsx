import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

import AppointmentButton from '../components/AppointmentButton';
import HeroBanner from '../components/HeroBanner';
import Section from '../components/Section';
import Seo from '../components/Seo';

import cabinetImage from '../assets/images/cabinet-image.jpeg';
import { seo } from '../config/seo';

const Pricing = () => {
  const pricingPlans = [
    {
      title: 'Première consultation',
      price: '60 €',
      description: 'Échange sur votre santé, examen et soins adaptés',
      features: [
        'Bilan de chiropraxie complet',
        'Échange sur vos symptômes et vos antécédents',
        'Premier soin si votre situation le permet',
        'Plan de traitement personnalisé'
      ]
    },
    {
      title: 'Consultation de suivi',
      price: '50 €',
      description: 'Pour les patients en cours de traitement',
      features: [
        'Évaluation des progrès',
        'Techniques adaptées à votre situation',
        'Conseils personnalisés',
        'Adaptation du plan de traitement si nécessaire'
      ]
    }
  ];

  return (
    <Box>
      <Seo page={seo.pages.pricing} />
      <HeroBanner
        title="Tarifs des consultations"
        subtitle="Des tarifs transparents pour vos soins de chiropraxie"
        backgroundImage={cabinetImage}
      />

      <Section
        title="Les consultations"
        centered
      >
        <Grid container spacing={4} justifyContent="center">
          {pricingPlans.map((plan, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.12)',
                  },
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <CardContent sx={{ p: 3, flex: '1 0 auto', display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {plan.title}
                  </Typography>
                  <Typography variant="h4" color="primary" fontWeight={600} sx={{ my: 2 }}>
                    {plan.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    {plan.description}
                  </Typography>
                  
                  <Box sx={{ mt: 2, flexGrow: 1 }}>
                    {plan.features.map((feature, i) => (
                      <Typography key={i} variant="body2" sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
                        • {feature}
                      </Typography>
                    ))}
                  </Box>
                  
                  <AppointmentButton fullWidth sx={{ mt: 3 }} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2" color="text.secondary">
            Les tarifs sont en euros TTC. Les règlements peuvent être effectués par carte bancaire, espèces ou chèque.
          </Typography>
        </Box>
      </Section>

      <Section
        title="Une question sur les tarifs ?"
        background="primary"
        centered
        maxWidth="md"
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ mb: 4, color: 'white', opacity: 0.9 }}>
            Contactez le cabinet pour toute question sur les tarifs ou les modalités de règlement.
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: 'white', opacity: 0.9 }}>
            Une prise en charge peut être prévue selon votre contrat de mutuelle. Renseignez-vous auprès de votre organisme pour connaître les conditions de remboursement.
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

export default Pricing; 