/**
 * ============================================
 * PORTFOLIO - APP.JS
 * Data-driven content & interactivity
 * ============================================
 */

// ============================================
// DATA - See data.js for all content!
// ============================================
// Edit data.js to add/modify projects, certifications,
// experience, vault items, and other content.
// The DATA object is loaded from data.js before this file.




// ============================================
// ICONS (SVG)
// ============================================

const ICONS = {
  monitoring: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h2v8H3v-8zm4-4h2v12H7V9zm4-4h2v16h-2V5zm4 8h2v8h-2v-8zm4-4h2v12h-2V9z"/></svg>',
  notifications_active: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/></svg>',
  bug_report: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"/></svg>',
  menu_book: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/></svg>',
  visibility: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>',
  cloud: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>',
  settings_suggest: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17.41 6.59L15 5.5l2.41-1.09L18.5 2l1.09 2.41L22 5.5l-2.41 1.09L18.5 9l-1.09-2.41zm3.87 6.13L20.5 11l-.78 1.72-1.72.78 1.72.78.78 1.72.78-1.72L23 13.5l-1.72-.78zm-5.04 1.65l1.94 1.47-2.5 4.33-2.24-.94c-.2.13-.42.26-.64.37l-.3 2.4h-5l-.3-2.41c-.22-.11-.43-.23-.64-.37l-2.24.94-2.5-4.33 1.94-1.47c-.01-.11-.01-.24-.01-.36s0-.25.01-.37l-1.94-1.47 2.5-4.33 2.24.94c.2-.14.42-.26.64-.37L7.5 6h5l.3 2.41c.22.11.43.23.64.37l2.24-.94 2.5 4.33-1.94 1.47c.01.12.01.24.01.36s0 .24-.01.36zM13 14c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3z"/></svg>',
  psychology: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8.57c-.79 0-1.43.64-1.43 1.43s.64 1.43 1.43 1.43 1.43-.64 1.43-1.43-.64-1.43-1.43-1.43z"/><path d="M13 3C9.25 3 6.2 5.94 6.02 9.64L4.1 12.2c-.25.33-.01.8.4.8H6v3c0 1.1.9 2 2 2h1v3h6v-4.68c2.36-1.12 4-3.53 4-6.32 0-3.87-3.13-7-7-7zm3 7c0 .13-.01.26-.02.39l.83.66c.08.06.1.16.05.25l-.8 1.39c-.05.09-.16.11-.24.08l-.99-.4c-.21.16-.43.29-.67.39L14 13.83c-.01.1-.1.17-.2.17h-1.6c-.1 0-.18-.07-.2-.17l-.15-1.06c-.25-.1-.47-.23-.68-.39l-.99.4c-.09.03-.2 0-.25-.09l-.8-1.39c-.05-.08-.03-.19.05-.25l.84-.66c-.01-.13-.02-.26-.02-.39s.02-.27.04-.4l-.85-.66c-.08-.06-.1-.16-.05-.26l.8-1.38c.05-.09.15-.12.24-.09l1 .42c.2-.15.42-.29.67-.39L12 6.17c.02-.1.1-.17.2-.17h1.6c.1 0 .18.07.2.17l.15 1.06c.24.1.46.23.67.39l1-.42c.09-.04.19 0 .24.09l.8 1.38c.05.09.03.2-.05.26l-.85.66c.03.13.04.26.04.41z"/></svg>',
  lock: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>',
  data_object: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 7v2c0 .55-.45 1-1 1H2v4h1c.55 0 1 .45 1 1v2c0 1.65 1.35 3 3 3h3v-2H7c-.55 0-1-.45-1-1v-2c0-1.3-.84-2.42-2-2.83v-.34C5.16 11.42 6 10.3 6 9V7c0-.55.45-1 1-1h3V4H7C5.35 4 4 5.35 4 7zm17 3c-.55 0-1-.45-1-1V7c0-1.65-1.35-3-3-3h-3v2h3c.55 0 1 .45 1 1v2c0 1.3.84 2.42 2 2.83v.34c-1.16.41-2 1.52-2 2.83v2c0 .55-.45 1-1 1h-3v2h3c1.65 0 3-1.35 3-3v-2c0-.55.45-1 1-1h1v-4h-1z"/></svg>',
  router: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.2 5.9l.8-.8C19.6 3.7 17.8 3 16 3s-3.6.7-5 2.1l.8.8C13 4.8 14.5 4.2 16 4.2s3 .6 4.2 1.7zm-.9.8c-.9-.9-2.1-1.4-3.3-1.4s-2.4.5-3.3 1.4l.8.8c.7-.7 1.6-1 2.5-1 .9 0 1.8.3 2.5 1l.8-.8zM19 13h-2V9h-2v4H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM8 18H6v-2h2v2zm3.5 0h-2v-2h2v2zm3.5 0h-2v-2h2v2z"/></svg>',
  dns: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>',
  description: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>',
  security: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>',
  article: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>',
  terminal: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10zm-2-1h-6v-2h6v2zM7.5 17l-1.41-1.41L8.67 13l-2.59-2.59L7.5 9l4 4-4 4z"/></svg>',
  code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>',
  verified: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"/></svg>',
  location_on: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',
  mail: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>',
  group: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>',
  chat: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>',
  close: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',
  check_circle: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>',
  open_in_new: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>',
  search: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>',
  dashboard: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>',
  notifications: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>',
  inventory_2: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2zm-5 12H9v-2h6v2zm5-7H4V4h16v3z"/></svg>',
  speed: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="m20.38 8.57-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44zm-9.79 6.84a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z"/></svg>',
  fact_check: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM10 17H5v-2h5v2zm0-4H5v-2h5v2zm0-4H5V7h5v2zm4.82 6L12 12.16l1.41-1.41 1.41 1.42L17.99 9l1.42 1.42L14.82 15z"/></svg>',
  diversity_3: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.32 13.01c.96.02 1.85.5 2.45 1.34A3.961 3.961 0 0 0 12 16c1.29 0 2.5-.62 3.23-1.66.6-.84 1.49-1.32 2.45-1.34-.72-1.22-3.6-2-5.68-2-2.07 0-4.96.78-5.68 2.01zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm16 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-8-3c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"/></svg>',
  health_and_safety: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.5 13H8v-3h2.5V7.5h3V10H16v3h-2.5v2.5h-3V13zM12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z"/></svg>'
};

