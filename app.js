/* ==========================================================================
   UI_TEXT — all user-visible strings in one place.
   Change them here; the rest of the app reads from this object.
   ========================================================================== */
const UI = {
  // --- Geolocation ---
  locating: "Standort wird ermittelt …",
  useLocation:   "Ort verwenden",
  locationDenied: "Standortberechtigung abgelehnt.",
  locationError:   "Standort konnte nicht ermittelt werden.",

  // --- Fallback screen (shown when geolocation fails/is denied) ---
  fallbackStatus:  "Ort nicht gefunden",
  fallbackHeadline: "Suche deine Stadt!",
  inputPlaceholder: "z.B. Wien, Hongkong, Altschmiedelfeld",
  ctaSearch:       "Suchen",

  // --- Search UI overlay ---
  searchUIHeadline: "Such deine Stadt!",
  ctaChange:        "Ändern",

  // --- Imprint ---
  imprintLink:     "Impressum",
  imprintHeadline: "Impressum",
  /* Imprint + privacy policy. One entry per block:
     string = paragraph (inline HTML allowed), {h2}/{h3} = headings, {ul: [...]} = bullet list */
  imprintText: [
    "Besonderer Dank gilt Ulf Harr für Design und Umsetzung sowie <a href='https://josefchladek.com/' target='_blank' rel='noopener'>https://josefchladek.com/</a> fürs hosting. Die Wetterdaten stammen von <a href='https://open-meteo.com/' target='_blank' rel='noopener'>Open-Meteo.com</a> (CC BY 4.0) die Ortsdaten von der <a href='https://www.openstreetmap.org/' target='_blank' rel='noopener'>OpenStreetMap</a>",
    "Dies ist eine nicht-kommerzielle Website.",
    "Diese Website wird entwickelt und betrieben von<br>1020 Racing Radrennsportverein<br>ZVR-Zahl: 1466121211<br>GISA-Zahl: 39503312,<br>c/o Pepelnik &amp; Karl Rechtsanwälte<br>Czerninplatz 4<br>1020 Wien, Österreich,<br>Kontakt gerne per E-Mail: <a href='mailto:enquiries@1020racing.cc'>enquiries@1020racing.cc</a>",
    "<span class='imprint-label'>Aufsichtsbehörde:</span> Landespolizeidirektion Wien, Referat für Vereins-, Versammlungs- und Medienrechtsangelegenheiten. Der Verein ist Mitglied des Österreichischen Radsport-Verbandes (ÖRV).",
    { h2: "Haftungsausschluss:" },
    "1020 Racing Radrennsportverein haftet nicht für die richtige Vorhersage des Wetters, die auf dieser Website verbreitet werden, noch für Schäden, die aus einer allenfalls falschen Kleidung entstehen. Das gilt für alle Arten von Schäden, insbesondere Schäden, die durch Fehler, Verzögerungen oder Unterbrechungen in der Übermittlung, unrichtige Inhalte, Verlust oder Löschung von Daten, Viren oder in sonstiger Weise bei der Nutzung des Online-Dienstes entstehen können. Eine Haftung von <a href='http://kurzkurz.cc' target='_blank' rel='noopener'>http://kurzkurz.cc</a> aus welchem Grund auch immer ist ausgeschlossen.",
    { h2: "Datenschutzerklärung" },
    { h3: "1. Datenschutz auf einen Blick" },
    "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.",
    { h3: "2. Verantwortliche Stelle" },
    "Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br>1020 Racing e.V.<br>c/o Pepelnik &amp; Karl<br>Czerninplatz 4<br>1020 Wien<br>Österreich<br>E-Mail: <a href='mailto:enquiries@1020racing.cc'>enquiries@1020racing.cc</a>",
    { h3: "3. Datenerfassung auf dieser Website" },
    "Diese Website verwendet keine Cookies und speichert keine Daten in Ihrem Browser.",
    "<span class='imprint-label'>Standort</span> Auf Ihre Zustimmung hin fragt die Website Ihren Browser nach Ihrem ungefähren Standort, um das Wetter für Ihren Ort anzuzeigen. Die Koordinaten werden nur im Browser verarbeitet und ausschließlich an die unter Punkt 4 genannten Dienste übermittelt. Sie werden nicht auf unserem Server gespeichert. Alternativ können Sie einen Ortsnamen eingeben.",
    "<span class='imprint-label'>Server-Log-Dateien</span> Beim Aufruf der Website werden automatisch folgende Informationen in Server-Log-Dateien erfasst und nach spätestens 14 Tagen gelöscht:",
    { ul: ["IP-Adresse", "Browsertyp und Browserversion", "Verwendetes Betriebssystem", "Referrer URL", "Uhrzeit der Serveranfrage"] },
    "Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.",
    { h3: "4. Externe Dienste" },
    "Zur Anzeige des Wetters ruft Ihr Browser folgende Dienste direkt auf. Dabei werden Ihre IP-Adresse sowie die Koordinaten oder der eingegebene Ortsname übermittelt:",
    { ul: [
      "<a href='https://open-meteo.com/' target='_blank' rel='noopener'>Open-Meteo</a> (open-meteo.com): Wetterdaten und Ortssuche, Betreiber in der Schweiz, Daten unter CC BY 4.0.",
      "Nominatim der <a href='https://osmfoundation.org/' target='_blank' rel='noopener'>OpenStreetMap Foundation</a> (nominatim.openstreetmap.org): Ermittlung des Ortsnamens zu Ihren Koordinaten."
    ] },
    "Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bereitstellung der Wetterfunktion). Die Schriftart dieser Website wird vom eigenen Server geladen, es findet keine Verbindung zu Google statt.",
    { h3: "5. Hosting" },
    "Diese Website wird auf einem Server der Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Deutschland (Rechenzentrum in Deutschland) betrieben. Die Serveradministration erfolgt privat und unentgeltlich durch Josef Chladek, Wien. Auf dem Server werden keine Nutzerdaten gespeichert, es fallen lediglich die unter Punkt 3 beschriebenen Server-Log-Dateien an. Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren und stabilen Betrieb der Website).",
  ],

  // --- Weather result ---
  cityPreposition: "in",

  // --- Temperature thresholds & day-length messages ---
  warmThreshold: 22,
  mediumThreshold: 12,
  msgWarm: "Heute geht kurz-kurz.",
  msgMedium: "Heute geht lang-kurz.",
  msgCold: "Heute nur lang-lang.",

  // --- Errors (unused — exclamation-wrapper is the error feedback) ---
  // errorCityNotFound: city => `Keine Ergebnisse für „${city}". Versuch einen anderen Stadtnamen.`,
  // errorGeneric:      "Wetterdaten konnten nicht geladen werden. Bitte versuch es erneut.",
};

/* ==========================================================================
   WMO weather code → emoji
   ========================================================================== */
const WMO_CODES = {
  0:  '☀️', 1:  '🌤️', 2:  '⛅', 3:  '☁️',
  45: '🌫️', 48: '🌫️',
  51: '🌦️', 53: '🌦️', 55: '🌦️',
  56: '🌧️', 57: '🌧️',
  61: '🌧️', 63: '🌧️', 65: '🌧️',
  66: '🌧️', 67: '🌧️',
  71: '❄️', 73: '❄️', 75: '❄️', 77: '❄️',
  80: '🌦️', 81: '🌦️', 82: '🌦️',
  85: '🌨️', 86: '🌨️',
  95: '⛈️', 96: '⛈️', 99: '⛈️',
};
const emoji = code => WMO_CODES[code] || '🌍';

/* ==========================================================================
   Background colours per temperature tier
   ========================================================================== */
const BG = { warm: '#FFAA00', neutral: '#C8CDD6', medium: '#8BD2EC', cold: '#8FA0B5' };
function tierForTemp(temp) {
  if (temp > UI.warmThreshold) return 'warm';
  if (temp > UI.mediumThreshold) return 'medium';
  return 'cold';
}
function bgForTemp(temp) { return BG[tierForTemp(temp)]; }

