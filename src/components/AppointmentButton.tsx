import React from 'react';
import { Button, ButtonProps } from '@mui/material';

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
 */
const AppointmentButton = ({
  children = 'Prendre rendez-vous',
  variant = 'contained',
  color = 'primary',
  ...props
}: AppointmentButtonProps) => (
  <Button
    href={cabinet.doctolib}
    target="_blank"
    rel="noopener noreferrer"
    variant={variant}
    color={color}
    {...props}
  >
    {children}
  </Button>
);

export default AppointmentButton;