const CERT_LOGOS = {
  aws: 'assets/images/aws.png',
  newRelic: 'assets/images/newrelic.png',
  googleCloud: 'assets/images/google.png'
};

function getCertLogo(cert) {
  const label = `${cert.title || ''} ${cert.issuer || ''} ${cert.provider || ''}`.toLowerCase();
  if (label.includes('amazon web services') || label.includes('aws')) return CERT_LOGOS.aws;
  if (label.includes('new relic')) return CERT_LOGOS.newRelic;
  if (label.includes('google cloud') || label.includes('gcp')) return CERT_LOGOS.googleCloud;
  return null;
}

// ============================================
// STATE
// ============================================

let state = {
  vaultFilter: 'All',
  vaultSearch: '',
  vaultDisplayCount: 8,
  activeProject: null,
  lightboxItem: null
};

const THEME_STORAGE_KEY = 'portfolio-theme';

// ============================================
// DOM ELEMENTS
// ============================================

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ============================================
// RENDER FUNCTIONS
// ============================================

function renderStats() {
  const container = $('#stats-container');
  if (!container) return;

  container.innerHTML = DATA.stats.map(stat => `
    <a href="${stat.link}" class="stat-card reveal">
      <div class="stat-card__icon">${ICONS[stat.icon] || ''}</div>
      <div class="stat-card__content">
        <div class="stat-card__value" data-target="${stat.value}" data-prefix="${stat.prefix || ''}" data-suffix="${stat.suffix || ''}">
          ${stat.prefix || ''}0${stat.suffix || ''}
        </div>
        <div class="stat-card__label">${stat.label}</div>
      </div>
    </a>
  `).join('');
}

