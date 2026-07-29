import sharp from "sharp";
import { writeFileSync, mkdirSync } from "fs";

mkdirSync("dist/assets", { recursive: true });

// ─── Hero Illustration ────────────────────────────────────────────
const heroSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e1b4b"/>
    </linearGradient>
    <linearGradient id="screen" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="accent1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#a78bfa"/>
      <stop offset="100%" stop-color="#6366f1"/>
    </linearGradient>
    <linearGradient id="accent2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#6366f1"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
    <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
    </linearGradient>
    <filter id="neon">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <rect width="800" height="600" fill="url(#bg)" rx="0"/>

  <!-- Grid dots background -->
  <g opacity="0.15">
    ${Array.from({ length: 20 }, (_, row) =>
      Array.from({ length: 27 }, (_, col) =>
        `<circle cx="${col * 30 + 15}" cy="${row * 30 + 15}" r="1.5" fill="#8b5cf6"/>`
      ).join("")
    ).join("")}
  </g>

  <!-- Glow orb -->
  <circle cx="600" cy="200" r="250" fill="url(#glow)"/>

  <!-- Desk surface -->
  <rect x="100" y="430" width="600" height="18" rx="4" fill="#27272a"/>
  <rect x="100" y="448" width="600" height="8" rx="2" fill="#3f3f46"/>

  <!-- Monitor stand -->
  <rect x="365" y="380" width="70" height="50" rx="3" fill="#3f3f46"/>
  <rect x="350" y="425" width="100" height="8" rx="2" fill="#52525b"/>

  <!-- Monitor bezel -->
  <rect x="180" y="130" width="440" height="250" rx="16" fill="#27272a"/>
  <rect x="192" y="142" width="416" height="226" rx="10" fill="url(#screen)"/>

  <!-- Code lines on screen -->
  <g font-family="monospace" font-size="12" filter="url(#neon)">
    <text x="210" y="175" fill="#a78bfa">&lt;div</text>
    <text x="225" y="192" fill="#c4b5fd">className</text>
    <text x="295" y="192" fill="#fbbf24">=</text>
    <text x="305" y="192" fill="#34d399">"hero"</text>
    <text x="345" y="192" fill="#a78bfa">&gt;</text>

    <text x="225" y="212" fill="#67e8f9">&lt;h1&gt;</text>
    <text x="240" y="228" fill="#f472b6">Hi, I'm Rakyzu</text>
    <text x="225" y="244" fill="#67e8f9">&lt;/h1&gt;</text>

    <text x="225" y="264" fill="#a78bfa">&lt;p</text>
    <text x="240" y="280" fill="#c4b5fd">className</text>
    <text x="310" y="280" fill="#fbbf24">=</text>
    <text x="320" y="280" fill="#34d399">"subtitle"</text>
    <text x="370" y="280" fill="#a78bfa">&gt;</text>
    <text x="240" y="296" fill="#f472b6">Full-stack Developer &amp;</text>
    <text x="240" y="312" fill="#f472b6">UI/UX Designer</text>
    <text x="225" y="328" fill="#a78bfa">&lt;/p&gt;</text>

    <text x="210" y="348" fill="#a78bfa">&lt;/div&gt;</text>
  </g>

  <!-- Screen glow reflection -->
  <rect x="192" y="142" width="416" height="226" rx="10" fill="url(#accent1)" opacity="0.04"/>

  <!-- Keyboard -->
  <g transform="translate(280, 440)">
    ${"█████████████████████".split("").map((_, i) =>
      `<rect x="${i * 9}" y="0" width="7" height="5" rx="1" fill="#3f3f46"/>`
    ).join("")}
    ${"██████████████████".split("").map((_, i) =>
      `<rect x="${i * 9 + 13}" y="7" width="7" height="5" rx="1" fill="#3f3f46"/>`
    ).join("")}
    ${"███████████████████".split("").map((_, i) =>
      `<rect x="${i * 9 + 5}" y="14" width="7" height="5" rx="1" fill="#3f3f46"/>`
    ).join("")}
  </g>

  <!-- Coffee cup -->
  <g transform="translate(660, 390)">
    <rect x="10" y="10" width="24" height="28" rx="3" fill="#52525b"/>
    <path d="M34 18 Q42 18 42 24 Q42 30 34 30" fill="none" stroke="#52525b" stroke-width="3"/>
    <rect x="14" y="14" width="16" height="20" rx="2" fill="#1e1b4b"/>
    <ellipse cx="22" cy="18" rx="6" ry="3" fill="#a78bfa" opacity="0.6"/>
    <!-- Steam -->
    <path d="M16 8 Q18 2 20 8" fill="none" stroke="#a78bfa" stroke-width="1.5" opacity="0.4"/>
    <path d="M22 6 Q24 1 26 6" fill="none" stroke="#a78bfa" stroke-width="1.5" opacity="0.3"/>
  </g>

  <!-- Plant -->
  <g transform="translate(130, 370)">
    <rect x="15" y="28" width="30" height="34" rx="3" fill="#3f3f46"/>
    <rect x="12" y="58" width="36" height="6" rx="2" fill="#52525b"/>
    <!-- Leaves -->
    <path d="M30 28 Q20 10 30 2 Q40 10 30 28" fill="#22c55e" opacity="0.8"/>
    <path d="M30 28 Q12 18 18 8 Q24 16 30 28" fill="#16a34a" opacity="0.7"/>
    <path d="M30 28 Q48 18 42 8 Q36 16 30 28" fill="#15803d" opacity="0.6"/>
    <path d="M30 28 Q22 12 28 4" fill="none" stroke="#22c55e" stroke-width="1" opacity="0.5"/>
    <path d="M30 28 Q38 12 32 4" fill="none" stroke="#15803d" stroke-width="1" opacity="0.5"/>
  </g>

  <!-- Floating code brackets -->
  <g opacity="0.3" filter="url(#neon)">
    <text x="70" y="140" font-family="monospace" font-size="40" fill="#a78bfa" font-weight="bold">{ }</text>
    <text x="680" y="320" font-family="monospace" font-size="30" fill="#6366f1" font-weight="bold">&lt;/&gt;</text>
    <text x="60" y="380" font-family="monospace" font-size="24" fill="#3b82f6" font-weight="bold">{ }</text>
  </g>

  <!-- Floating geometric shapes -->
  <circle cx="720" cy="120" r="12" fill="none" stroke="#a78bfa" stroke-width="2" opacity="0.4"/>
  <circle cx="740" cy="140" r="6" fill="#a78bfa" opacity="0.3"/>
  <rect x="60" y="160" width="16" height="16" rx="4" fill="none" stroke="#6366f1" stroke-width="2" opacity="0.3"/>
  <polygon points="710,270 722,295 698,295" fill="none" stroke="#3b82f6" stroke-width="2" opacity="0.3"/>

  <!-- Small dots -->
  <circle cx="100" cy="230" r="3" fill="#a78bfa" opacity="0.4"/>
  <circle cx="700" cy="350" r="3" fill="#6366f1" opacity="0.4"/>
  <circle cx="150" cy="310" r="2" fill="#3b82f6" opacity="0.3"/>
  <circle cx="680" cy="170" r="2" fill="#a78bfa" opacity="0.3"/>
