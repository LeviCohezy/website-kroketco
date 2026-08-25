"use client";

import { useEffect, useState, type CSSProperties } from "react";

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

function ArrowCircle({ dark = true }: { dark?: boolean }) {
  return (
    <span
      className="grid h-6 w-6 place-items-center rounded-full"
      style={{ background: dark ? "#0E4B3A" : "#ffffff" }}
    >
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
        <path
          d="M2.5 6h6M6 3.2 8.9 6 6 8.8"
          stroke={dark ? "#fff" : "#0E4B3A"}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function Sparkle({ size, className }: { size: number; className?: string }) {
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
        fill="#ffffff"
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

const NAV_LINKS = ["Recepten", "Over ons", "Nieuws"];

type Badge = {
  kind: "maple" | "made";
  size: number;
  side: "left" | "right";
  v: "top" | "bottom";
};

type SlideCfg = {
  bg: string;
  bgShape: OrganicShape;
  bgColor: string;
  titleLines: [string, string];
  titleFont: string;
  titleColor: string;
  img: string;
  imgAlt: string;
  badges: Badge[];
};

const SLIDES: SlideCfg[] = [
  {
    bg: "#92D9FB",
    bgShape: "flower",
    bgColor: "#7EC8EF",
    titleLines: ["Emmental Kaas", "Kroketjes"],
    titleFont: "var(--font-kuah)",
    titleColor: "#F88804",
    img: asset("/assets/hero-product.png"),
    imgAlt: "Kroketco Emmental kaaskroketjes",
    badges: [
      { kind: "maple", size: 220, side: "left", v: "top" },
      { kind: "made", size: 110, side: "right", v: "bottom" },
    ],
  },
  {
    bg: "#E24325",
    bgShape: "blob",
    bgColor: "#c8341c",
    titleLines: ["Belgische", "Purée"],
    titleFont: "var(--font-kuah)",
    titleColor: "#ffffff",
    img: asset("/assets/hero-product-2.png"),
    imgAlt: "Kroketco Belgische verse purée",
    badges: [{ kind: "maple", size: 220, side: "right", v: "top" }],
  },
  {
    bg: "#B7CF2E",
    bgShape: "star",
    bgColor: "#A3BB22",
    titleLines: ["Groendal", "Kroketjes"],
    titleFont: "var(--font-kuah)",
    titleColor: "#123f24",
    img: asset("/assets/hero-product-3.png"),
    imgAlt: "Kroketco Groendal kroketjes",
    badges: [
      { kind: "maple", size: 220, side: "left", v: "top" },
      { kind: "made", size: 110, side: "right", v: "bottom" },
    ],
  },
  {
    bg: "#8FE6FF",
    bgShape: "blob",
    bgColor: "#6cc6f2",
    titleLines: ["Garnaal", "Kroketten"],
    titleFont: "var(--font-kuah)",
    titleColor: "#0E4B3A",
    img: asset("/assets/hero-product-4.png"),
    imgAlt: "Kroketco Noordzee garnaalkroket",
    badges: [
      { kind: "maple", size: 220, side: "right", v: "top" },
      { kind: "made", size: 110, side: "left", v: "bottom" },
    ],
  },
  {
    bg: "#48246c",
    bgShape: "flower",
    bgColor: "#5c3384",
    titleLines: ["Amandel", "Kroket"],
    titleFont: "var(--font-kuah)",
    titleColor: "#fff3e2",
    img: asset("/assets/hero-product-5.png"),
    imgAlt: "Kroketco Amandel kroket",
    badges: [
      { kind: "maple", size: 220, side: "left", v: "top" },
      { kind: "made", size: 110, side: "right", v: "bottom" },
    ],
  },
  {
    bg: "#0e4b3a",
    bgShape: "star",
    bgColor: "#0a3a2c",
    titleLines: ["Superano", "Kroket"],
    titleFont: "var(--font-kuah)",
    titleColor: "#c7e36a",
    img: asset("/assets/hero-product-6.png"),
    imgAlt: "Kroketco Superano kroket",
    badges: [
      { kind: "maple", size: 220, side: "right", v: "top" },
      { kind: "made", size: 110, side: "left", v: "bottom" },
    ],
  },
  {
    bg: "#6c7878",
    bgShape: "blob",
    bgColor: "#5b6666",
    titleLines: ["Kip", "Kroket"],
    titleFont: "var(--font-kuah)",
    titleColor: "#fff3e2",
    img: asset("/assets/hero-product-7.png"),
    imgAlt: "Kroketco Kip kroket",
    badges: [
      { kind: "maple", size: 220, side: "left", v: "top" },
      { kind: "made", size: 110, side: "right", v: "bottom" },
    ],
  },
];

// Horizontal spacing between product centres on the carousel belt.
const SLOT = 900;

function HeroSlide({ cfg }: { cfg: SlideCfg }) {
  return (
    <div className="relative h-full w-full shrink-0">
      <div className="relative z-10 flex h-full flex-col items-center pt-[190px]">
        <h1
          className="text-center leading-[0.92]"
          style={{
            fontFamily: cfg.titleFont,
            fontSize: "clamp(52px, 6.6vw, 108px)",
            color: cfg.titleColor,
          }}
        >
          {cfg.titleLines[0]}
          <br />
          {cfg.titleLines[1]}
        </h1>
      </div>
    </div>
  );
}

export default function Home() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setActive((a) => (a + 1) % SLIDES.length),
      6000,
    );
    return () => clearInterval(id);
  }, []);
  const [pActive, setPActive] = useState(2);
  const [hoverP, setHoverP] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [attrActive, setAttrActive] = useState(2);
  const [recActive, setRecActive] = useState(2);
  const stepRecipes = (dir: number) =>
    setRecActive((a) => Math.min(RECIPES.length - 1, Math.max(0, a + dir)));
  const stepProducts = (dir: number) =>
    setPActive((a) => Math.min(PRODUCTS.length - 1, Math.max(0, a + dir)));
  return (
    <div className="relative bg-white">
      {/* ===== HERO SLIDER (a bit taller than the viewport) ===== */}
      <section className="relative h-[106vh] w-full overflow-hidden">
        {/* background layers — color reveals via growing radial circle, pattern changes */}
        {SLIDES.map((cfg, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              zIndex: i,
              background: cfg.bg,
              clipPath:
                i <= active
                  ? "circle(150% at 50% 88%)"
                  : "circle(0% at 50% 88%)",
              transition: "clip-path 900ms ease-in-out",
            }}
          >
            <OrganicBg
              shape={cfg.bgShape}
              color={cfg.bgColor}
              className="pointer-events-none absolute left-1/2 top-[150px] w-[860px] max-w-[80vw] -translate-x-1/2 opacity-40"
            />
          </div>
        ))}

        {/* foreground — title + product slide horizontally */}
        <div
          className="absolute inset-0 z-10 flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {SLIDES.map((cfg, i) => (
            <HeroSlide key={i} cfg={cfg} />
          ))}
        </div>

        {/* product belt — smooth carousel; side products at 30% opacity */}
        <div className="pointer-events-none absolute inset-x-0 top-[330px] z-[8] flex justify-center">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(${((SLIDES.length - 1) / 2 - active) * SLOT}px)`,
            }}
          >
            {SLIDES.map((cfg, i) => (
              <div
                key={i}
                className="flex shrink-0 justify-center"
                style={{ width: SLOT }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cfg.img}
                  alt={cfg.imgAlt}
                  loading={i === 0 ? "eager" : "lazy"}
                  fetchPriority={i === 0 ? "high" : "auto"}
                  decoding="async"
                  className="float h-max w-[min(88vw,700px)] drop-shadow-2xl"
                  style={{
                    opacity: i === active ? 1 : 0.3,
                    transition: "opacity 700ms ease-in-out",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* badges + sparkles — behind product, fade out/shrink + fade in/grow */}
        {SLIDES.map((cfg, i) => (
          <div
            key={`bs-${i}`}
            className="pointer-events-none absolute inset-0 z-[6]"
            style={{
              opacity: i === active ? 1 : 0,
              transform: i === active ? "scale(1)" : "scale(0.7)",
              transformOrigin: "50% 52%",
              transition: "opacity 500ms ease-out, transform 500ms ease-out",
            }}
          >
            <div className="absolute left-1/2 top-[330px] h-[470px] w-[640px] -translate-x-1/2">
              {cfg.badges.map((b, bi) => {
                const off = b.size >= 180 ? -46 : -22;
                const style: CSSProperties = {
                  position: "absolute",
                  width: b.size,
                  height: b.size,
                  transform: `rotate(${b.side === "left" ? -6 : 6}deg)`,
                  ...(b.side === "left" ? { left: off } : { right: off }),
                  ...(b.v === "top"
                    ? { top: b.side === "left" ? 90 : 14 }
                    : { bottom: 20 }),
                };
                return (
                  <div key={bi} style={style}>
                    {b.kind === "maple" ? <MapleBadge /> : <MadeWithBadge />}
                  </div>
                );
              })}
              {/* sparkles */}
              <Sparkle size={34} className="left-[8%]! top-[2%]!" />
              <Sparkle size={52} className="left-[-3%]! top-[46%]!" />
              <Sparkle size={34} className="left-[7%]! top-[82%]!" />
              <Sparkle size={44} className="right-[10%]! top-[14%]!" />
              <Sparkle size={34} className="right-[-1%]! top-[42%]!" />
            </div>
          </div>
        ))}

        {/* buttons — static (stay) */}
        <div className="absolute inset-x-0 bottom-[15vh] z-20 flex justify-center gap-4">
          <button className="flex items-center gap-3 rounded-[6px] bg-[#0E4B3A] px-5 py-3 text-[15px] font-bold text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0">
            Bekijk product
            <ArrowCircle dark={false} />
          </button>
          <button className="flex items-center gap-3 rounded-[6px] border-2 border-[#0E4B3A] px-5 py-3 text-[15px] font-bold text-[#0E4B3A] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0E4B3A] hover:text-white active:translate-y-0">
            Vind een winkel
            <ArrowCircle />
          </button>
        </div>

        {/* carousel dots */}
        <div className="absolute inset-x-0 bottom-[10vh] z-30 flex justify-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Ga naar slide ${i + 1}`}
              aria-current={i === active ? "true" : undefined}
              className={
                "h-2.5 rounded-full transition-all duration-300 " +
                (i === active
                  ? "w-7 bg-[#0E4B3A]"
                  : "w-2.5 bg-[#0E4B3A]/40 hover:bg-[#0E4B3A]/70")
              }
            />
          ))}
        </div>

        {/* ===== NAV (shared overlay) ===== */}
        <header className="absolute inset-x-0 top-0 z-30 px-4 pt-4">
        <nav className="relative flex h-[70px] w-full items-center justify-between rounded-[22px] bg-[#0E4B3A] px-5 text-white md:h-[90px] md:rounded-[28px] md:px-8">
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
          <span
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[24px] font-black tracking-tight text-[var(--cream)] md:text-[30px]"
          >
            Kroketco
          </span>

          {/* right buttons (desktop) — placeholder keeps logo centred on mobile */}
          <span className="h-10 w-10 lg:hidden" aria-hidden="true" />
          <div className="hidden items-center gap-3 lg:flex">
            <button className="flex items-center gap-2.5 rounded-[6px] bg-white px-5 py-3 text-[16px] font-bold text-[#0E4B3A] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0">
              Vind een winkel
              <ArrowCircle />
            </button>
            <button className="flex items-center gap-2.5 rounded-[6px] bg-white px-5 py-3 text-[16px] font-bold text-[#0E4B3A] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0">
              Onze recepten
              <ArrowCircle />
            </button>
          </div>
        </nav>

        {/* mobile dropdown menu */}
        {menuOpen && (
          <div className="mt-2 overflow-hidden rounded-[22px] bg-[#0E4B3A] px-6 py-5 text-white lg:hidden">
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
              <button className="flex items-center justify-center gap-2.5 rounded-[6px] bg-white px-5 py-3 text-[16px] font-bold text-[#0E4B3A]">
                Vind een winkel
                <ArrowCircle />
              </button>
              <button className="flex items-center justify-center gap-2.5 rounded-[6px] border-2 border-white px-5 py-3 text-[16px] font-bold text-white">
                Onze recepten
              </button>
            </div>
          </div>
        )}
        </header>
      </section>

      {/* ===== PURPLE PANEL: marquee + beige nested so purple runs behind (no corner gap) ===== */}
      <div className="relative z-10 mx-4 -mt-[10vh] overflow-hidden rounded-t-[40px] bg-[#dccbf1] md:mx-8">
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

      {/* ===== UGC SECTION (no background) ===== */}
      <section className="mx-4 py-4 pb-20 md:mx-8">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-end justify-between">
            <h2
              className="text-[32px] font-extrabold uppercase leading-[0.9] text-[var(--kc-green)] md:text-[42px]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Geliefd in
              <br />
              heel België
            </h2>
            <span className="pb-2 text-[16px] font-bold text-[var(--kc-orange)]">
              #Kroketco
            </span>
          </div>
          <div
            className="mt-8 flex gap-4 overflow-x-auto pb-2"
            style={{ scrollbarWidth: "none" }}
          >
            {UGC_IMAGES.map((src, i) => (
              <div
                key={i}
                className="group relative h-[330px] w-[250px] shrink-0 overflow-hidden rounded-[20px] shadow-md transition-shadow duration-300 hover:shadow-xl"
              >
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
        </div>
      </section>
    </div>
  );
}
