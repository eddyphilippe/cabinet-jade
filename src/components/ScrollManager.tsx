import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Gère la position de défilement à chaque navigation.
 *
 * Sans ce composant, React Router conserve la position courante en changeant
 * de page : on arrive au milieu de la nouvelle page. Et un lien vers une ancre
 * comme `/services#dry-needling` change bien l'URL, mais le navigateur ne
 * défile pas, car la section n'existe pas encore au moment du clic.
 *
 * À monter une seule fois, à l'intérieur du Router.
 */
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));

      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollManager;
