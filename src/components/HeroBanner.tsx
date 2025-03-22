import React from 'react';
import { Box, Typography, Container } from '@mui/material';

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  height?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ 
  title, 
  subtitle, 
  backgroundImage,
  height = '35vh'
}) => {
  return (
    <Box
      sx={{
        height,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.85)',
          zIndex: -1
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.1))',
          zIndex: -1
        }
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: { xs: '100%', md: '60%' } }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              color: 'white',
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
              mb: 2
            }}
          >
            {title}
          </Typography>
          
          {subtitle && (
            <Typography
              variant="h5"
              sx={{
                color: 'white',
                opacity: 0.9,
                fontWeight: 400,
                fontSize: { xs: '1.3rem', md: '1.8rem' },
                textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                lineHeight: 1.5
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default HeroBanner; 