// Genera public/og.png (1200x630) y public/apple-touch-icon.png a partir de SVG.
// Uso: node scripts/make-social.mjs  — Sustituir por una imagen con el logotipo real cuando esté disponible.
import sharp from 'sharp';

const drop = (x, y, s, attrs) =>
  `<path transform="translate(${x} ${y}) scale(${s})" d="M12 0S0 14.2 0 20.6A11.8 11.4 0 0 0 12 32a11.8 11.4 0 0 0 12-11.4C24 14.2 12 0 12 0Z" ${attrs}/>`;
const star = (x, y, s) =>
  `<path transform="translate(${x} ${y}) scale(${s})" d="M12 0l1.9 10.1L24 12l-10.1 1.9L12 24l-1.9-10.1L0 12l10.1-1.9Z" fill="#b5865a"/>`;

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#0e0d0c"/>
  ${drop(830, 60, 16, 'fill="none" stroke="#86c1e8" stroke-width="0.1"')}
  ${drop(970, 300, 3.2, 'fill="#86c1e8"')}
  <line x1="80" y1="110" x2="760" y2="110" stroke="#ece6da" stroke-opacity=".2"/>
  <text x="80" y="92" fill="#b5865a" font-family="Arial Narrow, Arial, sans-serif" font-size="22" letter-spacing="4" font-weight="700">PRIVATE STUDIO · MONTEQUINTO, SEVILLA</text>
  <text x="74" y="330" fill="#ece6da" font-family="Georgia, 'Times New Roman', serif" font-weight="700" font-size="150">La Llorona</text>
  <text x="80" y="430" fill="#86c1e8" font-family="Arial Narrow, Arial, sans-serif" font-weight="800" font-size="44">AQUÍ SE LLORA POCO. Y SE TATÚA MUCHO.</text>
  ${star(80, 520, 1.2)}
  <text x="124" y="543" fill="#b9b1a4" font-family="Arial, sans-serif" font-size="24">Estudio de tatuaje · @lallorona.sevilla</text>
</svg>`;

const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">
  <rect width="180" height="180" fill="#0e0d0c"/>
  ${drop(54, 28, 3, 'fill="#86c1e8"')}
</svg>`;

await sharp(Buffer.from(og)).png().toFile('public/og.png');
await sharp(Buffer.from(icon)).png().toFile('public/apple-touch-icon.png');
console.log('OK: public/og.png, public/apple-touch-icon.png');