function renderProjects() {
  const container = $('#projects-container');
  if (!container) return;

  container.innerHTML = DATA.projects.map(project => {
    const hasImage = project.media && project.media[0] && project.media[0].type === 'image' && project.media[0].src;
    const previewContent = hasImage 
      ? `<img src="${project.media[0].src}" alt="${project.title}" class="work-card__preview-image">`
      : (ICONS[project.icon] ? `<span class="work-card__preview-icon">${ICONS[project.icon]}</span>` : '');
    
    return `
    <article class="work-card reveal" data-project-id="${project.id}" tabindex="0" role="button" aria-label="View ${project.title} details">
      <div class="work-card__preview ${hasImage ? 'work-card__preview--has-image' : ''}">
        ${hasImage ? previewContent : `
        <div class="work-card__preview-layers">
          <div class="work-card__preview-layer work-card__preview-layer--back"></div>
          <div class="work-card__preview-layer work-card__preview-layer--front">
            ${previewContent}
          </div>
        </div>
        `}
      </div>
      <div class="work-card__body">
        <h3 class="work-card__title">${project.title}</h3>
        <p class="work-card__summary">${project.summary}</p>
        <div class="work-card__tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <div class="work-card__outcome">
          <span class="work-card__outcome-icon">${ICONS.check_circle}</span>
          <span class="work-card__outcome-text">${project.outcome}</span>
        </div>
      </div>
    </article>
  `;
  }).join('');

  // Add click handlers
  container.querySelectorAll('.work-card').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.projectId));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(card.dataset.projectId);
      }
    });
  });
}

function renderVault() {
  const container = $('#vault-container');
  if (!container) return;

  let items = DATA.vault;

  // Filter
  if (state.vaultFilter !== 'All') {
    items = items.filter(item => item.category === state.vaultFilter);
  }

  // Search
  if (state.vaultSearch) {
    const query = state.vaultSearch.toLowerCase();
    items = items.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  }

  // Limit display
  const displayItems = items.slice(0, state.vaultDisplayCount);
  const hasMore = items.length > state.vaultDisplayCount;

  if (displayItems.length === 0) {
    container.innerHTML = '<div class="vault-empty">No items found matching your criteria.</div>';
  } else {
    container.innerHTML = displayItems.map(item => `
      <div class="vault-item reveal" data-vault-id="${item.id}" tabindex="0" role="button" aria-label="View ${item.title}">
        <div class="vault-item__thumb">
          <span class="vault-item__thumb-icon">${ICONS[item.icon] || ICONS.description}</span>
        </div>
        <h4 class="vault-item__title">${item.title}</h4>
        <p class="vault-item__category">${item.description}</p>
      </div>
    `).join('');
  }

  // Load more button logic
  const loadMoreContainer = $('#vault-load-more');
  const loadMoreBtn = loadMoreContainer ? loadMoreContainer.querySelector('button') : null;

  if (loadMoreContainer && loadMoreBtn) {
    if (items.length <= 8) {
      loadMoreContainer.classList.add('hidden');
    } else {
      loadMoreContainer.classList.remove('hidden');
      if (state.vaultDisplayCount >= items.length) {
        loadMoreBtn.textContent = 'Show Less';
      } else {
        loadMoreBtn.textContent = 'Load More';
      }
    }
  }

  // Add click handlers
  container.querySelectorAll('.vault-item').forEach(item => {
    item.addEventListener('click', () => openLightbox(item.dataset.vaultId));
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(item.dataset.vaultId);
      }
    });
  });

  // Re-observe for reveal
  observeElements();
}

function renderWriting() {
  const container = $('#writing-container');
  if (!container) return;

  container.innerHTML = DATA.writing.map(article => `
    <a href="${article.link}" target="_blank" rel="noopener" class="writing-card reveal">
      <div class="writing-card__thumb">
        <span class="writing-card__thumb-icon">${ICONS[article.icon] || ICONS.article}</span>
      </div>
      <div class="writing-card__content">
        <h3 class="writing-card__title">${article.title}</h3>
        <p class="writing-card__excerpt">${article.excerpt}</p>
        <span class="writing-card__meta">${article.platform} • ${article.readTime}</span>
      </div>
    </a>
  `).join('');
}

