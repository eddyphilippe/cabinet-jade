import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { 
  ThemeProvider, 
  createTheme, 
  CssBaseline, 
  Typography, 
  Box, 
  Container, 
  AppBar, 
  Toolbar, 
  Button 
} from '@mui/material';
import '@fontsource/poppins';
import './App.css';

// Composants pour les pages
const Home = () => (
  <Container>
    <Box sx={{ my: 4, textAlign: 'center' }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Cabinet Jade
      </Typography>
      <Typography variant="h5" gutterBottom>
        Chiropratique et Bien-être
      </Typography>
      <Typography variant="body1" paragraph>
        Bienvenue au Cabinet Jade, votre cabinet de chiropratique dédié à votre santé et votre bien-être.
        Notre approche holistique vise à soulager vos douleurs et à optimiser votre santé neuro-musculo-squelettique.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
        <Button variant="contained" color="primary" component={Link} to="/services">
          Nos Services
        </Button>
        <Button variant="outlined" color="primary" component={Link} to="/contact">
          Contact
        </Button>
      </Box>
    </Box>
  </Container>
);

const About = () => (
  <Container>
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        À Propos
      </Typography>
      <Typography variant="body1" paragraph>
        Le Cabinet Jade est un cabinet de chiropratique fondé par le Dr. Jean Dupont. Avec plus de 15 ans d'expérience, 
        notre équipe est dédiée à votre bien-être et à l'amélioration de votre qualité de vie.
      </Typography>
      <Typography variant="body1" paragraph>
        Notre approche combine techniques traditionnelles et innovations modernes pour des soins personnalisés et efficaces.
      </Typography>
    </Box>
  </Container>
);

const Services = () => (
  <Container>
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Nos Services
      </Typography>
      <Typography variant="body1" paragraph>
        Au Cabinet Jade, nous proposons une gamme complète de services chiropratiques :
      </Typography>
      <Box sx={{ ml: 2 }}>
        <Typography variant="body1" sx={{ mb: 1 }}>• Chiropratique générale</Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>• Thérapie des tissus mous</Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>• Réhabilitation personnalisée</Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>• Conseils ergonomiques</Typography>
      </Box>
    </Box>
  </Container>
);

const Contact = () => (
  <Container>
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Contact
      </Typography>
      <Typography variant="body1" paragraph>
        Nous sommes disponibles pour répondre à vos questions et prendre rendez-vous.
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>Adresse:</strong> 123 Avenue de la Santé, 75000 Paris
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>Téléphone:</strong> 01 23 45 67 89
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>Email:</strong> contact@cabinet-jade.fr
        </Typography>
        <Typography variant="body1">
          <strong>Horaires:</strong> Lun-Ven: 9h-19h | Sam: 9h-13h
        </Typography>
      </Box>
    </Box>
  </Container>
);

// Navigation
const Navigation = () => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, color: 'white', textDecoration: 'none' }}>
        Cabinet Jade
      </Typography>
      <Button color="inherit" component={Link} to="/">Accueil</Button>
      <Button color="inherit" component={Link} to="/about">À Propos</Button>
      <Button color="inherit" component={Link} to="/services">Services</Button>
      <Button color="inherit" component={Link} to="/contact">Contact</Button>
    </Toolbar>
  </AppBar>
);

// Thème personnalisé
const theme = createTheme({
  palette: {
    primary: {
      main: '#8ecae6',
      dark: '#219ebc',
      light: '#c7e7f2',
    },
    secondary: {
      main: '#ffb703',
      dark: '#fb8500',
      light: '#ffca51',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          padding: '10px 24px',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navigation />
        <Box component="main" sx={{ pt: 3, pb: 5, minHeight: 'calc(100vh - 64px)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Box>
        <Box component="footer" sx={{ py: 3, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Cabinet Jade - Tous droits réservés
          </Typography>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
