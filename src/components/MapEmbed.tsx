import React from 'react';
import { Box } from '@mui/material';

import { cabinet } from '../config/cabinet';

interface MapEmbedProps {
  height?: number | string;
}

/**
 * Carte Google Maps du cabinet.
 *
 * L'adresse provient de `src/config/cabinet.ts`. Le chargement est différé
 * (`loading="lazy"`) : la carte pèse lourd et se trouve en bas de page, il
 * serait inutile de ralentir l'affichage initial sur mobile.
 */
const MapEmbed = ({ height = 400 }: MapEmbedProps) => (
  <Box
    sx={{
      width: '100%',
      height,
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    }}
  >
    <iframe
      src={cabinet.maps.embed}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title={`Localisation du ${cabinet.name}`}
    />
  </Box>
);

export default MapEmbed;
