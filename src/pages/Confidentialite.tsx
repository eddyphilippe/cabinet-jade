import React from 'react';
import { Box, Button, Link as MuiLink, Stack, Typography } from '@mui/material';

import Section from '../components/Section';
import Seo from '../components/Seo';
import { openCookieSettings } from '../config/analytics';
import { cabinet } from '../config/cabinet';
import { seo } from '../config/seo';

const Confidentialite = () => {
  return (
    <Box>
      <Seo page={seo.pages.confidentialite} />
      <Section title="Confidentialité et cookies" titleVariant="h1" maxWidth="md">
        <Stack spacing={3}>
          <Typography variant="body1" color="text.secondary">
            Cette page décrit uniquement ce que ce site fait réellement. Elle
            n’invente ni fichier client, ni newsletter, ni compte utilisateur.
          </Typography>

          <Box>
            <Typography variant="h5" component="h2" gutterBottom>
              Qui est responsable
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {cabinet.name}, {cabinet.address}, {cabinet.postalCode}{' '}
              {cabinet.city}. Contact :{' '}
              <MuiLink href={`mailto:${cabinet.email}`}>{cabinet.email}</MuiLink>.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" component="h2" gutterBottom>
              Cookies de mesure publicitaire
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Si vous acceptez, le site charge une balise Google (identifiants
              GT-577MXS7J et AW-18491848216) pour mesurer les visites issues
              des campagnes Google Ads et les clics vers la prise de rendez-vous
              Doctolib.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Si vous refusez, ces cookies publicitaires ne sont pas déposés.
              Le site, les pages et le bouton de rendez-vous restent
              accessibles. Un choix déjà enregistré peut être modifié à tout
              moment.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" component="h2" gutterBottom>
              Données transmises
            </Typography>
            <Typography variant="body1" color="text.secondary">
              La balise est opérée par Google. Le cabinet n’a pas de fichier
              publicitaire interne et ne revend pas d’adresses. Les rendez-vous
              se prennent sur Doctolib, selon les conditions de ce service.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" component="h2" gutterBottom>
              Vos choix
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Pour une question sur ces cookies, écrire à {cabinet.email}.
            </Typography>
            <Button variant="contained" onClick={openCookieSettings}>
              Gérer les cookies
            </Button>
          </Box>
        </Stack>
      </Section>
    </Box>
  );
};

export default Confidentialite;
