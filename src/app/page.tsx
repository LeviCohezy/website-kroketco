"use client";

import { useState } from "react";

// GitHub Pages serves this project from a subpath (e.g. "/website-kroketco").
// next/font, next/image and next/link get the basePath automatically, but raw
// string asset paths do not — so we prefix them manually. Empty in local dev.
const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (p: string) => `${BP}${p}`;

type Product = {
  img: string;
  name: string;
  tags: string[];
  shape: string;
};

const PRODUCTS: Product[] = [
  {
    img: asset("/assets/hero-product.png"),
    name: "Emmental Kaaskroket",
    tags: ["Vegetarisch", "Halal", "Diepvries vers"],
    shape: asset("/assets/shapes/shape1.png"),
  },
  {
    img: asset("/assets/hero-product-3.png"),
    name: "Groendal Groentekroket",
    tags: ["Vegetarisch", "Vegan", "Snel klaar"],
    shape: asset("/assets/shapes/shape5.png"),
  },
  {
    img: asset("/assets/hero-product-2.png"),
    name: "Belgische Verse Purée",
    tags: ["Vegetarisch", "Glutenvrij"],
    shape: asset("/assets/shapes/shape11.png"),
  },
  {
    img: asset("/assets/hero-product-4.png"),
    name: "Noordzee Garnaalkroket",
    tags: ["Ambachtelijk", "Diepvries vers"],
    shape: asset("/assets/shapes/shape6.png"),
  },
  {
    img: asset("/assets/hero-product-7.png"),
    name: "Gebraden Kipkroket",
    tags: ["Halal", "Diepvries vers"],
    shape: asset("/assets/shapes/shape8.png"),
  },
  {
    img: asset("/assets/hero-product-6.png"),
    name: "Superano Kroket",
    tags: ["Ambachtelijk", "Halal"],
    shape: asset("/assets/shapes/shape12.png"),
  },
  {
    img: asset("/assets/hero-product-5.png"),
    name: "Amandel Kroket",
    tags: ["Vegetarisch", "Vegan"],
    shape: asset("/assets/shapes/shape15.png"),
  },
];

const UGC_IMAGES = [1, 2, 3, 4, 5, 6, 7, 8].map(
  (n) => asset(`/assets/UGC/ugc${n}.png`),
);

type Recipe = { img: string; title: string; time: string; bg: string };
const RECIPES: Recipe[] = [
  { img: asset("/assets/UGC/ugc3.png"), title: "Kroket Bites Plank", time: "10 min", bg: "#F5C542" },
  { img: asset("/assets/UGC/ugc4.png"), title: "Krokdog Deluxe", time: "6 min", bg: "#8FE6FF" },
  { img: asset("/assets/UGC/ugc5.png"), title: "Purée & Kroket Bowl", time: "15 min", bg: "#A98BEF" },
  { img: asset("/assets/UGC/ugc6.png"), title: "Superano met Frietjes", time: "40 min", bg: "#8FE6FF" },
  { img: asset("/assets/UGC/ugc7.png"), title: "Vegan Kroket Wrap", time: "12 min", bg: "#C7E36A" },
  { img: asset("/assets/UGC/ugc8.png"), title: "Garnaal Kroket Toast", time: "8 min", bg: "#FF8D8D" },
];

const SOCIAL = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "TikTok", href: "#" },
];

type NewsItem = {
  img: string;
  date: string;
  title: string;
  excerpt: string;
};
const NEWS_TABS = [
  { label: "Laatste nieuws", color: "var(--kc-golden)" },
  { label: "Bedrijfsnieuws", color: "var(--kc-blue)" },
  { label: "Productnieuws", color: "var(--kc-lavender)" },
];
const NEWS: NewsItem[] = [
  {
    img: asset("/assets/UGC/ugc1.png"),
    date: "5 augustus 2025",
    title: "Ons kleine verhaal wint groot op de marketing awards",
    excerpt:
      "De “Groeien met jou”-campagne, over het belang van familie en verbinding, werd bekroond met zilver en brons.",
  },
  {
    img: asset("/assets/UGC/ugc2.png"),
    date: "22 juli 2025",
    title: "Nieuwe vegan kroket verovert de vriesvakken",
    excerpt:
      "Onze plantaardige kroket is nu verkrijgbaar bij winkels door heel België en Nederland.",
  },
  {
    img: asset("/assets/UGC/ugc7.png"),
    date: "10 juni 2025",
    title: "Kroketco opent een tweede ambachtelijke keuken",
    excerpt:
      "Meer ruimte, dezelfde zorg — zodat we nog meer families vers laten genieten.",
  },
];

// Category words for the follow-band marquee.
const FOLLOW_CATS = [
  { label: "Kaas", color: "var(--kc-blue)" },
  { label: "Vega", color: "var(--kc-lime)" },
  { label: "Rollen", color: "var(--kc-orange)" },
  { label: "Snacks", color: "var(--maroon)" },
  { label: "Purée", color: "var(--kc-golden)" },
];

type AttrCat = {
  word: string;
  left: { img: string; shape: string };
  right: { img: string; shape: string };
};

