import React from 'react';
import { Box, Button, ButtonProps } from '@mui/material';

import doctolibLogo from '../assets/images/logo-doctolib-blue.png';
import { trackRdvClick } from '../config/analytics';
import { cabinet } from '../config/cabinet';

// `ButtonProps<'a'>` et non `ButtonProps` : avec un `href`, MUI rend une
// balise <a>, dont les types de référence diffèrent de ceux d'un <button>.
type AppointmentButtonProps = Omit<ButtonProps<'a'>, 'href' | 'target' | 'rel'>;

/**
 * Bouton de prise de rendez-vous, vers la fiche Doctolib du cabinet.
 *
 * Passe par ce composant plutôt que d'écrire le lien à la main : l'adresse
 * Doctolib vient de `src/config/cabinet.ts`, et les attributs de sécurité
 * d'un lien ouvert dans un nouvel onglet sont posés une fois pour toutes.
 *
 * Le logotype Doctolib est celui publié par Doctolib ; il identifie le
 * service de rendez-vous, sans être recopié dans le texte du bouton.
 */
const AppointmentButton = ({
  children = 'Prendre rendez-vous',
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  sx,
  onClick,
  ...props
}: AppointmentButtonProps) => {
  const compact = size === 'small';

  return (
  <Button
    href={cabinet.doctolib}
    target="_blank"
    rel="noopener noreferrer"
    variant={variant}
    color={color}
    size={size}
    onClick={(event) => {
      trackRdvClick();
      onClick?.(event);
    }}
    sx={[
      { gap: compact ? 0.75 : 1 },
      ...(Array.isArray(sx) ? sx : sx != null ? [sx] : []),
    ]}
    {...props}
  >
    <Box
      component="span"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'nowrap',
        gap: compact ? 0.75 : 1,
        lineHeight: 1.2,
      }}
    >
      <Box component="span">{children}</Box>
      <Box
        component="span"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          bgcolor: '#fff',
          borderRadius: 1,
          px: compact ? 0.5 : 0.75,
          py: compact ? 0.25 : 0.4,
        }}
      >
        <Box
          component="img"
          src={doctolibLogo}
          alt="Doctolib"
          sx={{
            height: compact ? 12 : 16,
            width: 'auto',
            display: 'block',
          }}
        />
      </Box>
    </Box>
  </Button>
  );
};

export default AppointmentButton;
