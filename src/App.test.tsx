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
  it("ne réaffiche jamais le faux numéro publié par le passé", () => {
    render(<App />);

    // Le numéro factice 06 12 34 56 78 est resté affiché sur la page Contact
    // jusqu'au 27/09/2026. Ce test échoue s'il revient, quelle qu'en soit la
    // cause : copier-coller, retour arrière malencontreux, ancienne branche.
    expect(document.body.textContent).not.toMatch(/06\s*12\s*34\s*56\s*78/);
  });

  it('expose le téléphone dans un format appelable depuis un mobile', () => {
    // Sans ce format international, le lien tel: ne fonctionne pas depuis
    // l'étranger, et Google refuse le champ telephone des données structurées.
    if (cabinet.phone) {
      expect(cabinet.phone.e164).toMatch(/^\+33[1-9]\d{8}$/);
      expect(cabinet.phone.display).toMatch(/^0[1-9]( \d{2}){4}$/);
    }
  });

  it('ne publie pas le domaine avec www, réservé à la redirection', () => {
    expect(cabinet.website).not.toMatch(/\/\/www\./);
    expect(cabinet.website).not.toMatch(/\/$/);
  });
});
