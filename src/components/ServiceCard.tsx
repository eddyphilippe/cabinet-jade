import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
  link?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  image,
  icon,
  link
}) => {
  const theme = useTheme();
  
  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (link) {
      return (
        <Box
          component={Link}
          to={link}
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            display: 'block',
            height: '100%',
          }}
        >
          {children}
        </Box>
      );
    }
    return <>{children}</>;
  };

  return (
    <CardWrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        whileHover={{ y: -10, transition: { duration: 0.3 } }}
        style={{ height: '100%' }}
      >
        <Card 
          sx={{ 
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column',
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              transform: 'translateY(-5px)'
            }
          }}
        >
          {image && (
            <CardMedia
              component="img"
              height="200"
              image={image}
              alt={title}
            />
          )}
          
          <CardContent sx={{ flexGrow: 1, p: 3 }}>
            {icon && (
              <Box 
                sx={{ 
                  mb: 2, 
                  color: theme.palette.primary.main,
                  fontSize: '2.5rem',
                  display: 'flex',
                  justifyContent: image ? 'flex-start' : 'center'
                }}
              >
                {icon}
              </Box>
            )}
            
            <Typography 
              variant="h5" 
              component="h3" 
              gutterBottom 
              sx={{ 
                fontWeight: 600,
                textAlign: image ? 'left' : 'center' 
              }}
            >
              {title}
            </Typography>
            
            <Typography 
              variant="body1" 
              color="text.secondary"
              sx={{ 
                textAlign: image ? 'left' : 'center',
                lineHeight: 1.7
              }}
            >
              {description}
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </CardWrapper>
  );
};

export default ServiceCard; 