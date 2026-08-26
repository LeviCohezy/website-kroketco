"use client";

import { asset, SiteNav, SiteFooter } from "../../_ui/chrome";

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

export default function MarketingAwardPage() {
  return (
    <div className="bg-[var(--cream)]">
      <SiteNav active="Nieuws" />

      {/* ===== ARTICLE HEADER ===== */}
      <header className="mx-auto max-w-[860px] px-4 pt-14 text-center">
        <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--kc-caramel)]">
          Bedrijfsnieuws
        </p>
        <h1
          className="mt-4 font-extrabold uppercase leading-[0.9] text-[var(--kc-green)]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(34px, 5.4vw, 66px)",
          }}
        >
          Ons kleine verhaal wint groot op de marketing awards
        </h1>
        <p className="mt-5 text-[14px] font-medium text-[rgba(14,75,58,0.7)]">
          5 augustus 2025 <span className="mx-1">·</span> 3 min leestijd
        </p>
      </header>

      {/* ===== HERO IMAGE ===== */}
      <div className="mx-auto mt-10 max-w-[1000px] px-4">
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/assets/UGC/ugc1.png")}
            alt="Kroketco wint op de marketing awards"
            decoding="async"
            className="h-[420px] w-full rounded-[24px] object-cover shadow-xl"
          />
          <Sparkle size={44} className="left-[-14px]! top-[-16px]!" color="var(--kc-golden)" />
          <Sparkle size={30} className="right-[6%]! top-[-12px]!" />
        </div>
      </div>

      {/* ===== ARTICLE BODY ===== */}
      <article className="mx-auto max-w-[720px] px-4 py-12 text-[17px] leading-relaxed text-[var(--kc-green)]">
        <p>
          Wat begint als een klein familiebedrijf met een groot recept, eindigt
          soms op een podium vol schijnwerpers. Onze “Groeien met jou”-campagne
          werd bekroond op de marketing awards en sleepte zowel zilver als brons
          in de wacht — een erkenning waar ons hele team ontzettend trots op is.
        </p>

        <h2
          className="mt-10 mb-4 font-extrabold uppercase leading-none text-[var(--kc-green)]"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3.4vw, 38px)" }}
        >
          Een campagne over verbinding
        </h2>
        <p>
          “Groeien met jou” draait niet om kroketten alleen. Het gaat over de
          keukentafel, over generaties die samen aan die tafel zitten, over de
          kleine momenten die een familie tot een familie maken. We wilden een
          verhaal vertellen dat mensen raakt — en dat is precies wat de jury
          overtuigde.
        </p>
        <p className="mt-5">
          Van het eerste storyboard tot de laatste montage werkten we samen met
          lokale makers en echte families. Geen acteurs, geen decors: gewoon de
          warmte die je proeft wanneer iets met zorg gemaakt is.
        </p>

        <blockquote
          className="my-10 text-center font-extrabold uppercase leading-[0.95] text-[var(--maroon)]"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 4vw, 44px)" }}
        >
          “We groeien niet ondanks ons verhaal, maar dankzij ons verhaal.”
        </blockquote>

        <p>
          De dubbele bekroning bewijst dat authenticiteit werkt. In een tijd waarin
          iedereen om aandacht schreeuwt, kozen wij bewust voor stilte, voor
          nuance en voor oprechtheid. Dat de vakjury dit beloont, geeft ons
          vertrouwen om deze weg verder te bewandelen.
        </p>

        <h2
          className="mt-10 mb-4 font-extrabold uppercase leading-none text-[var(--kc-green)]"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3.4vw, 38px)" }}
        >
          Wat nu volgt
        </h2>
        <p>
          Deze prijzen zijn geen eindpunt maar een startsein. We blijven investeren
          in verhalen die verbinden, in producten die kloppen en in mensen die het
          verschil maken. Later dit jaar lanceren we een tweede luik van de
          campagne — en ja, ook daar staat de familie centraal.
        </p>
        <p className="mt-5">
          Bedankt aan iedereen die meewerkte, meekeek en meeleefde. Zonder jullie
          was er geen verhaal om te vertellen, laat staan een prijs om te winnen.
          Op naar de volgende hap, de volgende herinnering en het volgende
          hoofdstuk — samen.
        </p>
      </article>

      <SiteFooter />
    </div>
  );
}
