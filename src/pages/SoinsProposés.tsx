import React from 'react';
import { Box, Typography, Button, Grid, Chip, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

import HeroBanner from '../components/HeroBanner';
import Section from '../components/Section';

import cabinetImage from '../assets/images/cabinet-image.jpeg';

const SoinsProposés = () => {
  const services = [
    {
      id: 'chiropraxie-generale',
      title: 'Chiropraxie Générale',
      description: 'Ajustements vertébraux pour corriger les désalignements, réduire les douleurs et améliorer la mobilité.',
      longDescription: "La chiropraxie générale se concentre sur le diagnostic, le traitement et la prévention des troubles mécaniques du système musculo-squelettique, en particulier la colonne vertébrale.",
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
      id: 'dry-needing',
      title: 'Dry Needing',
      description: 'Technique utilisant des aiguilles fines pour cibler les points de tension musculaires et libérer les douleurs.',
      longDescription: "Le Dry Needing est une technique précise qui consiste à insérer des aiguilles fines dans les points gâchettes musculaires (trigger points) pour soulager la douleur et restaurer la fonction musculaire. Cette approche est particulièrement efficace pour le traitement du lumbago en phase aiguë ou pour les douleurs myofasciales chroniques.",
      benefits: [
        'Libération des points de tension musculaire',
        'Diminution rapide de la douleur',
        'Amélioration de la mobilité articulaire',
        'Restauration de la fonction musculaire normale',
        'Complémentaire aux ajustements de chiropraxie'
      ]
    },
    {
      id: 'chiropraxie-sportive',
      title: 'Chiropraxie Sportive',
      description: 'Soins spécialisés pour les sportifs afin d\'optimiser leurs performances et accélérer leur récupération.',
      longDescription: "La chiropraxie sportive est une approche spécialisée qui combine techniques d'ajustement, thérapie des tissus mous et conseils personnalisés pour les sportifs de tous niveaux. Elle vise à améliorer les performances, prévenir les blessures et accélérer la récupération.",
      benefits: [
        'Amélioration des performances sportives',
        'Prévention des blessures',
        'Récupération plus rapide après l\'effort',
        'Correction des déséquilibres biomécaniques',
        'Optimisation de la mobilité et de la stabilité'
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
        title="Soins Proposés"
        subtitle="Découvrez nos approches thérapeutiques au Cabinet Jade Philippe"
        backgroundImage={cabinetImage}
      />

      <Section
        title="Nos Approches Thérapeutiques"
        subtitle="Des soins adaptés à vos besoins spécifiques"
        centered
      >
        <Typography paragraph>
          Au Cabinet Jade Philippe, nous proposons une gamme complète de soins de chiropraxie adaptés à vos besoins spécifiques. Notre objectif est de traiter non seulement vos symptômes, mais aussi les causes sous-jacentes de vos problèmes de santé.
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={6} lg={12/5} key={service.id}>
              <Link 
                to={`#${service.id}`} 
                style={{ textDecoration: 'none' }}
              >
                <Box sx={{ 
                  p: 3, 
                  borderRadius: 2, 
                  border: '1px solid #e0e0e0', 
                  height: '100%', 
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease', 
                  '&:hover': { 
                    boxShadow: '0 5px 15px rgba(0,0,0,0.08)', 
                    transform: 'translateY(-5px)' 
                  } 
                }}>
                  <div>
                    <Typography variant="h5" component="h3" gutterBottom color="secondary.main">
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {service.description}
                    </Typography>
                  </div>
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
          </Box>
        </Section>
      ))}

      <Section
        title="Questions sur nos soins ?"
        background="primary"
        centered
        maxWidth="md"
      >
        <Box sx={{ textAlign: 'center' }}>
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

export default SoinsProposés; 