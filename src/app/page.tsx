import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Black Label Solutions",
};

// Fallback numbers from last-known screenshot (2026-05)
const FALLBACK_STATS = {
  openRoles: 94,
  specialties: 45,
  states: 23,
};

type LpuStats = {
  openRoles: number;
  specialties: number;
  states: number;
  source: "live" | "fallback";
};

async function fetchLpuStats(): Promise<LpuStats> {
  // LPU jobs-beta renders stats via client-side JS from a private API.
  // We attempt a best-effort parse of the static HTML for any embedded numbers.
  // If unavailable, we fall back to last-known values.
  // TODO: Replace with a direct API call if/when LPU exposes a public stats endpoint.
  try {
    const res = await fetch("https://locumsunited.com/jobs-beta", {
      next: { revalidate: 3600 }, // revalidate hourly via ISR
      headers: {
        "User-Agent": "BlackLabelSolutions-site/1.0 (build-time fetch)",
      },
    });

    if (!res.ok) {
      return { ...FALLBACK_STATS, source: "fallback" };
    }

    const html = await res.text();

    // The page renders stats via JS; static HTML shows placeholder dashes.
    // Attempt to find any embedded JSON with counts.
    const nuxtMatch = html.match(/window\.__NUXT__\s*=\s*(\{.+?\});/s);
    if (nuxtMatch) {
      try {
        const nuxt = JSON.parse(nuxtMatch[1]) as Record<string, unknown>;
        const data = nuxt?.data as Record<string, unknown> | undefined;
        if (data) {
          const jobs = Number(data["jobs"] ?? data["jobsCount"] ?? data["total"]);
          if (!isNaN(jobs) && jobs > 0) {
            return {
              openRoles: jobs,
              specialties: FALLBACK_STATS.specialties,
              states: FALLBACK_STATS.states,
              source: "live",
            };
          }
        }
      } catch {
        // JSON parse failed, continue to fallback
      }
    }

    return { ...FALLBACK_STATS, source: "fallback" };
  } catch {
    return { ...FALLBACK_STATS, source: "fallback" };
  }
}

