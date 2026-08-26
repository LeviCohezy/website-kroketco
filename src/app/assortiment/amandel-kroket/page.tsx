"use client";

import { useState } from "react";

// GitHub Pages serves this project from a subpath; raw string asset paths
// need the basePath prefix (next/font/image/link get it automatically).
const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (p: string) => `${BP}${p}`;

const NAV_LINKS = ["Recepten", "Over ons", "Nieuws"];
const NAV_HREF: Record<string, string> = {
  Producten: "/producten/",
  Recepten: "/recepten/",
  "Over ons": "/over-ons/",
  Nieuws: "/nieuws/",
};

function ArrowCircle({
  bg,
  fg,
}: {
  bg?: string;
  fg?: string;
}) {
  const circleBg = bg ?? "#0E4B3A";
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

export default function AmandelKroket() {
  const [menuOpen, setMenuOpen] = useState(false);
  const title: [string, string] = ["Amandel", "Kroket"];
  const subtitle = "Belgische amandelkroketten";
  const productImg = asset("/assets/amandel-product.png");

  return (
    <div className="relative bg-[#3f1d63]">
      <section className="relative h-screen w-full overflow-hidden bg-[#3f1d63]">
        {/* decorative flower behind the product */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/assets/amandel-flower.png")}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute left-1/2 top-[300px] w-[760px] max-w-[92vw] -translate-x-1/2 opacity-45"
        />

        {/* title */}
        <div className="absolute inset-0 z-10">
          <div className="relative flex h-full flex-col items-center pt-[140px]">
            <h1
              className="text-center font-extrabold uppercase leading-[0.84]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(46px, 7.6vw, 118px)",
                color: "var(--cream)",
              }}
            >
              {title[0]}
              <br />
              {title[1]}
            </h1>
            <div className="mt-4 flex items-center gap-4 px-4">
              <span className="h-px w-8 bg-[#e7b64f]/50 md:w-12" />
              <span
                className="whitespace-nowrap text-center text-[15px] font-medium md:text-[19px]"
                style={{ color: "#e7b64f" }}
              >
                {subtitle}
              </span>
              <span className="h-px w-8 bg-[#e7b64f]/50 md:w-12" />
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
            alt="Kroketco Amandel kroket"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="float h-max w-[min(64vw,462px)] drop-shadow-2xl"
          />
        </div>

        {/* premium-quality badge, left of the product */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/assets/amandel-badge.png")}
          alt="Premium kwaliteit — gemaakt in België"
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute left-[calc(50%-370px)] top-[486px] z-[10] hidden w-[190px] -rotate-6 drop-shadow-xl md:block"
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
        <div className="absolute inset-x-0 bottom-[12vh] z-20 flex justify-center gap-4">
          <button className="flex items-center gap-3 rounded-[5px] bg-[var(--cream)] px-6 py-3.5 text-[15px] font-bold text-[#2c1250] shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0">
            Bekijk product
            <ArrowCircle bg="#2c1250" />
          </button>
          <button className="flex items-center gap-3 rounded-[5px] border-2 border-[var(--cream)] px-6 py-3 text-[15px] font-bold text-[var(--cream)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--cream)] hover:text-[#2c1250] active:translate-y-0">
            Vind product
            <ArrowCircle bg="var(--cream)" fg="#2c1250" />
          </button>
        </div>

        {/* ===== NAV ===== */}
        <header className="absolute inset-x-0 top-0 z-30 px-4 pt-4">
          <nav
            aria-label="Hoofdnavigatie"
            className="relative flex h-[70px] w-full items-center justify-between rounded-[12px] border border-white/10 bg-[#180d2b]/45 px-5 text-white shadow-lg backdrop-blur-xl md:h-[90px] md:px-8"
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
              <li>
                <a href={asset("/producten/")} className="flex items-center gap-1.5 transition-opacity hover:opacity-70">
                  Producten
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M3 4.5 6 7.5 9 4.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </li>
              {NAV_LINKS.map((l) => (
                <li key={l}>
                  <a href={asset(NAV_HREF[l])} className="transition-opacity hover:opacity-70">
                    {l}
                  </a>
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
                src={asset("/assets/logo-amandel.png")}
                alt="Kroketco Belgium — Amandel Kroket"
                className="h-[48px] w-auto md:h-[62px]"
              />
              <span
                className="text-[24px] text-[var(--cream)] md:text-[30px]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Kroketco
              </span>
            </a>

            <span className="h-10 w-10 lg:hidden" aria-hidden="true" />
            <div className="hidden items-center gap-3 lg:flex">
              <button className="flex items-center gap-2.5 rounded-[5px] bg-[var(--cream)] px-5 py-3 text-[16px] font-bold text-[#2c1250] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0">
                Vind product
                <ArrowCircle bg="#2c1250" />
              </button>
              <button className="flex items-center gap-2.5 rounded-[5px] bg-[var(--cream)] px-5 py-3 text-[16px] font-bold text-[#2c1250] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0">
                Bestel nu
                <ArrowCircle bg="#2c1250" />
              </button>
            </div>
          </nav>

          {menuOpen && (
            <div className="mt-2 overflow-hidden rounded-[5px] border border-white/10 bg-[#180d2b]/85 px-6 py-5 text-white backdrop-blur-xl lg:hidden">
              <ul className="flex flex-col gap-4 text-[17px] font-semibold">
                {["Producten", ...NAV_LINKS].map((l) => (
                  <li key={l}>
                    <a href={asset(NAV_HREF[l])} onClick={() => setMenuOpen(false)} className="block rounded py-1 transition-opacity hover:opacity-70">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-col gap-3">
                <button className="flex items-center justify-center gap-2.5 rounded-[5px] bg-[var(--cream)] px-5 py-3 text-[16px] font-bold text-[#2c1250]">
                  Vind product
                  <ArrowCircle bg="#2c1250" />
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