const ATTR: AttrCat[] = [
  {
    word: "Meatlover",
    left: { img: asset("/assets/hero-product-4.png"), shape: asset("/assets/shapes/shape6.png") },
    right: { img: asset("/assets/hero-product-7.png"), shape: asset("/assets/shapes/shape8.png") },
  },
  {
    word: "Cheesy",
    left: { img: asset("/assets/hero-product.png"), shape: asset("/assets/shapes/shape1.png") },
    right: { img: asset("/assets/hero-product-6.png"), shape: asset("/assets/shapes/shape12.png") },
  },
  {
    word: "Vegan",
    left: { img: asset("/assets/hero-product-3.png"), shape: asset("/assets/shapes/shape5.png") },
    right: { img: asset("/assets/hero-product-5.png"), shape: asset("/assets/shapes/shape15.png") },
  },
  {
    word: "Culinair",
    left: { img: asset("/assets/hero-product-6.png"), shape: asset("/assets/shapes/shape12.png") },
    right: { img: asset("/assets/hero-product-4.png"), shape: asset("/assets/shapes/shape16.png") },
  },
  {
    word: "Potato",
    left: { img: asset("/assets/hero-product-2.png"), shape: asset("/assets/shapes/shape11.png") },
    right: { img: asset("/assets/hero-product.png"), shape: asset("/assets/shapes/shape10.png") },
  },
];

function SideProduct({
  img,
  shape,
  side,
  vpos,
}: {
  img: string;
  shape: string;
  side: "left" | "right";
  vpos: "top" | "bottom";
}) {
  return (
    <div
      className={`pointer-events-none absolute z-10 hidden h-[320px] w-[340px] items-center justify-center md:flex ${
        side === "left" ? "left-[-30px]" : "right-[-30px]"
      } ${vpos === "top" ? "top-[-20px]" : "bottom-[-20px]"}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        key={shape}
        src={shape}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="spin-slow absolute h-[320px] w-[320px] object-contain"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        key={img}
        src={img}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="relative h-[220px] w-auto object-contain drop-shadow-2xl"
        style={{ animation: "pop 400ms ease-out" }}
      />
    </div>
  );
}

function CheckTag({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-1.5 text-[15px] font-bold text-[var(--kc-green)]">
      <span className="grid h-[18px] w-[18px] place-items-center rounded-full bg-[var(--kc-orange)]">
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
          <path
            d="M2.5 6.3 5 8.5 9.5 3.5"
            stroke="#fff"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {label}
    </span>
  );
}

function ProductCard({
  p,
  showShape,
  onHover,
  onLeave,
  onSelect,
}: {
  p: Product;
  showShape: boolean;
  onHover: () => void;
  onLeave: () => void;
  onSelect: () => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={p.name}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onFocus={onHover}
      onBlur={onLeave}
      className="group flex w-[300px] shrink-0 cursor-pointer flex-col items-center rounded-2xl outline-offset-4"
    >
      <div className="relative flex h-[320px] w-full items-center justify-center">
        {/* rotating shape: shows for the middle product, or the hovered one (grows in) */}
        <div
          className={`pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 ease-out ${
            showShape ? "scale-100" : "scale-0"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.shape}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="spin-slow h-full w-full object-contain"
          />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.img}
          alt={p.name}
          loading="lazy"
          decoding="async"
          className="relative z-10 h-[220px] w-auto max-w-[280px] object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3
        className="mt-3 text-center text-[26px] font-extrabold uppercase leading-none text-[var(--kc-green)]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {p.name}
      </h3>
      <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2">
        {p.tags.map((t) => (
          <CheckTag key={t} label={t} />
        ))}
      </div>
    </div>
  );
}

function ArrowCircle({
  dark = true,
  bg,
  fg,
}: {
  dark?: boolean;
  bg?: string;
  fg?: string;
}) {
  const circleBg = bg ?? (dark ? "#0E4B3A" : "#ffffff");
  const arrow = fg ?? (bg ? "#fff" : dark ? "#fff" : "#0E4B3A");
  return (
    <span
      className="grid h-6 w-6 place-items-center rounded-full"
      style={{ background: circleBg }}
    >
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
        <path
          d="M2.5 6h6M6 3.2 8.9 6 6 8.8"
          stroke={arrow}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function Sparkle({
  size,
  className,
  color = "#ffffff",
}: {
  size: number;
  className?: string;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={{ position: "absolute" }}
    >
      <path
        d="M50 0 C54 30 70 46 100 50 C70 54 54 70 50 100 C46 70 30 54 0 50 C30 46 46 30 50 0Z"
        fill={color}
      />
    </svg>
  );
}

function MapleBadge() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <defs>
        <path
          id="arcTop"
          d="M 50 50 m -39 0 a 39 39 0 1 1 78 0"
          fill="none"
        />
        <path
          id="arcBottom"
          d="M 50 50 m -33 0 a 33 33 0 1 0 66 0"
          fill="none"
        />
      </defs>
      <circle cx="50" cy="50" r="49" fill="#a9c63b" />
      <text
        fontSize="8.2"
        fontWeight="700"
        letterSpacing="0.5"
        fill="#3a2a12"
        fontFamily="var(--font-sans)"
      >
        <textPath href="#arcTop" startOffset="8%">
          PROUD FAMILY RECIPE · MADE IN CANADA
        </textPath>
      </text>
      <text
        fontSize="7.4"
        fontWeight="700"
        letterSpacing="0.4"
        fill="#3a2a12"
        fontFamily="var(--font-sans)"
      >
        <textPath href="#arcBottom" startOffset="4%">
          FABRIQUÉ AU CANADA · RECETTE FIÈREMENT
        </textPath>
      </text>
      <path
        transform="translate(50 50) scale(0.42) translate(-50 -52)"
        fill="#3a1e4a"
        d="M89.6 61.3l-8.4-2.4c-.7-.2-1-.9-.6-1.5l6.9-14.2c.4-.8-.4-1.7-1.3-1.4l-4.9 1.6c-.6.2-1.2-.2-1.3-.8l-1.7-8.9c-.1-.7-1-.9-1.5-.4l-9.6 10.3c-.6.6-1.6.1-1.5-.7l3.4-24.6c.1-.9-.9-1.5-1.6-1l-6.4 4.6c-.5.4-1.2.2-1.5-.3L50 6.9l-7.5 14.6c-.3.5-1 .7-1.5.3l-6.4-4.6c-.7-.5-1.7.1-1.6 1l3.4 24.6c.1.8-.9 1.3-1.5.7l-9.6-10.3c-.5-.5-1.4-.3-1.5.4l-1.7 8.9c-.1.6-.7 1-1.3.8l-4.9-1.6c-.9-.3-1.7.6-1.3 1.4l6.9 14.2c.3.6 0 1.3-.6 1.5l-8.4 2.4c-.9.3-1 1.5-.2 1.9l20.7 9.3c.6.3.9 1 .7 1.6l-1.5 5.3c-.2.6.3 1.3 1 1.2l16.8-2.9c.5-.1 1 .3 1 .8l-.5 18.3h4l-.5-18.3c0-.5.5-.9 1-.8l16.8 2.9c.7.1 1.2-.6 1-1.2l-1.5-5.3c-.2-.6.1-1.3.7-1.6l20.7-9.3c.8-.4.7-1.6-.2-1.9z"
      />
    </svg>
  );
}

function CatIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 100 100">
      <path
        d="M50 4 58 34 88 26 66 50 88 74 58 66 50 96 42 66 12 74 34 50 12 26 42 34Z"
        fill={color}
      />
    </svg>
  );
}

function MadeWithBadge() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <defs>
        <path id="mwTop" d="M 50 50 m -39 0 a 39 39 0 1 1 78 0" fill="none" />
        <path id="mwBottom" d="M 50 50 m -32 0 a 32 32 0 1 0 64 0" fill="none" />
      </defs>
      <circle cx="50" cy="50" r="49" fill="#1f5fa6" />
      <text
        fontSize="8.4"
        fontWeight="700"
        letterSpacing="1"
        fill="#eaf3ff"
        fontFamily="var(--font-sans)"
      >
        <textPath href="#mwTop" startOffset="17%">
          MADE WITH REAL
        </textPath>
      </text>
      <text
        fontSize="7.6"
        fontWeight="700"
        letterSpacing="0.8"
        fill="#eaf3ff"
        fontFamily="var(--font-sans)"
      >
        <textPath href="#mwBottom" startOffset="22%">
          FABRIQUÉ AVEC
        </textPath>
      </text>
      <text
        x="50"
        y="57"
        textAnchor="middle"
        fontSize="19"
        fontWeight="900"
        fontStyle="italic"
        fill="#eaf3ff"
        fontFamily="var(--font-serif)"
      >
        Kaas
      </text>
    </svg>
  );
}

type OrganicShape = "flower" | "blob" | "star";

function OrganicBg({
  shape,
  color,
  className,
}: {
  shape: OrganicShape;
  color: string;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 200 200" className={className}>
      <g fill={color}>
        {shape === "flower" &&
          Array.from({ length: 11 }).map((_, i) => (
            <ellipse
              key={i}
              cx="100"
              cy="30"
              rx="27"
              ry="54"
              transform={`rotate(${(i * 360) / 11} 100 100)`}
            />
          ))}
        {shape === "flower" && <circle cx="100" cy="100" r="48" />}

        {shape === "blob" &&
          (
            [
              [100, 58, 44],
              [143, 86, 40],
              [140, 138, 38],
              [98, 154, 44],
              [55, 124, 40],
              [60, 74, 38],
              [100, 106, 52],
            ] as const
          ).map(([cx, cy, r], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} />
          ))}

        {shape === "star" &&
          Array.from({ length: 16 }).map((_, i) => (
            <rect
              key={i}
              x="90"
              y="6"
              width="20"
              height="94"
              rx="10"
              transform={`rotate(${(i * 360) / 16} 100 100)`}
            />
          ))}
        {shape === "star" && <circle cx="100" cy="100" r="52" />}
      </g>
    </svg>
  );
}

function SocialGlyph({ name }: { name: string }) {
  if (name === "Facebook")
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14 8.5V7c0-.8.2-1.2 1.3-1.2H17V3h-2.5C11.9 3 11 4.4 11 6.6v1.9H9V11h2v9h3v-9h2.2l.3-2.5H14z" />
      </svg>
    );
  if (name === "TikTok")
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M15.6 3c.3 2 1.6 3.6 3.6 3.9v2.6c-1.3 0-2.5-.4-3.6-1.1v5.9c0 3-2.4 5.4-5.4 5.4s-5.4-2.4-5.4-5.4c0-2.8 2.1-5.1 4.8-5.4v2.7c-1.2.3-2.2 1.4-2.2 2.7 0 1.6 1.3 2.9 2.9 2.9s2.9-1.3 2.9-2.9V3h2.4z" />
      </svg>
    );
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.4" cy="6.6" r="1.3" fill="currentColor" />
    </svg>
  );
}

