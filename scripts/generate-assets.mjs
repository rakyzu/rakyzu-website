import sharp from "sharp";
import { writeFileSync, mkdirSync } from "fs";

mkdirSync("dist/assets/hero", { recursive: true });
mkdirSync("dist/assets/og", { recursive: true });
mkdirSync("dist/assets/projects/placeholder", { recursive: true });
mkdirSync("dist/assets/favicon", { recursive: true });

// ═══════════════════════════════════════════════════════════════
// 1. HERO — abstract dark-mode SaaS background
// ═══════════════════════════════════════════════════════════════
const heroSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
  <defs>
    <radialGradient id="bgGlow" cx="65%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#1e1b4b"/>
      <stop offset="60%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#09090b"/>
    </radialGradient>
    <linearGradient id="accentLine" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#6366f1" stop-opacity="0"/>
      <stop offset="50%" stop-color="#a78bfa" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#6366f1" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="accentVertical" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2dd4bf" stop-opacity="0"/>
      <stop offset="50%" stop-color="#2dd4bf" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#2dd4bf" stop-opacity="0"/>
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="glowBig">
      <feGaussianBlur stdDeviation="12"/>
    </filter>
  </defs>

  <rect width="1920" height="1080" fill="url(#bgGlow)"/>

  <!-- Subtle grid dots -->
  <g opacity="0.08">
    ${Array.from({ length: 36 }, (_, r) =>
      Array.from({ length: 64 }, (_, c) =>
        `<circle cx="${c * 30 + 15}" cy="${r * 30 + 15}" r="1.5" fill="#a78bfa"/>`
      ).join("")
    ).join("")}
  </g>

  <!-- Large glowing orb (right side) -->
  <circle cx="1400" cy="540" r="400" fill="#6366f1" opacity="0.06" filter="url(#glowBig)"/>
  <circle cx="500" cy="800" r="300" fill="#2dd4bf" opacity="0.04" filter="url(#glowBig)"/>

  <!-- Network/wireframe lines -->
  <g opacity="0.12" stroke="#a78bfa" stroke-width="1" fill="none" filter="url(#glow)">
    <path d="M1500,200 L1650,350 L1550,500 L1700,650"/>
    <path d="M1550,250 L1700,400 L1600,550"/>
    <path d="M1200,700 L1350,850 L1250,950"/>
    <path d="M1300,150 L1450,300 L1350,450"/>
    <path d="M1600,600 L1750,750 L1650,900"/>
  </g>

  <!-- Wireframe nodes -->
  <g fill="#a78bfa" opacity="0.2">
    <circle cx="1500" cy="200" r="4"/>
    <circle cx="1650" cy="350" r="3"/>
    <circle cx="1550" cy="500" r="4"/>
    <circle cx="1700" cy="650" r="3"/>
    <circle cx="1200" cy="700" r="4"/>
    <circle cx="1350" cy="850" r="3"/>
    <circle cx="1300" cy="150" r="3"/>
    <circle cx="1600" cy="600" r="3"/>
  </g>

  <!-- Geometric shapes -->
  <g opacity="0.15">
    <polygon points="1620,280 1660,340 1580,340" stroke="#6366f1" stroke-width="1.5" fill="none"/>
    <polygon points="1420,520 1460,580 1380,580" stroke="#2dd4bf" stroke-width="1.5" fill="none"/>
    <rect x="1240" y="440" width="40" height="40" rx="4" stroke="#a78bfa" stroke-width="1.5" fill="none" transform="rotate(15,1260,460)"/>
    <rect x="1680" y="580" width="30" height="30" rx="3" stroke="#6366f1" stroke-width="1.5" fill="none" transform="rotate(-10,1695,595)"/>
    <polygon points="1100,200 1120,240 1080,240" stroke="#2dd4bf" stroke-width="1" fill="none"/>
  </g>

  <!-- Small accent dots -->
  <g fill="#a78bfa" opacity="0.25">
    <circle cx="1100" cy="350" r="2"/>
    <circle cx="1150" cy="380" r="1.5"/>
    <circle cx="1340" cy="600" r="2"/>
    <circle cx="1480" cy="420" r="1.5"/>
    <circle cx="750" cy="650" r="2"/>
    <circle cx="900" cy="350" r="1.5"/>
  </g>

  <!-- Horizontal accent lines -->
  <line x1="1100" y1="400" x2="1400" y2="400" stroke="url(#accentLine)" stroke-width="1"/>
  <line x1="1200" y1="650" x2="1600" y2="650" stroke="url(#accentLine)" stroke-width="0.5"/>
  <line x1="1000" y1="250" x2="1300" y2="250" stroke="url(#accentVertical)" stroke-width="0.5"/>

  <!-- Subtle floating code bracket accents -->
  <g font-family="monospace" font-size="28" fill="#6366f1" opacity="0.08" font-weight="bold">
    <text x="1520" y="180">&lt;/&gt;</text>
    <text x="1250" y="880">{ }</text>
    <text x="1750" y="500">#</text>
  </g>

  <!-- Horizontal beams -->
  <line x1="0" y1="240" x2="600" y2="240" stroke="#a78bfa" stroke-width="0.5" opacity="0.04"/>
  <line x1="0" y1="520" x2="500" y2="520" stroke="#6366f1" stroke-width="0.5" opacity="0.04"/>
  <line x1="0" y1="780" x2="550" y2="780" stroke="#2dd4bf" stroke-width="0.5" opacity="0.03"/>