function renderPillars() {
  const container = $('#pillars-container');
  if (!container) return;

  container.innerHTML = DATA.pillars.map(pillar => `
    <div class="pillar-card reveal">
      <div class="pillar-card__header">
        <span class="pillar-card__icon">${ICONS[pillar.icon] || ''}</span>
        <h3 class="pillar-card__title">${pillar.title}</h3>
        ${pillar.note ? `<span class="section-badge">${pillar.note}</span>` : ''}
      </div>
      <div class="pillar-card__tags">
        ${pillar.skills.map(skill => `<span class="pillar-tag">${skill}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderExperience() {
  const container = $('#experience-container');
  if (!container) return;

  container.innerHTML = DATA.experience.map(exp => `
    <div class="timeline-item reveal">
      <div class="timeline-item__dot ${exp.current ? '' : 'timeline-item__dot--muted'}"></div>
      <div class="timeline-item__header">
        <h3 class="timeline-item__title">${exp.title}</h3>
        <span class="timeline-item__date">${exp.period}</span>
      </div>
      <p class="timeline-item__company">${exp.company}</p>
      <ul class="timeline-item__list">
        ${exp.points.map(point => `<li>${point}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function renderCertifications() {
  const featured = DATA.certifications.featured;
  const others = DATA.certifications.others;

  const featuredEl = $('#cert-featured');
  if (featuredEl) {
    if (featured.link) {
      featuredEl.setAttribute('href', featured.link);
      featuredEl.setAttribute('target', '_blank');
      featuredEl.setAttribute('rel', 'noopener');
      featuredEl.setAttribute('aria-label', `View ${featured.title} certification`);
    }
    const featuredLogo = featured.logo || getCertLogo(featured);
    const featuredBadge = featuredLogo
      ? `<img src="${featuredLogo}" alt="${featured.provider} logo" class="cert-featured__logo" loading="lazy">`
      : featured.provider;
    featuredEl.innerHTML = `
      <div class="cert-featured__bg-icon">${ICONS.verified}</div>
      <div class="cert-featured__content">
        <div class="cert-featured__badge">${featuredBadge}</div>
        <h3 class="cert-featured__title">${featured.title}</h3>
        <p class="cert-featured__level">${featured.level}</p>
        <div class="cert-featured__meta">
          <span>Issued ${featured.issued}</span>
          <span>ID: ${featured.id}</span>
        </div>
      </div>
    `;
  }

  const othersEl = $('#cert-others');
  if (othersEl) {
    othersEl.innerHTML = others.map(cert => {
      const logo = cert.logo || getCertLogo(cert);
      const iconMarkup = logo
        ? `<img src="${logo}" alt="${cert.issuer || cert.title} logo" class="cert-mini__logo" loading="lazy">`
        : `<span class="cert-mini__icon">${ICONS[cert.icon] || ICONS.verified}</span>`;
      return `
        <a class="cert-mini" href="${cert.link}" target="_blank" rel="noopener" title="${cert.title}"
          aria-label="View ${cert.title} certification">
          ${iconMarkup}
          <span class="cert-mini__label">${cert.title}</span>
        </a>
      `;
    }).join('') + `
      <button class="cert-mini cert-mini--more" id="cert-more-btn" type="button" aria-label="View all certifications">
        <span>+${DATA.certifications.moreCount}</span>
      </button>
    `;

    // Add click handler for + button
    $('#cert-more-btn')?.addEventListener('click', openCertModal);
  }
}

// ============================================
// MODAL
// ============================================

function openModal(projectId) {
  const project = DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  state.activeProject = project;

  const overlay = $('#modal-overlay');
  if (!overlay) return;

  // Populate modal content
  $('#modal-title').textContent = project.title;
  $('#modal-subtitle').textContent = project.summary;
  $('#modal-status').textContent = project.status;

  // Gallery
  const galleryMain = $('#modal-gallery-main');
  const galleryThumbs = $('#modal-gallery-thumbs');
  if (galleryMain && project.media.length > 0) {
    const mainMedia = project.media[0];
    if (mainMedia.type === 'image' && mainMedia.src) {
      galleryMain.innerHTML = `<img src="${mainMedia.src}" alt="${mainMedia.label}" style="width: 100%; height: 100%; object-fit: cover; border-radius: var(--radius-md);">`;
    } else {
      galleryMain.innerHTML = `<span style="color: var(--color-text-muted); font-size: 0.75rem;">${mainMedia.label}</span>`;
    }
  }
  if (galleryThumbs) {
    galleryThumbs.innerHTML = project.media.slice(1, 3).map(m => {
      if (m.type === 'image' && m.src) {
        return `<div class="modal__gallery-thumb"><img src="${m.src}" alt="${m.label}" style="width: 100%; height: 100%; object-fit: cover;"></div>`;
      }
      return `<div class="modal__gallery-thumb"><span style="font-size: 0.625rem; color: var(--color-text-muted);">${m.label}</span></div>`;
    }).join('');
  }

  // Tab content
  $('#modal-challenge').innerHTML = project.challenge.map(c => `<li>${c}</li>`).join('');
  $('#modal-impact').innerHTML = project.impact.map(i => `<li>${i}</li>`).join('');
  $('#modal-tech').innerHTML = project.techStack.map(t => `<span class="modal__tech-tag">${t}</span>`).join('');
  $('#modal-learnings').innerHTML = project.learnings.map(l => `<li>${l}</li>`).join('');

  // Update footer links
  const linkCode = $('#modal-link-code');
  const linkDocs = $('#modal-link-docs');
  if (linkCode) linkCode.href = project.links?.github || '#';
  if (linkDocs) linkDocs.href = project.links?.docs || '#';

  // Show modal
  requestAnimationFrame(() => {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Focus management
    const closeBtn = overlay.querySelector('.modal__close');
    if (closeBtn) closeBtn.focus();
  });

  // Reset tabs
  switchModalTab('impact');
}

function closeModal() {
  const overlay = $('#modal-overlay');
  if (!overlay) return;

  overlay.classList.remove('active');
  document.body.style.overflow = '';

  // Return focus to triggering element
  const projectId = state.activeProject?.id;
  state.activeProject = null;

  const trigger = $(`.work-card[data-project-id="${projectId}"]`);
  if (trigger) trigger.focus();
}

function switchModalTab(tabName) {
  $$('.modal__tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.tab === tabName);
  });
  $$('.modal__tab-content').forEach(content => {
    content.classList.toggle('active', content.dataset.tabContent === tabName);
  });
}

// ============================================
// LIGHTBOX
// ============================================

function openLightbox(vaultId) {
  const item = DATA.vault.find(v => v.id === parseInt(vaultId));
  if (!item) return;

  state.lightboxItem = item;

  const lightbox = $('#lightbox');
  if (!lightbox) return;

  $('#lightbox-title').textContent = item.title;
  $('#lightbox-meta').textContent = `${item.category} • ${item.description}`;
  $('#lightbox-image').innerHTML = `<span class="vault-item__thumb-icon" style="font-size: 64px;">${ICONS[item.icon] || ICONS.description}</span>`;

  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
  lightbox.querySelector('.lightbox__close').focus();
}

function closeLightbox() {
  const lightbox = $('#lightbox');
  if (!lightbox) return;

  lightbox.classList.remove('active');
  document.body.style.overflow = '';
  state.lightboxItem = null;
}

// ============================================
// CERT MODAL
// ============================================

function openCertModal() {
  const modal = $('#cert-modal');
  const overlay = $('#cert-modal-overlay');
  const grid = $('#cert-grid-full');

  if (!modal || !overlay || !grid) return;

  grid.innerHTML = DATA.certifications.all.map(cert => {
    const issuer = cert.issuer || cert.title;
    const logo = cert.logo || getCertLogo(cert);
    const iconMarkup = logo
      ? `<img src="${logo}" alt="${issuer} logo" class="cert-card-full__logo" loading="lazy">`
      : `${ICONS[cert.icon] || ICONS.verified}`;
    const hasLink = cert.link && cert.link !== '#';
    const tag = hasLink ? 'a' : 'div';
    const linkAttrs = hasLink ? `href="${cert.link}" target="_blank" rel="noopener"` : '';
    return `
      <${tag} class="cert-card-full" ${linkAttrs} title="View certification">
        <div class="cert-card-full__icon">
          ${iconMarkup}
        </div>
        <div>
          <h4 class="cert-card-full__title">${cert.title}</h4>
          <div class="cert-card-full__issuer">${issuer}</div>
        </div>
      </${tag}>
    `;
  }).join('');

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  modal.querySelector('.modal__close').focus();
}

function closeCertModal() {
  const overlay = $('#cert-modal-overlay');
  if (!overlay) return;

  overlay.classList.remove('active');
  document.body.style.overflow = '';

  // Return focus
  $('#cert-more-btn')?.focus();
}

// ============================================
// VAULT FILTERS
// ============================================

function initVaultFilters() {
  const filterContainer = $('#vault-filters');
  if (!filterContainer) return;

  const categories = ['All', ...new Set(DATA.vault.map(v => v.category))];

  filterContainer.innerHTML = categories.map(cat => `
    <button class="filter-chip ${cat === 'All' ? 'active' : ''}" data-filter="${cat}">${cat}</button>
  `).join('');

  filterContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-chip')) {
      $$('.filter-chip').forEach(chip => chip.classList.remove('active'));
      e.target.classList.add('active');
      state.vaultFilter = e.target.dataset.filter;
      state.vaultDisplayCount = 8;
      renderVault();
    }
  });
}

