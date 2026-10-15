/**
 * Identifiants et helpers de la balise Google (gtag.js).
 *
 * Les identifiants sont aussi écrits dans `public/index.html` : Google
 * demande le chargement de la balise dans le <head>. Toute modification
 * d'identifiant doit être reportée aux deux endroits.
 */

export const analytics = {
  googleTagId: 'GT-577MXS7J',
  adsId: 'AW-18491848216',
  /**
   * Action de conversion Ads « Prise de rendez-vous », libellé fourni le
   * 15/10/2026. Le clic RDV envoie aussi `generate_lead`.
   */
  conversionSendTo: 'AW-18491848216/Zy3uCObj2Z0dEJjszPFE',
  consentStorageKey: 'cabinet-jade-cookie-consent',
};

export type CookieConsent = 'granted' | 'denied';

/** Événement DOM pour rouvrir le bandeau depuis le pied de page. */
export const COOKIE_SETTINGS_EVENT = 'cabinet-jade-open-cookies';

type GtagFn = (...args: unknown[]) => void;

function gtag(...args: unknown[]): void {
  const fn = (window as unknown as { gtag?: GtagFn }).gtag;
  if (typeof fn === 'function') {
    fn(...args);
  }
}

const grantedState = {
  ad_storage: 'granted',
  analytics_storage: 'granted',
  ad_user_data: 'granted',
  ad_personalization: 'granted',
};

const deniedState = {
  ad_storage: 'denied',
  analytics_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
};

export function readStoredConsent(): CookieConsent | null {
  try {
    const value = window.localStorage.getItem(analytics.consentStorageKey);
    if (value === 'granted' || value === 'denied') {
      return value;
    }
  } catch {
    // localStorage peut être bloqué (navigation privée stricte).
  }
  return null;
}

export function applyConsent(consent: CookieConsent): void {
  try {
    window.localStorage.setItem(analytics.consentStorageKey, consent);
  } catch {
    // Même cas : le choix ne sera pas mémorisé, le bandeau reviendra.
  }
  gtag('consent', 'update', consent === 'granted' ? grantedState : deniedState);
}

export function openCookieSettings(): void {
  window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT));
}

/**
 * Signale un clic vers Doctolib. Consent Mode laisse Google appliquer
 * le refus cookies : l'événement part quand même, sans cookie pub.
 */
export function trackRdvClick(): void {
  gtag('event', 'generate_lead', { method: 'doctolib' });
  if (analytics.conversionSendTo) {
    gtag('event', 'conversion', { send_to: analytics.conversionSendTo });
  }
}
