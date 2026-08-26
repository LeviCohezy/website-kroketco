"use client";

import { useMemo, useState } from "react";
import { asset, SiteNav, SiteFooter, Arrow, INK } from "../_ui/chrome";

// small white sparkle for the collage
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

type Cat = "Bedrijfsnieuws" | "Productnieuws";
type NewsItem = {
  title: string;
  img: string;
  cat: Cat;
  excerpt: string;
};

const ARTICLE_HREF = asset("/nieuws/marketing-award/");

const TABS = ["Laatste nieuws", "Bedrijfsnieuws", "Productnieuws"] as const;

// card background colours rotate through the brand palette
const CARD_BG = [
  "var(--kc-blue)",
  "var(--kc-golden)",
  "var(--kc-lime)",
  "var(--kc-lavender)",
  "var(--maroon)",
  "var(--kc-coral)",
];
// on which of the above should the title be cream (dark backgrounds)
const CARD_DARK = ["var(--maroon)"];

const NEWS: NewsItem[] = [
  {
    title: "Een woordje van onze CEO",
    img: "/assets/UGC/ugc3.png",
    cat: "Bedrijfsnieuws",
    excerpt:
      "Na een bewogen jaar blikt onze oprichter terug op waar Kroketco vandaan komt en waar we naartoe groeien.",
  },
  {
    title: "Ons kleine verhaal wint groot op de awards",
    img: "/assets/UGC/ugc1.png",
    cat: "Bedrijfsnieuws",
    excerpt:
      "De “Groeien met jou”-campagne over familie en verbinding werd bekroond met zilver én brons.",
  },
  {
    title: "Uitgelicht in Retail Magazine",
    img: "/assets/UGC/ugc4.png",
    cat: "Bedrijfsnieuws",
    excerpt:
      "Het toonaangevende vakblad zet ons ambachtelijke verhaal en onze lokale keten in de kijker.",
  },
  {
    title: "Kroketco x sterrenchef",
    img: "/assets/UGC/ugc5.png",
    cat: "Productnieuws",
    excerpt:
      "Samen met een Belgische sterrenchef ontwikkelden we een limited edition kroket vol verrassende smaken.",
  },
  {
    title: "Ons recept voor groei",
    img: "/assets/UGC/ugc6.png",
    cat: "Bedrijfsnieuws",
    excerpt:
      "Hoe we blijven investeren in mensen, smaak en duurzaamheid zonder onze ambachtelijke ziel te verliezen.",
  },
  {
    title: "Nieuwe vegan kroket in de rekken",
    img: "/assets/UGC/ugc2.png",
    cat: "Productnieuws",
    excerpt:
      "Onze plantaardige kroket ligt nu in de vriesvakken van winkels in heel België en Nederland.",
  },
  {
    title: "Tweede ambachtelijke keuken geopend",
    img: "/assets/UGC/ugc7.png",
    cat: "Bedrijfsnieuws",
    excerpt:
      "Meer ruimte, dezelfde zorg — zodat we nog meer families vers kunnen laten genieten.",
  },
];

function NewsCard({ item, i }: { item: NewsItem; i: number }) {
  const bg = CARD_BG[i % CARD_BG.length];
  const dark = CARD_DARK.includes(bg);
  const titleColor = dark ? "var(--cream)" : "var(--kc-green)";
  const excerptColor = dark ? "rgba(255,243,226,0.85)" : "rgba(14,75,58,0.78)";
  return (
    <article
      className="flex flex-col overflow-hidden rounded-[20px] transition-transform duration-300 hover:-translate-y-1"
      style={{ background: bg }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset(item.img)}
        alt={item.title}
        loading="lazy"
        decoding="async"
        className="h-[190px] w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-5">
        <span
          className="text-[11px] font-bold uppercase tracking-wide"
          style={{ color: excerptColor }}
        >
          {item.cat}
        </span>
        <h3
          className="mt-2 text-[22px] font-extrabold uppercase leading-[0.98]"
          style={{ fontFamily: "var(--font-display)", color: titleColor }}
        >
          {item.title}
        </h3>
        <p
          className="mt-3 line-clamp-2 text-[14px] leading-snug"
          style={{ color: excerptColor }}
        >
          {item.excerpt}
        </p>
        <a
          href={ARTICLE_HREF}
          className="mt-5 flex w-max items-center gap-2 rounded-[12px] bg-white px-4 py-2.5 text-[14px] font-bold text-[var(--kc-green)] transition-transform duration-200 hover:-translate-y-0.5"
        >
          Lees meer
          <Arrow bg={INK} />
        </a>
      </div>
    </article>
  );
}

