"use client";

import { useState } from "react";

// GitHub Pages serves this project from a subpath; raw string asset paths
// need the basePath prefix (next/font/image/link get it automatically).
const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (p: string) => `${BP}${p}`;

const NAV_LINKS = ["Recepten", "Over ons", "Nieuws"];

// theme
const BG = "#eaf1cc";
const DARK = "#1c3a22"; // dark green (nav, buttons, arrows)
const HEAD = "#2f5237"; // headline
const SUB = "#5f7d33"; // subtitle
const CREAM = "#fff3e2";

function ArrowCircle({ bg, fg }: { bg?: string; fg?: string }) {
  const circleBg = bg ?? DARK;
  const arrow = fg ?? "#fff";
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

export default function GroendalKroket() {
  const [menuOpen, setMenuOpen] = useState(false);
  const title: [string, string] = ["Groendal", "Kroket"];
  const subtitle = "Belgische groene kaaskroketten";
  const productImg = asset("/assets/groendal-product.png");

  return (
    <div className="relative" style={{ background: BG }}>
      <section className="relative h-screen w-full overflow-hidden" style={{ background: BG }}>
        {/* decorative flower behind the product */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/assets/groendal-flower.png")}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute left-1/2 top-[250px] w-[900px] max-w-[96vw] -translate-x-1/2 opacity-90"
        />

        {/* title */}
        <div className="absolute inset-0 z-10">
          <div className="relative flex h-full flex-col items-center pt-[140px]">
            <h1
              className="text-center font-extrabold uppercase leading-[0.84]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(46px, 7.6vw, 118px)",
                color: HEAD,
              }}
            >
              {title[0]}
              <br />
              {title[1]}
            </h1>
            <div className="mt-4 flex items-center gap-4 px-4">
              <span className="h-px w-8 md:w-12" style={{ background: SUB, opacity: 0.6 }} />
              <span
                className="whitespace-nowrap text-center text-[15px] font-semibold md:text-[19px]"
                style={{ color: SUB }}
              >
                {subtitle}
              </span>
              <span className="h-px w-8 md:w-12" style={{ background: SUB, opacity: 0.6 }} />
            </div>
          </div>
        </div>

        {/* full-colour side peeks */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={productImg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute left-[-190px] top-[418px] z-[6] hidden w-[400px] md:block"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={productImg}
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
            src={productImg}
            alt="Kroketco Groendal kroket"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="float h-max w-[min(64vw,462px)] drop-shadow-2xl"
          />
        </div>

        {/* premium quality badge, left of the product (big) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/assets/groendal-badge.png")}
          alt="Premium kwaliteit — gemaakt in België"
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute left-[calc(50%-430px)] top-[430px] z-[10] hidden w-[260px] -rotate-6 drop-shadow-xl md:block"
        />

        {/* green cheese wheel, right of the product */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/assets/groendal-cheese.png")}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute right-[calc(50%-380px)] top-[560px] z-[10] hidden w-[230px] drop-shadow-xl md:block"
        />

        {/* cheese platter decoration, bottom (big) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/assets/groendal-cheese2.png")}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute left-[calc(50%-410px)] top-[705px] z-[11] hidden w-[320px] drop-shadow-xl md:block"
        />

        {/* sparkles */}
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

        {/* buttons: one full, one outlined */}
        <div className="absolute inset-x-0 bottom-[11vh] z-20 flex justify-center gap-4">
          <button
            className="flex items-center gap-3 rounded-[5px] px-6 py-3.5 text-[15px] font-bold shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
            style={{ background: DARK, color: CREAM }}
          >
            Bekijk product
            <ArrowCircle bg={CREAM} fg={DARK} />
          </button>
          <button
            className="flex items-center gap-3 rounded-[5px] border-2 px-6 py-3 text-[15px] font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            style={{ borderColor: DARK, color: DARK }}
          >
            Vind product
            <ArrowCircle bg={DARK} />
          </button>
        </div>

        {/* ===== NAV ===== */}
        <header className="absolute inset-x-0 top-0 z-30 px-4 pt-4">
          <nav
            aria-label="Hoofdnavigatie"
            className="relative flex h-[70px] w-full items-center justify-between rounded-[12px] border border-white/10 px-5 text-white shadow-lg backdrop-blur-xl md:h-[90px] md:px-8"
            style={{ background: "rgba(20,48,31,0.5)" }}
          >
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
              aria-expanded={menuOpen}
              className="grid h-10 w-10 place-items-center rounded-full transition hover:bg-white/10 lg:hidden"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                {menuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                )}
              </svg>
            </button>

            <ul className="hidden items-center gap-9 text-[17px] font-semibold lg:flex">
              <li className="flex cursor-pointer items-center gap-1.5 transition-opacity hover:opacity-70">
                Producten
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5 6 7.5 9 4.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </li>
              {NAV_LINKS.map((l) => (
                <li key={l} className="cursor-pointer transition-opacity hover:opacity-70">
                  {l}
                </li>
              ))}
              <li className="flex cursor-pointer items-center gap-2 transition-opacity hover:opacity-70">
                Zoeken
                <span className="grid h-[22px] w-[22px] place-items-center rounded-full bg-white/15">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <circle cx="6" cy="6" r="4" stroke="#fff" strokeWidth="1.6" />
                    <path d="m9.2 9.2 2.3 2.3" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
              </li>
            </ul>

            <a
              href={asset("/")}
              aria-label="Kroketco Belgium startpagina"
              className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2.5 transition-opacity hover:opacity-80"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/assets/logo-groendal.png")}
                alt="Kroketco Belgium — Groendal Kroket"
                className="h-[48px] w-auto md:h-[62px]"
              />
              <span
                className="text-[24px] md:text-[30px]"
                style={{ fontFamily: "var(--font-display)", color: CREAM }}
              >
                Kroketco
              </span>
            </a>

            <span className="h-10 w-10 lg:hidden" aria-hidden="true" />
            <div className="hidden items-center gap-3 lg:flex">
              <button
                className="flex items-center gap-2.5 rounded-[5px] px-5 py-3 text-[16px] font-bold transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
                style={{ background: CREAM, color: DARK }}
              >
                Vind product
                <ArrowCircle bg={DARK} />
              </button>
              <button
                className="flex items-center gap-2.5 rounded-[5px] px-5 py-3 text-[16px] font-bold transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
                style={{ background: CREAM, color: DARK }}
              >
                Bestel nu
                <ArrowCircle bg={DARK} />
              </button>
            </div>
          </nav>

          {menuOpen && (
            <div
              className="mt-2 overflow-hidden rounded-[5px] border border-white/10 px-6 py-5 text-white backdrop-blur-xl lg:hidden"
              style={{ background: "rgba(20,48,31,0.85)" }}
            >
              <ul className="flex flex-col gap-4 text-[17px] font-semibold">
                {["Producten", ...NAV_LINKS].map((l) => (
                  <li key={l}>
                    <a href="#" onClick={() => setMenuOpen(false)} className="block rounded py-1 transition-opacity hover:opacity-70">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-col gap-3">
                <button
                  className="flex items-center justify-center gap-2.5 rounded-[5px] px-5 py-3 text-[16px] font-bold"
                  style={{ background: CREAM, color: DARK }}
                >
                  Vind product
                  <ArrowCircle bg={DARK} />
                </button>
                <button className="flex items-center justify-center gap-2.5 rounded-[5px] border-2 border-[var(--cream)] px-5 py-3 text-[16px] font-bold text-[var(--cream)]">
                  Bestel nu
                </button>
              </div>
            </div>
          )}
        </header>
      </section>
    </div>
  );
}