</svg>`;

// ═══════════════════════════════════════════════════════════════
// 2. OG IMAGE — 1200x630 dark gradient, space for text overlay
// ═══════════════════════════════════════════════════════════════
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="ogBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="50%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#09090b"/>
    </linearGradient>
    <linearGradient id="ogAccent" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#6366f1"/>
      <stop offset="100%" stop-color="#a78bfa"/>
    </linearGradient>
    <filter id="ogGlow">
      <feGaussianBlur stdDeviation="6"/>
    </filter>
  </defs>

  <rect width="1200" height="630" fill="url(#ogBg)"/>

  <!-- Subtle grid lines — bottom-right corner -->
  <g opacity="0.06" stroke="#a78bfa" stroke-width="0.5">
    ${Array.from({ length: 8 }, (_, i) =>
      `<line x1="${900 + i * 40}" y1="630" x2="${900 + i * 40}" y2="430"/>`
    ).join("")}
    ${Array.from({ length: 5 }, (_, i) =>
      `<line x1="900" y1="${430 + i * 40}" x2="1200" y2="${430 + i * 40}"/>`
    ).join("")}
  </g>

  <!-- Glow orb bottom-right -->
  <circle cx="1000" cy="500" r="200" fill="#6366f1" opacity="0.08" filter="url(#ogGlow)"/>

  <!-- Small geometric accent top-right -->
  <g opacity="0.12">
    <polygon points="1080,80 1110,130 1050,130" stroke="#a78bfa" stroke-width="2" fill="none"/>
    <rect x="900" y="50" width="30" height="30" rx="3" stroke="#6366f1" stroke-width="2" fill="none" transform="rotate(10,915,65)"/>
    <circle cx="1040" cy="120" r="5" fill="#a78bfa"/>
    <circle cx="1020" cy="100" r="3" fill="#6366f1"/>
    <line x1="940" y1="120" x2="1040" y2="120" stroke="url(#ogAccent)" stroke-width="1" opacity="0.3"/>
  </g>

  <!-- Subtle dot pattern -->
  <g fill="#a78bfa" opacity="0.04">
    ${Array.from({ length: 6 }, (_, r) =>
      Array.from({ length: 10 }, (_, c) =>
        `<circle cx="${850 + c * 30}" cy="${450 + r * 30}" r="2"/>`
      ).join("")
    ).join("")}
  </g>

  <!-- Angle bracket accent bottom-left -->
  <g font-family="monospace" font-size="40" fill="#2dd4bf" opacity="0.06" font-weight="bold">
    <text x="50" y="100">&lt;/&gt;</text>
  </g>
</svg>`;

// ═══════════════════════════════════════════════════════════════
// 3. FAVICON — abstract angle brackets < > mark
// ═══════════════════════════════════════════════════════════════
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="20" fill="#6366f1"/>
  <path d="M38 32 L22 50 L38 68" stroke="white" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M62 32 L78 50 L62 68" stroke="white" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

