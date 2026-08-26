"use client";

import { asset, SiteNav, SiteFooter, Arrow, INK } from "../_ui/chrome";

const DISPLAY = { fontFamily: "var(--font-display)" } as const;

/* eslint-disable @next/next/no-img-element */

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
      aria-hidden="true"
      style={{ position: "absolute" }}
    >
      <path
        d="M50 0 C54 30 70 46 100 50 C70 54 54 70 50 100 C46 70 30 54 0 50 C30 46 46 30 50 0Z"
        fill={color}
      />
    </svg>
  );
}

type Milestone = {
  year: string;
  title: string;
  text: string;
  bg: string;
  icon: React.ReactNode;
};

function IconWrap({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <span
      className="grid h-11 w-11 place-items-center rounded-full"
      style={{ background: color }}
    >
      {children}
    </span>
  );
}

const MILESTONES: Milestone[] = [
  {
    year: "1998",
    title: "Het eerste frituurtje",
    text: "In een klein hoekpand begint het allemaal: een familierecept, een pan hete olie en een rij vaste klanten.",
    bg: "var(--pink)",
    icon: (
      <IconWrap color="var(--maroon)">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M4 9h16l-1.4 10.2A2 2 0 0 1 16.6 21H7.4a2 2 0 0 1-2-1.8L4 9Z" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M8 6c0-1.5 1-2 2-2M12 6c0-1.5 1-2 2-2M16 6c0-1.5 1-2 2-2" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </IconWrap>
    ),
  },
  {
    year: "2005",
    title: "De fabriek opent",
    text: "De vraag groeit. We bouwen onze eigen ambachtelijke keuken, zodat elke kroket met dezelfde zorg gemaakt blijft.",
    bg: "var(--cream)",
    icon: (
      <IconWrap color="var(--kc-orange)">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M3 20V10l5 3V10l5 3V6l6 4v10H3Z" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      </IconWrap>
    ),
  },
  {
    year: "2012",
    title: "Kroketco gaat vega",
    text: "Onze eerste plantaardige kroketten rollen van de band — dezelfde krokante beet, nu voor iedereen aan tafel.",
    bg: "var(--kc-coral)",
    icon: (
      <IconWrap color="var(--kc-green)">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M20 4C10 4 4 10 4 20c8 0 16-4 16-16Z" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M7 17c4-6 8-8 11-9" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </IconWrap>
    ),
  },
  {
    year: "2020",
    title: "In de rekken van elke winkel",
    text: "Van hoekpand tot vriesvak: Kroketco ligt vandaag in supermarkten door heel België en Nederland.",
    bg: "var(--kc-blue)",
    icon: (
      <IconWrap color="var(--kc-lavender)">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M4 7h16l-1.5 12.5A2 2 0 0 1 16.5 21h-9A2 2 0 0 1 5.5 19.5L4 7Z" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M8 7a4 4 0 0 1 8 0" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </IconWrap>
    ),
  },
];

const TEAM = [
  { img: asset("/assets/UGC/ugc2.png"), name: "Marie", role: "Oprichter", h: "h-[320px]" },
  { img: asset("/assets/UGC/ugc5.png"), name: "Tom", role: "Chef-kok", h: "h-[260px]" },
  { img: asset("/assets/UGC/ugc7.png"), name: "Sofie", role: "Recepturen", h: "h-[340px]" },
  { img: asset("/assets/UGC/ugc9.png"), name: "Jonas", role: "Productie", h: "h-[260px]" },
  { img: asset("/assets/UGC/ugc10.png"), name: "Lien", role: "Kwaliteit", h: "h-[320px]" },
];

function Eyebrow({ children, color = "var(--kc-green)" }: { children: React.ReactNode; color?: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 text-[13px] font-extrabold uppercase tracking-[0.22em]"
      style={{ color }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: color }} />
      {children}
    </span>
  );
}

