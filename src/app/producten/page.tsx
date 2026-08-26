"use client";

import { useMemo, useState } from "react";
import { asset, SiteNav, SiteFooter, Arrow, INK } from "../_ui/chrome";

type Prod = {
  name: string;
  img: string;
  shape: string;
  cat: string;
  diet: string[];
  href?: string;
};

const PRODUCTS: Prod[] = [
  { name: "Emmental Kaaskroket", img: "/assets/hero-product.png", shape: "/assets/shapes/shape1.png", cat: "Kaas", diet: ["Vegetarisch", "Halal"] },
  { name: "Amandel Kroket", img: "/assets/hero-product-5.png", shape: "/assets/shapes/shape15.png", cat: "Kaas", diet: ["Vegetarisch", "Vegan"], href: "/assortiment/amandel-kroket/" },
  { name: "Groendal Groentekroket", img: "/assets/hero-product-3.png", shape: "/assets/shapes/shape5.png", cat: "Vega", diet: ["Vegetarisch", "Vegan"], href: "/assortiment/groendal-kroket/" },
  { name: "Belgische Verse Purée", img: "/assets/hero-product-2.png", shape: "/assets/shapes/shape11.png", cat: "Purée", diet: ["Vegetarisch", "Glutenvrij"] },
  { name: "Noordzee Garnaalkroket", img: "/assets/hero-product-4.png", shape: "/assets/shapes/shape6.png", cat: "Rollen", diet: ["Ambachtelijk"], href: "/assortiment/garnaal-kroket/" },
  { name: "Gebraden Kipkroket", img: "/assets/hero-product-7.png", shape: "/assets/shapes/shape8.png", cat: "Rollen", diet: ["Halal"] },
  { name: "Superano Kroket", img: "/assets/hero-product-6.png", shape: "/assets/shapes/shape12.png", cat: "Rollen", diet: ["Ambachtelijk", "Halal"] },
];

const CATS = [
  { label: "Alle producten", color: "#111" },
  { label: "Kaas", color: "var(--kc-orange)" },
  { label: "Vega", color: "var(--kc-lime)" },
  { label: "Rollen", color: "var(--maroon)" },
  { label: "Purée", color: "var(--kc-golden)" },
];
const DIETS = ["Vegetarisch", "Vegan", "Halal", "Glutenvrij", "Ambachtelijk"];
const SORTS = ["Standaard", "A - Z", "Populair"];