export default function NieuwsPage() {
  const [tab, setTab] = useState(0);
  const [sort, setSort] = useState(0); // 0 = Standaard, 1 = Recent

  const items = useMemo(() => {
    const active = TABS[tab];
    let list =
      active === "Laatste nieuws"
        ? NEWS
        : NEWS.filter((n) => n.cat === active);
    if (sort === 1) list = [...list].reverse();
    return list;
  }, [tab, sort]);

  return (
    <div className="bg-[var(--cream)]">
      <SiteNav active="Nieuws" />

      {/* ===== HERO — featured news (blue runs up behind the nav) ===== */}
      <section className="relative -mt-[84px] bg-[var(--kc-blue)] md:-mt-[100px]">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 pb-16 pt-[110px] md:grid-cols-2 md:px-8 md:pb-20 md:pt-[128px]">
          {/* left: copy */}
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--kc-green)]">
              Uitgelicht nieuws
            </p>
            <h1
              className="mt-4 font-extrabold uppercase leading-[0.9] text-[var(--kc-green)]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(38px, 5.5vw, 74px)",
              }}
            >
              Ons kleine verhaal wint groot op de awards
            </h1>
            <p className="mt-5 max-w-[520px] text-[16px] leading-relaxed text-[rgba(14,75,58,0.85)]">
              Onze “Groeien met jou”-campagne, een ode aan familie en verbinding,
              viel dubbel in de prijzen op de marketing awards. Ontdek het verhaal
              achter deze bekroning.
            </p>
            <a
              href={ARTICLE_HREF}
              className="mt-7 inline-flex items-center gap-3 rounded-[10px] px-6 py-3.5 text-[15px] font-bold text-white transition-transform duration-200 hover:-translate-y-0.5"
              style={{ background: INK }}
            >
              Lees meer
              <Arrow bg="#fff" fg={INK} />
            </a>
          </div>

          {/* right: collage */}
          <div className="relative mx-auto h-[340px] w-full max-w-[460px] md:h-[400px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/assets/UGC/ugc1.png")}
              alt="Kroketco op de awards"
              loading="lazy"
              decoding="async"
              className="absolute left-[4%] top-[8%] h-[64%] w-[62%] -rotate-6 rounded-[20px] object-cover shadow-xl"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/assets/UGC/ugc2.png")}
              alt="Kroketco team viert de prijs"
              loading="lazy"
              decoding="async"
              className="absolute right-[3%] bottom-[6%] h-[64%] w-[62%] rotate-6 rounded-[20px] object-cover shadow-xl"
            />
            <Sparkle size={40} className="left-[-2%]! top-[2%]!" />
            <Sparkle size={26} className="right-[6%]! top-[10%]!" />
            <Sparkle size={32} className="left-[38%]! bottom-[0%]!" />
          </div>
        </div>

        {/* tab pill overlapping the hero bottom */}
        <div className="absolute inset-x-0 -bottom-8 z-20 flex justify-center px-4">
          <div
            className="flex flex-wrap items-center justify-center gap-1 rounded-full p-1.5 shadow-xl"
            style={{ background: INK }}
          >
            {TABS.map((t, i) => (
              <button
                key={t}
                onClick={() => setTab(i)}
                aria-pressed={tab === i}
                className={`rounded-full px-5 py-2.5 text-[14px] font-bold transition-colors ${
                  tab === i
                    ? "bg-white text-[var(--kc-green)]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BODY — sort + grid ===== */}
      <section className="mx-auto max-w-[1400px] px-4 pb-20 pt-20 md:px-8">
        {/* sort row */}
        <div className="mb-8 flex items-center justify-end gap-2">
          <span className="mr-1 text-[13px] font-semibold text-[rgba(14,75,58,0.6)]">
            Sorteren:
          </span>
          {["Standaard", "Recent"].map((s, i) => (
            <button
              key={s}
              onClick={() => setSort(i)}
              aria-pressed={sort === i}
              className={`rounded-full px-4 py-2 text-[13px] font-bold transition-colors ${
                sort === i
                  ? "bg-[var(--kc-green)] text-white"
                  : "bg-white text-[var(--kc-green)] hover:bg-black/5"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* card grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <NewsCard key={item.title} item={item} i={i} />
          ))}
        </div>

        {/* wide featured card */}
        <a
          href={ARTICLE_HREF}
          className="group mt-6 block overflow-hidden rounded-[24px]"
        >
          <div className="relative h-[300px] w-full md:h-[360px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/assets/UGC/ugc9.png")}
              alt="Kroketco x sterrenchef"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
              <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-white/80">
                In de kijker
              </p>
              <h2
                className="mt-2 max-w-[720px] font-extrabold uppercase leading-[0.92] text-[var(--cream)]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(28px, 4vw, 52px)",
                }}
              >
                Kroketco x sterrenchef: samen op smaak
              </h2>
              <span className="mt-5 inline-flex items-center gap-2 rounded-[12px] bg-white px-4 py-2.5 text-[14px] font-bold text-[var(--kc-green)] transition-transform duration-200 group-hover:-translate-y-0.5">
                Lees meer
                <Arrow bg={INK} />
              </span>
            </div>
          </div>
        </a>
      </section>

      <SiteFooter />
    </div>
  );
}