function initVaultSearch() {
  const searchInput = $('#vault-search');
  if (!searchInput) return;

  let debounceTimer;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      state.vaultSearch = e.target.value;
      state.vaultDisplayCount = 8;
      renderVault();
    }, 300);
  });
}

function updateVaultWithAnimation(updateFn) {
  const container = $('#vault-container');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!container || prefersReducedMotion) {
    updateFn();
    renderVault();
    return;
  }

  const startHeight = container.getBoundingClientRect().height;

  container.classList.add('vault-grid--animating');
  container.style.height = `${startHeight}px`;
  container.style.overflow = 'hidden';

  updateFn();
  renderVault();

  const endHeight = container.scrollHeight;

  if (startHeight === endHeight) {
    container.classList.remove('vault-grid--animating');
    container.style.height = '';
    container.style.overflow = '';
    return;
  }

  requestAnimationFrame(() => {
    container.style.height = `${endHeight}px`;
  });

  const onTransitionEnd = (event) => {
    if (event.propertyName !== 'height') return;
    container.classList.remove('vault-grid--animating');
    container.style.height = '';
    container.style.overflow = '';
    container.removeEventListener('transitionend', onTransitionEnd);
  };

  container.addEventListener('transitionend', onTransitionEnd);
}

function initLoadMore() {
  const container = $('#vault-load-more');
  const btn = container ? container.querySelector('button') : null;
  if (!btn) return;

  btn.addEventListener('click', () => {
    const totalItems = DATA.vault.filter(item =>
      state.vaultFilter === 'All' || item.category === state.vaultFilter
    ).length;

    const shouldCollapse = state.vaultDisplayCount >= totalItems;

    updateVaultWithAnimation(() => {
      if (shouldCollapse) {
        // Show Less
        state.vaultDisplayCount = 8;
      } else {
        // Load More
        state.vaultDisplayCount += 8;
      }
    });

    if (shouldCollapse) {
      // Scroll back to top of vault
      $('#vault')?.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// ============================================
// NAVIGATION
// ============================================

function applyTheme(theme) {
  const root = document.documentElement;
  root.setAttribute('data-theme', theme);

  const toggle = $('#theme-toggle');
  if (!toggle) return;

  toggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  toggle.setAttribute(
    'aria-label',
    theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
  );
  const label = toggle.querySelector('.theme-toggle__text');
  if (label) {
    label.textContent = theme === 'dark' ? 'Dark' : 'Light';
  }
}

function initThemeToggle() {
  const toggle = $('#theme-toggle');
  if (!toggle) return;

  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const initialTheme = storedTheme || (prefersLight ? 'light' : 'dark');

  applyTheme(initialTheme);

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(THEME_STORAGE_KEY, next);
    applyTheme(next);
  });
}

function initMobileNav() {
  const nav = $('.nav');
  const toggle = $('#nav-toggle');
  const menu = $('#nav-menu');
  if (!nav || !toggle || !menu) return;

  toggle.setAttribute('aria-expanded', 'false');

  const closeMenu = () => {
    nav.classList.remove('nav--open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = nav.classList.toggle('nav--open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
}

function initNavigation() {
  const navLinks = $$('.nav__link');
  const sections = $$('section[id]');

  // Smooth scroll handled by CSS scroll-behavior

  // Active state on scroll
  const observerOptions = {
    rootMargin: '-20% 0px -80% 0px'
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => navObserver.observe(section));
}

// ============================================
// SCROLL REVEAL
// ============================================

function observeElements() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    $$('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  $$('.reveal:not(.visible)').forEach(el => observer.observe(el));
}

// ============================================
// STAT COUNTERS
// ============================================

function animateCounters() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const counters = $$('.stat-card__value[data-target]');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';

        if (prefersReducedMotion) {
          el.textContent = `${prefix}${target}${suffix}`;
        } else {
          animateNumber(el, 0, target, prefix, suffix, 1500);
        }

        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));
}

function animateNumber(el, start, end, prefix, suffix, duration) {
  const startTime = performance.now();
  const diff = end - start;

  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
    const current = Math.round(start + diff * eased);

    el.textContent = `${prefix}${current}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

// ============================================
// KEYBOARD HANDLING
// ============================================

function initKeyboardHandlers() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if ($('#modal-overlay.active')) {
        closeModal();
      }
      if ($('#lightbox.active')) {
        closeLightbox();
      }
      if ($('#cert-modal-overlay.active')) {
        closeCertModal();
      }
      const nav = $('.nav');
      if (nav?.classList.contains('nav--open')) {
        nav.classList.remove('nav--open');
        $('#nav-toggle')?.setAttribute('aria-expanded', 'false');
      }
    }
  });
}

// ============================================
// COPY EMAIL
// ============================================

function copyEmail() {
  navigator.clipboard.writeText(DATA.contact.email).then(() => {
    const btn = $('#copy-email-btn');
    if (btn) {
      const originalText = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(() => {
        btn.textContent = originalText;
      }, 2000);
    }
  });
}

// ============================================
// DRAWER TAB HANDLERS
// ============================================

function initModalTabs() {
  $$('.modal__tab').forEach(tab => {
    tab.addEventListener('click', () => {
      switchModalTab(tab.dataset.tab);
    });
  });
}

// ============================================
// INITIALIZE
// ============================================

function init() {
  // Render data-driven sections
  renderStats();
  renderProjects();
  renderVault();
  renderWriting();
  renderPillars();
  renderExperience();
  renderCertifications();

  // Initialize features
  initThemeToggle();
  initMobileNav();
  initSmartNav(); // New Smart Nav
  initNavigation();
  initVaultFilters();
  initVaultSearch();
  initLoadMore();
  initKeyboardHandlers();
  initModalTabs();

  // Moral close handlers
  $('#modal-close')?.addEventListener('click', closeModal);
  $('#modal-overlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'modal-overlay') closeModal();
  });

  // Cert Modal close handlers
  $('#cert-modal-close')?.addEventListener('click', closeCertModal);
  $('#cert-modal-overlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'cert-modal-overlay') closeCertModal();
  });

  // Lightbox close handlers
  $('#lightbox-close')?.addEventListener('click', closeLightbox);
  $('#lightbox')?.addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLightbox();
  });

  // Copy email
  $('#copy-email-btn')?.addEventListener('click', copyEmail);

  // Start animations
  observeElements();
  animateCounters();
}

// ============================================
// SMART NAV (Hide on Scroll Down, Show on Up)
// ============================================

function initSmartNav() {
  const nav = $('.nav');
  if (!nav) return;

  let lastScrollY = window.scrollY;
  let ticking = false;

  const updateNav = () => {
    const currentScrollY = window.scrollY;

    // Don't hide if at top or if mobile menu is open
    if (currentScrollY < 10 || nav.classList.contains('nav--open')) {
      nav.classList.remove('nav--hidden');
      lastScrollY = currentScrollY;
      ticking = false;
      return;
    }

    // Scroll Down -> Hide
    if (currentScrollY > lastScrollY + 5) {
      nav.classList.add('nav--hidden');
    }
    // Scroll Up -> Show
    else if (currentScrollY < lastScrollY - 5) {
      nav.classList.remove('nav--hidden');
    }

    lastScrollY = currentScrollY;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateNav);
      ticking = true;
    }
  }, { passive: true });
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
