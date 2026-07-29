import sharp from "sharp";
import { mkdirSync } from "fs";

mkdirSync("dist/assets/projects/nimbus", { recursive: true });

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 800">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0B1120"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#6366f1" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#6366f1" stop-opacity="0.01"/>
    </linearGradient>
    <filter id="shadow">
      <feDropShadow dx="0" dy="10" stdDeviation="20" flood-color="#000" flood-opacity="0.6"/>
    </filter>
    <linearGradient id="sidebarBg" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="trendUp" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#22c55e"/>
      <stop offset="100%" stop-color="#16a34a"/>
    </linearGradient>
    <linearGradient id="trendDown" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ef4444"/>
      <stop offset="100%" stop-color="#dc2626"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1280" height="800" fill="url(#bg)"/>
  <circle cx="640" cy="400" r="450" fill="#6366f1" opacity="0.035"/>
  <circle cx="300" cy="600" r="300" fill="#2dd4bf" opacity="0.025"/>

  <!-- 3D tilt transform — slight perspective -->
  <g transform="translate(140, 60) rotate(-1) skewX(-0.5)" filter="url(#shadow)">
    <!-- Browser window -->
    <rect x="0" y="0" width="1000" height="680" rx="12" fill="#0f172a"/>
    <rect x="0" y="0" width="1000" height="46" rx="12" fill="#1e293b"/>
    <rect x="0" y="35" width="1000" height="11" fill="#1e293b"/>

    <!-- Window controls -->
    <circle cx="24" cy="24" r="6" fill="#ef4444"/>
    <circle cx="46" cy="24" r="6" fill="#f59e0b"/>
    <circle cx="68" cy="24" r="6" fill="#22c55e"/>

    <!-- URL bar -->
    <rect x="160" y="16" width="360" height="16" rx="8" fill="#334155"/>
    <rect x="180" y="22" width="80" height="5" rx="2.5" fill="#6366f1" opacity="0.35"/>
    <polygon points="150,24 145,28 155,28" fill="#64748b"/>
    <circle cx="540" cy="24" r="8" fill="#475569"/>
    <rect x="555" y="22" width="30" height="4" rx="2" fill="#475569"/>

    <!-- ─── BROWSER CONTENT ─── -->

    <!-- Left sidebar -->
    <rect x="0" y="46" width="64" height="634" fill="url(#sidebarBg)"/>
    <!-- Sidebar icons -->
    ${[
      [22, 80], [22, 125], [22, 170], [22, 215],
      [22, 270], [22, 315], [22, 360]
    ].map(([x, y]) =>
      `<rect x="${x}" y="${y}" width="20" height="20" rx="5" fill="#475569"/>
       <rect x="${x+4}" y="${y+4}" width="12" height="12" rx="3" fill="#64748b"/>`
    ).join("")}
    <!-- Active sidebar item -->
    <rect x="20" y="125" width="24" height="24" rx="6" fill="#6366f1" opacity="0.2"/>
    <rect x="26" y="131" width="12" height="12" rx="3" fill="#a78bfa"/>
    <line x1="0" y1="137" x2="4" y2="137" stroke="#6366f1" stroke-width="2"/>

    <!-- Top header bar -->
    <rect x="64" y="46" width="936" height="52" fill="#0f172a"/>
    <!-- Page title -->
    <rect x="84" y="66" width="100" height="8" rx="4" fill="#6366f1" opacity="0.6"/>
    <rect x="84" y="80" width="140" height="6" rx="3" fill="#475569"/>
    <!-- Search bar -->
    <rect x="700" y="60" width="180" height="24" rx="12" fill="#1e293b"/>
    <circle cx="714" cy="72" r="4" fill="#475569"/>
    <rect x="724" y="70" width="50" height="4" rx="2" fill="#475569"/>
    <!-- Avatar -->
    <circle cx="920" cy="72" r="12" fill="#6366f1"/>
    <rect x="912" y="70" width="16" height="2" rx="1" fill="white" opacity="0.4"/>
    <rect x="916" y="74" width="8" height="8" rx="4" fill="white" opacity="0.2"/>

    <!-- ─── DASHBOARD CONTENT ─── -->

    <!-- 3 Stat Cards -->
    <!-- Card 1: MRR -->
    <g>
      <rect x="84" y="118" width="216" height="108" rx="10" fill="#1e293b"/>
      <rect x="100" y="130" width="28" height="28" rx="6" fill="#6366f1" opacity="0.15"/>
      <rect x="106" y="136" width="16" height="16" rx="4" fill="#6366f1" opacity="0.4"/>
      <rect x="136" y="134" width="40" height="5" rx="2.5" fill="#64748b"/>
      <text x="100" y="185" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="22" font-weight="700">$12,430</text>
      <rect x="100" y="197" width="50" height="4" rx="2" fill="#22c55e" opacity="0.6"/>
      <rect x="156" y="197" width="30" height="4" rx="2" fill="#64748b"/>
      <rect x="252" y="128" width="36" height="20" rx="4" fill="#22c55e" opacity="0.1"/>
      <polygon points="262,140 270,130 278,140 274,140 274,144 266,144 266,140" fill="#22c55e" opacity="0.7"/>
    </g>

    <!-- Card 2: Active Users -->
    <g>
      <rect x="318" y="118" width="216" height="108" rx="10" fill="#1e293b"/>
      <rect x="334" y="130" width="28" height="28" rx="6" fill="#2dd4bf" opacity="0.15"/>
      <rect x="340" y="136" width="16" height="16" rx="4" fill="#2dd4bf" opacity="0.4"/>
      <rect x="370" y="134" width="50" height="5" rx="2.5" fill="#64748b"/>
      <text x="334" y="185" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="22" font-weight="700">2,847</text>
      <rect x="334" y="197" width="40" height="4" rx="2" fill="#22c55e" opacity="0.6"/>
      <rect x="380" y="197" width="30" height="4" rx="2" fill="#64748b"/>
      <rect x="486" y="128" width="36" height="20" rx="4" fill="#22c55e" opacity="0.1"/>
      <polygon points="496,140 504,130 512,140 508,140 508,144 500,144 500,140" fill="#22c55e" opacity="0.7"/>
    </g>

    <!-- Card 3: Churn Rate -->
    <g>
      <rect x="552" y="118" width="216" height="108" rx="10" fill="#1e293b"/>
      <rect x="568" y="130" width="28" height="28" rx="6" fill="#ef4444" opacity="0.15"/>
      <rect x="574" y="136" width="16" height="16" rx="4" fill="#ef4444" opacity="0.4"/>
      <rect x="604" y="134" width="45" height="5" rx="2.5" fill="#64748b"/>
      <text x="568" y="185" fill="#f1f5f9" font-family="system-ui,sans-serif" font-size="22" font-weight="700">3.2%</text>
      <rect x="568" y="197" width="35" height="4" rx="2" fill="#ef4444" opacity="0.6"/>
      <rect x="608" y="197" width="30" height="4" rx="2" fill="#64748b"/>
      <rect x="720" y="128" width="36" height="20" rx="4" fill="#ef4444" opacity="0.1"/>
      <polygon points="738,140 730,130 722,140 726,140 726,144 734,144 734,140" fill="#ef4444" opacity="0.7"/>
    </g>

    <!-- Line Chart — Revenue Over Time -->
    <g>
      <rect x="84" y="246" width="570" height="260" rx="10" fill="#1e293b"/>
      <rect x="104" y="262" width="120" height="7" rx="3.5" fill="#64748b"/>
      <rect x="104" y="276" width="80" height="5" rx="2.5" fill="#475569"/>
      <!-- Y-axis labels -->
      <text x="104" y="310" fill="#475569" font-family="system-ui,sans-serif" font-size="9">10K</text>
      <text x="104" y="348" fill="#475569" font-family="system-ui,sans-serif" font-size="9">7.5K</text>
      <text x="104" y="386" fill="#475569" font-family="system-ui,sans-serif" font-size="9">5K</text>
      <text x="104" y="424" fill="#475569" font-family="system-ui,sans-serif" font-size="9">2.5K</text>
      <text x="104" y="462" fill="#475569" font-family="system-ui,sans-serif" font-size="9">0</text>
      <!-- Grid lines -->
      ${[320, 358, 396, 434, 472].map(y =>
        `<line x1="140" y1="${y}" x2="630" y2="${y}" stroke="#334155" stroke-width="0.5"/>`
      ).join("")}
      <!-- X-axis labels -->
      <text x="170" y="492" fill="#475569" font-family="system-ui,sans-serif" font-size="9">Jan</text>
      <text x="260" y="492" fill="#475569" font-family="system-ui,sans-serif" font-size="9">Feb</text>
      <text x="350" y="492" fill="#475569" font-family="system-ui,sans-serif" font-size="9">Mar</text>
      <text x="440" y="492" fill="#475569" font-family="system-ui,sans-serif" font-size="9">Apr</text>
      <text x="530" y="492" fill="#475569" font-family="system-ui,sans-serif" font-size="9">May</text>
      <text x="600" y="492" fill="#475569" font-family="system-ui,sans-serif" font-size="9">Jun</text>
      <!-- Area fill under line -->
      <path d="M145 460 L155 440 L190 438 L225 445 L260 420 L295 390 L330 370 L365 340 L400 320 L435 310 L470 290 L505 270 L540 260 L575 265 L610 280 L620 285 L620 460 Z" fill="url(#chartGrad)"/>
      <!-- Main line (indigo) -->
      <path d="M145 460 L155 440 L190 438 L225 445 L260 420 L295 390 L330 370 L365 340 L400 320 L435 310 L470 290 L505 270 L540 260 L575 265 L610 280 L620 285" fill="none" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <!-- Second line (teal) -->
      <path d="M145 450 L155 445 L190 448 L225 455 L260 440 L295 430 L330 415 L365 400 L400 390 L435 380 L470 360 L505 350 L540 340 L575 345 L610 355 L620 360" fill="none" stroke="#2dd4bf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4,3"/>
      <!-- Data dots -->
      <circle cx="540" cy="260" r="3.5" fill="#6366f1" stroke="#1e293b" stroke-width="1.5"/>
      <circle cx="330" cy="370" r="3" fill="#2dd4bf" stroke="#1e293b" stroke-width="1.5"/>
      <!-- Legend -->
      <rect x="550" y="262" width="10" height="10" rx="2" fill="#6366f1"/>
      <rect x="557" y="268" width="30" height="4" rx="2" fill="#64748b"/>
      <rect x="550" y="280" width="10" height="10" rx="2" fill="#2dd4bf"/>
      <rect x="557" y="286" width="30" height="4" rx="2" fill="#64748b"/>
      <!-- Active tooltip -->
      <rect x="515" y="240" width="40" height="18" rx="4" fill="#334155"/>
      <rect x="521" y="246" width="28" height="5" rx="2.5" fill="#6366f1"/>
    </g>

    <!-- Data Table on the right -->
    <g>
      <rect x="672" y="246" width="312" height="260" rx="10" fill="#1e293b"/>
      <rect x="692" y="262" width="80" height="7" rx="3.5" fill="#64748b"/>
      <!-- Table header -->
      <rect x="692" y="285" width="100" height="6" rx="3" fill="#475569"/>
      <rect x="810" y="285" width="60" height="6" rx="3" fill="#475569"/>
      <rect x="880" y="285" width="50" height="6" rx="3" fill="#475569"/>
      <rect x="940" y="285" width="30" height="6" rx="3" fill="#475569"/>
      <!-- Divider -->
      <line x1="692" y1="298" x2="892" y2="298" stroke="#334155" stroke-width="0.5"/>
      <!-- Table rows -->
      ${[0, 1, 2, 3, 4, 5].map(i => {
        const y = 310 + i * 26;
        const colors = ["#6366f1", "#2dd4bf", "#a78bfa", "#f59e0b", "#ef4444", "#22c55e"];
        const c = colors[i % colors.length];
        return `
          <circle cx="700" cy="${y + 5}" r="4" fill="${c}" opacity="0.4"/>
          <rect x="712" y="${y + 1}" width="80" height="5" rx="2.5" fill="#475569"/>
          <rect x="808" y="${y + 1}" width="40" height="5" rx="2.5" fill="#475569"/>
          <rect x="880" y="${y + 1}" width="30" height="5" rx="2.5" fill="${i === 2 ? '#22c55e' : '#475569'}"/>
          <rect x="940" y="${y + 1}" width="20" height="5" rx="2.5" fill="#475569"/>
          <line x1="692" y1="${y + 14}" x2="892" y2="${y + 14}" stroke="#1e293b" stroke-width="0.5"/>
        `;
      }).join("")}
      <!-- Pagination dots -->
      <circle cx="760" cy="472" r="3" fill="#6366f1"/>
      <circle cx="775" cy="472" r="3" fill="#475569"/>
      <circle cx="790" cy="472" r="3" fill="#475569"/>
    </g>

    <!-- Bottom status bar -->
    <rect x="64" y="518" width="936" height="1" fill="#1e293b"/>
    <rect x="84" y="528" width="80" height="5" rx="2.5" fill="#475569"/>
    <rect x="700" y="528" width="60" height="5" rx="2.5" fill="#475569"/>
    <rect x="770" y="528" width="60" height="5" rx="2.5" fill="#475569"/>
  </g>

  <!-- Rim light (subtle highlight on top edge) -->
  <g opacity="0.08">
    <line x1="140" y1="60" x2="1140" y2="60" stroke="#a78bfa" stroke-width="1"/>
  </g>
</svg>`;

console.log("Rendering Nimbus project card...");
await sharp(Buffer.from(svg)).resize(1280, 800).webp({ quality: 88 }).toFile("dist/assets/projects/nimbus/cover.webp");
console.log("✅ dist/assets/projects/nimbus/cover.webp (1280x800)");
