import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Black Label Solutions | Custom software, not plug-and-play",
};

// Fallback numbers from last-known data (2026-05)
const FALLBACK_STATS = {
  openRoles: 94,
  specialties: 45,
  states: 23,
};

type EngineStats = {
  openRoles: number;
  specialties: number;
  states: number;
  source: "live" | "fallback";
};

async function fetchEngineStats(): Promise<EngineStats> {
  // TODO: Wire to a direct API endpoint when the client stats API is published.
  // Until then, return last-known fallback values.
  try {
    return { ...FALLBACK_STATS, source: "fallback" };
  } catch {
    return { ...FALLBACK_STATS, source: "fallback" };
  }
}

export default async function Home() {
  const stats = await fetchEngineStats();

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
            Your firm doesn&apos;t fit a template.
            <br />
            <em className="not-italic text-gold-300">Your software shouldn&apos;t either.</em>
          </h1>
          <p className="font-sans text-lg font-light text-stone-400 max-w-reading mb-14 leading-relaxed">
            BLS builds a custom operating engine for your recruitment firm.
            Your sourcing logic, your qualification rules, your brand voice.
            You keep the API keys and the outcomes. We run the engine.
          </p>
          <a
            href="mailto:julius@blacklabelsolutions.net?subject=Discovery%20call%20request"
            className="inline-block font-sans text-sm font-medium tracking-wide text-obsidian-950 bg-gold-400 px-8 py-3 hover:bg-gold-300 transition-colors duration-200"
          >
            Book a discovery call
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
                Most automation tools are templates wearing your logo. They work fine
                until your workflow doesn&apos;t match the template, and then you are the
                one bending to fit the software. Template tools are general-purpose by
                design. The edge in specialized markets is always in the specific.
              </p>
              <p>
                BLS builds custom software for one vertical firm at a time. Your sourcing
                channels, your qualification criteria, your follow-up cadence, your brand
                voice. All shaped to your operation, not someone else&apos;s. We design it,
                deploy it, and operate it on your behalf.
              </p>
              <p>
                The arrangement is a BYOK operating partnership. You provision the API
                keys for the services we integrate. The credentials live in your
                infrastructure. Your data stays yours, your AI bill stays yours, your IP
                stays yours. We own the execution quality.
              </p>
              <p>
                Not SaaS you log into. Not consulting that ships a deliverable and leaves.
                Software that does real operator work, running continuously while you run
                the business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider max-w-6xl mx-auto" />

      {/* ================================================================
          PROOF
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
              Physician staffing. US locum tenens market.
            </h2>
            <p className="font-sans text-sm font-light text-stone-500 mb-14 tracking-wide">
              Custom engine, live in production since 2026.
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
                Last year we built a custom engine for a physician-founded locum
                recruitment firm. The founder was running every workflow himself:
                sourcing, qualification, outreach, follow-up. He was the bottleneck
                in his own operation.
              </p>
              <p>
                The engine we built handles sourcing across major VMS portals, scores
                each role against a multi-factor qualification model, and auto-presents
                matched opportunities to credentialed physicians in the pipeline. It
                manages outreach cadence, response tracking, follow-up sequencing, and
                audit logging without manual intervention.
              </p>
              <p>
                He went from running every workflow himself to operating across 23 states
                with a full multi-agent pipeline. Sourcing, qualification, presentation,
                follow-up, audit, self-healing. The engine runs while he sleeps.
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
          <div className="lg:col-span-7">
            <div className="space-y-5 font-sans text-base font-light text-stone-300 leading-relaxed max-w-prose">
              <p>
                <span className="text-stone-50 font-normal">Locum tenens physician staffing.</span>{" "}
                Live. Multi-VMS sourcing, multi-agent qualification, and auto-presentation
                running in production today.
              </p>
              <p>
                <span className="text-stone-50 font-normal">CRNA and anesthesia staffing.</span>{" "}
                Credential-heavy, low-volume, high-margin. Built for precision over throughput.
                Architecture ready, first client engagement in progress.
              </p>
              <p>
                <span className="text-stone-50 font-normal">Adjacent specialties.</span>{" "}
                Allied health, behavioral health, surgical recruiting. Accepted by exception
                where the margin and complexity justify a bespoke engine.
              </p>
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
                I got tired of watching vertical recruitment founders drown in manual
                work they couldn&apos;t hire their way out of. Every tool they tried was a
                template. Every consultant they hired shipped a deck. Neither actually
                removed them from the bottleneck.
              </p>
              <p>
                So I built the engine I wished they had. Custom software shaped to how
                the specific firm actually operates: their market, their credential
                requirements, their sourcing channels, their outreach voice. Then I
                kept operating it rather than handing it off, because the leverage is
                in the operation, not just the build.
              </p>
              <p>
                Black Label takes on selected firms where the process complexity
                justifies the depth of engagement. If you run a staffing firm doing
                real volume and you believe the process is where the leverage is,
                this is the conversation worth having.
              </p>
            </div>
            <div className="mt-10">
              <a
                href="mailto:julius@blacklabelsolutions.net?subject=Discovery%20call%20request"
                className="inline-block font-sans text-sm font-medium tracking-wide text-obsidian-950 bg-gold-400 px-8 py-3 hover:bg-gold-300 transition-colors duration-200"
              >
                Book a discovery call
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