/* ==========================================================================
   Weather colours per WMO code — from the Wetterfarben editor (export 2026-10-21)
   bg:    background colour per temperature tier
   start: gradient start colour (top, 0 %), fades to transparent at 70 %
   alpha: opacity of the gradient start per tier, in %
   loop:  duration of one tilt direction in ms (155° ↔ 205°, ease-in-out, alternate)
   ========================================================================== */
const WEATHER_COLORS = {
   0: { bg: { warm: '#FFA600', medium: '#52D2F8', cold: '#19ACE5' }, start: '#FFF2B2', alpha: { warm: 60, medium: 50, cold: 45 }, loop: 8000 },
   1: { bg: { warm: '#E6B248', medium: '#7CCAE0', cold: '#70AFDB' }, start: '#FFE9BA', alpha: { warm: 50, medium: 50, cold: 45 }, loop: 6000 },
   2: { bg: { warm: '#8DD5FF', medium: '#8DCEE4', cold: '#869FB0' }, start: '#F8E3B4', alpha: { warm: 55, medium: 50, cold: 50 }, loop: 6000 },
   3: { bg: { warm: '#A9CEEB', medium: '#89BACC', cold: '#8995A4' }, start: '#EBF9FF', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 6000 },
  45: { bg: { warm: '#B8D1E6', medium: '#ABC4CC', cold: '#878E96' }, start: '#FFFFFF', alpha: { warm: 55, medium: 50, cold: 70 }, loop: 10000 },
  48: { bg: { warm: '#C8CDD6', medium: '#C8CDD6', cold: '#83909C' }, start: '#FFFFFF', alpha: { warm: 55, medium: 50, cold: 80 }, loop: 6000 },
  51: { bg: { warm: '#8DD5FF', medium: '#94D3EB', cold: '#7995B9' }, start: '#2F3F4B', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 6000 },
  53: { bg: { warm: '#8DD5FF', medium: '#94D3EB', cold: '#7995B9' }, start: '#1F2D38', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 6000 },
  55: { bg: { warm: '#8DD5FF', medium: '#94D3EB', cold: '#7995B9' }, start: '#12181C', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 8000 },
  56: { bg: { warm: '#8DD5FF', medium: '#94D3EB', cold: '#8FAED6' }, start: '#12181C', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 8000 },
  57: { bg: { warm: '#C8CDD6', medium: '#C8CDD6', cold: '#8E9AA4' }, start: '#E6F5FB', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 6000 },  /* nicht gespeichert: Ausgangswert */
  61: { bg: { warm: '#C2E9FF', medium: '#97C1D1', cold: '#8993A0' }, start: '#598EA1', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 6000 },
  63: { bg: { warm: '#C2E9FF', medium: '#97C1D1', cold: '#8993A0' }, start: '#385D6B', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 6000 },
  65: { bg: { warm: '#C2E9FF', medium: '#97C1D1', cold: '#8993A0' }, start: '#27444F', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 6000 },
  66: { bg: { warm: '#D9F1FF', medium: '#ABC7D1', cold: '#9097A0' }, start: '#27444F', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 6000 },
  67: { bg: { warm: '#C3D9E6', medium: '#ABC7D1', cold: '#9097A0' }, start: '#273C45', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 6000 },
  71: { bg: { warm: '#C8CDD6', medium: '#C8CDD6', cold: '#AFC3D1' }, start: '#E2F6FF', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 6000 },  /* nicht gespeichert: Ausgangswert */
  73: { bg: { warm: '#C8CDD6', medium: '#C8CDD6', cold: '#B8C4CC' }, start: '#F5F8FA', alpha: { warm: 55, medium: 50, cold: 60 }, loop: 6000 },
  75: { bg: { warm: '#C8CDD6', medium: '#C8CDD6', cold: '#ACB8BF' }, start: '#FFFFFF', alpha: { warm: 55, medium: 50, cold: 60 }, loop: 3000 },
  77: { bg: { warm: '#C8CDD6', medium: '#C8CDD6', cold: '#ACB8BF' }, start: '#FFFFFF', alpha: { warm: 55, medium: 50, cold: 60 }, loop: 6000 },
  80: { bg: { warm: '#8DD5FF', medium: '#95C5D6', cold: '#76A3C2' }, start: '#667F7A', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 7000 },
  81: { bg: { warm: '#8DD5FF', medium: '#95C5D6', cold: '#76A3C2' }, start: '#455955', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 4500 },
  82: { bg: { warm: '#8DD5FF', medium: '#95C5D6', cold: '#76A3C2' }, start: '#122622', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 3000 },
  85: { bg: { warm: '#C8CDD6', medium: '#C8CDD6', cold: '#B5C7D5' }, start: '#E3F5FE', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 6000 },  /* nicht gespeichert: Ausgangswert */
  86: { bg: { warm: '#C8CDD6', medium: '#C8CDD6', cold: '#BDD0DD' }, start: '#E5F5FC', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 6000 },  /* nicht gespeichert: Ausgangswert */
  95: { bg: { warm: '#D99E45', medium: '#86AAB9', cold: '#747E89' }, start: '#00202E', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 6000 },
  96: { bg: { warm: '#D99E45', medium: '#86AAB9', cold: '#747E89' }, start: '#2A6883', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 4000 },
  99: { bg: { warm: '#D6A35C', medium: '#86AAB9', cold: '#747E89' }, start: '#000000', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 2000 },
};

function hexToRgba(hex, alphaPct) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${n >> 16 & 255}, ${n >> 8 & 255}, ${n & 255}, ${alphaPct / 100})`;
}
/* Background + gradient for a WMO code and tier. Unknown code → tier colour, no gradient. */
function styleForWeather(code, tier) {
  const c = WEATHER_COLORS[code];
  if (!c) return { bg: BG[tier], gradient: null };
  return { bg: c.bg[tier], gradient: { start: hexToRgba(c.start, c.alpha[tier]), loop: c.loop } };
}
const cyclistSrc = tier => `assets/cyclist-${tier}.svg`;
function dayMessage(temp) {
  if (temp > UI.warmThreshold) return UI.msgWarm;
  if (temp > UI.mediumThreshold) return UI.msgMedium;
  return UI.msgCold;
}

/* ==========================================================================
   Extended temperature — shifts the tier with sun, rain, fog and wind.
   A design rule, not a physical model: each signal is 0…1 and moves the
   temperature used for the tier by at most its weight (in °C).
   FEEL.enabled = false → the tier is decided by air temperature alone.
   ========================================================================== */
const FEEL = {
  enabled: true,
  weights: { sun: 4, wet: -4, fog: -2, wind: -3 },
  sunFull:  800,  /* W/m² shortwave radiation → sun = 1 */
  wetFull:  1,    /* mm/h precipitation       → wet = 1 */
  windFrom: 10,   /* km/h: below this, wind = 0 */
  windFull: 40,   /* km/h: from this on, wind = 1 */
  fogCodes: [45, 48],
};
const clamp01 = x => Math.min(1, Math.max(0, x));

function weatherSignals(c) {
  return {
    sun:  clamp01(c.shortwave_radiation / FEEL.sunFull),
    wet:  clamp01(c.precipitation / FEEL.wetFull),
    fog:  FEEL.fogCodes.includes(c.weather_code) ? 1 : 0,
    wind: clamp01((c.wind_speed_10m - FEEL.windFrom) / (FEEL.windFull - FEEL.windFrom)),
  };
}

function feltTemperature(temp, signals) {
  if (!FEEL.enabled) return temp;
  return Object.entries(FEEL.weights).reduce((t, [k, w]) => t + w * signals[k], temp);
}

/* ==========================================================================
   API helpers
   ========================================================================== */
async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}
async function geocodeCity(query) {
  const data = await fetchJSON(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=5&language=de&format=json`
  );
  if (!data.results || data.results.length === 0) throw new Error('CITY_NOT_FOUND');
  const r = data.results[0];
  return { name: r.name, lat: r.latitude, lon: r.longitude };
}
async function getWeather(lat, lon) {
  const data = await fetchJSON(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
    `&current=temperature_2m,weather_code,shortwave_radiation,precipitation,wind_speed_10m` +
    `&wind_speed_unit=kmh&timezone=auto&forecast_days=1`
  );
  const c = data.current;
  const temp = Math.round(c.temperature_2m);
  const signals = weatherSignals(c);
  return {
    temp,                                /* shown on screen: air temperature */
    code: c.weather_code,
    signals,                             /* 0…1 each — also meant for later visual indicators */
    feel: feltTemperature(temp, signals),  /* decides tier, colour, message, rider */
  };
}

