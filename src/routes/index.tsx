import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/SiteNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Harini P — Author, Content & Technical Writer" },
      { name: "description", content: "Editorial portfolio of Harini P — published author, content writer, technical writer, AI content writer, script writer & copywriter." },
      { property: "og:title", content: "Harini P — Author & Writer Portfolio" },
      { property: "og:description", content: "Transforming ideas into impactful stories." },
    ],
  }),
  component: Index,
});

const expertise = [
  "Content Writing", "Technical Writing", "AI Content Writing", "Script Writing",
  "SEO Writing", "Copywriting", "Creative Writing", "Research & Documentation", "Editing & Proofreading",
];

const tools = ["Canva", "Google Docs", "Microsoft Office", "Grammarly", "Adobe", "Python", "SQL", "Pandas", "Tableau", "Matplotlib"];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="flex items-center gap-4">
          <span className="eyebrow">The Portfolio</span>
          <div className="h-px flex-1 bg-foreground/20" />
          <span className="eyebrow text-foreground/60">Issue 01</span>
        </div>

        <h1 className="mt-10 font-display text-[clamp(3.5rem,11vw,9rem)] leading-[0.95] tracking-tight">
          Harini<span className="italic font-normal"> P</span>
        </h1>

        <div className="mt-10 grid gap-10 md:grid-cols-12">
          <p className="md:col-span-5 text-sm leading-relaxed text-muted-foreground">
            Author · Content Writer · Technical Writer · AI Content Writer · Script Writer · Content Creator · Copywriter
          </p>
          <p className="md:col-span-7 font-display text-2xl leading-snug sm:text-3xl">
            “Transforming ideas into impactful stories, simplifying complex technology, and creating content that truly connects with people.”
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            to="/journey"
            className="border border-foreground px-6 py-3 text-xs uppercase tracking-[0.25em] transition-colors hover:bg-foreground hover:text-background"
          >
            Read the Journey
          </Link>
          <Link
            to="/services"
            className="border border-foreground/30 px-6 py-3 text-xs uppercase tracking-[0.25em] transition-colors hover:border-foreground"
          >
            Work With Me
          </Link>
          <a
            href="/Harini-P-Resume.pdf"
            download
            className="border border-foreground/30 px-6 py-3 text-xs uppercase tracking-[0.25em] transition-colors hover:border-foreground"
          >
            Download Resume ↓
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-t border-foreground/15">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="eyebrow">01 — About</span>
            <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl">
              A writer with an engineer’s mind.
            </h2>
          </div>
          <div className="space-y-5 text-[1.02rem] leading-relaxed text-foreground/80 md:col-span-7 md:col-start-6">
            <p>
              I’m Harini, a B.Tech graduate in <em>Artificial Intelligence &amp; Data Science</em> with a CGPA of 8.56 and a deep passion for writing.
            </p>
            <p>
              While my academic background is rooted in technology, my true strength lies in transforming ideas into engaging, reader-friendly content. I enjoy simplifying complex technical concepts, crafting compelling stories, writing SEO-focused articles, developing creative scripts, and producing meaningful digital content.
            </p>
            <p>
              As a published author and an active Wattpad writer, I have built my writing journey through consistency, creativity, research, and storytelling.
            </p>
            <p className="font-display text-2xl italic text-foreground">
              I believe great writing isn’t just about words — it’s about creating an experience.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="border-t border-foreground/15">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <span className="eyebrow">02 — Core Expertise</span>
              <h2 className="mt-6 font-display text-4xl">What I Write</h2>
            </div>
            <ul className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-y-1 divide-y divide-foreground/15 border-y border-foreground/15">
              {expertise.map((e, i) => (
                <li key={e} className="flex items-baseline justify-between py-4">
                  <span className="font-display text-xl">{e}</span>
                  <span className="eyebrow text-foreground/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TOOLS + LANGUAGES */}
      <section className="border-t border-foreground/15">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <span className="eyebrow">03 — Tools</span>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-display text-2xl">
              {tools.map((t, i) => (
                <span key={t} className="flex items-baseline gap-6">
                  {t}
                  {i < tools.length - 1 && <span className="text-foreground/30">·</span>}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="eyebrow">04 — Languages</span>
            <dl className="mt-8 divide-y divide-foreground/15 border-y border-foreground/15">
              {[
                ["English", "Professional"],
                ["Tamil", "Native"],
                ["Hindi", "Read & Write"],
              ].map(([lang, level]) => (
                <div key={lang} className="flex items-baseline justify-between py-4">
                  <dt className="font-display text-2xl">{lang}</dt>
                  <dd className="eyebrow text-foreground/60">{level}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* CLOSING QUOTE */}
      <section className="border-t border-foreground/15">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="font-display text-3xl italic leading-snug sm:text-4xl">
            “Great writing doesn’t simply inform — it inspires, influences, and leaves a lasting impression.”
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
