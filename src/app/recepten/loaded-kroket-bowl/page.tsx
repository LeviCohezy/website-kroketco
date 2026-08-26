"use client";

import { useState } from "react";
import { asset, SiteNav, SiteFooter, Arrow, INK, CREAM } from "../../_ui/chrome";

const INFO = ["Voorbereiding 10 min", "Bereiding 10 min", "Porties 2"];

const INGREDIENTS = [
  "2 Kroketco kroketten",
  "2 koppen sla, gesneden",
  "1/2 kop kerstomaatjes, gehalveerd",
  "1/4 rode ui, gesneden",
  "1/4 kop jalapeños",
  "feta, verkruimeld",
  "chipotlesaus",
  "mayonaise",
  "optioneel: maïs, paprika",
];

type Step = { text: string; img: string };
type Group = { heading: string; steps: Step[] };

const GROUPS: Group[] = [
  {
    heading: "Begin met de kroketten",
    steps: [
      {
        text: "Verwarm de frituur of oven voor op 180°C. Bak de Kroketco kroketten goudbruin en krokant, zo'n 8 à 10 minuten.",
        img: asset("/assets/UGC/ugc7.png"),
      },
      {
        text: "Laat de kroketten kort uitlekken op keukenpapier en snijd ze daarna in dikke, mondklare plakjes.",
        img: asset("/assets/UGC/ugc4.png"),
      },
    ],
  },
  {
    heading: "Vul je bowl",
    steps: [
      {
        text: "Verdeel de gesneden sla over twee bowls als frisse basis. Voeg de kerstomaatjes en rode ui toe.",
        img: asset("/assets/UGC/ugc5.png"),
      },
      {
        text: "Leg de warme kroketplakjes bovenop en strooi royaal verkruimelde feta en jalapeños over de bowl.",
        img: asset("/assets/UGC/ugc6.png"),
      },
    ],
  },
  {
    heading: "Saus & serveren",
    steps: [
      {
        text: "Meng de chipotlesaus met een lepel mayonaise tot een romige, licht pittige dressing.",
        img: asset("/assets/UGC/ugc7.png"),
      },
      {
        text: "Lepel de saus over de bowl, werk af met optioneel maïs en paprika en serveer meteen. Smakelijk!",
        img: asset("/assets/UGC/ugc4.png"),
      },
    ],
  },
];

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