export default function OverOns() {
  return (
    <div className="bg-[var(--cream)]">
      <SiteNav active="Over ons" />

      {/* ===== 1. HERO ===== */}
      <section className="bg-[var(--kc-blue)] px-4 pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-[1100px] text-center">
          <Eyebrow>Over ons</Eyebrow>
          <h1
            className="mx-auto mt-4 max-w-[900px] font-extrabold uppercase leading-[0.9] text-[var(--kc-green)]"
            style={{ ...DISPLAY, fontSize: "clamp(44px, 8vw, 104px)" }}
          >
            Ambacht zoals het hoort
          </h1>
          <p className="mx-auto mt-6 max-w-[620px] text-[16px] font-medium leading-relaxed text-[#154438] md:text-[18px]">
            Kroketco maakt sinds jaar en dag ambachtelijke Belgische kroketten.
            Van een klein frituurtje tot de vriesvakken van heel het land —
            altijd met hetzelfde recept, dezelfde zorg en dezelfde liefde voor
            een goudbruine, romige hap.
          </p>

          {/* video / image block */}
          <div className="relative mx-auto mt-12 h-[300px] max-w-[900px] overflow-hidden rounded-[24px] shadow-2xl md:h-[420px]">
            <img
              src={asset("/assets/UGC/ugc1.png")}
              alt="Kroketco ambachtelijke keuken"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/15" />

            {/* play button */}
            <button
              aria-label="Bekijk video"
              className="absolute left-1/2 top-1/2 grid h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 shadow-xl transition-transform duration-200 hover:scale-105 md:h-[92px] md:w-[92px]"
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="var(--kc-green)">
                <path d="M8 5.5v13l11-6.5-11-6.5Z" />
              </svg>
            </button>

            <Sparkle size={30} className="left-[6%]! top-[12%]!" />
            <Sparkle size={22} className="right-[9%]! bottom-[14%]!" />

            {/* ambachtelijk badge */}
            <div className="absolute bottom-4 right-4 grid h-[92px] w-[92px] place-items-center rounded-full bg-[var(--kc-golden)] text-center shadow-lg md:h-[108px] md:w-[108px]">
              <span
                className="text-[13px] font-extrabold uppercase leading-tight text-[#3a2a12] md:text-[15px]"
                style={DISPLAY}
              >
                100%
                <br />
                ambachtelijk
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2. ONZE WAARDEN ===== */}
      <section className="bg-[var(--cream)] px-4 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <Eyebrow>Onze waarden</Eyebrow>
            <h2
              className="mt-4 font-extrabold uppercase leading-[0.92] text-[var(--kc-green)]"
              style={{ ...DISPLAY, fontSize: "clamp(34px, 5vw, 66px)" }}
            >
              Traditie.
              <br />
              Smaak.
              <br />
              Verbinding.
            </h2>
            <p className="mt-6 max-w-[520px] text-[16px] font-medium leading-relaxed text-[#3a3227] md:text-[17px]">
              Alles wat we doen, komt terug op drie dingen. We houden vast aan
              het originele familierecept, we kiezen altijd voor pure smaak
              boven snelle shortcuts, en we geloven dat een goede kroket mensen
              samenbrengt — aan de frituur, aan de keukentafel of op een feest.
            </p>
          </div>
          <div className="overflow-hidden rounded-[24px] shadow-xl">
            <img
              src={asset("/assets/UGC/ugc3.png")}
              alt="Ambachtelijk gemaakte kroketten"
              className="h-[320px] w-full object-cover md:h-[440px]"
            />
          </div>
        </div>
      </section>

      {/* ===== 3. BIG STATEMENT ===== */}
      <section className="relative overflow-hidden bg-[var(--lavender)] px-4 py-24 md:py-36">
        {/* scattered tilted photos (desktop only) */}
        <img
          src={asset("/assets/UGC/ugc4.png")}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-[4%] top-[14%] hidden h-[150px] w-[150px] -rotate-12 rounded-[18px] object-cover shadow-xl lg:block"
        />
        <img
          src={asset("/assets/UGC/ugc6.png")}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-[5%] top-[10%] hidden h-[130px] w-[130px] rotate-6 rounded-[18px] object-cover shadow-xl lg:block"
        />
        <img
          src={asset("/assets/UGC/ugc8.png")}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[10%] left-[9%] hidden h-[140px] w-[140px] rotate-[8deg] rounded-[18px] object-cover shadow-xl lg:block"
        />
        <img
          src={asset("/assets/UGC/ugc9.png")}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[14%] right-[8%] hidden h-[160px] w-[160px] -rotate-6 rounded-[18px] object-cover shadow-xl lg:block"
        />

        <Sparkle size={40} color="#ffffff" className="left-[24%]! top-[18%]! hidden md:block" />
        <Sparkle size={30} color="#ffffff" className="right-[26%]! bottom-[20%]! hidden md:block" />

        <div className="relative mx-auto max-w-[1000px] text-center">
          <h2
            className="font-extrabold uppercase leading-[0.88] text-[#2a2320]"
            style={{ ...DISPLAY, fontSize: "clamp(40px, 7vw, 92px)" }}
          >
            Het leven mag altijd zo{" "}
            <span style={{ color: "var(--kc-orange)" }}>lekker</span> zijn
          </h2>
        </div>
      </section>

      {/* ===== 4. ONZE MISSIE (image left) ===== */}
      <section className="bg-[var(--cream)] px-4 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="order-2 overflow-hidden rounded-[24px] shadow-xl md:order-1">
            <img
              src={asset("/assets/UGC/ugc7.png")}
              alt="Een feest in elke hap"
              className="h-[320px] w-full object-cover md:h-[440px]"
            />
          </div>
          <div className="order-1 md:order-2">
            <Eyebrow color="var(--kc-orange)">Onze missie</Eyebrow>
            <h2
              className="mt-4 font-extrabold uppercase leading-[0.92] text-[var(--kc-green)]"
              style={{ ...DISPLAY, fontSize: "clamp(34px, 5vw, 66px)" }}
            >
              Een feest in
              <br />
              elke hap
            </h2>
            <p className="mt-6 max-w-[520px] text-[16px] font-medium leading-relaxed text-[#3a3227] md:text-[17px]">
              We willen dat elk moment met een Kroketco-kroket voelt als een
              klein feestje. Daarom stoppen we in elke kroket de beste
              ingrediënten, blijven we sleutelen aan nieuwe smaken en zorgen we
              dat iedereen — vega, halal of klassiek — mee kan smullen. Gewoon
              omdat het leven altijd zo lekker mag zijn.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 5. TIMELINE ===== */}
      <section className="bg-[var(--cream)] px-4 pb-24 pt-4 md:pb-32">
        <div className="mx-auto max-w-[1180px]">
          <h2
            className="text-center font-extrabold uppercase leading-[0.92] text-[var(--kc-green)]"
            style={{ ...DISPLAY, fontSize: "clamp(32px, 5vw, 62px)" }}
          >
            Kroketco door de jaren
          </h2>

          {/* connecting line (desktop) */}
          <div className="relative mt-14">
            <div className="absolute left-0 right-0 top-[70px] hidden h-[3px] bg-[var(--kc-green)]/20 md:block" />
            <div className="flex gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible">
              {MILESTONES.map((m) => (
                <div
                  key={m.year}
                  className="relative flex w-[260px] shrink-0 flex-col rounded-[18px] p-6 shadow-lg md:w-auto"
                  style={{ background: m.bg }}
                >
                  {m.icon}
                  <span
                    className="mt-5 font-extrabold leading-none text-[var(--kc-green)]"
                    style={{ ...DISPLAY, fontSize: "clamp(38px, 4vw, 52px)" }}
                  >
                    {m.year}
                  </span>
                  <h3
                    className="mt-3 text-[19px] font-extrabold uppercase leading-tight text-[var(--kc-green)]"
                    style={DISPLAY}
                  >
                    {m.title}
                  </h3>
                  <p className="mt-3 text-[14px] font-medium leading-relaxed text-[#3a3227]">
                    {m.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 6. ONTMOET HET TEAM ===== */}
      <section className="bg-[var(--pink)] px-4 py-16 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <div className="text-center">
            <Eyebrow color="var(--maroon)">Ontmoet het team</Eyebrow>
            <h2
              className="mx-auto mt-4 max-w-[760px] font-extrabold uppercase leading-[0.9] text-[var(--maroon)]"
              style={{ ...DISPLAY, fontSize: "clamp(36px, 6vw, 78px)" }}
            >
              Ontmoet de familie
            </h2>
            <p className="mx-auto mt-5 max-w-[560px] text-[16px] font-medium leading-relaxed text-[#5a2a3d]">
              Achter elke kroket staat een team dat er elke dag met plezier
              instaat. Dit zijn de mensen die traditie, smaak en verbinding
              levend houden.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-end justify-center gap-5 md:gap-6">
            {TEAM.map((t) => (
              <figure key={t.name} className="w-[170px] md:w-[200px]">
                <div className="overflow-hidden rounded-[20px] shadow-lg">
                  <img
                    src={t.img}
                    alt={`${t.name} — ${t.role}`}
                    className={`w-full object-cover ${t.h}`}
                  />
                </div>
                <figcaption className="mt-3 text-center">
                  <span
                    className="block text-[18px] font-extrabold uppercase leading-none text-[var(--maroon)]"
                    style={DISPLAY}
                  >
                    {t.name}
                  </span>
                  <span className="mt-1 block text-[13px] font-semibold text-[#7c1c44]/80">
                    {t.role}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href={asset("/producten/")}
              className="flex items-center gap-2.5 rounded-[10px] px-6 py-3.5 text-[15px] font-bold text-white transition-transform duration-200 hover:-translate-y-0.5"
              style={{ background: INK }}
            >
              Ontdek onze kroketten
              <Arrow bg="#fff" fg={INK} />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