export default async function Home() {
  const stats = await fetchLpuStats();

  return (
    <main className="min-h-screen bg-obsidian-950 text-stone-100">

      {/* ================================================================
          NAV
      ================================================================ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-obsidian-950/90 backdrop-blur-sm border-b border-obsidian-800">
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
          <span className="font-serif text-lg font-light tracking-widest text-stone-50 uppercase">
            Black Label
          </span>
          <a
            href="mailto:julius@blacklabelsolutions.net"
            className="font-sans text-sm font-light text-stone-400 link-underline hover:text-gold-300 transition-colors duration-200"
          >
            Get in touch
          </a>
        </div>
      </nav>

      {/* ================================================================
          HERO
      ================================================================ */}
      <section className="pt-40 pb-36 px-8 max-w-6xl mx-auto">
        <div className="max-w-4xl">
          <p className="font-sans text-xs font-medium tracking-[0.2em] text-gold-500 uppercase mb-10">
            Black Label Solutions
          </p>
          <h1 className="font-serif text-7xl font-light text-stone-50 mb-8 leading-[1.06]">
            Custom operating systems
            <br />
            <em className="not-italic text-gold-300">for vertical staffing firms.</em>
          </h1>
          <p className="font-sans text-lg font-light text-stone-400 max-w-reading mb-14 leading-relaxed">
            We build a bespoke automation engine tailored to your market segment.
            You keep the API keys, the brand, and the outcomes. We run everything else.
          </p>
          <a
            href="mailto:julius@blacklabelsolutions.net?subject=BLS%20inquiry"
            className="inline-block font-sans text-sm font-medium tracking-wide text-obsidian-950 bg-gold-400 px-8 py-3 hover:bg-gold-300 transition-colors duration-200"
          >
            Start the conversation
          </a>
        </div>
      </section>

      <hr className="section-divider max-w-6xl mx-auto" />

      {/* ================================================================
          THE MODEL
      ================================================================ */}
      <section className="py-30 px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-3">
            <hr className="rule-gold mb-6" />
            <p className="font-sans text-xs font-medium tracking-[0.2em] text-gold-500 uppercase">
              The model
            </p>
          </div>
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl font-light text-stone-50 mb-8 leading-tight">
              Not a SaaS platform.
              <br />
              Not a consulting engagement.
            </h2>
            <div className="space-y-5 font-sans text-base font-light text-stone-300 leading-relaxed max-w-prose">
              <p>
                Most workflow tools give you a generic platform and leave the
                configuration to you. Most consultants hand over a spec document and
                disappear. Black Label does neither. We design and operate a custom
                engine built specifically for your vertical: your sourcing channels,
                your qualification criteria, your pipeline cadence, your brand voice.
              </p>
              <p>
                The arrangement is a BYOK operating partnership. You provision the API
                keys for the services we integrate: Anthropic, your ATS, your VMS
                feeds, your communication stack. The credentials live in your
                infrastructure. The intelligence, the orchestration, and the ongoing
                operation live with us. You own the outputs. We own the execution
                quality.
              </p>
              <p>
                This model exists because the leverage in vertical staffing is not in
                the software. It is in the operational judgment that the software
                encodes. A template can automate a task. A custom engine encodes
                a market thesis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider max-w-6xl mx-auto" />

      {/* ================================================================
          LIVE PROOF: LPU
      ================================================================ */}
      <section className="py-30 px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-3">
            <hr className="rule-gold mb-6" />
            <p className="font-sans text-xs font-medium tracking-[0.2em] text-gold-500 uppercase">
              Live proof
            </p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-serif text-4xl font-light text-stone-50 mb-4 leading-tight">
              Locums United
            </h2>
            <p className="font-sans text-sm font-light text-stone-500 mb-14 tracking-wide">
              Physician staffing, US locum tenens market
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-8 mb-14 pb-14 border-b border-obsidian-700">
              <div>
                <p className="font-serif stat-number text-7xl font-light text-stone-50 mb-2">
                  {stats.openRoles}
                </p>
                <p className="font-sans text-xs font-light text-stone-500 tracking-wide uppercase">
                  Open roles
                </p>
              </div>
              <div>
                <p className="font-serif stat-number text-7xl font-light text-stone-50 mb-2">
                  {stats.specialties}
                </p>
                <p className="font-sans text-xs font-light text-stone-500 tracking-wide uppercase">
                  Specialties
                </p>
              </div>
              <div>
                <p className="font-serif stat-number text-7xl font-light text-stone-50 mb-2">
                  {stats.states}
                </p>
                <p className="font-sans text-xs font-light text-stone-500 tracking-wide uppercase">
                  States
                </p>
              </div>
            </div>

            {/* Case study copy */}
            <div className="space-y-5 font-sans text-base font-light text-stone-300 leading-relaxed max-w-prose">
              <p>
                The LPU engine sources open physician positions from major VMS
                portals, scores each role against a multi-factor qualification model,
                and auto-presents matched opportunities to credentialed physicians in
                the pipeline. The system handles outreach cadence, response tracking,
                follow-up sequencing, and audit logging without manual intervention.
              </p>
              <p>
                When sourcing gaps appear or conversion rates drop below threshold,
                the engine self-diagnoses and escalates with a structured brief rather
                than silently degrading. The result is a recruitment operation that
                scales physician throughput without scaling headcount proportionally.
              </p>
            </div>

            <div className="mt-10">
              <span className="font-sans text-xs font-medium tracking-[0.18em] text-gold-600 uppercase border border-obsidian-700 px-4 py-2">
                Live since 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider max-w-6xl mx-auto" />

      {/* ================================================================
          VERTICALS
      ================================================================ */}
      <section className="py-30 px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-3">
            <hr className="rule-gold mb-6" />
            <p className="font-sans text-xs font-medium tracking-[0.2em] text-gold-500 uppercase">
              Verticals
            </p>
          </div>
          <div className="lg:col-span-9">
            <div className="divide-y divide-obsidian-700">
              <div className="py-7 flex items-baseline justify-between gap-8">
                <div>
                  <h3 className="font-serif text-2xl font-light text-stone-50 mb-1">
                    Locum tenens physician staffing
                  </h3>
                  <p className="font-sans text-sm font-light text-stone-400">
                    Multi-VMS sourcing, multi-agent qualification, auto-presentation pipeline.
                  </p>
                </div>
                <span className="font-sans text-xs font-medium tracking-widest text-gold-500 uppercase whitespace-nowrap">
                  Live
                </span>
              </div>

              <div className="py-7 flex items-baseline justify-between gap-8">
                <div>
                  <h3 className="font-serif text-2xl font-light text-stone-50 mb-1">
                    CRNA and anesthesia staffing
                  </h3>
                  <p className="font-sans text-sm font-light text-stone-400">
                    Credential-heavy, low-volume, high-margin. Built for precision over volume.
                  </p>
                </div>
                <span className="font-sans text-xs font-medium tracking-widest text-stone-600 uppercase whitespace-nowrap">
                  Upcoming
                </span>
              </div>

              <div className="py-7 flex items-baseline justify-between gap-8">
                <div>
                  <h3 className="font-serif text-2xl font-light text-stone-50 mb-1">
                    General medical recruitment
                  </h3>
                  <p className="font-sans text-sm font-light text-stone-400">
                    Full-time physician placement with sourcing, scoring, and outreach automation.
                  </p>
                </div>
                <span className="font-sans text-xs font-medium tracking-widest text-stone-600 uppercase whitespace-nowrap">
                  Upcoming
                </span>
              </div>

              <div className="py-7 flex items-baseline justify-between gap-8">
                <div>
                  <h3 className="font-serif text-2xl font-light text-stone-50 mb-1">
                    Adjacent vertical staffing
                  </h3>
                  <p className="font-sans text-sm font-light text-stone-400">
                    Any specialized staffing segment where margins justify a bespoke engine.
                  </p>
                </div>
                <span className="font-sans text-xs font-medium tracking-widest text-stone-600 uppercase whitespace-nowrap">
                  Inquiry
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider max-w-6xl mx-auto" />

      {/* ================================================================
          THE OPERATOR
      ================================================================ */}
      <section className="py-30 px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-3">
            <hr className="rule-gold mb-6" />
            <p className="font-sans text-xs font-medium tracking-[0.2em] text-gold-500 uppercase">
              The operator
            </p>
          </div>
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl font-light text-stone-50 mb-8 leading-tight">
              Julius Black
            </h2>
            <div className="space-y-5 font-sans text-base font-light text-stone-300 leading-relaxed max-w-prose">
              <p>
                I build operating systems for firms where the competitive advantage
                lives in the process, not the product. The thesis is simple: in
                high-margin, credential-intensive verticals, the firms that win are
                not the ones with the best software. They are the ones with the best
                encoded judgment. Custom engines beat workflow templates because
                templates are general-purpose by definition, and the edge in
                specialized markets is always in the specific.
              </p>
              <p>
                Black Label runs end-to-end: architecture, build, deployment,
                ongoing operation, and iteration as the market shifts. Clients get
                the outputs of a purpose-built system without carrying the
                engineering headcount to build or maintain it.
              </p>
              <p>
                If you run a staffing firm doing seven figures or more and you
                believe the process is where the leverage is, this is the conversation
                to have.
              </p>
            </div>
            <div className="mt-10">
              <a
                href="mailto:julius@blacklabelsolutions.net?subject=BLS%20operating%20partnership"
                className="inline-block font-sans text-sm font-medium tracking-wide text-obsidian-950 bg-gold-400 px-8 py-3 hover:bg-gold-300 transition-colors duration-200"
              >
                Book a call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          FOOTER
      ================================================================ */}
      <footer className="border-t border-obsidian-800 py-12 px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <span className="font-serif text-base font-light tracking-widest text-stone-500 uppercase">
            Black Label Solutions
          </span>
          <a
            href="mailto:julius@blacklabelsolutions.net"
            className="font-sans text-sm font-light text-stone-500 link-underline hover:text-stone-300 transition-colors duration-200"
          >
            julius@blacklabelsolutions.net
          </a>
          <span className="font-sans text-xs font-light text-stone-700">
            {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </main>
  );
}
