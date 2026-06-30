import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import beneath from "@/assets/beneath-the-agreement.asset.json";
import unheard from "@/assets/unheard-heart-whispers.asset.json";
import until from "@/assets/until-you-happened.asset.json";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Writing Journey — Harini P" },
      { name: "description", content: "The writing journey of Harini P: published Amazon author, completed Wattpad novel, and ongoing series." },
      { property: "og:title", content: "Writing Journey — Harini P" },
      { property: "og:description", content: "Published author, Wattpad novelist, and storyteller." },
      { property: "og:image", content: beneath.url },
    ],
  }),
  component: Journey,
});

const journey = [
  {
    year: "Published",
    title: "Published Author",
    summary: "Successfully wrote, edited, and independently published an original novel on Amazon.",
    duties: [
      "Story Planning", "Manuscript Writing", "Character Development",
      "Storytelling", "Editing", "Proofreading", "Self Publishing", "Creative Research",
    ],
    achievement: "Publishing my own book taught me discipline, consistency, creativity, and the ability to take an idea from concept to completion.",
  },
  {
    year: "Ongoing",
    title: "Wattpad Writer",
    summary: "Completed one full-length novel on Wattpad. Currently writing an ongoing novel series with consistent chapter updates.",
    duties: [
      "Long-form storytelling", "Audience engagement", "Story planning",
      "Character development", "Chapter management", "Creative consistency", "Reader retention",
    ],
    achievement: "Writing continuously on Wattpad has strengthened my storytelling, consistency, reader engagement, and content planning skills.",
  },
];

const lessons = [
  "Storytelling", "Research", "Editing", "Audience Engagement", "Creative Thinking",
  "Long-form Writing", "Content Strategy", "Consistency", "Time Management", "Communication",
];

const books = [
  {
    title: "Beneath the Agreement",
    caption: "Debut Novel — Published on Amazon",
    status: "Published Author",
    cover: beneath.url,
    href: "https://amzn.in/d/01Bet7J9",
    cta: "Read on Amazon",
  },
  {
    title: "Unheard Heart Whispers",
    caption: "Completed Wattpad Novel",
    status: "Completed",
    cover: unheard.url,
    href: "https://www.wattpad.com/story/404997573?utm_source=android&utm_medium=link&utm_content=story_info&wp_page=story_details_button&wp_uname=harini_premkumar",
    cta: "Read on Wattpad",
  },
  {
    title: "Until You Happened",
    caption: "Ongoing Wattpad Novel",
    status: "Currently Writing",
    cover: until.url,
    href: "https://www.wattpad.com/story/411987461?utm_source=android&utm_medium=link&utm_content=story_info&wp_page=story_details_button&wp_uname=harini_premkumar",
    cta: "Read on Wattpad",
  },
];

function Journey() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* HEADER */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        <span className="eyebrow">Chapter Two</span>
        <h1 className="mt-6 font-display text-[clamp(3rem,9vw,7rem)] leading-[0.95] tracking-tight">
          The Writing<br /><span className="italic font-normal">Journey</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          A chronicle of stories written, edited, and shared — from a first published manuscript to an ongoing serial novel read chapter by chapter.
        </p>
      </section>

      {/* TIMELINE */}
      <section className="border-t border-foreground/15">
        <div className="mx-auto max-w-6xl px-6 py-16">
          {journey.map((j, idx) => (
            <article
              key={j.title}
              className={`grid gap-10 md:grid-cols-12 ${idx > 0 ? "mt-16 border-t border-foreground/15 pt-16" : ""}`}
            >
              <div className="md:col-span-3">
                <span className="eyebrow">{j.year}</span>
                <h2 className="mt-4 font-display text-4xl leading-tight">{j.title}</h2>
              </div>
              <div className="md:col-span-9 md:pl-12 md:border-l md:border-foreground/15">
                <p className="font-display text-2xl leading-snug">{j.summary}</p>

                <div className="mt-10 grid gap-10 sm:grid-cols-2">
                  <div>
                    <span className="eyebrow text-foreground/60">Responsibilities</span>
                    <ul className="mt-4 space-y-2 text-[0.98rem]">
                      {j.duties.map((d) => (
                        <li key={d} className="flex gap-3">
                          <span className="text-foreground/40">—</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="eyebrow text-foreground/60">Achievement</span>
                    <p className="mt-4 leading-relaxed text-foreground/80">{j.achievement}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* LESSONS */}
      <section className="border-t border-foreground/15">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <span className="eyebrow">Reflections</span>
              <h2 className="mt-6 font-display text-4xl">What My Writing Journey Taught Me</h2>
            </div>
            <ul className="md:col-span-8 grid grid-cols-2 gap-y-1 divide-y divide-foreground/15 border-y border-foreground/15 sm:grid-cols-2">
              {lessons.map((l, i) => (
                <li key={l} className="flex items-baseline justify-between py-3 pr-4">
                  <span className="font-display text-lg sm:text-xl">{l}</span>
                  <span className="eyebrow text-foreground/40">{String(i + 1).padStart(2, "0")}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="border-t border-foreground/15">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between gap-6 border-b border-foreground/15 pb-8">
            <div>
              <span className="eyebrow">Featured Writing Projects</span>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl">The Works</h2>
            </div>
            <span className="eyebrow hidden text-foreground/50 sm:block">Three Titles</span>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {books.map((b) => (
              <figure key={b.title} className="flex flex-col">
                <div className="aspect-[2/3] w-full overflow-hidden border border-foreground bg-muted">
                  <img
                    src={b.cover}
                    alt={`${b.title} — book cover`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-6">
                  <span className="eyebrow text-foreground/50">{b.status}</span>
                  <h3 className="mt-2 font-display text-2xl leading-tight">{b.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{b.caption}</p>
                  <a
                    href={b.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center border border-foreground px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.25em] transition-colors hover:bg-foreground hover:text-background"
                  >
                    {b.cta} →
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mx-auto mt-16 max-w-3xl text-center font-display text-xl italic text-foreground/70 sm:text-2xl">
            “Every story represents countless hours of imagination, discipline, editing, and dedication.”
          </p>
        </div>
      </section>

      {/* CLOSING QUOTE */}
      <section className="border-t border-foreground/15">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="font-display text-3xl italic leading-snug sm:text-4xl">
            “Writing is not just what I do — it is how I think, create, and connect with the world.”
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