function IngredientRow({ label }: { label: string }) {
  const [done, setDone] = useState(false);
  return (
    <label className="flex cursor-pointer items-start gap-3 text-[14px]">
      <span
        onClick={() => setDone((d) => !d)}
        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-[6px] border-2 transition ${
          done ? "border-[var(--kc-golden)] bg-[var(--kc-golden)]" : "border-white/30"
        }`}
      >
        {done && (
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path
              d="M2.5 6.3 5 8.5 9.5 3.5"
              stroke={INK}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <input
        type="checkbox"
        checked={done}
        onChange={() => setDone((d) => !d)}
        className="sr-only"
      />
      <span
        className={`leading-snug transition ${
          done ? "text-white/40 line-through" : "text-white/90"
        }`}
      >
        {label}
      </span>
    </label>
  );
}

function StepRow({ n, step }: { n: number; step: Step }) {
  const [done, setDone] = useState(false);
  return (
    <div className="grid gap-5 md:grid-cols-[1fr_260px] md:items-center">
      <div>
        <span className="inline-block rounded-full bg-[var(--kc-orange)] px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-wide text-white">
          Stap {n}
        </span>
        <p className="mt-3 text-[15px] leading-relaxed text-[var(--kc-green)]">
          {step.text}
        </p>
        <label className="mt-3 flex cursor-pointer items-center gap-2.5 text-[13px] font-semibold text-[var(--kc-green)]/70">
          <span
            className={`grid h-4 w-4 place-items-center rounded-[5px] border-2 transition ${
              done
                ? "border-[var(--kc-green)] bg-[var(--kc-green)]"
                : "border-[var(--kc-green)]/40"
            }`}
          >
            {done && (
              <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
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
            checked={done}
            onChange={() => setDone((d) => !d)}
            className="sr-only"
          />
          Markeer als klaar
        </label>
      </div>
      <div className="overflow-hidden rounded-[18px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={step.img}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="h-[220px] w-full object-cover"
        />
      </div>
    </div>
  );
}

export default function LoadedKroketBowlPage() {
  let stepNo = 0;

  return (
    <div className="bg-[var(--cream)]">
      <SiteNav active="Recepten" />

      {/* ===== HERO ===== */}
      <section className="bg-[var(--maroon)] px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 md:grid-cols-2 md:px-4">
          {/* left */}
          <div>
            <p
              className="text-[13px] font-bold uppercase tracking-[0.25em]"
              style={{ color: CREAM }}
            >
              Kroketco Recepten
            </p>
            <h1
              className="mt-4 font-extrabold uppercase leading-[0.9]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(38px, 6vw, 76px)",
                color: CREAM,
              }}
            >
              Loaded
              <br />
              Kroket Bowl
            </h1>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {INFO.map((p) => (
                <span
                  key={p}
                  className="rounded-full border px-4 py-2 text-[13px] font-semibold"
                  style={{ borderColor: "rgba(255,243,226,0.4)", color: CREAM }}
                >
                  {p}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                className="flex items-center gap-2.5 rounded-[12px] px-6 py-3 text-[15px] font-bold"
                style={{ background: CREAM, color: INK }}
              >
                Print recept
                <Arrow bg={INK} fg={CREAM} />
              </button>
              <button
                aria-label="Deel recept"
                className="grid h-[46px] w-[46px] place-items-center rounded-[12px] border"
                style={{ borderColor: "rgba(255,243,226,0.4)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="18" cy="5" r="2.4" stroke={CREAM} strokeWidth="1.8" />
                  <circle cx="6" cy="12" r="2.4" stroke={CREAM} strokeWidth="1.8" />
                  <circle cx="18" cy="19" r="2.4" stroke={CREAM} strokeWidth="1.8" />
                  <path
                    d="m8.1 10.8 7.8-4.6M8.1 13.2l7.8 4.6"
                    stroke={CREAM}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* right */}
          <div className="relative">
            <Sparkle size={34} className="left-[-10px]! top-[-10px]! z-10" />
            <Sparkle size={26} className="right-[24px]! bottom-[40px]! z-10" />
            <div className="overflow-hidden rounded-[24px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/assets/UGC/ugc6.png")}
                alt="Loaded Kroket Bowl"
                loading="lazy"
                decoding="async"
                className="h-[300px] w-full object-cover md:h-[420px]"
              />
            </div>
            <button className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-[var(--kc-orange)] px-4 py-2 text-[13px] font-bold text-white shadow-lg">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="#fff">
                <path d="M2 1.5v9l8-4.5z" />
              </svg>
              Bekijk video
            </button>
          </div>
        </div>
      </section>

      {/* ===== BODY ===== */}
      <section className="mx-auto max-w-[1200px] px-4 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-[280px_1fr]">
          {/* sidebar */}
          <aside className="md:sticky md:top-28 md:self-start">
            <div
              className="rounded-[22px] p-6 text-white"
              style={{ background: INK }}
            >
              <h2
                className="text-[22px] font-extrabold uppercase leading-none"
                style={{ fontFamily: "var(--font-display)", color: CREAM }}
              >
                Ingrediënten
              </h2>
              <div className="mt-5 flex flex-col gap-3.5">
                {INGREDIENTS.map((ing) => (
                  <IngredientRow key={ing} label={ing} />
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-[18px] bg-black/5 p-4">
              <p className="text-[12px] font-bold uppercase tracking-wide text-[var(--kc-green)]/60">
                Uitgelicht product
              </p>
              <div className="mt-3 flex items-center gap-3">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-[12px] bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset("/assets/hero-product-4.png")}
                    alt="Garnaal Kroket"
                    loading="lazy"
                    decoding="async"
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <div>
                  <p className="text-[15px] font-bold text-[var(--kc-green)]">
                    Garnaal Kroket
                  </p>
                  <a
                    href={asset("/producten/")}
                    className="mt-1 flex items-center gap-1.5 text-[13px] font-semibold text-[var(--kc-green)]/70 hover:text-[var(--kc-green)]"
                  >
                    Bekijk product
                    <Arrow bg="#0e4b3a" />
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* steps */}
          <div className="flex flex-col gap-12">
            {GROUPS.map((g) => (
              <div key={g.heading}>
                <h3 className="mb-6 text-[22px] font-bold text-[var(--kc-green)]">
                  {g.heading}
                </h3>
                <div className="flex flex-col gap-10">
                  {g.steps.map((s) => {
                    stepNo += 1;
                    return <StepRow key={stepNo} n={stepNo} step={s} />;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
