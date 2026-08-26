"use client";

import { useMemo, useState } from "react";
import { asset, SiteNav, SiteFooter, Arrow, INK } from "../_ui/chrome";

type Cat = "Snacks" | "Zoet" | "Hartig";

type Recipe = {
  title: string;
  img: string;
  time: string;
  cat: Cat;
  href: string;
  bg: string;
  diet: string[];
  populair: number;
};

const CARD_BG = ["#f5c542", "#a98bef", "#8fe6ff", "#7c1c44", "#c7e36a", "#ff8d8d"];

const RECIPES: Recipe[] = [
  {
    title: "Kroket Bites Plank",
    img: asset("/assets/UGC/ugc3.png"),
    time: "10 min",
    cat: "Snacks",
    href: asset("/recepten/loaded-kroket-bowl/"),
    bg: CARD_BG[0],
    diet: ["Vegetarisch"],
    populair: 5,
  },
  {
    title: "Krokdog Deluxe",
    img: asset("/assets/UGC/ugc4.png"),
    time: "6 min",
    cat: "Hartig",
    href: asset("/recepten/loaded-kroket-bowl/"),
    bg: CARD_BG[1],
    diet: ["Eiwitrijk"],
    populair: 2,
  },
  {
    title: "Purée & Kroket Bowl",
    img: asset("/assets/UGC/ugc5.png"),
    time: "15 min",
    cat: "Hartig",
    href: asset("/recepten/loaded-kroket-bowl/"),
    bg: CARD_BG[2],
    diet: ["Vegetarisch", "Eiwitrijk"],
    populair: 6,
  },
  {
    title: "Superano met Frietjes",
    img: asset("/assets/UGC/ugc6.png"),
    time: "40 min",
    cat: "Hartig",
    href: asset("/recepten/loaded-kroket-bowl/"),
    bg: CARD_BG[3],
    diet: ["Eiwitrijk"],
    populair: 3,
  },
  {
    title: "Vegan Kroket Wrap",
    img: asset("/assets/UGC/ugc7.png"),
    time: "12 min",
    cat: "Snacks",
    href: asset("/recepten/loaded-kroket-bowl/"),
    bg: CARD_BG[4],
    diet: ["Vegetarisch", "Vegan"],
    populair: 4,
  },
  {
    title: "Garnaal Kroket Toast",
    img: asset("/assets/UGC/ugc8.png"),
    time: "8 min",
    cat: "Snacks",
    href: asset("/recepten/loaded-kroket-bowl/"),
    bg: CARD_BG[5],
    diet: ["Eiwitrijk"],
    populair: 1,
  },
];

const TABS: (Cat | "Alle recepten")[] = [
  "Alle recepten",
  "Snacks",
  "Zoet",
  "Hartig",
];
const TAB_STAR = ["#ff8a00", "#c7e36a", "#f5c542", "#ff8d8d"];
const DIETS = ["Vegetarisch", "Vegan", "Eiwitrijk"];
const SORTS = ["Standaard", "A - Z", "Populair"] as const;

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
      aria-hidden="true"
    >
      <path
        d="M50 0 C54 30 70 46 100 50 C70 54 54 70 50 100 C46 70 30 54 0 50 C30 46 46 30 50 0Z"
        fill={color}
      />
    </svg>
  );
}

function Star({ color }: { color: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 100 100" aria-hidden="true">
      <path
        d="M50 4 58 34 88 26 66 50 88 74 58 66 50 96 42 66 12 74 34 50 12 26 42 34Z"
        fill={color}
      />
    </svg>
  );
}