function Check() {
  return (
    <span className="grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-[var(--kc-orange)]">
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
        <path d="M2.5 6.3 5 8.5 9.5 3.5" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function Producten() {
  const [cat, setCat] = useState("Alle producten");
  const [diet, setDiet] = useState<string[]>([]);
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("Standaard");

  const list = useMemo(() => {
    let r = PRODUCTS.filter((p) => cat === "Alle producten" || p.cat === cat);
    if (diet.length) r = r.filter((p) => diet.every((d) => p.diet.includes(d)));
    if (q.trim()) r = r.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()));
    if (sort === "A - Z") r = [...r].sort((a, b) => a.name.localeCompare(b.name));
    return r;
  }, [cat, diet, q, sort]);

  const toggle = (d: string) =>
    setDiet((s) => (s.includes(d) ? s.filter((x) => x !== d) : [...s, d]));

  return (
    <div className="bg-[var(--cream)]">
      <SiteNav active="Producten" />

      {/* yellow hero */}
      <section className="relative -mt-[84px] bg-[var(--kc-golden)] px-4 pb-24 pt-[110px] text-center md:-mt-[100px] md:pt-[132px]">
        <p className="text-[15px] font-extrabold uppercase tracking-[0.15em] text-black">Honger?</p>
        <h1
          className="mx-auto mt-4 max-w-[1100px] font-extrabold uppercase leading-[0.88] text-black"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(46px, 8vw, 118px)" }}
        >
          Ontdek onze
          <br />
          kroketten
        </h1>

        {/* category tabs pill, overlapping hero bottom */}
        <div className="absolute inset-x-0 -bottom-8 flex justify-center px-4">
          <div
            className="flex max-w-full gap-2 overflow-x-auto rounded-[18px] p-2 shadow-xl"
            style={{ background: INK, scrollbarWidth: "none" }}
          >
            {CATS.map((c) => (
              <button
                key={c.label}
                onClick={() => setCat(c.label)}
                className="flex shrink-0 items-center gap-2 rounded-[12px] px-5 py-3 text-[15px] font-bold transition"
                style={{
                  background: cat === c.label ? "#fff" : "transparent",
                  color: cat === c.label ? "#111" : "#fff",
                }}
              >
                <span className="grid h-[14px] w-[14px] place-items-center">
                  <svg width="14" height="14" viewBox="0 0 100 100" fill={cat === c.label ? "#111" : c.color}>
                    <path d="M50 4 58 34 88 26 66 50 88 74 58 66 50 96 42 66 12 74 34 50 12 26 42 34Z" />
                  </svg>
                </span>
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* body */}
      <section className="mx-auto max-w-[1400px] px-4 pb-20 pt-20 md:px-8">
        <div className="grid gap-10 md:grid-cols-[260px_1fr]">
          {/* filters */}
          <aside>
            <div className="flex items-center gap-2 rounded-[12px] bg-black/5 px-4 py-3">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Zoeken"
                className="w-full bg-transparent text-[15px] text-[var(--kc-green)] outline-none placeholder:text-[var(--kc-green)]/60"
              />
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                <circle cx="6" cy="6" r="4" stroke="var(--kc-green)" strokeWidth="1.6" />
                <path d="m9.2 9.2 2.3 2.3" stroke="var(--kc-green)" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <div className="mt-4 rounded-[12px] bg-black/5 px-4 py-3 text-[16px] font-bold text-[var(--kc-green)]">
              Dieetvoorkeur
            </div>
            <ul className="mt-5 flex flex-col gap-4">
              {DIETS.map((d) => (
                <li key={d}>
                  <label className="flex cursor-pointer items-center gap-3 text-[16px] font-semibold text-[var(--kc-green)]">
                    <span
                      className="grid h-5 w-5 place-items-center rounded-[5px] border-2"
                      style={{
                        borderColor: "var(--kc-green)",
                        background: diet.includes(d) ? "var(--kc-green)" : "transparent",
                      }}
                    >
                      {diet.includes(d) && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2.5 6.3 5 8.5 9.5 3.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                    <input type="checkbox" className="sr-only" checked={diet.includes(d)} onChange={() => toggle(d)} />
                    {d}
                  </label>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex gap-3">
              <button
                className="rounded-[10px] px-6 py-2.5 text-[15px] font-bold text-white"
                style={{ background: INK }}
              >
                Zoeken
              </button>
              <button
                onClick={() => {
                  setDiet([]);
                  setQ("");
                  setCat("Alle producten");
                }}
                className="rounded-[10px] border-2 px-6 py-2.5 text-[15px] font-bold"
                style={{ borderColor: INK, color: INK }}
              >
                Wis alles
              </button>
            </div>
          </aside>

          {/* grid */}
          <div>
            <div className="mb-8 flex justify-end gap-3">
              {SORTS.map((s) => (
                <button
                  key={s}
                  onClick={() => setSort(s)}
                  className="rounded-[10px] px-5 py-2.5 text-[15px] font-bold transition"
                  style={{
                    background: sort === s ? INK : "transparent",
                    color: sort === s ? "#fff" : INK,
                    border: sort === s ? "2px solid transparent" : "2px solid rgba(0,0,0,0.12)",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>

            {list.length === 0 ? (
              <p className="py-20 text-center text-[18px] font-semibold text-[var(--kc-green)]/70">
                Geen kroketten gevonden — pas je filters aan.
              </p>
            ) : (
              <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((p) => {
                  const inner = (
                    <>
                      <div className="relative flex h-[240px] items-center justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={asset(p.shape)}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          className="absolute h-[220px] w-[220px] object-contain opacity-30"
                        />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={asset(p.img)}
                          alt={p.name}
                          loading="lazy"
                          className="relative z-10 h-[200px] w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <h3
                        className="mt-4 text-center text-[22px] font-extrabold uppercase leading-none text-[var(--kc-green)]"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {p.name}
                      </h3>
                      <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2">
                        {p.diet.map((d) => (
                          <span key={d} className="flex items-center gap-1.5 text-[14px] font-bold text-[var(--kc-green)]">
                            <Check />
                            {d}
                          </span>
                        ))}
                      </div>
                    </>
                  );
                  return p.href ? (
                    <a key={p.name} href={asset(p.href)} className="group block">
                      {inner}
                    </a>
                  ) : (
                    <div key={p.name} className="group">
                      {inner}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
