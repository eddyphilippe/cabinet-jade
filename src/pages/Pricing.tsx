import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

import HeroBanner from '../components/HeroBanner';
import Section from '../components/Section';

import cabinetImage from '../assets/images/cabinet-image.jpeg';

const Pricing = () => {
  const pricingPlans = [
    {
      title: 'Première Consultation',
      price: '60€',
      description: 'Examen complet, anamnèse et premier traitement',
      features: [
        'Bilan de chiropraxie complet',
        'Anamnèse détaillée',
        'Premier ajustement vertébral',
        'Plan de traitement personnalisé'
      ]
    },
    {
      title: 'Consultation de Suivi',
      price: '50€',
      description: 'Pour les patients en cours de traitement',
      features: [
        'Évaluation des progrès',
        'Ajustements vertébraux',
        'Conseils personnalisés',
        'Adaptation du plan de traitement si nécessaire'
      ]
    },
    {
      title: 'Dry Needing',
      price: '60€',
      description: 'Technique spécifique pour la douleur aiguë',
      features: [
        'Prise en charge du lumbago en phase aiguë',
        'Traitement des points gâchettes musculaires',
        'Soulagement rapide des douleurs',
        'Complémentaire aux ajustements vertébraux'
      ]
    }
  ];

  return (
    <Box>
      <HeroBanner
        title="Nos Tarifs"
        subtitle="Des tarifs transparents pour vos soins de chiropraxie"
        backgroundImage={cabinetImage}
      />

      <Section
        title="Grille Tarifaire"
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
                  
                  <Button 
                    variant="contained" 
                    color="primary"
                    component={Link}
                    to="/contact"
                    fullWidth
                    sx={{ mt: 3 }}
                  >
                    Prendre Rendez-vous
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2" color="text.secondary">
            Tous nos tarifs sont en euros TTC. Les règlements peuvent être effectués par carte bancaire, espèces ou chèque.
          </Typography>
        </Box>
      </Section>

      <Section
        title="Questions sur nos tarifs ?"
        background="primary"
        centered
        maxWidth="md"
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ mb: 4, color: 'white', opacity: 0.9 }}>
            N'hésitez pas à nous contacter pour toute information complémentaire sur nos tarifs.
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: 'white', opacity: 0.9 }}>
            N'hésitez pas à vous rapprocher de votre mutuelle. La plupart des contrats incluent la prise en charge des premières consultations de chiropraxie.
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

export default Pricing; 