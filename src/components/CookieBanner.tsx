import React, { useEffect, useState } from 'react';
import { Box, Button, Link as MuiLink, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import {
  applyConsent,
  COOKIE_SETTINGS_EVENT,
  CookieConsent,
  readStoredConsent,
} from '../config/analytics';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!readStoredConsent()) {
      setVisible(true);
    }

    const reopen = () => setVisible(true);
    window.addEventListener(COOKIE_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, reopen);
  }, []);

  const choose = (consent: CookieConsent) => {
    applyConsent(consent);
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <Box
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-text"
      sx={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1400,
        bgcolor: 'primary.dark',
        color: 'white',
        px: { xs: 2, sm: 3 },
        py: 2.5,
        boxShadow: '0 -4px 24px rgba(0,0,0,0.18)',
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        alignItems={{ xs: 'stretch', md: 'center' }}
        justifyContent="space-between"
        sx={{ maxWidth: 1200, mx: 'auto' }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography id="cookie-banner-title" variant="subtitle1" fontWeight={600}>
            Cookies
          </Typography>
          <Typography id="cookie-banner-text" variant="body2" sx={{ opacity: 0.9, mt: 0.5 }}>
            Ce site peut déposer des cookies de mesure publicitaire Google Ads,
            uniquement si vous acceptez. Accepter et refuser sont tous les deux
            mémorisés. Le site reste utilisable dans les deux cas.{' '}
            <MuiLink
              component={Link}
              to="/confidentialite"
              color="inherit"
              underline="always"
              sx={{ fontWeight: 600 }}
            >
              En savoir plus
            </MuiLink>
            .
          </Typography>
        </Box>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} flexShrink={0}>
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => choose('denied')}
            sx={{ borderColor: 'rgba(255,255,255,0.7)', minWidth: 140 }}
          >
            Refuser
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => choose('granted')}
            sx={{ minWidth: 140 }}
          >
            Accepter
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CookieBanner;