function CheckCircle({ size = 18 }: { size?: number }) {
  return (
    <span
      className="grid shrink-0 place-items-center rounded-full bg-[var(--kc-green)]"
      style={{ width: size, height: size }}
    >
      <svg
        width={size * 0.55}
        height={size * 0.55}
        viewBox="0 0 12 12"
        fill="none"
      >
        <path
          d="M2.5 6.3 5 8.5 9.5 3.5"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function RecipeCard({ r }: { r: Recipe }) {
  const dark = r.bg === "#7c1c44" || r.bg === "var(--maroon)";
  const textColor = dark ? "var(--cream)" : "var(--kc-green)";
  return (
    <article
      className="flex flex-col rounded-[24px] p-4 transition-transform duration-300 hover:-translate-y-1"
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
      <div
        className="mt-4 flex items-center gap-1.5 text-[14px] font-semibold"
        style={{ color: textColor }}
      >
        <CheckCircle size={16} />
        {r.diet[0] ?? "Vegetarisch"}
      </div>
      <h3
        className="mt-2 min-h-[52px] text-[22px] font-extrabold uppercase leading-[0.95]"
        style={{ fontFamily: "var(--font-display)", color: textColor }}
      >
        {r.title}
      </h3>
      <a
        href={r.href}
        className="mt-3 flex w-max items-center gap-2 rounded-[12px] bg-white px-4 py-2.5 text-[14px] font-bold text-[var(--kc-green)] transition-transform duration-200 hover:-translate-y-0.5"
      >
        Bekijk recept
        <Arrow bg="#0e4b3a" />
      </a>
    </article>
  );
}

export default function ReceptenPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Alle recepten");
  const [search, setSearch] = useState("");
  const [diets, setDiets] = useState<string[]>([]);
  const [sort, setSort] = useState<(typeof SORTS)[number]>("Standaard");

  const toggleDiet = (d: string) =>
    setDiets((cur) =>
      cur.includes(d) ? cur.filter((x) => x !== d) : [...cur, d],
    );

  const clearAll = () => {
    setSearch("");
    setDiets([]);
    setTab("Alle recepten");
    setSort("Standaard");
  };

  const list = useMemo(() => {
    let out = RECIPES.filter((r) => {
      if (tab !== "Alle recepten" && r.cat !== tab) return false;
      if (search && !r.title.toLowerCase().includes(search.toLowerCase()))
        return false;
      if (diets.length && !diets.every((d) => r.diet.includes(d))) return false;
      return true;
    });
    if (sort === "A - Z")
      out = [...out].sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "Populair")
      out = [...out].sort((a, b) => b.populair - a.populair);
    return out;
  }, [tab, search, diets, sort]);

  return (
    <div className="bg-[var(--cream)]">
      <SiteNav active="Recepten" />

      {/* ===== HERO ===== */}
      <section className="relative -mt-[84px] bg-[var(--kc-blue)] px-4 pb-24 pt-[110px] md:-mt-[100px] md:pb-28 md:pt-[132px]">
        <Sparkle size={30} className="left-[8%]! top-[24%]!" />
        <Sparkle size={44} className="left-[16%]! bottom-[26%]!" />
        <Sparkle size={26} className="right-[12%]! top-[30%]!" />
        <Sparkle size={38} className="right-[8%]! bottom-[32%]!" />
        <div className="relative mx-auto max-w-[900px] text-center">
          <p className="text-[13px] font-bold uppercase tracking-[0.25em] text-[var(--kc-green)]">
            Recepten
          </p>
          <h1
            className="mt-4 font-extrabold uppercase leading-[0.9] text-[var(--kc-green)]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 6.5vw, 84px)",
            }}
          >
            Van onze keuken,
            <br />
            voor jou
          </h1>
        </div>

        {/* category tabs — overlap hero bottom */}
        <div className="absolute inset-x-0 -bottom-8 z-20 flex justify-center px-4">
          <div
            className="flex max-w-full flex-wrap items-center justify-center gap-1 rounded-full p-1.5 shadow-xl"
            style={{ background: INK }}
          >
            {TABS.map((t, i) => {
              const on = t === tab;
              return (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-[14px] font-bold transition md:px-5 ${
                    on
                      ? "bg-white text-black"
                      : "bg-transparent text-white hover:bg-white/10"
                  }`}
                >
                  <Star color={TAB_STAR[i]} />
                  {t}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== BODY ===== */}
      <section className="mx-auto max-w-[1400px] px-4 pb-20 pt-20 md:px-8">
        <div className="grid gap-10 md:grid-cols-[260px_1fr]">
          {/* sidebar */}
          <aside className="flex flex-col gap-6">
            <div>
              <label className="mb-2 block text-[13px] font-bold uppercase tracking-wide text-[var(--kc-green)]">
                Zoeken
              </label>
              <div className="flex items-center gap-2 rounded-[12px] bg-black/5 px-4 py-3">
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                  <circle cx="6" cy="6" r="4" stroke="#0e4b3a" strokeWidth="1.6" />
                  <path
                    d="m9.2 9.2 2.3 2.3"
                    stroke="#0e4b3a"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Zoek een recept…"
                  className="w-full bg-transparent text-[14px] text-[var(--kc-green)] outline-none placeholder:text-[var(--kc-green)]/50"
                />
              </div>
            </div>

            <div>
              <div className="mb-3 rounded-[10px] bg-[var(--kc-green)] px-4 py-2.5 text-[13px] font-bold uppercase tracking-wide text-white">
                Dieetvoorkeur
              </div>
              <div className="flex flex-col gap-3">
                {DIETS.map((d) => {
                  const on = diets.includes(d);
                  return (
                    <label
                      key={d}
                      className="flex cursor-pointer items-center gap-3 text-[15px] font-medium text-[var(--kc-green)]"
                    >
                      <span
                        className={`grid h-5 w-5 place-items-center rounded-[6px] border-2 transition ${
                          on
                            ? "border-[var(--kc-green)] bg-[var(--kc-green)]"
                            : "border-[var(--kc-green)]/40 bg-transparent"
                        }`}
                      >
                        {on && (
                          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                            <path
                              d="M2.5 6.3 5 8.5 9.5 3.5"
                              stroke="#fff"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </span>
                      <input
                        type="checkbox"
                        checked={on}
                        onChange={() => toggleDiet(d)}
                        className="sr-only"
                      />
                      {d}
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                className="flex items-center justify-center gap-2 rounded-[12px] px-5 py-3 text-[14px] font-bold text-white"
                style={{ background: INK }}
              >
                Zoeken
                <Arrow bg="#fff" fg={INK} />
              </button>
              <button
                onClick={clearAll}
                className="rounded-[12px] border border-[var(--kc-green)]/25 px-5 py-3 text-[14px] font-bold text-[var(--kc-green)] transition hover:bg-black/5"
              >
                Wis alles
              </button>
            </div>
          </aside>

          {/* main */}
          <div>
            <div className="mb-6 flex flex-wrap items-center justify-end gap-2">
              <span className="mr-1 text-[13px] font-semibold text-[var(--kc-green)]/60">
                Sorteer op:
              </span>
              {SORTS.map((s) => {
                const on = s === sort;
                return (
                  <button
                    key={s}
                    onClick={() => setSort(s)}
                    className={`rounded-full px-4 py-2 text-[13px] font-bold transition ${
                      on
                        ? "bg-[var(--kc-green)] text-white"
                        : "bg-black/5 text-[var(--kc-green)] hover:bg-black/10"
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>

            {list.length === 0 ? (
              <div className="rounded-[24px] bg-black/5 py-20 text-center text-[15px] font-medium text-[var(--kc-green)]/70">
                Geen recepten gevonden. Probeer een andere filter.
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((r) => (
                  <RecipeCard key={r.title} r={r} />
                ))}
              </div>
            )}

            {/* featured wide card */}
            <div className="relative mt-8 overflow-hidden rounded-[24px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/assets/UGC/ugc9.png")}
                alt="Loaded Kroket Bowl"
                loading="lazy"
                decoding="async"
                className="h-[360px] w-full object-cover md:h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center gap-4 p-6 md:max-w-[560px] md:p-12">
                <div className="flex items-center gap-1.5 text-[14px] font-semibold text-white">
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-white">
                    <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2.5 6.3 5 8.5 9.5 3.5"
                        stroke="#0e4b3a"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  Vegetarisch
                </div>
                <h2
                  className="font-extrabold uppercase leading-[0.9] text-white"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(30px, 4.5vw, 54px)",
                  }}
                >
                  Loaded Kroket Bowl
                </h2>
                <p className="max-w-[420px] text-[15px] font-medium text-white/85">
                  Krokante Kroketco kroketten op een frisse bowl met sla, feta,
                  jalapeños en chipotlesaus. Klaar in 20 minuten.
                </p>
                <a
                  href={asset("/recepten/loaded-kroket-bowl/")}
                  className="flex w-max items-center gap-2 rounded-[12px] bg-white px-5 py-3 text-[14px] font-bold text-[var(--kc-green)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Bekijk recept
                  <Arrow bg="#0e4b3a" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
