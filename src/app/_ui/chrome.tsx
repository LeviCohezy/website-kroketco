"use client";

import { useState } from "react";

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const asset = (p: string) => `${BP}${p}`;

// shared palette for the content pages
export const INK = "#17140d"; // near-black nav / footer
export const CREAM = "#fff3e2";

const NAV = [
  { label: "Producten", href: "/producten/", caret: true },
  { label: "Recepten", href: "/recepten/" },
  { label: "Over ons", href: "/over-ons/" },
  { label: "Nieuws", href: "/nieuws/" },
];

export function Arrow({ bg = INK, fg = "#fff" }: { bg?: string; fg?: string }) {
  return (
    <span
      className="grid h-6 w-6 place-items-center rounded-full"
      style={{ background: bg }}
    >
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
        <path
          d="M2.5 6h6M6 3.2 8.9 6 6 8.8"
          stroke={fg}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function SiteNav({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav
        aria-label="Hoofdnavigatie"
        className="relative mx-auto flex h-[68px] max-w-[1400px] items-center justify-between rounded-[16px] px-5 text-white shadow-lg md:h-[84px] md:px-8"
        style={{ background: INK }}
      >
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-full transition hover:bg-white/10 lg:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>

        <ul className="hidden items-center gap-8 text-[16px] font-semibold lg:flex">
          {NAV.map((l) => (
            <li key={l.label}>
              <a
                href={asset(l.href)}
                className="flex items-center gap-1.5 transition-opacity hover:opacity-70"
                style={{
                  textDecoration: active === l.label ? "underline" : undefined,
                  textUnderlineOffset: 6,
                }}
              >
                {l.label}
                {l.caret && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M3 4.5 6 7.5 9 4.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
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
          aria-label="Kroketco startpagina"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[26px] tracking-tight transition-opacity hover:opacity-80 md:text-[32px]"
          style={{ fontFamily: "var(--font-display)", color: CREAM }}
        >
          Kroketco
        </a>

        <span className="h-10 w-10 lg:hidden" aria-hidden="true" />
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={asset("/producten/")}
            className="flex items-center gap-2.5 rounded-[10px] px-5 py-2.5 text-[15px] font-bold transition-transform duration-200 hover:-translate-y-0.5"
            style={{ background: CREAM, color: INK }}
          >
            Vind product
            <Arrow />
          </a>
          <a
            href={asset("/producten/")}
            className="flex items-center gap-2.5 rounded-[10px] px-5 py-2.5 text-[15px] font-bold transition-transform duration-200 hover:-translate-y-0.5"
            style={{ background: CREAM, color: INK }}
          >
            Bestel nu
            <Arrow />
          </a>
        </div>
      </nav>

      {open && (
        <div
          className="mx-auto mt-2 max-w-[1400px] overflow-hidden rounded-[16px] px-6 py-5 text-white lg:hidden"
          style={{ background: INK }}
        >
          <ul className="flex flex-col gap-4 text-[17px] font-semibold">
            {NAV.map((l) => (
              <li key={l.label}>
                <a href={asset(l.href)} className="block py-1 hover:opacity-70">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

const FOOT_COLS = [
  [
    { label: "Home", href: "/" },
    { label: "Producten", href: "/producten/" },
    { label: "Waar te koop", href: "/producten/" },
    { label: "Recepten", href: "/recepten/" },
  ],
  [
    { label: "Over ons", href: "/over-ons/" },
    { label: "Nieuws", href: "/nieuws/" },
    { label: "Contact", href: "/over-ons/" },
    { label: "Voorwaarden", href: "#" },
    { label: "Privacy", href: "#" },
  ],
];

export function SiteFooter() {
  return (
    <footer className="relative">
      {/* newsletter panel overlapping the dark footer */}
      <div style={{ background: INK }}>
        <div className="mx-auto max-w-[1180px] px-4 pt-16 md:px-8">
          <div className="relative rounded-[26px] bg-[var(--lavender)] px-6 py-12 text-center md:px-16 md:py-16">
            <h2
              className="font-extrabold uppercase leading-[0.9] text-[#2a2320]"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(34px, 5vw, 64px)" }}
            >
              Kroketnieuws
              <br />
              in je inbox
            </h2>
            <p className="mx-auto mt-4 max-w-[560px] text-[15px] font-medium text-[#2a2320]">
              Ontvang aanbiedingen en al het laatste over producten, recepten en nieuws in je mailbox!
            </p>
            <div className="mx-auto mt-7 flex max-w-[720px] flex-col gap-3 sm:flex-row">
              <input
                placeholder="Volledige naam*"
                className="flex-1 rounded-[10px] bg-white px-4 py-3 text-[15px] text-[#2a2320] outline-none"
              />
              <input
                placeholder="E-mailadres*"
                className="flex-1 rounded-[10px] bg-white px-4 py-3 text-[15px] text-[#2a2320] outline-none"
              />
              <button
                className="flex items-center justify-center gap-2 rounded-[10px] px-6 py-3 text-[15px] font-bold text-white"
                style={{ background: INK }}
              >
                Verstuur
                <Arrow bg="#fff" fg={INK} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* dark footer */}
      <div style={{ background: INK }} className="text-white/80">
        <div className="mx-auto max-w-[1180px] px-4 pb-14 pt-10 text-center md:px-8">
          <a
            href={asset("/")}
            className="text-[28px] tracking-tight text-[var(--cream)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Kroketco
          </a>
          <p
            className="mt-3 font-extrabold uppercase leading-none text-[var(--kc-caramel)]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 5vw, 60px)" }}
          >
            #KroketVanHier
          </p>

          <div className="mt-12 grid gap-8 text-left sm:grid-cols-2 md:grid-cols-4">
            {FOOT_COLS.map((col, i) => (
              <ul key={i} className="flex flex-col gap-3 text-[14px] font-bold uppercase tracking-wide">
                {col.map((l) => (
                  <li key={l.label}>
                    <a href={asset(l.href)} className="transition-colors hover:text-white">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
            <div className="text-[14px]">
              <p className="font-bold uppercase tracking-wide text-white">Contact</p>
              <p className="mt-3">+32 (0)3 000 00 00</p>
              <p>info@kroketco.be</p>
              <p className="mt-4 font-bold uppercase tracking-wide text-white">Hoofdkantoor</p>
              <p className="mt-2">Kroketstraat 1</p>
              <p>9000 Gent, België</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
