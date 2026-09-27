import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import App from './App';
import { cabinet } from './config/cabinet';
import { seo } from './config/seo';

describe("Page d'accueil", () => {
  it('affiche le nom de la praticienne', () => {
    render(<App />);
    expect(screen.getAllByText(cabinet.practitioner).length).toBeGreaterThan(0);
  });

  it('renvoie vers la bonne fiche Doctolib depuis chaque bouton de rendez-vous', () => {
    render(<App />);
    const liens = screen.getAllByRole('link', { name: /prendre rendez-vous/i });

    expect(liens.length).toBeGreaterThan(0);
    liens.forEach((lien) => {
      expect(lien).toHaveAttribute('href', cabinet.doctolib);
      // Un lien ouvert dans un nouvel onglet doit couper l'accès à la page
      // d'origine, sans quoi le site de destination peut la manipuler.
      expect(lien).toHaveAttribute('rel', expect.stringContaining('noopener'));
    });
  });

  it("renseigne le titre et la description de la page", async () => {
    render(<App />);

    await waitFor(() => {
      expect(document.title).toBe(seo.pages.home.title);
    });

    const description = document.querySelector('meta[name="description"]');
    expect(description).toHaveAttribute('content', seo.pages.home.description);
  });
});

describe('Coordonnées du cabinet', () => {
  it("n'affiche aucun numéro de téléphone tant qu'aucun n'est validé", () => {
    render(<App />);

    // Filet de sécurité : le faux numéro 06 12 34 56 78 a été publié par le
    // passé, et l'historique contient le numéro personnel du développeur.
    // Aucun des deux ne doit réapparaître.
    expect(document.body.textContent).not.toMatch(/06\s*12\s*34\s*56\s*78/);
    expect(document.body.textContent).not.toMatch(/0695112755|06\s*95\s*11\s*27\s*55/);

    if (!cabinet.phone) {
      expect(screen.queryByText(/téléphone/i)).not.toBeInTheDocument();
    }
  });

  it('ne publie pas le domaine avec www, réservé à la redirection', () => {
    expect(cabinet.website).not.toMatch(/\/\/www\./);
    expect(cabinet.website).not.toMatch(/\/$/);
  });
});
