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
        minHeight: height,
        height: 'auto',
        py: { xs: 5, sm: 6, md: 8 },
        isolation: 'isolate',
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
          zIndex: 0
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.1))',
          zIndex: 0
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ maxWidth: { xs: '100%', md: '80%', lg: '75%' } }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              color: 'white',
              fontWeight: 700,
              fontSize: { xs: '2rem', sm: '2.75rem', md: '3.5rem' },
              lineHeight: 1.2,
              overflowWrap: 'break-word',
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
                fontSize: { xs: '1.125rem', sm: '1.3rem', md: '1.6rem' },
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