</svg>`;

// ─── Male Avatar ──────────────────────────────────────────────────
const avatarSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#8b5cf6"/>
      <stop offset="50%" stop-color="#6366f1"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
    <linearGradient id="hair-grad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1c1917"/>
      <stop offset="100%" stop-color="#292524"/>
    </linearGradient>
    <linearGradient id="shirt-grad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
  </defs>

  <!-- Background circle -->
  <circle cx="200" cy="200" r="195" fill="url(#bg)" opacity="0.15"/>
  <circle cx="200" cy="200" r="190" fill="none" stroke="url(#bg)" stroke-width="4" opacity="0.6"/>

  <!-- Glow -->
  <circle cx="200" cy="140" r="100" fill="url(#bg)" opacity="0.08"/>

  <!-- Neck -->
  <rect x="175" y="250" width="50" height="40" rx="5" fill="#fcd9b6"/>

  <!-- Shirt / Collar -->
  <path d="M160 290 L175 260 L225 260 L240 290 L200 310 Z" fill="url(#shirt-grad)"/>
  <path d="M190 260 L200 280 L210 260" fill="none" stroke="#334155" stroke-width="1.5"/>
  <path d="M190 270 L200 295 L210 270" fill="#1e293b"/>

  <!-- Head -->
  <ellipse cx="200" cy="200" rx="65" ry="75" fill="#fcd9b6"/>

  <!-- Hair -->
  <path d="M135 190 Q135 100 200 95 Q265 100 265 190 Q260 130 200 125 Q140 130 135 190 Z" fill="url(#hair-grad)"/>
  <!-- Hair top volume -->
  <path d="M150 150 Q160 90 200 85 Q240 90 250 150 Q245 105 200 100 Q155 105 150 150 Z" fill="url(#hair-grad)"/>
  <!-- Hair sides -->
  <path d="M135 190 Q133 175 138 160 Q140 155 145 160 Q140 175 142 190" fill="url(#hair-grad)"/>
  <path d="M265 190 Q267 175 262 160 Q260 155 255 160 Q260 175 258 190" fill="url(#hair-grad)"/>

  <!-- Eyebrows -->
  <path d="M168 175 Q178 169 190 172" fill="none" stroke="#292524" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M210 172 Q222 169 232 175" fill="none" stroke="#292524" stroke-width="2.5" stroke-linecap="round"/>

  <!-- Eyes -->
  <ellipse cx="179" cy="190" rx="9" ry="6" fill="white"/>
  <ellipse cx="221" cy="190" rx="9" ry="6" fill="white"/>
  <circle cx="179" cy="190" r="4" fill="#1c1917"/>
  <circle cx="221" cy="190" r="4" fill="#1c1917"/>
  <!-- Eye shine -->
  <circle cx="181" cy="188" r="1.5" fill="white"/>
  <circle cx="223" cy="188" r="1.5" fill="white"/>

  <!-- Glasses -->
  <rect x="166" y="182" width="26" height="18" rx="5" fill="none" stroke="#52525b" stroke-width="2.5"/>
  <rect x="208" y="182" width="26" height="18" rx="5" fill="none" stroke="#52525b" stroke-width="2.5"/>
  <path d="M192 191 Q200 195 208 191" fill="none" stroke="#52525b" stroke-width="2"/>
  <line x1="166" y1="191" x2="157" y2="188" stroke="#52525b" stroke-width="2"/>
  <line x1="234" y1="191" x2="243" y2="188" stroke="#52525b" stroke-width="2"/>

  <!-- Nose -->
  <path d="M200 195 Q205 208 200 212" fill="none" stroke="#e8b889" stroke-width="2" stroke-linecap="round"/>

  <!-- Smile -->
  <path d="M185 222 Q200 234 215 222" fill="none" stroke="#c4946d" stroke-width="2.5" stroke-linecap="round"/>

  <!-- Ear outlines -->
  <ellipse cx="135" cy="195" rx="6" ry="10" fill="#fcd9b6" stroke="#e8b889" stroke-width="1"/>
  <ellipse cx="265" cy="195" rx="6" ry="10" fill="#fcd9b6" stroke="#e8b889" stroke-width="1"/>

  <!-- Jaw line subtle -->
  <path d="M150 230 Q200 265 250 230" fill="none" stroke="#e8b889" stroke-width="1" opacity="0.5"/>
</svg>`;

// ─── Render to PNG ────────────────────────────────────────────────
console.log("Rendering hero illustration...");
await sharp(Buffer.from(heroSvg)).resize(1920, 1080).png().toFile("dist/assets/hero.png");

console.log("Rendering profile avatar...");
await sharp(Buffer.from(avatarSvg)).resize(400, 400).png().toFile("dist/assets/profile.png");

console.log("✅ Images generated:");
console.log("  dist/assets/hero.png   (1920x1080)");
console.log("  dist/assets/profile.png (400x400)");
