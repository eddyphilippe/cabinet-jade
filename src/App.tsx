import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

// Composants
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollManager from './components/ScrollManager';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import SoinsProposés from './pages/SoinsProposés';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

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
        <ScrollManager />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<SoinsProposés />} />
            {/*
              Page Équipement retirée du site le 27/09/2026 à la demande de
              l'utilisateur. Le composant est conservé dans
              src/pages/Equipment.tsx : voir l'en-tête de ce fichier pour la
              procédure de remise en ligne.
            */}
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
