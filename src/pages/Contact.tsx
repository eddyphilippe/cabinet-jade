import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Container,
  Alert,
  Snackbar,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';

import HeroBanner from '../components/HeroBanner';
import Section from '../components/Section';

import cabinetImage from '../assets/images/cabinet-image.jpeg';

// Créer des wrapper components pour les icônes
const SendIcon = () => <FiSend />;
const MapPinIcon = () => <FiMapPin style={{ marginRight: '16px', marginTop: '4px', color: '#8ecae6' }} />;
const PhoneIcon = () => <FiPhone style={{ marginRight: '16px', marginTop: '4px', color: '#8ecae6' }} />;
const MailIcon = () => <FiMail style={{ marginRight: '16px', marginTop: '4px', color: '#8ecae6' }} />;
const ClockIcon = () => <FiClock style={{ marginRight: '16px', marginTop: '4px', color: '#8ecae6' }} />;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setFormStatus({
        open: true,
        message: 'Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.',
        severity: 'success'
      });
      
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 1000);
  };

  const handleCloseSnackbar = () => {
    setFormStatus(prev => ({
      ...prev,
      open: false
    }));
  };

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
                    <strong>Email:</strong> contact@cabinet-jade-philippe.fr
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
                  Envoyez-nous un message
                </Typography>
                
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        required
                        label="Nom"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        required
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Téléphone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        required
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                        sx={{ py: 1.5 }}
                      >
                        Envoyer
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Section>

      <Snackbar
        open={formStatus.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={formStatus.severity}
          sx={{ width: '100%' }}
        >
          {formStatus.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 