async function reverseGeocode(lat, lon) {
  const data = await fetchJSON(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&addressdetails=1&accept-language=de`
  );
  const addr = data.address || {};
  return addr.city || addr.town || addr.village || addr.county || data.name || 'unbekannt';
}

/* ==========================================================================
   Screen state
   ========================================================================== */
const SCREEN = { FALLBACK: 'fallback', WEATHER: 'weather', SEARCH_UI: 'search-ui', LOCATING: 'locating', IMPRINT: 'imprint' };
let currentScreen = SCREEN.FALLBACK;
let lastWeatherData = null;

/* ==========================================================================
   DOM helpers
   ========================================================================== */
const $content = () => document.getElementById('content');
function html(...parts) { return parts.join(''); }
/* The imprint link is only shown on the weather screen */
function render(inner) {
  $content().innerHTML = inner;
  document.getElementById('imprint-link').hidden = currentScreen !== SCREEN.WEATHER;
}

let currentBg = BG.neutral;  /* last-applied body background colour (hex string) */
let currentGradient = null;  /* last-applied weather gradient { start, loop } or null */

/* gradient: { start, loop } → animated weather gradient;
   omitted/null → the static default gradient of the neutral screens */
function setBodyBackground(colour, gradient = null) {
  currentBg = colour;
  currentGradient = gradient;
  const b = document.body;
  b.style.setProperty('--bg-colour', colour || '');
  b.classList.toggle('weather-gradient', !!gradient);
  if (gradient) {
    b.style.setProperty('--grad-start', gradient.start);
    b.style.setProperty('--grad-loop', gradient.loop + 'ms');
  } else {
    b.style.removeProperty('--grad-start');
    b.style.removeProperty('--grad-loop');
  }
}

/* ==========================================================================
   LOCATING SCREEN (shown while geolocation is in progress)
   ========================================================================== */
function renderLocating() {
  currentScreen = SCREEN.LOCATING;
  setBodyBackground(BG.neutral);
  render(html(
    `<div class="card u-w-full">`,
    `  <div class="locating-row u-row u-text-24 u-mb-24">`,
    `    <div class="spinner u-size-28 u-mr-4 u-rounded-full u-spin"></div>`,
    `    <span class="status locating-status u-text-24">${UI.locating}</span>`,
    `  </div>`,
    `</div>`
  ));
}

/* ==========================================================================
   FALLBACK SCREEN (mockup-fallback-no-location)
   Exclamation-wrapper + "Ort nicht gefunden" is the error feedback.
   No inline .screen-error div needed.
   ========================================================================== */
function renderFallback() {
  currentScreen = SCREEN.FALLBACK;
  setBodyBackground(BG.neutral);

  render(html(
    `<div class="card u-w-full">`,
    `  <div class="exclamation-wrapper u-row u-text-24 u-mb-24">`,
    `    <div class="exclamation-icon u-size-28 u-mr-4 u-rounded-full u-shrink-0 u-center u-text-24 u-text-white">!</div>`,
    `    <span class="status u-text-24">${UI.fallbackStatus}</span>`,
    `  </div>`,
    `  <div class="headline u-text-62 u-text-light u-mb-24 u-fade-in">${UI.fallbackHeadline}</div>`,
    `  <form id="city-form" autocomplete="off">`,
    `    <input type="text"`,
    `           id="city-input"`,
    `           placeholder="${UI.inputPlaceholder}"`,
    `           autofocus`,
    `           class="input-field u-w-full u-h-56 u-text-16 u-radius-12"`,
    `    />`,
    `    <button type="submit" class="cta-btn u-w-full u-h-56 u-text-16 u-radius-12 u-text-white u-cursor-pointer u-p-0">${UI.ctaSearch}</button>`,
    `  </form>`,
    `</div>`
  ));

  const input = document.getElementById('city-input');
  input.addEventListener('focus', () => input.classList.add('focused'));
  input.addEventListener('blur', () => input.classList.remove('focused'));
  input.focus();

  document.getElementById('city-form').addEventListener('submit', onFallbackSearch);
}

/* ==========================================================================
   WEATHER RESULT SCREEN
   ========================================================================== */
/* cause: 'cityChange' | 'searchClose' | 'imprintClose' — the very first display is always
   'firstLoad'. CONVOY[cause] decides whether the convoy rides through. */
function renderWeather(weather, loc, cause = 'cityChange') {
  const convoy = CONVOY[lastWeatherData ? cause : 'firstLoad'];
  currentScreen = SCREEN.WEATHER;
  lastWeatherData = { weather, loc };
  const look = styleForWeather(weather.code, tierForTemp(weather.feel));
  setBodyBackground(look.bg, look.gradient);

  render(html(
    `<div class="card u-w-full">`,
    `  <div class="row-header u-row u-text-24 u-mb-24">`,
    `    <span class="weather-icon u-mr-4 u-shrink-0">${emoji(weather.code)}</span>`,
    `    <span class="weather-temp u-text-24">${weather.temp}<span class="deg">°</span></span>`,
    `    <span class="weather-pre u-text-24">${UI.cityPreposition}</span>`,
    `    <span class="weather-city u-text-24 u-cursor-pointer" data-action="open-search" tabindex="0" role="link">`,
    `      <em>${escapeHTML(loc)}</em>`,
    `    </span>`,
    `  </div>`,
    `  <div class="day-msg u-text-62 u-text-light u-mb-24 u-fade-in">${escapeHTML(dayMessage(weather.feel))}</div>`,
    `</div>`,
    `<div class="cyclist" aria-hidden="true"></div>`
  ));

  playCyclistIntro(document.querySelector('.cyclist'), tierForTemp(weather.feel), convoy);

  const cityEl = document.querySelector('[data-action="open-search"]');
  cityEl.addEventListener('click', () => showSearchUI());
  cityEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); showSearchUI(); }
  });
}

/* ==========================================================================
   Cyclist intro — the three tiers ride through as a convoy at constant
   speed (gap ≈ 15 % of the viewport). The matching one follows at the same
   speed and eases into the centre position.
   ========================================================================== */
const CYCLIST_TIERS = ['cold', 'medium', 'warm'];
const CONVOY = {       /* when the convoy rides through before the final entry */
  firstLoad:   true,   /* first weather display after opening the app */
  cityChange:  false,  /* after searching a new city */
  searchClose: false,  /* after closing the search without a change */
  imprintClose: false, /* after closing the imprint */
};
const OFF_RIGHT = 'translateX(calc(50vw + 50%))';
const ON_STAGE  = 'translateX(0)';
const PASS_MS    = 1000;  /* time for one rider to cross the viewport — sets the speed */
const CONVOY_GAP = 0.15;  /* gap between riders, fraction of viewport width */
const ARRIVE_EASE_SHARE = 0.5;  /* share of the entry distance used for braking */
const LEAVE_MS  = 500;
const IDLE_SWAY       = true;  /* false = rider stands still in the final position */
const IDLE_SWAY_MIN   = 0.015; /* per swing: random distance from centre, fraction of viewport width … */
const IDLE_SWAY_MAX   = 0.04;  /* … between MIN and MAX, alternating sides */
const IDLE_SWAY_MS    = 6000;  /* one full back-and-forth cycle */
const EASE_OUT_CUBIC = 'cubic-bezier(0.33, 1, 0.68, 1)';  /* starts at 3× average speed */
const EASE_IN   = 'cubic-bezier(0.32, 0, 0.67, 0)';
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const tx = px => `translateX(${px}px)`;

async function playCyclistIntro(img, tier, convoy = true) {
  await mountCyclist(img, tier);
  if (!img.isConnected || img.dataset.leaving) return;
  registerPedalling(img);
  if (prefersReducedMotion()) {
    img.style.transform = ON_STAGE;
    return;
  }
  enableRiderGestures(img);

  const riders = !convoy ? [] : CYCLIST_TIERS.map(() => {
    const r = document.createElement('div');
    r.className = 'cyclist-pass';
    r.setAttribute('aria-hidden', 'true');
    return r;
  });
  await Promise.all(riders.map((r, i) => mountCyclist(r, CYCLIST_TIERS[i])));
  if (!img.isConnected || img.dataset.leaving) return;
  riders.forEach(r => { img.before(r); registerPedalling(r); });

  // Positions are translateX offsets from the centred resting position
  const vw = window.innerWidth;
  const w = img.getBoundingClientRect().width;
  const offLeft = -(vw + w) / 2;
  const speed = (vw + w) / PASS_MS;                /* px per ms, constant */
  const spacingMs = (w + CONVOY_GAP * vw) / speed;  /* rear-to-front gap */

  riders.forEach((r, i) => {
    r.animate(
      [{ transform: tx(offLeft) }, { transform: tx(-offLeft) }],
      { duration: PASS_MS, delay: i * spacingMs, easing: 'linear', fill: 'backwards' }
    ).finished.then(() => r.remove(), () => {});
  });

  // Matching rider: 4th in line, same speed, then brakes into the centre.
  arriveCyclist(img, { delay: riders.length * spacingMs });
}

/* Ride into the centre from off-screen at constant speed, then brake.
   side −1: from the left (faster than the camera), +1: from the right
   (slower than the camera). passMs sets the speed like PASS_MS.
   Ease-out-cubic starts at 3× its average speed → duration chosen so the
   entry velocity equals the cruising speed (no visible jolt). */
function arriveCyclist(img, { side = -1, passMs = PASS_MS, delay = 0 } = {}) {
  const vw = window.innerWidth;
  const w = img.getBoundingClientRect().width;
  const off = (vw + w) / 2;
  const speed = (vw + w) / passMs;
  const brakeDist = off * ARRIVE_EASE_SHARE;
  const cruiseMs = (off - brakeDist) / speed;
  const brakeMs = 3 * brakeDist / speed;
  img.style.transform = ON_STAGE;
  const arrive = img.animate(
    [
      { transform: tx(side * off), easing: 'linear' },
      { transform: tx(side * brakeDist), easing: EASE_OUT_CUBIC, offset: cruiseMs / (cruiseMs + brakeMs) },
      { transform: ON_STAGE },
    ],
    { duration: cruiseMs + brakeMs, delay, fill: 'backwards' }
  );
  arrive.finished.then(() => startIdleSway(img), () => {});
  return arrive;
}

/* ==========================================================================
   Cyclist figure — the SVG is inlined into a shadow root instead of an <img>.
   The shadow root scopes its IDs and @keyframes, so several riders (also two
   of the same tier) can be on the page at once, and it exposes the SVG's
   animations to the pedalling control below.
   ========================================================================== */
const svgCache = {};
const loadCyclistSvg = tier => svgCache[tier] ??= fetch(cyclistSrc(tier))
  .then(res => { if (!res.ok) throw new Error(res.status); return res.text(); });

async function mountCyclist(host, tier) {
  let markup;
  try {
    markup = await loadCyclistSvg(tier);
  } catch {
    delete svgCache[tier];  /* e.g. opened via file:// — fall back to the uncoupled <img> */
    markup = `<img src="${cyclistSrc(tier)}" alt="">`;
  }
  const root = host.shadowRoot || host.attachShadow({ mode: 'open' });
  root.innerHTML = `<style>:host{display:block;-webkit-tap-highlight-color:transparent}svg,img{display:block;width:100%;height:100%}` +
    `:host([data-hop]) svg>g{pointer-events:visible;cursor:pointer;touch-action:pan-y}</style>${markup}`;
  const svg = root.querySelector('svg');
  if (svg) padStage(svg);
}

/* Headroom around the drawing for the bunnyhop (SVG units): the tilted rear
   wheel reaches x ≈ −50, the head y ≈ −140. Safari clips the outer <svg> at
   its box despite overflow:visible, so the SVG gets a larger viewBox and an
   equally larger, offset box — the figure keeps its size and position. */
const STAGE = { w: 1720, h: 1137, boxH: 1268, padX: 80, padTop: 180, padBottom: 40 };
function padStage(svg) {
  const { w, h, boxH, padX, padTop, padBottom } = STAGE;
  const vw = w + 2 * padX, vh = h + padTop + padBottom;
  svg.setAttribute('viewBox', `${-padX} ${-padTop} ${vw} ${vh}`);
  Object.assign(svg.style, {
    position: 'absolute',
    left: `${(-padX / w) * 100}%`, top: `${(-padTop / boxH) * 100}%`,  /* drawing sits at the top of the host box */
    width: `${(vw / w) * 100}%`, height: `${(vh / boxH) * 100}%`,
  });
}

/* ==========================================================================
   Pedalling — the CSS animations inside each SVG (legs, upper body, head,
   arms, bike bob) share one crank revolution. They are paused and driven
   from one phase per rider.
   Model: the viewport is a camera riding alongside at the rider's cruising
   speed. Standing still on screen = riding at CADENCE_BASE_RPM; moving
   across the screen = faster or slower than the camera. Cadence therefore
   follows the on-screen speed linearly:
     at rest on screen        → CADENCE_BASE_RPM (cruising)
     convoy speed (PASS_MS)   → CADENCE_CONVOY_RPM (overtaking the camera)
     braking into the centre  → falls from convoy to base cadence
     idle sway                → base cadence: the sway is camera/rider offset, not a speed change
     riding out to the right  → rises, capped at CADENCE_MAX_RPM
   ========================================================================== */
const CRANK_CYCLE_MS     = 850;  /* length of one crank revolution in the SVG animations */
const CADENCE_BASE_RPM   = 70;   /* cruising alongside the camera */
const CADENCE_CONVOY_RPM = 100;  /* passing through the viewport */
const CADENCE_MAX_RPM    = 130;
const CADENCE_SMOOTH_MS  = 80;   /* time constant for cadence changes */
const pedalling = new Map();     /* host → { anims, phase, rpm, x, t } */
let pedalFrame = 0;

function registerPedalling(host) {
  /* call once the host is in the document — CSS animations only exist there */
  const root = host.shadowRoot;
  const anims = root && root.getAnimations ? root.getAnimations() : [];
  anims.forEach(a => { a.pause(); a.currentTime = 0; });
  pedalling.set(host, { anims, phase: 0, rpm: CADENCE_BASE_RPM, x: null, t: null });
  if (!pedalFrame) pedalFrame = requestAnimationFrame(pedalTick);
}

function pedalTick(now) {
  for (const [host, s] of pedalling) {
    if (!host.isConnected) { pedalling.delete(host); continue; }
    const x = new DOMMatrixReadOnly(getComputedStyle(host).transform).m41;
    const dt = s.t === null ? 0 : now - s.t;
    if (s.hop) { /* the bunnyhop drives the crank */ }
    else if (dt > 0) {
      const v = (x - s.x) / dt;                                         /* px per ms, relative to the camera */
      const vRef = (window.innerWidth + host.offsetWidth) / PASS_MS;    /* convoy speed */
      const swaying = host.dataset.sway && !host.dataset.leaving;
      const target = swaying ? CADENCE_BASE_RPM : Math.min(CADENCE_MAX_RPM, Math.max(0,
        CADENCE_BASE_RPM + (v / vRef) * (CADENCE_CONVOY_RPM - CADENCE_BASE_RPM)));
      s.rpm += (target - s.rpm) * (1 - Math.exp(-dt / CADENCE_SMOOTH_MS));
      s.phase = (s.phase + dt * s.rpm / 60000 * CRANK_CYCLE_MS) % CRANK_CYCLE_MS;
      s.anims.forEach(a => { a.currentTime = s.phase; });
    }
    s.x = x;
    s.t = now;
  }
  pedalFrame = pedalling.size ? requestAnimationFrame(pedalTick) : 0;
}

/* ==========================================================================
   Bunnyhop — click / tap on the rider. Built on anticipation (Disney):
     1. Schwung holen  the pedals coast to horizontal, then hip and upper body
                       sink (≈10 % of the figure height), knees and elbows bend
     2. Absprung       knees and elbows extend upwards, the front wheel lifts
     3. Flug           hands and feet pull the bike up (≈20 % of the figure height)
     4. Landung        the body absorbs the impact — the crouch reversed:
                       fast down, slow back up
   Feet (pedals) and hands (bar) are the contact points: they move with the
   bike, knees and elbows follow by two-bone IK. During the hop the pedalling
   CSS animations stay paused at the level-pedal phase; script animations on
   the same elements override them and are dropped afterwards.
   Rig values are SVG user units (viewBox 1720 × 1137, y down), measured at
   crank phase 212.5 ms (pedals level, body and bike at their lowest bob).
   ========================================================================== */
const HOP_FIGURE_H = 1100;                /* cap top → tyre bottom */
const HOP_CROUCH   = 0.10 * HOP_FIGURE_H; /* phase 1: sink of the hip */
const HOP_LIFT     = 0.20 * HOP_FIGURE_H; /* phase 3: height of the bike */
const HOP_MS       = 1300;                /* crouch → back to riding, after the coast */
const HOP_COAST_MAX_MS    = 450;          /* longest pedal run-out before the crouch */
const HOP_COAST_MIN_PHASE = 60;           /* skip a level position closer than this (crank ms) */
const HOP_LEVEL_PHASES    = [212.5, 637.5]; /* crank phases with level pedals; far foot in front at the first */

/* Tracks: [time ms, value, easing of the segment that starts here].
   body*: hip translation and torso rotation about the hip (deg, − = shoulders up)
   bike*: bike translation and pitch about the rear contact (deg, − = front up) */
const HOP_TRACKS = {
  bodyX:   [[0, 0, 'inOut'], [320, -30, 'out'], [440, 10, 'inOut'], [600, 0, 'out'], [900, -15, 'inOut'], [HOP_MS, 0]],
  bodyY:   [[0, 0, 'inOut'], [320, HOP_CROUCH, 'out'], [440, -105, 'out'], [600, -160, 'in'],
            [790, -30, 'out'], [900, 0.9 * HOP_CROUCH, 'inOut'], [HOP_MS, 0]],
  bodyRot: [[0, 0, 'inOut'], [320, -3, 'out'], [440, -7, 'inOut'], [600, -2, 'inOut'], [790, 0, 'out'],
            [900, 2, 'inOut'], [HOP_MS, 0]],
  bikeY:   [[0, 0, 'lin'], [440, 0, 'out'], [620, -HOP_LIFT, 'in'], [800, 0]],
  bikeRot: [[0, 0, 'lin'], [320, 0, 'out'], [440, -8, 'inOut'], [620, -1, 'inOut'], [800, 0]],
};
const HOP_EASE = {
  lin:   u => u,
  in:    u => u * u,
  out:   u => 1 - (1 - u) * (1 - u),
  inOut: u => (u < 0.5 ? 2 * u * u : 1 - 2 * (1 - u) * (1 - u)),
};
const HOP_RIG = {
  hip:         { x: 789,   y: 336 },
  shoulder:    { x: 1293,  y: 266 },
  hand:        { x: 1315,  y: 604 },
  pedalFront:  { x: 873.3, y: 834.6 },
  pedalRear:   { x: 704.2, y: 834.6 },
  rearContact: { x: 356,   y: 1147 },
  bodyBase: [735, 149],                         /* #upper-body translate */
  bikeBase: [0, 435],                           /* #r__der translate */
  legOrigin: { x: 789, y: 316 }, legPivot: 315.429, thigh: 302, shank: 302,
  shoulderLocal: { x: 558, y: 117 },            /* in #upper-body */
  upperArmBase: [392, -49], upperArmPivot: 166, upperArm: 234.76,
  forearmPivot: 188, forearm: 265.87,
};

function hopTrack(keys, t) {
  if (t <= keys[0][0]) return keys[0][1];
  for (let i = 1; i < keys.length; i++) {
    if (t <= keys[i][0]) {
      const [t0, v0, ease] = keys[i - 1];
      return v0 + (keys[i][1] - v0) * HOP_EASE[ease]((t - t0) / (keys[i][0] - t0));
    }
  }
  return keys[keys.length - 1][1];
}

/* Joint of a two-bone chain from root a towards target b; side picks the bend */
function hopIK(a, b, l1, l2, side) {
  const dx = b.x - a.x, dy = b.y - a.y, len = Math.hypot(dx, dy) || 1;
  const d = Math.min(l1 + l2 - 0.5, Math.max(Math.abs(l1 - l2) + 0.5, len));
  const ex = dx / len, ey = dy / len;
  const along = (l1 * l1 - l2 * l2 + d * d) / (2 * d);
  const h = Math.sqrt(Math.max(0, l1 * l1 - along * along));
  return { x: a.x + ex * along - side * ey * h, y: a.y + ey * along + side * ex * h };
}

/* CSS rotation (deg) that turns direction (ux, uy) into the direction from p to q */
const hopAngle = (ux, uy, p, q) => {
  const vx = q.x - p.x, vy = q.y - p.y;
  return Math.atan2(ux * vy - uy * vx, ux * vx + uy * vy) * 180 / Math.PI;
};
const aboutPoint = (m, p, deg) => m.translate(p.x, p.y).rotate(deg).translate(-p.x, -p.y);
const hopMatrix = m => `matrix(${m.a},${m.b},${m.c},${m.d},${m.e},${m.f})`;

/* Transforms of all hop-driven elements at time t (ms after the coast) */
function hopPose(t, farLegInFront) {
  const R = HOP_RIG;
  const tr = key => hopTrack(HOP_TRACKS[key], t);

  const bodyK = aboutPoint(new DOMMatrix().translate(tr('bodyX'), tr('bodyY')), R.hip, tr('bodyRot'));
  const body = bodyK.translate(...R.bodyBase);
  const hip = bodyK.transformPoint(R.hip);

  const bikeK = aboutPoint(new DOMMatrix().translate(0, tr('bikeY')), R.rearContact, tr('bikeRot'));
  const bike = bikeK.translate(...R.bikeBase);

  /* arm, in #upper-body coordinates */
  const hand = body.inverse().transformPoint(bikeK.transformPoint(R.hand));
  const sh = R.shoulderLocal;
  const elbow = hopIK(sh, hand, R.upperArm, R.forearm, 1);
  const ua = R.upperArmPivot, fa = R.forearmPivot;
  const upperArm = aboutPoint(new DOMMatrix().translate(...R.upperArmBase), { x: ua, y: ua }, hopAngle(-1, 1, sh, elbow));
  const forearm = aboutPoint(new DOMMatrix().translate(hand.x - fa, hand.y - fa), { x: fa, y: fa }, hopAngle(-1, -1, hand, elbow));

  /* legs, in SVG coordinates (the leg groups are only translated) */
  const lp = { x: R.legPivot, y: R.legPivot };
  const leg = pedal => {
    const foot = bikeK.transformPoint(pedal);
    const knee = hopIK(hip, foot, R.thigh, R.shank, -1);
    const a = hopAngle(0, 1, hip, knee);
    return [
      aboutPoint(new DOMMatrix().translate(hip.x - R.legOrigin.x, hip.y - R.legOrigin.y), lp, a),
      aboutPoint(new DOMMatrix().translate(0, R.thigh), lp, hopAngle(0, 1, knee, foot) - a),
    ];
  };
  const [thighFar, shankFar]   = leg(farLegInFront ? R.pedalFront : R.pedalRear);
  const [thighNear, shankNear] = leg(farLegInFront ? R.pedalRear : R.pedalFront);

  return { body, bike, upperArm, forearm, thighFar, shankFar, thighNear, shankNear };
}

const HOP_ELEMENTS = {
  body: 'upper-body', bike: 'r__der', upperArm: 'ober-arm', forearm: 'unter-arm',
  thighFar: 'thigh-pivot-leg-far', shankFar: 'shank-pivot-leg-far',
  thighNear: 'thigh-pivot-leg-far_2', shankNear: 'shank-pivot-leg-far_2',
};

/* ==========================================================================
   Rider gestures — tap: bunnyhop; drag right: rides out to the right and
   comes back from the left; drag left: falls back out to the left (slower)
   and comes back from the right — only when released fast enough (FLING_V),
   otherwise the rider rolls back to the centre. While dragged the rider
   follows the pointer. Cadence needs no extra code: pedalTick derives it from the
   on-screen speed (right = faster than the camera, left = slower).
   ========================================================================== */
const DRAG_SLOP      = 8;     /* px before a press becomes a drag */
const FLING_V        = 1.5;   /* px/ms release speed needed to leave — slower drags snap back */
const FLING_MIN_DX   = 24;    /* px the drag must have covered in the fling direction */
const FLING_WINDOW   = 100;   /* ms before release over which the speed is measured */
const FLING_REST     = 80;    /* ms without movement before release → speed 0 */
const FALL_BACK_MS   = 900;   /* leaving to the left: slower than LEAVE_MS */
const FALL_BACK_PASS_MS = 1600; /* coming back from the right: slower than PASS_MS */
const LAP_PAUSE_MS   = 350;   /* time off-screen before coming back */
const RETURN_OMEGA   = 0.002; /* 1/ms — slow release: spring back to the centre, settles in ≈ 3 s */
const EXIT_MIN_MS    = 250;   /* fast release: the ride-out to the right lasts at least this long
                                 (left: scaled by FALL_BACK_MS / LEAVE_MS) — caps the carried speed */

/* Presses that belong to the page, not to the rider */
const GESTURE_EXCLUDE = 'a, button, input, textarea, select, label, [data-action], [role="link"], [role="button"]';

/* Drag works anywhere on the weather screen (except links and controls) —
   the rider follows the pointer relative to where it went down. A tap only
   hops when it lands on the rider (its bounding box, so the gaps between
   legs, frame and wheels count too). The listener sits on the document and
   removes itself once this rider is gone. */
function enableRiderGestures(host) {
  host.dataset.hop = '';
  const figure = host.shadowRoot && host.shadowRoot.querySelector('svg > g');
  const onFigure = e => {
    const r = (figure || host).getBoundingClientRect();
    return e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
  };
  const listen = new AbortController();
  document.addEventListener('pointerdown', e => {
    if (!host.isConnected) { listen.abort(); return; }
    if (!e.isPrimary || e.button > 0) return;
    if (e.composedPath().some(el => el instanceof Element && el.matches(GESTURE_EXCLUDE))) return;
    if (host.dataset.leaving || pedalling.get(host)?.hop) return;
    if (host.dataset.moving && !host.dataset.returning) return;  /* ride-out / re-entry runs */
    e.preventDefault();
    const tap = onFigure(e);
    const id = e.pointerId, x0 = e.clientX;
    let base = null;               /* translateX at drag start, minus the slop */
    const samples = [{ x: x0, t: e.timeStamp }];

    const move = ev => {
      if (ev.pointerId !== id) return;
      const dx = ev.clientX - x0;
      if (base === null) {
        if (Math.abs(dx) < DRAG_SLOP) return;
        host.dataset.moving = '1';
        base = holdCyclist(host) - dx;  /* grabs it where it is, also mid-return; no jump */
      }
      samples.push({ x: ev.clientX, t: ev.timeStamp });
      while (samples.length > 2 && ev.timeStamp - samples[1].t > FLING_WINDOW) samples.shift();
      host.style.transform = tx(base + dx);
    };
    const end = ev => {
      if (ev.pointerId !== id) return;
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', end);
      window.removeEventListener('pointercancel', end);
      if (base === null) { if (ev.type === 'pointerup' && tap) startHop(host); return; }
      if (host.dataset.leaving) return;
      const vx = releaseSpeed(samples, ev.timeStamp);
      const dx = ev.clientX - x0;
      const side = ev.type === 'pointercancel' || Math.abs(vx) < FLING_V
        || Math.sign(vx) !== Math.sign(dx) || Math.abs(dx) < FLING_MIN_DX ? 0 : Math.sign(vx);
      if (side) lapCyclist(host, side, vx); else returnCyclist(host, vx);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', end);
    window.addEventListener('pointercancel', end);
  }, { signal: listen.signal });
}

/* Pointer speed (px/ms) over the last FLING_WINDOW ms; 0 if it rested */
function releaseSpeed(samples, now) {
  const last = samples[samples.length - 1];
  if (now - last.t > FLING_REST) return 0;
  let first = samples.find(p => last.t - p.t <= FLING_WINDOW);
  if (first === last) first = samples[samples.length - 2] || last;  /* sparse events */
  const dt = last.t - first.t;
  return dt >= 16 ? (last.x - first.x) / dt : 0;
}

/* Stop whatever moves the rider (entry, idle sway) and keep it where it is */
function holdCyclist(img) {
  const x = new DOMMatrixReadOnly(getComputedStyle(img).transform).m41;
  img.swayRun = (img.swayRun || 0) + 1;  /* ends a running idle sway */
  delete img.dataset.sway;
  delete img.dataset.returning;
  img.getAnimations().forEach(a => a.cancel());
  img.style.transform = tx(x);
  return x;
}

/* side +1: out to the right, back from the left; −1: fall back out to the
   left, back from the right. v0 = release speed (px/ms) for a smooth start. */
async function lapCyclist(img, side, v0 = 0) {
  const vw = window.innerWidth;
  const w = img.getBoundingClientRect().width;
  const from = new DOMMatrixReadOnly(getComputedStyle(img).transform).m41;
  const to = side * (vw + w) / 2;
  /* Keeps the release speed and accelerates from there at a constant rate:
     x(t) = v·t + a·t²/2. a is the rate that takes a resting rider from the
     centre off-screen in LEAVE_MS (right) or FALL_BACK_MS (left); the
     duration follows from speed and distance. As easing: quadratic
     p(u) = k·u + (1 − k)·u² with k = v·t / d, written as a cubic Bézier. */
  const ref = side > 0 ? LEAVE_MS : FALL_BACK_MS;
  const a = (vw + w) / (ref * ref);              /* = 2 · ((vw + w) / 2) / ref² */
  const d = Math.abs(to - from);
  /* speed cap: the exit must stay visible for at least minMs, whatever the
     fling — d = v·t + a·t²/2 solved for v at t = minMs. Depends on viewport
     width and distance left, so phone and desktop feel alike. */
  const minMs = EXIT_MIN_MS * ref / LEAVE_MS;
  const vMax = Math.max(0, (d - a * minMs * minMs / 2) / minMs);
  const v = Math.min(vMax, Math.max(0, v0 * side));  /* release speed towards the exit */
  const duration = (Math.sqrt(v * v + 2 * a * d) - v) / a;
  const k = d ? v * duration / d : 0;            /* start speed / average speed, < 1 */
  img.style.transform = tx(to);
  const out = img.animate(
    [{ transform: tx(from) }, { transform: tx(to) }],
    { duration, easing: `cubic-bezier(${1 / 3}, ${(k / 3).toFixed(4)}, ${2 / 3}, ${((k + 1) / 3).toFixed(4)})` }
  );
  out.startTime = document.timeline.currentTime;  /* run from this frame — no one-frame hold after release */
  try { await out.finished; } catch { return; }  /* cancelled, e.g. by rideCyclistOut */
  if (!img.isConnected || img.dataset.leaving) return;
  arriveCyclist(img, { side: -side, passMs: side > 0 ? PASS_MS : FALL_BACK_PASS_MS, delay: LAP_PAUSE_MS });
}

/* Slow release: the rider keeps its momentum and is pulled back to the
   centre by a critically damped spring — released moving outwards it
   overshoots, slows down, turns and settles; released moving inwards it
   glides in (it may pass the centre once) without bouncing.
     x(t) = (x0 + (v0 + ω·x0)·t) · e^(−ω·t)
   Sampled into keyframes, so it runs as one Web Animation. Cadence follows
   from the on-screen speed in pedalTick: moving right = faster than the
   camera (more rpm), left = slower. v0 = release speed (px/ms). */
function returnCyclist(img, v0 = 0) {
  const x0 = new DOMMatrixReadOnly(getComputedStyle(img).transform).m41;
  const w = RETURN_OMEGA;
  const x = t => (x0 + (v0 + w * x0) * t) * Math.exp(-w * t);
  const v = t => (v0 - w * (v0 + w * x0) * t) * Math.exp(-w * t);
  const step = 1000 / 60;
  let duration = step;
  while (duration < 4000 && (Math.abs(x(duration)) > 0.3 || Math.abs(v(duration)) > 0.01)) duration += step;
  const frames = [];
  for (let t = 0; t < duration; t += step) frames.push({ transform: tx(x(t)), offset: t / duration });
  frames.push({ transform: ON_STAGE, offset: 1 });
  img.style.transform = ON_STAGE;
  img.dataset.returning = '1';  /* may be grabbed again on the way back */
  const back = img.animate(frames, { duration, easing: 'linear' });
  back.startTime = document.timeline.currentTime;  /* run from this frame — no hold after release */
  back.finished.then(() => startIdleSway(img), () => {});
}

function startHop(host) {
  const s = pedalling.get(host);
  const root = host.shadowRoot;
  if (!s || s.hop || host.dataset.leaving || prefersReducedMotion()) return;
  if (host.dataset.moving && !host.dataset.returning) return;  /* hopping while drifting back is fine */
  const svg = root.querySelector('svg');
  const els = Object.fromEntries(Object.entries(HOP_ELEMENTS).map(([k, id]) => [k, root.getElementById(id)]));
  if (!svg || Object.values(els).some(el => !el)) return;  /* <img> fallback */

  /* 1a. coast to the next level-pedal phase: Hermite curve from the current
     crank speed down to zero */
  const v0 = Math.max(s.rpm, CADENCE_BASE_RPM / 2) / 60000 * CRANK_CYCLE_MS;  /* crank ms per ms */
  let target = 0, delta = Infinity;
  for (const level of HOP_LEVEL_PHASES) {
    let d = (level - s.phase + CRANK_CYCLE_MS) % CRANK_CYCLE_MS;
    if (d < HOP_COAST_MIN_PHASE) d += CRANK_CYCLE_MS;
    if (d < delta) { delta = d; target = level; }
  }
  const coastMs = Math.min(HOP_COAST_MAX_MS, 2 * delta / v0);  /* ≤ 3·delta/v0 keeps it monotonic */
  const from = s.phase;
  const farLegInFront = target === HOP_LEVEL_PHASES[0];
  const t0 = performance.now();
  let overrides = null;
  s.hop = true;

  const finish = () => {
    if (overrides) Object.values(overrides).forEach(a => a.cancel());
    svg.unpauseAnimations();
    s.rpm = 0;      /* pedalling picks up again from standstill */
    s.hop = false;
  };

  const frame = now => {
    if (!host.isConnected) { s.hop = false; return; }
    if (host.dataset.leaving) { finish(); return; }
    const elapsed = now - t0;
    if (elapsed < coastMs) {
      const u = elapsed / coastMs;
      const p = (u ** 3 - 2 * u ** 2 + u) * coastMs * v0 + (3 * u ** 2 - 2 * u ** 3) * delta;
      s.phase = (from + p) % CRANK_CYCLE_MS;
      s.anims.forEach(a => { a.currentTime = s.phase; });
      requestAnimationFrame(frame);
      return;
    }
    const t = elapsed - coastMs;
    if (t >= HOP_MS) { finish(); return; }
    const pose = hopPose(t, farLegInFront);
    if (!overrides) {
      s.phase = target;
      s.anims.forEach(a => { a.currentTime = target; });
      svg.pauseAnimations();  /* wheel squash (SMIL) */
      overrides = Object.fromEntries(Object.entries(els).map(([k, el]) => {
        const a = el.animate([{ transform: 'none' }, { transform: 'none' }], { duration: 1, fill: 'both' });
        a.pause();
        return [k, a];
      }));
    }
    for (const k in overrides) {
      const m = hopMatrix(pose[k]);
      overrides[k].effect.setKeyframes([{ transform: m }, { transform: m }]);
    }
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}

/* Slow back-and-forth around the centre once the rider has arrived.
   Every swing turns at a random distance (IDLE_SWAY_MIN…MAX) on the other
   side, with zero speed at each turning point — no jolt after the braking. */
async function startIdleSway(img) {
  const run = img.swayRun = (img.swayRun || 0) + 1;  /* holdCyclist ends this run */
  const stopped = () => !IDLE_SWAY || !img.isConnected || img.dataset.leaving || img.swayRun !== run;
  const randomAmp = () => IDLE_SWAY_MIN + Math.random() * (IDLE_SWAY_MAX - IDLE_SWAY_MIN);
  delete img.dataset.moving;  /* back in place: gestures allowed again */
  delete img.dataset.returning;
  if (stopped()) return;
  img.dataset.sway = '1';  /* pedalling ignores this movement */

  let from = ON_STAGE;
  let side = 1;
  let duration = IDLE_SWAY_MS / 4;  /* first move: centre → one side */
  while (!stopped()) {
    const to = `translateX(${(side * randomAmp() * 100).toFixed(2)}vw)`;
    const swing = img.animate(
      [{ transform: from }, { transform: to }],
      { duration, easing: 'ease-in-out', fill: 'forwards' }
    );
    await swing.finished.catch(() => {});  /* rejects when cancelled by rideCyclistOut */
    if (stopped()) return;
    img.style.transform = to;  /* hold position, then drop the finished animation */
    swing.cancel();
    from = to;
    side = -side;
    duration = IDLE_SWAY_MS / 2;  /* one side to the other */
  }
}

/* Accelerate every visible rider out to the right from where it currently is */
async function rideCyclistOut(img) {
  img.dataset.leaving = '1';
  const all = [...document.querySelectorAll('.cyclist-pass'), img];
  await Promise.all(all.map(r => {
    const rect = r.getBoundingClientRect();
    const onScreen = rect.right > 0 && rect.left < window.innerWidth;
    const from = getComputedStyle(r).transform;  /* includes a running animation */
    r.getAnimations().forEach(a => a.cancel());
    if (!onScreen || prefersReducedMotion()) {
      r.style.visibility = 'hidden';
      return;
    }
    r.style.transform = OFF_RIGHT;
    return r.animate(
      [{ transform: from }, { transform: OFF_RIGHT }],
      { duration: LEAVE_MS, easing: EASE_IN }
    ).finished.catch(() => {});
  }));
}

/* ==========================================================================
   SEARCH UI SCREEN (mockup-search-UI)
   ========================================================================== */
let searchUIBg = null;  /* captured body bg when opening from weather screen */
let searchUIGradient = null;

function renderSearchUI(bg) {
  currentScreen = SCREEN.SEARCH_UI;
  if (bg) searchUIBg = bg;
  setBodyBackground(searchUIBg || currentBg || BG.neutral, searchUIBg ? searchUIGradient : currentGradient);

  render(html(
    `<div class="card u-w-full">`,
    `  <div class="row-closebox u-row u-text-24 u-mb-24">`,
    `    <button id="search-ui-close" class="close-btn u-p-0 u-cursor-pointer u-center" aria-label="Schließen">×</button>`,
    `  </div>`,
    `  <div class="headline u-text-62 u-text-light u-mb-24 u-fade-in">${UI.searchUIHeadline}</div>`,
    `  <form id="city-form" autocomplete="off">`,
    `    <input type="text"`,
    `           id="city-input"`,
    `           placeholder="${UI.inputPlaceholder}"`,
    `           autofocus`,
    `           class="input-field u-w-full u-h-56 u-text-16 u-radius-12"`,
    `    />`,
    `    <button type="submit" class="cta-btn u-w-full u-h-56 u-text-16 u-radius-12 u-text-white u-cursor-pointer u-p-0">${UI.ctaChange}</button>`,
    `  </form>`,
    `</div>`
  ));

  const input = document.getElementById('city-input');
  input.addEventListener('focus', () => input.classList.add('focused'));
  input.addEventListener('blur', () => input.classList.remove('focused'));
  input.focus();

  document.getElementById('city-form').addEventListener('submit', onSearchUIChange);
  document.getElementById('search-ui-close').addEventListener('click', () => {
    closeSearchUI();
  });
  document.addEventListener('keydown', onSearchUIKeydown);
}

/* ==========================================================================
   IMPRINT SCREEN — same layout and behaviour as the search UI:
   opened from the weather screen only, × or Esc returns there.
   ========================================================================== */
async function showImprint() {
  if (currentScreen !== SCREEN.WEATHER || !lastWeatherData) return;
  const img = document.querySelector('.cyclist');
  if (img) {
    if (img.dataset.leaving) return;  /* already on its way out */
    await rideCyclistOut(img);
  }
  renderImprint();
}

/* One UI.imprintText entry → HTML (see the comment there for the block types) */
function renderImprintBlock(b) {
  if (typeof b === 'string') return `<p>${b}</p>`;
  if (b.h2) return `<h2 class="imprint-h2 u-text-24">${b.h2}</h2>`;
  if (b.h3) return `<h3 class="imprint-h3 u-text-16">${b.h3}</h3>`;
  if (b.ul) return `<ul class="imprint-list">${b.ul.map(li => `<li>${li}</li>`).join('')}</ul>`;
  return '';
}

function renderImprint() {
  currentScreen = SCREEN.IMPRINT;
  setBodyBackground(currentBg || BG.neutral, currentGradient);

  render(html(
    `<div class="card u-w-full">`,
    `  <div class="row-closebox u-row u-text-24 u-mb-24">`,
    `    <button id="imprint-close" class="close-btn u-p-0 u-cursor-pointer u-center" aria-label="Schließen">×</button>`,
    `  </div>`,
    `  <div class="headline imprint-headline u-text-62 u-text-light u-mb-24 u-fade-in">${UI.imprintHeadline}</div>`,
    `  <div class="imprint-text u-text-16 u-fade-in">`,
    UI.imprintText.map(renderImprintBlock).join(''),
    `  </div>`,
    `</div>`
  ));

  document.getElementById('imprint-close').addEventListener('click', closeImprint);
  document.addEventListener('keydown', onImprintKeydown);
}

function closeImprint() {
  document.removeEventListener('keydown', onImprintKeydown);
  renderWeather(lastWeatherData.weather, lastWeatherData.loc, 'imprintClose');
}

function onImprintKeydown(e) {
  if (currentScreen !== SCREEN.IMPRINT) {
    document.removeEventListener('keydown', onImprintKeydown);
    return;
  }
  if (e.key === 'Escape') closeImprint();
}

/* ==========================================================================
   Event handlers
   ========================================================================== */
/* Esc closes the search UI. Registered once per open (same function reference
   is de-duplicated) and removes itself once the search UI is gone. */
function onSearchUIKeydown(e) {
  if (currentScreen !== SCREEN.SEARCH_UI) {
    document.removeEventListener('keydown', onSearchUIKeydown);
    return;
  }
  if (e.key === 'Escape' && lastWeatherData) {
    document.removeEventListener('keydown', onSearchUIKeydown);
    closeSearchUI();
  }
}

async function onFallbackSearch(e) {
  e.preventDefault();
  const input = document.getElementById('city-input');
  const query = input.value.trim();
  if (!query) return;
  disableInput(input);
  showSearching();
  await performSearch(query, 'fallback');
}

async function onSearchUIChange(e) {
  e.preventDefault();
  const input = document.getElementById('city-input');
  const query = input.value.trim();
  if (!query) return;
  disableInput(input);
  showSearching(true);
  await performSearch(query, 'search-ui');
}

async function performSearch(query, screenType) {
  try {
    const loc = await geocodeCity(query);
    const weather = await getWeather(loc.lat, loc.lon);
    renderWeather(weather, loc.name);
  } catch (err) {
    if (screenType === 'search-ui') {
      renderSearchUI();
      const input = document.getElementById('city-input');
      if (input) reenableInput(input);
    } else {
      renderFallback();
      const input = document.getElementById('city-input');
      if (input) reenableInput(input);
    }
  }
}

function showSearching(inSearchUI) {
  if (inSearchUI) {
    setBodyBackground(searchUIBg || BG.neutral, searchUIBg ? searchUIGradient : null);
    render(html(
      `<div class="card u-w-full">`,
      `  <div class="row-header u-row u-text-24 u-mb-24">`,
      `    <button id="search-ui-close" class="close-btn u-p-0 u-cursor-pointer u-center" aria-label="Schließen">×</button>`,
      `  </div>`,
      `  <div class="spinner u-size-28 u-mr-4 u-rounded-full u-spin"></div>`,
      `  <div class="searching-text u-text-16 u-text-muted u-fade-in-fast">Suche nach ${''} …</div>`,
      `</div>`
    ));
    document.getElementById('search-ui-close').addEventListener('click', () => {
      closeSearchUI();
    });
  } else {
    setBodyBackground(BG.neutral);
    render(html(
      `<div class="card u-w-full">`,
      `  <div class="exclamation-wrapper u-row u-text-24 u-mb-24">`,
      `    <div class="exclamation-icon u-size-28 u-mr-4 u-rounded-full u-shrink-0 u-center u-text-24 u-text-white">!</div>`,
      `    <span class="status u-text-24">${UI.fallbackStatus}</span>`,
      `  </div>`,
      `  <div class="headline u-text-62 u-text-light u-mb-24 u-fade-in">${UI.fallbackHeadline}</div>`,
      `  <div class="spinner u-size-28 u-mr-4 u-rounded-full u-spin"></div>`,
      `  <div class="searching-text u-text-16 u-text-muted u-fade-in-fast">Suche nach ${''} …</div>`,
      `</div>`
    ));
  }
}

function disableInput(input) {
  if (input) { input.disabled = true; input.style.opacity = '0.5'; }
}
function reenableInput(input) {
  if (input) { input.disabled = false; input.style.opacity = '1'; input.focus(); }
}

/* Back to the weather screen without a city change */
function closeSearchUI() {
  if (lastWeatherData) renderWeather(lastWeatherData.weather, lastWeatherData.loc, 'searchClose');
}

async function showSearchUI() {
  if (!lastWeatherData) return;
  const img = document.querySelector('.cyclist');
  if (img) {
    if (img.dataset.leaving) return;  /* already on its way out */
    await rideCyclistOut(img);
  }
  searchUIBg = currentBg;
  searchUIGradient = currentGradient;
  renderSearchUI();
}

/* ==========================================================================
   Geolocation — primary, city search as fallback
   ========================================================================== */
function tryGeolocation() {
  if (!navigator.geolocation) {
    console.warn('Geolocation not supported');
    renderFallback();
    return;
  }
  renderLocating();
  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      try {
        const { latitude, longitude } = pos.coords;
        const city = await reverseGeocode(latitude, longitude);
        const weather = await getWeather(latitude, longitude);
        renderWeather(weather, city);
      } catch (err) {
        console.error('Geolocation → weather failed:', err);
        renderFallback();
      }
    },
    (err) => {
      console.warn('Geolocation error:', err.message, '(code:', err.code + ')');
      renderFallback();
    }, {
      enableHighAccuracy: false,
      timeout: 8000,
      maximumAge: 300000,
    }
  );
}

/* ==========================================================================
   Helpers
   ========================================================================== */
function escapeHTML(s) {
  return s.replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[c]));
}

/* ==========================================================================
   Boot — try geolocation first, city search as fallback
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const link = document.getElementById('imprint-link');
  link.textContent = UI.imprintLink;
  link.addEventListener('click', (e) => { e.preventDefault(); showImprint(); });
  tryGeolocation();
});
