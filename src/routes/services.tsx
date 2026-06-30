import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/SiteNav";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Contact — Harini P" },
      { name: "description", content: "Writing services offered by Harini P — content, technical, SEO, AI, scripts, copy, editing & more." },
      { property: "og:title", content: "Services & Contact — Harini P" },
      { property: "og:description", content: "Let's create something meaningful together." },
    ],
  }),
  component: Services,
});

const services = [
  "Content Writing", "Technical Writing", "SEO Writing", "AI Content Writing",
  "Blog Writing", "Article Writing", "Script Writing", "Copywriting",
  "Website Content", "Technical Documentation", "User Manuals", "Creative Writing",
  "Editing", "Proofreading", "Research Writing",
];

const reasons = [
  "Published Amazon Author", "Completed Wattpad Novel", "Ongoing Novel Series",
  "Strong AI & Data Science Background", "Excellent Research Skills", "Creative Storytelling",
  "SEO Knowledge", "Technical Accuracy", "Audience-Focused Writing",
  "Fast Learner", "Original Human-Centered Content", "Professional Communication",
  "Deadline-Oriented", "Adaptable Writing Style",
];

const contact = [
  { label: "Email", value: "harinipremkumar2305@gmail.com", href: "mailto:harinipremkumar2305@gmail.com" },
  { label: "Phone", value: "+91 9342660323", href: "tel:+919342660323" },
  { label: "Location", value: "Vellore, India", href: null },
  { label: "LinkedIn", value: "linkedin.com/in/harini-premkumar-301642284", href: "https://www.linkedin.com/in/harini-premkumar-301642284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
];

function Services() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* HEADER */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        <span className="eyebrow">Chapter Three</span>
        <h1 className="mt-6 font-display text-[clamp(3rem,9vw,7rem)] leading-[0.95] tracking-tight">
          Services<br />
          <span className="italic font-normal">&amp; Collaboration</span>
        </h1>
      </section>

      {/* SERVICES */}
      <section className="border-t border-foreground/15">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <span className="eyebrow">05 — Services</span>
              <h2 className="mt-6 font-display text-4xl">What I Offer</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                A full range of writing services across content, technology, marketing, and storytelling.
              </p>
            </div>
            <ul className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-y-1 divide-y divide-foreground/15 border-y border-foreground/15">
              {services.map((s, i) => (
                <li key={s} className="flex items-baseline justify-between py-4">
                  <span className="font-display text-xl">{s}</span>
                  <span className="eyebrow text-foreground/40">{String(i + 1).padStart(2, "0")}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="border-t border-foreground/15">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <span className="eyebrow">06 — Why Work With Me</span>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl">Fourteen Reasons</h2>

          <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <li
                key={r}
                className="flex items-baseline gap-6 border-t border-foreground/15 py-5 last:border-b sm:[&:nth-child(2)]:border-t lg:[&:nth-child(3)]:border-t"
              >
                <span className="eyebrow text-foreground/40">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-xl">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="border-t border-foreground/15">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <div className="text-center">
            <span className="eyebrow">My Writing Philosophy</span>
          </div>
          <p className="mt-8 font-display text-2xl leading-snug sm:text-3xl">
            “I believe every piece of writing should educate, engage, and inspire. Whether it’s a technical document, an SEO article, marketing copy, screenplay, or a fictional story, my goal is always to make every word meaningful, purposeful, and memorable.”
          </p>
        </div>
      </section>

      {/* RESUME BOX */}
      <section className="border-t border-foreground/15">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col items-start justify-between gap-6 border border-foreground p-8 sm:p-10 md:flex-row md:items-center">
            <div>
              <span className="eyebrow">Resume</span>
              <h3 className="mt-3 font-display text-3xl">Download my full resume</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                A detailed PDF covering education, skills, projects, and publications.
              </p>
            </div>
            <a
              href="/Harini-P-Resume.pdf"
              download
              className="inline-flex items-center gap-3 border border-foreground bg-foreground px-7 py-4 text-xs uppercase tracking-[0.25em] text-background transition-colors hover:bg-background hover:text-foreground"
            >
              Download Resume ↓
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="border-t border-foreground/15">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <span className="eyebrow">07 — Contact</span>
              <h2 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
                Let’s create something<br />
                <span className="italic font-normal">meaningful.</span>
              </h2>
            </div>
            <dl className="md:col-span-7 divide-y divide-foreground/15 border-y border-foreground/15">
              {contact.map((c) => (
                <div key={c.label} className="flex items-baseline justify-between gap-6 py-5">
                  <dt className="eyebrow text-foreground/60">{c.label}</dt>
                  <dd className="font-display text-lg sm:text-2xl text-right">
                    {c.href ? (
                      <a href={c.href} className="border-b border-foreground/30 hover:border-foreground">
                        {c.value}
                      </a>
                    ) : (
                      c.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
