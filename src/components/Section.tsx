import React from 'react';
import { Box, Container, Typography } from '@mui/material';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  background?: 'primary' | 'secondary' | 'light' | 'white' | 'jade-light' | 'beige-light';
  centered?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  py?: number;
  id?: string;
  titleColor?: string;
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  children,
  background = 'white',
  centered = false,
  maxWidth = 'lg',
  py = 6,
  id,
  titleColor
}) => {
  const getBgColor = () => {
    switch (background) {
      case 'primary':
        return 'primary.main';
      case 'secondary':
        return 'secondary.main';
      case 'light':
        return '#f8f9fa';
      case 'jade-light':
        return 'rgba(74, 124, 89, 0.1)'; // Jade très clair
      case 'beige-light':
        return 'rgba(200, 162, 122, 0.1)'; // Beige très clair
      default:
        return 'white';
    }
  };

  return (
    <Box
      sx={{
        py,
        bgcolor: getBgColor(),
        color: background === 'primary' || background === 'secondary' ? 'white' : 'text.primary'
      }}
    >
      <Container maxWidth={maxWidth}>
        {(title || subtitle) && (
          <Box 
            sx={{ 
              mb: 5, 
              textAlign: centered ? 'center' : 'left'
            }}
          >
            {title && (
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                sx={{
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 600,
                  position: 'relative',
                  pb: 2,
                  color: titleColor || (background === 'primary' || background === 'secondary' ? 'white' : 'inherit'),
                  '&:after': centered ? {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '80px',
                    height: '4px',
                    bgcolor: background === 'primary' ? 'white' : 
                            background === 'secondary' ? 'white' : 'primary.main'
                  } : {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '80px',
                    height: '4px',
                    bgcolor: background === 'primary' ? 'white' : 
                            background === 'secondary' ? 'white' : 'primary.main'
                  }
                }}
              >
                {title}
              </Typography>
            )}
            {subtitle && (
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  fontWeight: 400,
                  color: background === 'primary' || background === 'secondary' ? 
                        'rgba(255,255,255,0.9)' : 'text.secondary',
                  maxWidth: centered ? '700px' : '100%',
                  mx: centered ? 'auto' : 0
                }}
              >
                {subtitle}
              </Typography>
            )}
          </Box>
        )}
        {children}
      </Container>
    </Box>
  );
};

export default Section; 