function ArrowSquare() {
  return (
    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[8px] bg-white">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M3 11 11 3M5 3h6v6"
          stroke="var(--kc-orange)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function RecipeCard({ r }: { r: Recipe }) {
  return (
    <article
      className="flex w-[300px] shrink-0 flex-col rounded-[26px] p-4 transition-transform duration-300 hover:-translate-y-1"
      style={{ background: r.bg }}
    >
      <div className="relative overflow-hidden rounded-[18px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={r.img}
          alt={r.title}
          loading="lazy"
          decoding="async"
          className="h-[210px] w-full object-cover"
        />
        <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[13px] font-bold text-[var(--kc-green)] shadow-sm">
          {r.time}
        </span>
      </div>
      <div className="mt-4 flex items-center gap-1.5 text-[14px] font-semibold text-[var(--kc-green)]">
        <span className="grid h-4 w-4 place-items-center rounded-full bg-[var(--kc-green)]">
          <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
            <path
              d="M2.5 6.3 5 8.5 9.5 3.5"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        Vegetarisch
      </div>
      <h3
        className="mt-2 min-h-[52px] text-[22px] font-extrabold uppercase leading-[0.95] text-[var(--kc-green)]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {r.title}
      </h3>
      <button className="mt-3 flex w-max items-center gap-2 rounded-[12px] bg-white px-4 py-2.5 text-[14px] font-bold text-[var(--kc-green)] transition-transform duration-200 hover:-translate-y-0.5">
        Bekijk recept
        <ArrowCircle />
      </button>
    </article>
  );
}

function StarburstBadge({
  lines,
  bg = "var(--kc-golden)",
  color = "#3a2a12",
  size = 120,
}: {
  lines: string[];
  bg?: string;
  color?: string;
  size?: number;
}) {
  return (
    <div
      className="relative grid shrink-0 place-items-center"
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <g fill={bg}>
          {Array.from({ length: 12 }).map((_, i) => (
            <rect
              key={i}
              x="46"
              y="1"
              width="8"
              height="26"
              rx="3"
              transform={`rotate(${(i * 360) / 12} 50 50)`}
            />
          ))}
          <circle cx="50" cy="50" r="36" />
        </g>
      </svg>
      <div
        className="relative text-center font-extrabold uppercase leading-[1.08]"
        style={{ color, fontSize: size * 0.115 }}
      >
        {lines.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>
    </div>
  );
}

function RoundStamp({
  id,
  topText,
  bottomText,
  center,
  bg = "var(--maroon)",
  fg = "#fff3e2",
  size = 120,
}: {
  id: string;
  topText: string;
  bottomText: string;
  center?: string;
  bg?: string;
  fg?: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className="shrink-0"
      style={{ width: size, height: size }}
    >
      <defs>
        <path id={`${id}-t`} d="M 50 50 m -38 0 a 38 38 0 1 1 76 0" fill="none" />
        <path id={`${id}-b`} d="M 50 50 m -32 0 a 32 32 0 1 0 64 0" fill="none" />
      </defs>
      <circle cx="50" cy="50" r="49" fill={bg} />
      <circle
        cx="50"
        cy="50"
        r="43"
        fill="none"
        stroke={fg}
        strokeWidth="0.8"
        opacity="0.5"
      />
      <text
        fontSize="8"
        fontWeight="700"
        letterSpacing="1.2"
        fill={fg}
        fontFamily="var(--font-sans)"
      >
        <textPath href={`#${id}-t`} startOffset="12%">
          {topText}
        </textPath>
      </text>
      <text
        fontSize="7.4"
        fontWeight="700"
        letterSpacing="1"
        fill={fg}
        fontFamily="var(--font-sans)"
      >
        <textPath href={`#${id}-b`} startOffset="14%">
          {bottomText}
        </textPath>
      </text>
      {center && (
        <text
          x="50"
          y="58"
          textAnchor="middle"
          fontSize="26"
          fontWeight="900"
          fontStyle="italic"
          fill={fg}
          fontFamily="var(--font-serif)"
        >
          {center}
        </text>
      )}
    </svg>
  );
}

const NAV_LINKS = ["Recepten", "Over ons", "Nieuws"];

type SlideCfg = {
  titleLines: [string, string];
  subtitle: string;
  img: string;
  imgAlt: string;
};

// The hero shows a single product.
const HERO: SlideCfg = {
  titleLines: ["Garnaal", "Kroket"],
  subtitle: "Belgische garnaalkroketten",
  img: asset("/assets/garnaal-product.png"),
  imgAlt: "Kroketco Garnaal kroket",
};

function HeroSlide({ cfg }: { cfg: SlideCfg }) {
  return (
    <div className="relative h-full w-full shrink-0">
      <div className="relative z-10 flex h-full flex-col items-center pt-[140px]">
        <h1
          className="text-center font-extrabold uppercase leading-[0.84]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(46px, 7.6vw, 118px)",
            color: "#0d3b6f",
          }}
        >
          {cfg.titleLines[0]}
          <br />
          {cfg.titleLines[1]}
        </h1>
        <div className="mt-4 flex items-center gap-4 px-4">
          <span className="h-px w-8 bg-[#1f6fc4]/60 md:w-12" />
          <span
            className="whitespace-nowrap text-center text-[15px] font-semibold md:text-[19px]"
            style={{ color: "#1257a0" }}
          >
            {cfg.subtitle}
          </span>
          <span className="h-px w-8 bg-[#e7b64f]/50 md:w-12" />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [pActive, setPActive] = useState(2);
  const [hoverP, setHoverP] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [attrActive, setAttrActive] = useState(2);
  const [newsTab, setNewsTab] = useState(0);
  const stepProducts = (dir: number) =>
    setPActive((a) => Math.min(PRODUCTS.length - 1, Math.max(0, a + dir)));
  return (
    <div className="relative bg-white">
      {/* ===== HERO SLIDER (a bit taller than the viewport) ===== */}
      <section className="relative h-[106vh] w-full overflow-hidden bg-[#AAD7FC]">
        {/* single soft decorative flower behind the product */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/assets/garnaal-flower.png")}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute left-1/2 top-[300px] w-[760px] max-w-[92vw] -translate-x-1/2 opacity-45"
        />

        {/* title (amandel only) */}
        <div className="absolute inset-0 z-10">
          <HeroSlide cfg={HERO} />
        </div>

        {/* full-colour side peeks of the same product */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO.img}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute left-[-190px] top-[418px] z-[6] hidden w-[400px] md:block"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO.img}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute right-[-190px] top-[418px] z-[6] hidden w-[400px] md:block"
        />

        {/* center product */}
        <div className="pointer-events-none absolute inset-x-0 top-[384px] z-[8] flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO.img}
            alt={HERO.imgAlt}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="float h-max w-[min(64vw,462px)] drop-shadow-2xl"
          />
        </div>

        {/* premium-quality badge, to the left of the product */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/assets/garnaal-badge.png")}
          alt="Premium kwaliteit — gemaakt in België"
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute left-[calc(50%-340px)] top-[500px] z-[10] hidden w-[150px] -rotate-6 drop-shadow-xl md:block"
        />

        {/* decorative sparkles scattered around the product */}
        <div className="pointer-events-none absolute inset-x-0 top-[384px] z-[9] flex justify-center">
          <div className="relative h-[470px] w-[740px] max-w-[94vw]">
            <Sparkle size={34} className="left-[6%]! top-[4%]!" />
            <Sparkle size={54} className="left-[-2%]! top-[46%]!" />
            <Sparkle size={30} className="left-[11%]! top-[86%]!" />
            <Sparkle size={46} className="right-[7%]! top-[10%]!" />
            <Sparkle size={32} className="right-[-1%]! top-[44%]!" />
            <Sparkle size={38} className="right-[12%]! top-[82%]!" />
          </div>
        </div>

        {/* buttons — static (stay) */}
        <div className="absolute inset-x-0 bottom-[15vh] z-20 flex justify-center gap-4">
          <button className="flex items-center gap-3 rounded-[5px] bg-[#0d3b6f] px-6 py-3.5 text-[15px] font-bold text-[var(--cream)] shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0">
            Bekijk product
            <ArrowCircle bg="var(--cream)" fg="#0d3b6f" />
          </button>
          <button className="flex items-center gap-3 rounded-[5px] border-2 border-[#0d3b6f] px-6 py-3 text-[15px] font-bold text-[#0d3b6f] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0d3b6f] hover:text-[var(--cream)] active:translate-y-0">
            Vind product
            <ArrowCircle bg="#0d3b6f" />
          </button>
        </div>

        {/* ===== NAV (shared overlay) ===== */}
        <header className="absolute inset-x-0 top-0 z-30 px-4 pt-4">
        <nav
          aria-label="Hoofdnavigatie"
          className="relative flex h-[70px] w-full items-center justify-between rounded-[12px] border border-white/10 bg-[#0a2e5c]/45 px-5 text-white shadow-lg backdrop-blur-xl md:h-[90px] md:px-8"
        >
          {/* mobile: hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
            aria-expanded={menuOpen}
            className="grid h-10 w-10 place-items-center rounded-full transition hover:bg-white/10 lg:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              {menuOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>

          {/* left links (desktop) */}
          <ul className="hidden items-center gap-9 text-[17px] font-semibold lg:flex">
            <li className="flex cursor-pointer items-center gap-1.5 transition-opacity hover:opacity-70">
              Producten
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M3 4.5 6 7.5 9 4.5"
                  stroke="#fff"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
            {NAV_LINKS.map((l) => (
              <li
                key={l}
                className="cursor-pointer transition-opacity hover:opacity-70"
              >
                {l}
              </li>
            ))}
            <li className="flex cursor-pointer items-center gap-2 transition-opacity hover:opacity-70">
              Zoeken
              <span className="grid h-[22px] w-[22px] place-items-center rounded-full bg-white/15">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <circle cx="6" cy="6" r="4" stroke="#fff" strokeWidth="1.6" />
                  <path
                    d="m9.2 9.2 2.3 2.3"
                    stroke="#fff"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </li>
          </ul>

          {/* center logo */}
          <a
            href="#"
            aria-label="Kroketco Belgium startpagina"
            className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2.5 transition-opacity hover:opacity-80"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/assets/logo-garnaal.png")}
              alt="Kroketco Belgium — Garnaal Kroket"
              className="h-[48px] w-auto md:h-[62px]"
            />
            <span
              className="text-[24px] text-[var(--cream)] md:text-[30px]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Kroketco
            </span>
          </a>

          {/* right buttons (desktop) — placeholder keeps logo centred on mobile */}
          <span className="h-10 w-10 lg:hidden" aria-hidden="true" />
          <div className="hidden items-center gap-3 lg:flex">
            <button className="flex items-center gap-2.5 rounded-[5px] bg-[var(--cream)] px-5 py-3 text-[16px] font-bold text-[#0d3b6f] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0">
              Vind product
              <ArrowCircle bg="#0d3b6f" />
            </button>
            <button className="flex items-center gap-2.5 rounded-[5px] bg-[var(--cream)] px-5 py-3 text-[16px] font-bold text-[#0d3b6f] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0">
              Bestel nu
              <ArrowCircle bg="#0d3b6f" />
            </button>
          </div>
        </nav>

        {/* mobile dropdown menu */}
        {menuOpen && (
          <div className="mt-2 overflow-hidden rounded-[5px] border border-white/10 bg-[#0a2e5c]/85 px-6 py-5 text-white backdrop-blur-xl lg:hidden">
            <ul className="flex flex-col gap-4 text-[17px] font-semibold">
              {["Producten", ...NAV_LINKS].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    className="block rounded py-1 transition-opacity hover:opacity-70"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-col gap-3">
              <button className="flex items-center justify-center gap-2.5 rounded-[5px] bg-[var(--cream)] px-5 py-3 text-[16px] font-bold text-[#0d3b6f]">
                Vind product
                <ArrowCircle bg="#0d3b6f" />
              </button>
              <button className="flex items-center justify-center gap-2.5 rounded-[5px] border-2 border-[var(--cream)] px-5 py-3 text-[16px] font-bold text-[var(--cream)]">
                Bestel nu
              </button>
            </div>
          </div>
        )}
        </header>
      </section>

      {/* ===== PURPLE PANEL: marquee + beige nested so purple runs behind (no corner gap) ===== */}
      <div className="relative z-10 mx-4 -mt-[3vh] overflow-hidden rounded-t-[40px] bg-[#dccbf1] md:mx-8">
        {/* marquee */}
        <div className="overflow-hidden py-4">
          <div className="marquee-track text-[19px] font-medium uppercase tracking-wide text-black">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="flex items-center">
                {[
                  "Goudbruin vanbuiten, romig vanbinnen",
                  "Vers uit de fabriek · Goudbruin · Snel klaar",
                  "Verse kroketten & purée",
                ]
                  .flatMap((t) => [t, t])
                  .map((t, j) => (
                    <span key={j} className="flex items-center">
                      <span className="px-6">{t}</span>
                      <span className="text-[12px]">●</span>
                    </span>
                  ))}
              </span>
            ))}
          </div>
        </div>

        {/* ===== PRODUCTS (second section) ===== */}
        <section className="relative rounded-t-[40px] bg-[var(--cream)] px-4 pb-20 pt-10 md:px-8">
          {/* centered tabs */}
          <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-center gap-x-6 gap-y-4 md:gap-9">
            <button className="flex items-center gap-2 rounded-[6px] bg-[var(--kc-green)] px-6 py-4 text-[17px] font-bold text-white transition-transform duration-200 hover:-translate-y-0.5">
              <svg width="16" height="16" viewBox="0 0 100 100" fill="#fff">
                <path d="M50 4 58 34 88 26 66 50 88 74 58 66 50 96 42 66 12 74 34 50 12 26 42 34Z" />
              </svg>
              Meest populair
            </button>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[17px] font-bold text-[var(--kc-green)] md:gap-9">
              <span className="flex items-center gap-2">
                <CatIcon color="var(--kc-orange)" />
                Kaas
              </span>
              <span className="flex items-center gap-2">
                <CatIcon color="var(--kc-lime)" />
                Vega
              </span>
              <span className="flex items-center gap-2">
                <CatIcon color="var(--kc-coral)" />
                Rollen
              </span>
              <span className="flex items-center gap-2">
                <CatIcon color="var(--kc-golden)" />
                Purée
              </span>
            </div>
          </div>

          {/* product carousel — 3 full + 2 faded halves, smooth belt */}
          <div className="mt-12 overflow-hidden">
            <div className="flex justify-center">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(${((PRODUCTS.length - 1) / 2 - pActive) * 410}px)`,
                }}
              >
                {PRODUCTS.map((p, i) => {
                  const d = Math.abs(i - pActive);
                  const op = d <= 1 ? 1 : d === 2 ? 0.35 : 0;
                  return (
                    <div
                      key={i}
                      className="flex shrink-0 justify-center transition-opacity duration-500"
                      style={{
                        width: 410,
                        opacity: op,
                        pointerEvents: op === 0 ? "none" : "auto",
                      }}
                    >
                      <ProductCard
                        p={p}
                        showShape={
                          hoverP === null ? i === pActive : hoverP === i
                        }
                        onHover={() => setHoverP(i)}
                        onLeave={() => setHoverP(null)}
                        onSelect={() => setPActive(i)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* controls */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="flex items-center gap-4 rounded-full bg-[var(--kc-green)] px-4 py-2.5">
              <button
                onClick={() => stepProducts(-1)}
                aria-label="Vorige"
                className="grid h-8 w-8 place-items-center rounded-full text-white transition hover:bg-white/15"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M10 3 5 8l5 5"
                    stroke="#fff"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="flex items-center gap-2">
                {PRODUCTS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPActive(i)}
                    aria-label={`Ga naar product ${i + 1}`}
                    className={
                      i === pActive
                        ? "h-2 w-5 rounded-full bg-white"
                        : "h-2 w-2 rounded-full bg-white/40"
                    }
                  />
                ))}
              </div>
              <button
                onClick={() => stepProducts(1)}
                aria-label="Volgende"
                className="grid h-8 w-8 place-items-center rounded-full text-white transition hover:bg-white/15"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M6 3l5 5-5 5"
                    stroke="#fff"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <button className="flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-[16px] font-bold text-[var(--kc-green)] shadow transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0">
              Bekijk alles
              <ArrowCircle />
            </button>
          </div>

        </section>
      </div>

      {/* ===== ATTRIBUTES / EXPLORE SECTION ===== */}
      <section className="relative overflow-hidden px-6 py-16 md:px-8 md:py-28">
        <div className="relative mx-auto flex min-h-[360px] max-w-[1200px] items-center justify-center md:min-h-[520px]">
          {/* diagonal placement, alternating per active word:
              even words → left-top + right-bottom, odd words → left-bottom + right-top */}
          <SideProduct
            img={ATTR[attrActive].left.img}
            shape={ATTR[attrActive].left.shape}
            side="left"
            vpos={attrActive % 2 === 0 ? "top" : "bottom"}
          />

          <div className="relative z-20 flex flex-col items-center">
            {ATTR.map((c, i) => (
              <button
                key={c.word}
                onMouseEnter={() => setAttrActive(i)}
                onFocus={() => setAttrActive(i)}
                onClick={() => setAttrActive(i)}
                aria-pressed={i === attrActive}
                className="text-center font-extrabold uppercase leading-[0.86] transition-colors duration-200 hover:opacity-90"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(44px, 6.4vw, 104px)",
                  color:
                    i === attrActive ? "var(--kc-orange)" : "var(--kc-green)",
                }}
              >
                {c.word}
              </button>
            ))}
          </div>

          <SideProduct
            img={ATTR[attrActive].right.img}
            shape={ATTR[attrActive].right.shape}
            side="right"
            vpos={attrActive % 2 === 0 ? "bottom" : "top"}
          />
        </div>
      </section>

      {/* ===== ABOUT: rooted in tradition, growing with community ===== */}
      <section className="relative overflow-hidden bg-white px-4 py-16 md:px-8 md:py-24">
        <div className="relative mx-auto max-w-[1300px]">
          <h2
            className="relative z-20 font-extrabold uppercase leading-[0.85] text-[var(--kc-green)]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 8vw, 116px)",
            }}
          >
            Geworteld in
            <br />
            traditie,
          </h2>

          {/* middle composition: product + mission, overlapping the headlines on desktop */}
          <div className="relative z-10 flex flex-col items-center gap-10 md:-my-12 md:flex-row md:justify-center md:gap-14">
            <div className="relative grid h-[300px] w-[340px] shrink-0 place-items-center md:h-[420px] md:w-[480px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/assets/shapes/shape1.png")}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="spin-slow absolute h-[280px] w-[280px] object-contain md:h-[400px] md:w-[400px]"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/assets/hero-product.png")}
                alt="Kroketco kroketten, ambachtelijk gemaakt"
                loading="lazy"
                decoding="async"
                className="float relative z-10 w-[280px] object-contain drop-shadow-2xl md:w-[380px]"
              />
              <div className="absolute -left-4 -top-2 h-[110px] w-[110px] md:-left-8 md:h-[150px] md:w-[150px]">
                <MapleBadge />
              </div>
              <div className="absolute -bottom-1 right-2 h-[80px] w-[80px] md:right-0 md:h-[104px] md:w-[104px]">
                <MadeWithBadge />
              </div>
            </div>

            <div className="max-w-[380px] text-center md:text-left">
              <p className="text-[17px] font-medium leading-relaxed text-[var(--kc-green)]">
                We delen onze liefde voor ambachtelijke, verse kroketten met heel
                België. Daarom vind je bij ons nooit iets in het vriesvak dat we
                niet ook op onze eigen familietafel zouden zetten.
              </p>
              <button className="mt-6 inline-flex items-center gap-3 rounded-[8px] bg-[var(--kc-green)] px-6 py-3.5 text-[15px] font-bold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0">
                Lees meer
                <ArrowCircle dark={false} />
              </button>
            </div>
          </div>

          <h2
            className="relative z-20 text-right font-extrabold uppercase leading-[0.85] text-[var(--kc-green)]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 8vw, 116px)",
            }}
          >
            Groeien met
            <br />
            de buurt
          </h2>

          <div className="pointer-events-none absolute -bottom-2 left-0 z-20 hidden md:block">
            <StarburstBadge
              lines={["Proef", "de", "kroket"]}
              bg="var(--kc-orange)"
              color="#fff"
              size={128}
            />
          </div>
          <div className="pointer-events-none absolute right-0 top-0 z-20 hidden md:block">
            <RoundStamp
              id="about-stamp"
              topText="AMBACHTELIJK · VERS · BELGISCH"
              bottomText="SINDS 1998 · KROKETCO"
              size={120}
            />
          </div>
        </div>
      </section>

      {/* ===== RECIPES: from our kitchen to yours ===== */}
      <section className="bg-white px-4 py-16 md:px-8">
        <div className="mx-auto max-w-[1000px] text-center">
          <p className="text-[14px] font-extrabold uppercase tracking-[0.25em] text-[var(--kc-green)]">
            Recepten
          </p>
          <h2
            className="mx-auto mt-4 font-extrabold uppercase leading-[0.9] text-[var(--kc-green)]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 6vw, 80px)",
            }}
          >
            Van onze keuken,
            <br />
            voor jou
          </h2>
          <div className="mt-7 flex justify-center">
            <button className="inline-flex items-center gap-3 rounded-[8px] bg-[var(--kc-green)] px-6 py-3.5 text-[15px] font-bold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0">
              Bekijk meer
              <ArrowCircle dark={false} />
            </button>
          </div>
        </div>
        <div
          className="mt-12 flex gap-6 overflow-x-auto px-1 pb-4 md:justify-center"
          style={{ scrollbarWidth: "none" }}
        >
          {RECIPES.map((r) => (
            <RecipeCard key={r.title} r={r} />
          ))}
        </div>
      </section>

      {/* ===== NEWS: the world of Kroketco ===== */}
      <section className="relative overflow-hidden bg-white px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1000px] text-center">
          <h2
            className="font-extrabold uppercase leading-[0.9] text-[var(--kc-green)]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 6vw, 80px)",
            }}
          >
            De wereld
            <br />
            van Kroketco
          </h2>
          <div className="mt-7 flex justify-center">
            <button className="inline-flex items-center gap-3 rounded-[8px] bg-[var(--kc-green)] px-6 py-3.5 text-[15px] font-bold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0">
              Bekijk meer
              <ArrowCircle dark={false} />
            </button>
          </div>
        </div>

        {/* mobile tab row */}
        <div className="mx-auto mt-10 flex max-w-[1200px] gap-2 overflow-x-auto pb-2 md:hidden">
          {NEWS_TABS.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setNewsTab(i)}
              aria-pressed={i === newsTab}
              className="shrink-0 rounded-full px-4 py-2 text-[13px] font-extrabold uppercase text-[var(--kc-green)] transition"
              style={{ background: t.color, opacity: i === newsTab ? 1 : 0.5 }}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-6 flex max-w-[1200px] items-stretch gap-3 md:mt-12">
          {/* left accent bar (active category) */}
          <div
            className="hidden w-[52px] shrink-0 rounded-[16px] md:grid md:place-items-center"
            style={{ background: NEWS_TABS[newsTab].color }}
          >
            <span
              className="font-extrabold uppercase tracking-wide text-[var(--kc-green)]"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                fontSize: 13,
              }}
            >
              {NEWS_TABS[newsTab].label}
            </span>
          </div>

          {/* featured card */}
          <div
            className="flex-1 overflow-hidden rounded-[28px] p-3 transition-colors duration-300 md:p-4"
            style={{ background: NEWS_TABS[newsTab].color }}
          >
            <div className="grid items-center gap-5 md:grid-cols-2 md:gap-8">
              <div className="overflow-hidden rounded-[20px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={NEWS[newsTab].img}
                  alt={NEWS[newsTab].title}
                  loading="lazy"
                  decoding="async"
                  className="h-[240px] w-full object-cover md:h-[360px]"
                />
              </div>
              <div className="px-2 pb-3 md:px-4">
                <p className="text-[14px] font-bold text-[var(--kc-green)]">
                  {NEWS[newsTab].date}
                </p>
                <h3
                  className="mt-3 font-extrabold uppercase leading-[0.95] text-[var(--kc-green)]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(26px, 3vw, 44px)",
                  }}
                >
                  {NEWS[newsTab].title}
                </h3>
                <p className="mt-4 text-[15px] font-medium leading-relaxed text-[var(--kc-green)]">
                  {NEWS[newsTab].excerpt}
                </p>
                <button className="mt-6 inline-flex items-center gap-2.5 rounded-[8px] bg-white px-5 py-3 text-[14px] font-bold text-[var(--kc-green)] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0">
                  Lees meer
                  <ArrowCircle />
                </button>
              </div>
            </div>
          </div>

          {/* right vertical tabs */}
          <div className="hidden shrink-0 flex-col gap-2 md:flex">
            {NEWS_TABS.map((t, i) => (
              <button
                key={t.label}
                onClick={() => setNewsTab(i)}
                aria-pressed={i === newsTab}
                className="grid flex-1 place-items-center rounded-[16px] px-2 transition-all duration-200"
                style={{
                  background: t.color,
                  width: i === newsTab ? 56 : 46,
                  opacity: i === newsTab ? 1 : 0.75,
                }}
              >
                <span
                  className="font-extrabold uppercase tracking-wide text-[var(--kc-green)]"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                    fontSize: 13,
                  }}
                >
                  {t.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOLLOW: category marquee + Instagram grid ===== */}
      <section aria-label="Volg Kroketco op sociale media">
        {/* category marquee band */}
        <div className="overflow-hidden bg-[var(--lavender)] py-4">
          <div className="marquee-track">
            {Array.from({ length: 2 }).map((_, k) => (
              <span key={k} className="flex items-center">
                {FOLLOW_CATS.concat(FOLLOW_CATS).map((c, j) => (
                  <span key={j} className="flex items-center">
                    <span className="px-4">
                      <CatIcon color={c.color} />
                    </span>
                    <span
                      className="text-[22px] font-extrabold uppercase text-black"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {c.label}
                    </span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* orange block */}
        <div className="relative overflow-hidden bg-[#f5500a] px-4 py-16 md:px-8 md:py-20">
          <div className="relative z-10 text-center">
            <span className="inline-block rounded-[10px] bg-black/15 px-5 py-2.5 text-[13px] font-extrabold uppercase tracking-widest text-white">
              Blijf op de hoogte
            </span>
            <h2
              className="mx-auto mt-6 max-w-[1100px] font-extrabold uppercase leading-[0.9] text-white"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(38px, 7vw, 92px)",
              }}
            >
              Volg @kroketco
              <br />
              voor meer
            </h2>

            <div className="mx-auto mt-9 grid max-w-[820px] gap-3 sm:grid-cols-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="flex items-center justify-between gap-4 rounded-[12px] bg-black/15 px-5 py-4 text-[16px] font-bold text-white transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <span className="flex items-center gap-3">
                    <SocialGlyph name={s.label} />
                    {s.label}
                  </span>
                  <ArrowSquare />
                </a>
              ))}
            </div>
          </div>

          {/* instagram grid */}
          <div
            className="relative z-10 mt-12 flex gap-4 overflow-x-auto pb-2 md:justify-center"
            style={{ scrollbarWidth: "none" }}
          >
            {UGC_IMAGES.map((src, i) => (
              <div
                key={i}
                className="group relative h-[320px] w-[240px] shrink-0 overflow-hidden rounded-[18px] shadow-lg"
              >
                <span className="absolute left-3 top-3 z-10 flex items-center gap-1.5 rounded-[8px] bg-black/70 px-2.5 py-1 text-[12px] font-bold text-white">
                  <SocialGlyph name="Instagram" />
                  Instagram
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`Kroketco moment gedeeld door een fan (${i + 1})`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* decorative badges */}
          <div className="pointer-events-none absolute -left-4 bottom-6 z-20 hidden lg:block">
            <StarburstBadge lines={["Sinds", "1998"]} size={116} />
          </div>
          <div className="pointer-events-none absolute -right-3 bottom-8 z-20 hidden lg:block">
            <RoundStamp
              id="follow-stamp"
              topText="NIEUW & VERBETERD"
              bottomText="KROKETCO · KROKETCO"
              center="Kc"
              size={128}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