// ═══════════════════════════════════════════════════════════════
// 4. PROJECT CARD — browser window mockup, 1280x800
// ═══════════════════════════════════════════════════════════════
const projectSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 800">
  <defs>
    <linearGradient id="projBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e1b4b"/>
    </linearGradient>
    <filter id="projShadow">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#000" flood-opacity="0.6"/>
    </filter>
    <linearGradient id="sidebar" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#334155"/>
    </linearGradient>
  </defs>

  <rect width="1280" height="800" fill="url(#projBg)"/>

  <!-- Glow behind browser -->
  <ellipse cx="640" cy="400" rx="500" ry="350" fill="#6366f1" opacity="0.04"/>

  <!-- Browser window -->
  <g filter="url(#projShadow)">
    <rect x="190" y="120" width="900" height="560" rx="10" fill="#0f172a"/>
    <rect x="190" y="120" width="900" height="40" rx="10" fill="#1e293b"/>
    <rect x="190" y="150" width="900" height="10" fill="#1e293b"/>

    <!-- Window controls -->
    <circle cx="218" cy="140" r="6" fill="#ef4444"/>
    <circle cx="240" cy="140" r="6" fill="#f59e0b"/>
    <circle cx="262" cy="140" r="6" fill="#22c55e"/>

    <!-- URL bar -->
    <rect x="320" y="131" width="400" height="18" rx="9" fill="#334155"/>
    <rect x="340" y="137" width="60" height="6" rx="3" fill="#6366f1" opacity="0.3"/>

    <!-- Browser content -->
    <!-- Left sidebar -->
    <rect x="190" y="160" width="180" height="520" fill="url(#sidebar)"/>
    <!-- Sidebar items -->
    <rect x="210" y="190" width="140" height="12" rx="4" fill="#475569"/>
    <rect x="210" y="215" width="100" height="12" rx="4" fill="#475569"/>
    <rect x="210" y="240" width="120" height="12" rx="4" fill="#475569"/>
    <rect x="210" y="275" width="140" height="12" rx="4" fill="#6366f1" opacity="0.4"/>

    <!-- Main content area -->
    <!-- Stats cards -->
    <g>
      <rect x="400" y="180" width="220" height="100" rx="8" fill="#1e293b"/>
      <rect x="420" y="195" width="80" height="8" rx="4" fill="#475569"/>
      <rect x="420" y="215" width="40" height="24" rx="6" fill="#6366f1" opacity="0.6"/>
      <rect x="420" y="250" width="120" height="6" rx="3" fill="#334155"/>

      <rect x="640" y="180" width="220" height="100" rx="8" fill="#1e293b"/>
      <rect x="660" y="195" width="80" height="8" rx="4" fill="#475569"/>
      <rect x="660" y="215" width="40" height="24" rx="6" fill="#2dd4bf" opacity="0.5"/>
      <rect x="660" y="250" width="120" height="6" rx="3" fill="#334155"/>
    </g>

    <!-- Chart area -->
    <rect x="400" y="300" width="460" height="180" rx="8" fill="#1e293b"/>
    <rect x="420" y="315" width="60" height="8" rx="4" fill="#475569"/>
    <!-- Chart bars -->
    <rect x="430" y="440" width="24" height="20" rx="3" fill="#6366f1" opacity="0.5"/>
    <rect x="465" y="420" width="24" height="40" rx="3" fill="#6366f1" opacity="0.6"/>
    <rect x="500" y="400" width="24" height="60" rx="3" fill="#6366f1" opacity="0.7"/>
    <rect x="535" y="430" width="24" height="30" rx="3" fill="#a78bfa" opacity="0.6"/>
    <rect x="570" y="410" width="24" height="50" rx="3" fill="#a78bfa" opacity="0.7"/>
    <rect x="605" y="390" width="24" height="70" rx="3" fill="#a78bfa" opacity="0.8"/>
    <!-- Horizontal axis -->
    <rect x="430" y="458" width="220" height="1" fill="#334155"/>

    <!-- Data table below chart -->
    <rect x="400" y="500" width="460" height="30" rx="4" fill="#1e293b"/>
    <rect x="410" y="515" width="80" height="6" rx="3" fill="#475569"/>
    <rect x="510" y="515" width="60" height="6" rx="3" fill="#475569"/>
    <rect x="590" y="515" width="60" height="6" rx="3" fill="#475569"/>
    <rect x="670" y="515" width="60" height="6" rx="3" fill="#475569"/>

    <rect x="400" y="535" width="460" height="20" rx="4" fill="#1e293b" opacity="0.6"/>
    <rect x="400" y="560" width="460" height="20" rx="4" fill="#1e293b" opacity="0.6"/>
    <rect x="400" y="585" width="460" height="20" rx="4" fill="#1e293b" opacity="0.6"/>

    <!-- Bottom status bar -->
    <rect x="400" y="620" width="660" height="1" fill="#334155" opacity="0.3"/>
  </g>
</svg>`;

// ═══════════════════════════════════════════════════════════════
// RENDER ALL
// ═══════════════════════════════════════════════════════════════

console.log("Rendering hero background...");
await sharp(Buffer.from(heroSvg)).resize(1920, 1080).webp({ quality: 85 }).toFile("dist/assets/hero/hero-bg.webp");

console.log("Rendering OG image...");
await sharp(Buffer.from(ogSvg)).resize(1200, 630).png().toFile("dist/assets/og/default.png");

console.log("Rendering project card placeholder...");
await sharp(Buffer.from(projectSvg)).resize(1280, 800).webp({ quality: 85 }).toFile("dist/assets/projects/placeholder/cover.webp");

console.log("Rendering favicon SVG & PNGs...");
writeFileSync("dist/assets/favicon/favicon.svg", faviconSvg);
await sharp(Buffer.from(faviconSvg)).resize(512, 512).png().toFile("dist/assets/favicon/favicon-512x512.png");
await sharp(Buffer.from(faviconSvg)).resize(192, 192).png().toFile("dist/assets/favicon/favicon-192x192.png");
await sharp(Buffer.from(faviconSvg)).resize(32, 32).png().toFile("dist/assets/favicon/favicon-32x32.png");
await sharp(Buffer.from(faviconSvg)).resize(16, 16).png().toFile("dist/assets/favicon/favicon-16x16.png");

console.log("✅ All assets generated:");
console.log("  hero/hero-bg.webp           (1920x1080)");
console.log("  og/default.png              (1200x630)");
console.log("  projects/placeholder/cover.webp (1280x800)");
console.log("  favicon/favicon.svg");
console.log("  favicon/favicon-{512,192,32,16}x{512,192,32,16}.png");
