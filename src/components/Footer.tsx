import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link as MuiLink, 
  Divider,
  Stack
} from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: 'Accueil', path: '/' },
      { name: 'Le Cabinet', path: '/about' },
      { name: 'Soins Proposés', path: '/services' },
      { name: 'Équipement', path: '/equipment' },
      { name: 'Tarifs', path: '/pricing' },
      { name: 'Contact', path: '/contact' }
    ],
    services: [
      { name: 'Chiropraxie Générale', path: '/services#chiropratique-generale' },
      { name: 'Thérapie des Tissus Mous', path: '/services#therapie-tissus-mous' },
      { name: 'Dry Needling', path: '/services#dry-needing' },
      { name: 'Réhabilitation', path: '/services#rehabilitation' }
    ],
    legal: [
      { name: 'Mentions Légales', path: '/legal' },
      { name: 'Politique de Confidentialité', path: '/privacy' },
      { name: 'CGU', path: '/terms' }
    ]
  };

  return (
    <Box component="footer" sx={{ bgcolor: 'primary.dark', color: 'white', py: 6, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="div" gutterBottom fontWeight={600}>
              Cabinet Jade Philippe
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
              Cabinet de chiropraxie dédié à la santé de votre système neuro-musculo-squelettique et à votre bien-être.
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>Email :</strong> jadephilippe.chiropraxie@gmail.com
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="subtitle1" component="div" gutterBottom fontWeight={600}>
              Navigation
            </Typography>
            <Stack spacing={1}>
              {footerLinks.navigation.map((link) => (
                <MuiLink 
                  key={link.name}
                  component={Link}
                  to={link.path}
                  color="inherit"
                  underline="hover"
                  sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}
                >
                  {link.name}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" component="div" gutterBottom fontWeight={600}>
              Nos Soins
            </Typography>
            <Stack spacing={1}>
              {footerLinks.services.map((link) => (
                <MuiLink 
                  key={link.name}
                  component={Link}
                  to={link.path}
                  color="inherit"
                  underline="hover"
                  sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}
                >
                  {link.name}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          {/* Legal */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" component="div" gutterBottom fontWeight={600}>
              Informations Légales
            </Typography>
            <Stack spacing={1}>
              {footerLinks.legal.map((link) => (
                <MuiLink 
                  key={link.name}
                  component={Link}
                  to={link.path}
                  color="inherit"
                  underline="hover"
                  sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}
                >
                  {link.name}
                </MuiLink>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', my: 4 }} />
        
        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'space-between' }, flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © {currentYear} Cabinet Jade Philippe. Tous droits réservés.
          </Typography>
          <Typography variant="body2" sx={{ mt: { xs: 1, md: 0 }, opacity: 0.7 }}>
            Conçu et développé avec soin pour votre bien-être
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 