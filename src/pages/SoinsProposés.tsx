import React from 'react';
import { Box, Typography, Button, Grid, Chip } from '@mui/material';
import { Link } from 'react-router-dom';

import HeroBanner from '../components/HeroBanner';
import Section from '../components/Section';
import Seo from '../components/Seo';

import cabinetImage from '../assets/images/cabinet-image.jpeg';
import { cabinet } from '../config/cabinet';
import { seo } from '../config/seo';

const SoinsProposés = () => {
  const services = [
    {
      id: 'chiropraxie-generale',
      title: 'Chiropraxie Générale',
      description: 'Techniques manuelles visant à soulager les douleurs et à améliorer la mobilité, selon les résultats de l’examen.',
      longDescription: "La chiropraxie générale se concentre sur le diagnostic, le traitement et la prévention des troubles mécaniques du système musculo-squelettique, en particulier la colonne vertébrale.",
      benefits: [
        'Soulagement des douleurs cervicales, dorsales et lombaires',
        'Amélioration de la mobilité articulaire',
        "Prise en charge adaptée aux symptômes",
        'Amélioration de la posture',
        'Conseils adaptés aux activités quotidiennes'
      ]
    },
    {
      id: 'therapie-tissus-mous',
      title: 'Thérapie des Tissus Mous',
      description: 'Techniques de manipulation des muscles et des fascias pour soulager les tensions et accompagner la récupération.',
      longDescription: "La thérapie des tissus mous cible les muscles, tendons, ligaments et fascias. Elle vise à libérer les tensions, améliorer la circulation et accompagner la récupération de ces tissus.",
      benefits: [
        'Réduction des tensions musculaires',
        'Amélioration de la flexibilité',
        'Augmentation de la circulation sanguine',
        'Réduction des douleurs chroniques',
        'Accompagnement de la récupération après blessure'
      ]
    },
    {
      id: 'dry-needling',
      title: 'Dry Needling',
      description: 'Technique utilisant des aiguilles fines pour cibler les points de tension musculaires et libérer les douleurs.',
      longDescription: "Le Dry Needling est une technique précise qui consiste à insérer des aiguilles fines dans les points gâchettes musculaires (trigger points) pour soulager la douleur et restaurer la fonction musculaire. Son utilisation dépend des résultats de l’examen et de la situation de chaque patient.",
      benefits: [
        'Libération des points de tension musculaire',
        'Recherche d’un soulagement de la douleur',
        'Amélioration de la mobilité articulaire',
        'Travail sur la fonction musculaire',
        'Complémentaire aux ajustements de chiropraxie'
      ]
    },
    {
      id: 'ventouses',
      title: 'Ventouses',
      description: 'Coupelles appliquées sur la peau pour un travail localisé des tissus mous.',
      longDescription: "La thérapie par ventouses consiste à appliquer sur la peau des coupelles qui y créent une aspiration. Au cabinet, elle vient compléter le travail manuel sur les tissus mous, sur des zones de tension musculaire identifiées lors de l'examen. La technique est non invasive et peut laisser, pendant quelques jours, des marques circulaires sans gravité à l'endroit des ventouses.",
      benefits: [
        'Travail localisé sur les zones de tension musculaire',
        'Technique non invasive',
        'Complémentaire à la thérapie des tissus mous',
        'Adaptée au cas par cas selon l’examen'
      ]
    },
    {
      id: 'ondes-de-choc',
      title: 'Ondes de Choc',
      description: 'Ondes acoustiques appliquées localement, en complément des techniques manuelles.',
      longDescription: "La thérapie par ondes de choc utilise des ondes acoustiques à haute énergie appliquées localement à l'aide d'un appareil dédié. Elle est proposée au cabinet en complément des ajustements et de la thérapie des tissus mous, notamment dans la prise en charge des tendinopathies chroniques et des points de déclenchement musculaires.",
      benefits: [
        'Prise en charge des tendinopathies chroniques',
        'Traitement des points de déclenchement musculaires',
        'Application locale et ciblée',
        'Complémentaire aux ajustements de chiropraxie'
      ]
    },
    {
      id: 'chiropraxie-sportive',
      title: 'Chiropraxie Sportive',
      description: 'Prise en charge adaptée aux activités, aux contraintes et aux objectifs des sportifs.',
      longDescription: "La chiropraxie sportive est une approche spécialisée qui combine techniques d'ajustement, thérapie des tissus mous et conseils personnalisés pour les sportifs de tous niveaux. Elle vise à accompagner la pratique sportive, à travailler la mobilité et à soutenir la reprise d’activité. Dans les pays anglo-saxons, les chiropracteurs sont intégrés de longue date aux staffs médicaux des équipes sportives professionnelles, aux côtés des médecins et des préparateurs physiques.",
      benefits: [
        'Accompagnement des objectifs sportifs',
        'Conseils pour la pratique sportive',
        'Accompagnement de la récupération après l\'effort',
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
        'Autonomisation du patient dans sa prise en charge'
      ]
    }
  ];

  return (
    <Box>
      <Seo page={seo.pages.services} />
      <HeroBanner
        title="Soins proposés"
        subtitle={`Découvrez les approches thérapeutiques au ${cabinet.name}`}
        backgroundImage={cabinetImage}
      />

      <Section
        title="Les approches thérapeutiques"
        subtitle="Des soins adaptés à vos besoins spécifiques"
        centered
      >
        <Typography paragraph>
          Au {cabinet.name}, Jade Philippe choisit les techniques en fonction de vos symptômes, de vos attentes et des résultats de l’examen. Les objectifs de la prise en charge sont définis avec vous.
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.id}>
              <Link 
                to={`/services#${service.id}`} 
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
        title="Des questions sur les soins ?"
        background="primary"
        centered
        maxWidth="md"
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ mb: 4, color: 'white', opacity: 0.9, fontWeight: 'normal' }}>
            Contactez le cabinet pour en savoir plus ou pour réserver une consultation.
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
            Contacter le cabinet
          </Button>
        </Box>
      </Section>
    </Box>
  );
};

export default SoinsProposés; 