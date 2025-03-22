import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4a7c59', // Teinte de jade (vert)
      light: '#7ea788', // Jade clair
      dark: '#2e5941', // Jade foncé
    },
    secondary: {
      main: '#c8a27a', // Beige doré
      light: '#e1c4a6', // Beige clair
      dark: '#9c7b58', // Beige foncé / brun clair
    },
    background: {
      default: '#fff', // Blanc pour le fond principal
      paper: '#f8f9fa', // Gris clair pour les cartes et sections
    },
    text: {
      primary: '#3c4a3e', // Gris-vert foncé pour le texte principal
      secondary: '#6c7c6e', // Gris-vert moyen pour le texte secondaire
    },
  },
  typography: {
    fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 500,
      fontSize: '1.75rem',
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          padding: '10px 20px',
          transition: 'all 0.3s ease',
          fontWeight: 500,
          boxShadow: 'none',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 12px rgba(0,0,0,0.08)',
          },
        },
        contained: {
          '&:hover': {
            boxShadow: '0 6px 12px rgba(0,0,0,0.08)',
          },
        },
        containedSecondary: {
          color: '#fff', // Texte blanc pour les boutons secondaires
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          overflow: 'hidden',
          border: '1px solid rgba(74, 124, 89, 0.1)', // Légère bordure de couleur jade
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: '#4a7c59', // Couleur jade pour le focus
            },
          },
        },
      },
    },
  },
});

export default theme; 