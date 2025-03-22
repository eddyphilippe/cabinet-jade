import React from 'react';
import { Box, Typography, Button, Grid, Chip, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

import HeroBanner from '../components/HeroBanner';
import Section from '../components/Section';

import cabinetImage from '../assets/images/cabinet-image.jpeg';

const Services = () => {
  const services = [
    {
      id: 'chiropratique-generale',
      title: 'Chiropratique Générale',
      description: 'Ajustements vertébraux pour corriger les désalignements, réduire les douleurs et améliorer la mobilité.',
      longDescription: "La chiropratique générale se concentre sur le diagnostic, le traitement et la prévention des troubles mécaniques du système musculo-squelettique, en particulier la colonne vertébrale.",
      benefits: [
        'Soulagement des douleurs cervicales, dorsales et lombaires',
        'Amélioration de la mobilité articulaire',
        "Réduction de l'inflammation",
        'Amélioration de la posture',
        'Optimisation de la fonction nerveuse'
      ]
    },
    {
      id: 'therapie-tissus-mous',
      title: 'Thérapie des Tissus Mous',
      description: 'Techniques de manipulation des muscles et des fascias pour soulager les tensions et favoriser la guérison.',
      longDescription: "La thérapie des tissus mous cible les muscles, tendons, ligaments et fascias. Elle vise à libérer les tensions, améliorer la circulation et favoriser la guérison naturelle de ces tissus.",
      benefits: [
        'Réduction des tensions musculaires',
        'Amélioration de la flexibilité',
        'Augmentation de la circulation sanguine',
        'Réduction des douleurs chroniques',
        'Accélération de la récupération après blessure'
      ]
    },
    {
      id: 'rehabilitation',
      title: 'Réhabilitation',
      description: 'Exercices thérapeutiques personnalisés pour renforcer les muscles et améliorer la stabilité.',
      longDescription: "Notre approche de réhabilitation combine des exercices thérapeutiques spécifiques et des conseils ergonomiques personnalisés pour renforcer votre corps et prévenir les récidives.",
      benefits: [
        'Renforcement des muscles stabilisateurs',
        "Amélioration de l'équilibre et de la coordination",
        'Prévention des récidives',
        'Correction des schémas de mouvement déficients',
        'Autonomisation du patient dans sa guérison'
      ]
    }
  ];

  return (
    <Box>
      <HeroBanner
        title="Nos Services"
        subtitle="Découvrez notre gamme complète de soins chiropratiques adaptés à vos besoins spécifiques."
        backgroundImage={cabinetImage}
      />

      <Section
        title="Nos Prestations"
        subtitle="Le Cabinet Jade propose une variété de services chiropratiques pour prendre soin de votre santé vertébrale."
        centered
      >
        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item xs={12} md={4} key={service.id}>
              <Link 
                to={`#${service.id}`} 
                style={{ textDecoration: 'none' }}
              >
                <Box sx={{ p: 3, borderRadius: 2, border: '1px solid #e0e0e0', height: '100%', transition: 'all 0.3s ease', '&:hover': { boxShadow: '0 5px 15px rgba(0,0,0,0.08)', transform: 'translateY(-5px)' } }}>
                  <Typography variant="h5" component="h3" gutterBottom color="secondary.main">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {service.description}
                  </Typography>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Section>

      {services.map((service, index) => (
        <Section
          key={service.id}
          id={service.id}
          title={service.title}
          titleColor="secondary.main"
          background={index % 2 === 0 ? 'white' : 'light'}
        >
          <Box>
            <Typography variant="body1" paragraph>
              {service.longDescription}
            </Typography>
            
            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
              Bénéfices
            </Typography>
            
            <Box sx={{ mb: 3 }}>
              {service.benefits.map((benefit, i) => (
                <Chip 
                  key={i} 
                  label={benefit} 
                  sx={{ 
                    m: 0.5, 
                    bgcolor: 'primary.light',
                    color: 'primary.dark'
                  }} 
                />
              ))}
            </Box>
            
            <Divider sx={{ my: 4 }} />
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              <Button 
                variant="contained" 
                color="primary"
                component={Link}
                to="/contact"
                sx={{ mr: 2, mb: 2 }}
              >
                Prendre Rendez-vous
              </Button>
              <Button 
                variant="outlined" 
                color="primary"
                component={Link}
                to="/tarifs"
                sx={{ mb: 2 }}
              >
                Voir les Tarifs
              </Button>
            </Box>
          </Box>
        </Section>
      ))}

      <Section
        title="Questions sur nos services ?"
        background="primary"
        centered
        maxWidth="md"
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom sx={{ color: 'white' }}>
            Des Questions sur Nos Services ?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: 'white', opacity: 0.9, fontWeight: 'normal' }}>
            Prenez contact avec nous pour en savoir plus ou pour réserver une consultation.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            color="primary"
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

export default Services; 