const BOUQUET_SVG = `
  <defs>
    <style>
      .b-line { stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; fill: none; }
      .b-fine { stroke-width: 0.9; }
      .b-thin { stroke-width: 1.2; }
      .b-mid  { stroke-width: 1.6; }
      .b-bold { stroke-width: 2.2; }
    </style>
  </defs>

  <!-- VASE -->
  <g class="b-vase">
    <path class="b-line b-mid"
      d="M 224 820
         C 218 760, 226 720, 248 690
         L 352 690
         C 374 720, 382 760, 376 820 Z" />
    <path class="b-line b-fine"
      d="M 232 786 Q 250 782 268 786 Q 286 790 304 786 Q 322 782 340 786 Q 358 790 368 786" />
    <g opacity="0.45">
      <line class="b-line b-fine" x1="278" y1="690" x2="284" y2="800" />
      <line class="b-line b-fine" x1="298" y1="690" x2="302" y2="800" />
      <line class="b-line b-fine" x1="318" y1="690" x2="322" y2="800" />
      <line class="b-line b-fine" x1="288" y1="690" x2="294" y2="800" />
      <line class="b-line b-fine" x1="308" y1="690" x2="314" y2="800" />
    </g>
    <line class="b-line b-fine" x1="60" y1="830" x2="540" y2="830" opacity="0.6" />
    <path class="b-line b-fine" d="M 232 720 C 230 750, 232 780, 236 810" opacity="0.5" />
  </g>

  <!-- TWINE -->
  <g class="b-twine">
    <path class="b-line b-thin" d="M 260 665 Q 300 678 340 665" />
    <path class="b-line b-fine" d="M 264 672 Q 300 684 336 672" />
    <path class="b-line b-thin" d="M 332 672 Q 348 700 344 740 Q 342 760 350 770" />
    <path class="b-line b-fine" d="M 268 672 Q 252 700 258 736" />
  </g>

  <!-- STEMS -->
  <g class="b-stems">
    <path class="b-line b-mid" d="M 300 660 Q 296 470 302 290" />
    <path class="b-line b-thin" d="M 300 660 Q 270 530 220 430 Q 195 380 178 340" />
    <path class="b-line b-thin" d="M 300 660 Q 252 540 196 462 Q 162 415 142 380" />
    <path class="b-line b-fine" d="M 300 660 Q 240 510 168 390" />
    <path class="b-line b-thin" d="M 300 660 Q 330 530 380 432 Q 408 380 422 348" />
    <path class="b-line b-thin" d="M 300 660 Q 348 540 404 462 Q 442 412 462 374" />
    <path class="b-line b-fine" d="M 300 660 Q 360 510 432 388" />
    <path class="b-line b-fine" d="M 300 660 Q 286 510 268 380" />
    <path class="b-line b-fine" d="M 300 660 Q 316 510 334 380" />
  </g>

  <!-- TALL GRASSES -->
  <g class="b-grasses">
    <path class="b-line b-fine" d="M 300 660 Q 252 420 198 220 Q 190 180 196 138" />
    <path class="b-line b-fine" d="M 300 660 Q 268 440 244 230 Q 240 190 252 150" />
    <path class="b-line b-fine" d="M 300 660 Q 348 420 404 220 Q 412 180 406 138" />
    <path class="b-line b-fine" d="M 300 660 Q 332 440 358 230 Q 364 192 354 150" />
    <path class="b-line b-fine" d="M 300 660 Q 300 360 304 90" />

    <g transform="translate(196 138)">
      <g stroke="currentColor" fill="none" stroke-width="0.7" stroke-linecap="round">
        <path d="M 0 0 L -14 -28" /><path d="M 0 0 L -6 -32" /><path d="M 0 0 L 4 -34" />
        <path d="M 0 0 L 14 -28" /><path d="M 0 0 L -22 -16" /><path d="M 0 0 L 22 -18" />
        <path d="M 0 0 L -10 -20" /><path d="M 0 0 L 12 -22" />
        <circle cx="-14" cy="-28" r="1.2" fill="currentColor" />
        <circle cx="-6" cy="-32" r="1.2" fill="currentColor" />
        <circle cx="4" cy="-34" r="1.2" fill="currentColor" />
        <circle cx="14" cy="-28" r="1.2" fill="currentColor" />
        <circle cx="-22" cy="-16" r="1.2" fill="currentColor" />
        <circle cx="22" cy="-18" r="1.2" fill="currentColor" />
      </g>
    </g>
    <g transform="translate(252 150)">
      <g stroke="currentColor" fill="none" stroke-width="0.7" stroke-linecap="round">
        <path d="M 0 0 L -8 -24" /><path d="M 0 0 L 0 -30" /><path d="M 0 0 L 10 -26" />
        <path d="M 0 0 L -16 -14" /><path d="M 0 0 L 16 -16" />
        <circle cx="-8" cy="-24" r="1.1" fill="currentColor" />
        <circle cx="0" cy="-30" r="1.1" fill="currentColor" />
        <circle cx="10" cy="-26" r="1.1" fill="currentColor" />
        <circle cx="-16" cy="-14" r="1.1" fill="currentColor" />
        <circle cx="16" cy="-16" r="1.1" fill="currentColor" />
      </g>
    </g>
    <g transform="translate(406 138)">
      <g stroke="currentColor" fill="none" stroke-width="0.7" stroke-linecap="round">
        <path d="M 0 0 L 14 -28" /><path d="M 0 0 L 6 -32" /><path d="M 0 0 L -4 -34" />
        <path d="M 0 0 L -14 -28" /><path d="M 0 0 L 22 -16" /><path d="M 0 0 L -22 -18" />
        <path d="M 0 0 L 10 -20" /><path d="M 0 0 L -12 -22" />
        <circle cx="14" cy="-28" r="1.2" fill="currentColor" />
        <circle cx="6" cy="-32" r="1.2" fill="currentColor" />
        <circle cx="-4" cy="-34" r="1.2" fill="currentColor" />
        <circle cx="-14" cy="-28" r="1.2" fill="currentColor" />
        <circle cx="22" cy="-16" r="1.2" fill="currentColor" />
        <circle cx="-22" cy="-18" r="1.2" fill="currentColor" />
      </g>
    </g>
    <g transform="translate(354 150)">
      <g stroke="currentColor" fill="none" stroke-width="0.7" stroke-linecap="round">
        <path d="M 0 0 L 8 -24" /><path d="M 0 0 L 0 -30" /><path d="M 0 0 L -10 -26" />
        <path d="M 0 0 L 16 -14" /><path d="M 0 0 L -16 -16" />
        <circle cx="8" cy="-24" r="1.1" fill="currentColor" />
        <circle cx="0" cy="-30" r="1.1" fill="currentColor" />
        <circle cx="-10" cy="-26" r="1.1" fill="currentColor" />
        <circle cx="16" cy="-14" r="1.1" fill="currentColor" />
        <circle cx="-16" cy="-16" r="1.1" fill="currentColor" />
      </g>
    </g>
    <g transform="translate(304 90)">
      <g stroke="currentColor" fill="none" stroke-width="0.7" stroke-linecap="round">
        <path d="M 0 0 L 0 -32" /><path d="M 0 0 L -10 -28" /><path d="M 0 0 L 10 -28" />
        <path d="M 0 0 L -18 -14" /><path d="M 0 0 L 18 -14" />
        <circle cx="0" cy="-32" r="1.2" fill="currentColor" />
        <circle cx="-10" cy="-28" r="1.2" fill="currentColor" />
        <circle cx="10" cy="-28" r="1.2" fill="currentColor" />
      </g>
    </g>
  </g>

  <!-- EUCALYPTUS -->
  <g class="b-extra">
    <path class="b-line b-thin" d="M 300 660 Q 240 600 180 562 Q 140 540 100 540" />
    <g fill="color-mix(in oklch, currentColor 10%, transparent)" stroke="currentColor" stroke-width="0.9">
      <ellipse cx="230" cy="612" rx="10" ry="7" transform="rotate(-30 230 612)" />
      <ellipse cx="206" cy="600" rx="10" ry="7" transform="rotate(-20 206 600)" />
      <ellipse cx="182" cy="582" rx="10" ry="7" transform="rotate(-10 182 582)" />
      <ellipse cx="160" cy="568" rx="10" ry="7" transform="rotate(-4 160 568)" />
      <ellipse cx="138" cy="552" rx="9" ry="6.5" transform="rotate(0 138 552)" />
      <ellipse cx="118" cy="544" rx="9" ry="6.5" transform="rotate(6 118 544)" />
      <ellipse cx="248" cy="608" rx="9" ry="6.5" transform="rotate(20 248 608)" />
      <ellipse cx="224" cy="592" rx="9" ry="6.5" transform="rotate(30 224 592)" />
      <ellipse cx="200" cy="578" rx="9" ry="6.5" transform="rotate(36 200 578)" />
      <ellipse cx="176" cy="562" rx="9" ry="6.5" transform="rotate(40 176 562)" />
      <ellipse cx="152" cy="546" rx="9" ry="6.5" transform="rotate(40 152 546)" />
    </g>
    <path class="b-line b-thin" d="M 300 660 Q 364 600 432 562 Q 472 540 506 540" />
    <g fill="color-mix(in oklch, currentColor 10%, transparent)" stroke="currentColor" stroke-width="0.9">
      <ellipse cx="372" cy="612" rx="10" ry="7" transform="rotate(30 372 612)" />
      <ellipse cx="396" cy="600" rx="10" ry="7" transform="rotate(20 396 600)" />
      <ellipse cx="420" cy="582" rx="10" ry="7" transform="rotate(10 420 582)" />
      <ellipse cx="444" cy="568" rx="10" ry="7" transform="rotate(4 444 568)" />
      <ellipse cx="466" cy="552" rx="9" ry="6.5" transform="rotate(0 466 552)" />
      <ellipse cx="488" cy="544" rx="9" ry="6.5" transform="rotate(-6 488 544)" />
      <ellipse cx="356" cy="608" rx="9" ry="6.5" transform="rotate(-20 356 608)" />
      <ellipse cx="380" cy="592" rx="9" ry="6.5" transform="rotate(-30 380 592)" />
      <ellipse cx="404" cy="578" rx="9" ry="6.5" transform="rotate(-36 404 578)" />
      <ellipse cx="428" cy="562" rx="9" ry="6.5" transform="rotate(-40 428 562)" />
      <ellipse cx="452" cy="546" rx="9" ry="6.5" transform="rotate(-40 452 546)" />
    </g>
  </g>

  <!-- AMARANTHUS -->
  <g class="b-extra">
    <path class="b-line b-fine" d="M 220 460 Q 218 500 220 540 Q 222 580 226 620" />
    <g fill="color-mix(in oklch, currentColor 22%, transparent)">
      <circle cx="220" cy="476" r="1.6" /><circle cx="218" cy="488" r="1.8" />
      <circle cx="222" cy="500" r="1.6" /><circle cx="219" cy="512" r="1.9" />
      <circle cx="221" cy="524" r="1.7" /><circle cx="220" cy="536" r="1.9" />
      <circle cx="223" cy="548" r="1.6" /><circle cx="222" cy="560" r="1.8" />
      <circle cx="225" cy="572" r="1.7" /><circle cx="224" cy="584" r="1.9" />
      <circle cx="226" cy="596" r="1.6" /><circle cx="226" cy="608" r="1.8" />
    </g>
    <path class="b-line b-fine" d="M 380 460 Q 382 500 380 540 Q 378 580 374 620" />
    <g fill="color-mix(in oklch, currentColor 22%, transparent)">
      <circle cx="380" cy="476" r="1.6" /><circle cx="382" cy="488" r="1.8" />
      <circle cx="378" cy="500" r="1.6" /><circle cx="381" cy="512" r="1.9" />
      <circle cx="379" cy="524" r="1.7" /><circle cx="380" cy="536" r="1.9" />
      <circle cx="377" cy="548" r="1.6" /><circle cx="378" cy="560" r="1.8" />
      <circle cx="375" cy="572" r="1.7" /><circle cx="376" cy="584" r="1.9" />
      <circle cx="374" cy="596" r="1.6" /><circle cx="374" cy="608" r="1.8" />
    </g>
  </g>

  <!-- CLEMATIS LEFT -->
  <g transform="translate(178 340)">
    <g stroke="currentColor" stroke-width="1.1" fill="color-mix(in oklch, currentColor 12%, transparent)" stroke-linejoin="round">
      <path d="M 0 -28 Q 6 -16 0 0 Q -6 -16 0 -28 Z" />
      <path d="M 24 -14 Q 18 -4 0 0 Q 14 -10 24 -14 Z" />
      <path d="M 24 14 Q 14 10 0 0 Q 18 4 24 14 Z" />
      <path d="M 0 28 Q -6 16 0 0 Q 6 16 0 28 Z" />
      <path d="M -24 14 Q -14 10 0 0 Q -18 4 -24 14 Z" />
      <path d="M -24 -14 Q -18 -4 0 0 Q -14 -10 -24 -14 Z" />
    </g>
    <circle cx="0" cy="0" r="3.6" fill="currentColor" opacity="0.7" />
    <g stroke="currentColor" stroke-width="0.6">
      <line x1="0" y1="0" x2="0" y2="-6" /><line x1="0" y1="0" x2="5" y2="-3" />
      <line x1="0" y1="0" x2="5" y2="3" /><line x1="0" y1="0" x2="0" y2="6" />
      <line x1="0" y1="0" x2="-5" y2="3" /><line x1="0" y1="0" x2="-5" y2="-3" />
    </g>
  </g>

  <!-- CLEMATIS RIGHT -->
  <g transform="translate(422 348)">
    <g stroke="currentColor" stroke-width="1.1" fill="color-mix(in oklch, currentColor 12%, transparent)" stroke-linejoin="round">
      <path d="M 0 -26 Q 6 -14 0 0 Q -6 -14 0 -26 Z" />
      <path d="M 22 -12 Q 16 -2 0 0 Q 12 -8 22 -12 Z" />
      <path d="M 22 12 Q 12 8 0 0 Q 16 2 22 12 Z" />
      <path d="M 0 26 Q -6 14 0 0 Q 6 14 0 26 Z" />
      <path d="M -22 12 Q -12 8 0 0 Q -16 2 -22 12 Z" />
      <path d="M -22 -12 Q -16 -2 0 0 Q -12 -8 -22 -12 Z" />
    </g>
    <circle cx="0" cy="0" r="3.4" fill="currentColor" opacity="0.7" />
    <g stroke="currentColor" stroke-width="0.6">
      <line x1="0" y1="0" x2="0" y2="-6" /><line x1="0" y1="0" x2="5" y2="-3" />
      <line x1="0" y1="0" x2="5" y2="3" /><line x1="0" y1="0" x2="0" y2="6" />
      <line x1="0" y1="0" x2="-5" y2="3" /><line x1="0" y1="0" x2="-5" y2="-3" />
    </g>
  </g>

  <!-- FOCAL CHRYSANTHEMUM -->
  <g transform="translate(302 290)">
    <g stroke="currentColor" stroke-width="1" fill="color-mix(in oklch, currentColor 7%, transparent)">
      <ellipse cx="0" cy="-50" rx="9" ry="22" />
      <ellipse cx="18" cy="-46" rx="9" ry="22" transform="rotate(20 18 -46)" />
      <ellipse cx="34" cy="-36" rx="9" ry="22" transform="rotate(40 34 -36)" />
      <ellipse cx="46" cy="-22" rx="9" ry="22" transform="rotate(60 46 -22)" />
      <ellipse cx="50" cy="0" rx="9" ry="22" transform="rotate(80 50 0)" />
      <ellipse cx="46" cy="22" rx="9" ry="22" transform="rotate(100 46 22)" />
      <ellipse cx="34" cy="36" rx="9" ry="22" transform="rotate(120 34 36)" />
      <ellipse cx="18" cy="46" rx="9" ry="22" transform="rotate(140 18 46)" />
      <ellipse cx="0" cy="50" rx="9" ry="22" transform="rotate(160 0 50)" />
      <ellipse cx="-18" cy="46" rx="9" ry="22" transform="rotate(-160 -18 46)" />
      <ellipse cx="-34" cy="36" rx="9" ry="22" transform="rotate(-140 -34 36)" />
      <ellipse cx="-46" cy="22" rx="9" ry="22" transform="rotate(-120 -46 22)" />
      <ellipse cx="-50" cy="0" rx="9" ry="22" transform="rotate(-100 -50 0)" />
      <ellipse cx="-46" cy="-22" rx="9" ry="22" transform="rotate(-80 -46 -22)" />
      <ellipse cx="-34" cy="-36" rx="9" ry="22" transform="rotate(-60 -34 -36)" />
      <ellipse cx="-18" cy="-46" rx="9" ry="22" transform="rotate(-40 -18 -46)" />
    </g>
    <g stroke="currentColor" stroke-width="0.9" fill="color-mix(in oklch, currentColor 14%, transparent)">
      <ellipse cx="0" cy="-26" rx="6" ry="14" />
      <ellipse cx="18" cy="-18" rx="6" ry="14" transform="rotate(35 18 -18)" />
      <ellipse cx="26" cy="0" rx="6" ry="14" transform="rotate(70 26 0)" />
      <ellipse cx="18" cy="18" rx="6" ry="14" transform="rotate(115 18 18)" />
      <ellipse cx="0" cy="26" rx="6" ry="14" transform="rotate(150 0 26)" />
      <ellipse cx="-18" cy="18" rx="6" ry="14" transform="rotate(-145 -18 18)" />
      <ellipse cx="-26" cy="0" rx="6" ry="14" transform="rotate(-110 -26 0)" />
      <ellipse cx="-18" cy="-18" rx="6" ry="14" transform="rotate(-65 -18 -18)" />
    </g>
    <circle r="10" fill="color-mix(in oklch, currentColor 25%, transparent)" stroke="currentColor" stroke-width="1" />
    <circle r="4" fill="currentColor" opacity="0.6" />
  </g>

  <!-- SECONDARY BLOOM -->
  <g transform="translate(360 200)" class="b-extra">
    <g stroke="currentColor" stroke-width="0.9" fill="color-mix(in oklch, currentColor 8%, transparent)">
      <ellipse cx="0" cy="-22" rx="6" ry="14" />
      <ellipse cx="14" cy="-14" rx="6" ry="14" transform="rotate(35 14 -14)" />
      <ellipse cx="22" cy="0" rx="6" ry="14" transform="rotate(70 22 0)" />
      <ellipse cx="14" cy="14" rx="6" ry="14" transform="rotate(115 14 14)" />
      <ellipse cx="0" cy="22" rx="6" ry="14" transform="rotate(150 0 22)" />
      <ellipse cx="-14" cy="14" rx="6" ry="14" transform="rotate(-145 -14 14)" />
      <ellipse cx="-22" cy="0" rx="6" ry="14" transform="rotate(-110 -22 0)" />
      <ellipse cx="-14" cy="-14" rx="6" ry="14" transform="rotate(-65 -14 -14)" />
    </g>
    <circle r="6" fill="color-mix(in oklch, currentColor 25%, transparent)" stroke="currentColor" stroke-width="0.9" />
  </g>

  <!-- GYPSOPHILA -->
  <g class="b-extra">
    <g fill="currentColor" opacity="0.55">
      <circle cx="248" cy="490" r="1.4" /><circle cx="256" cy="496" r="1.6" />
      <circle cx="262" cy="488" r="1.3" /><circle cx="252" cy="502" r="1.5" />
      <circle cx="244" cy="498" r="1.3" /><circle cx="260" cy="504" r="1.4" />
      <circle cx="268" cy="498" r="1.5" /><circle cx="270" cy="510" r="1.3" />
    </g>
  </g>

  <!-- MAKER MARK -->
  <g transform="translate(300 880)" opacity="0.55">
    <line class="b-line b-fine" x1="-90" y1="-12" x2="-26" y2="-12" />
    <line class="b-line b-fine" x1="26" y1="-12" x2="90" y2="-12" />
    <text x="0" y="-9" text-anchor="middle" font-family="'Cormorant Garamond',serif" font-style="italic" font-size="14" fill="currentColor">A · A</text>
  </g>
`;

export function Bouquet() {
  return (
    <svg
      id="bouquet"
      viewBox="0 0 600 900"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      aria-label="Hand-drawn bouquet"
      dangerouslySetInnerHTML={{ __html: BOUQUET_SVG }}
    />
  );
}
