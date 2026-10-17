import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Pause, Play } from "lucide-react";
import { Container } from "@/components/site/Section";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import "@/portfolio.css";
import { Gallery, Photo, projectImages } from "@/components/site/PortfolioGallery";
import { portfolioProjects as samples, projectSlug } from "@/lib/portfolio-projects";
import { pilatesProject } from "@/lib/pilates-project";
import { australiaProject } from "@/lib/australia-project";
import { saudiProject } from "@/lib/saudi-project";
import { italyProject } from "@/lib/italy-project";
import { austriaProject } from "@/lib/austria-project";
import {
  type PortfolioProject as Sample,
  type GalleryImage,
} from "@/lib/egypt-projects";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [{ title: "Global Projects · WS DESIGNHOUSE" }, { name: "robots", content: "noindex" }],
  }),
  component: PortfolioPage,
});
const destinationCodes = ["eg", "us", "au", "it", "at", "sa", "no", "se", "rs", "bh"];
const destinations = destinationCodes.map((code) => samples.find((p) => p.code === code)!);

function DestinationCinema({ onChoose }: { onChoose: (country: string) => void }) {
  const [paused, setPaused] = useState(false);
  return (
    <section className="pf-cinema" data-paused={paused} aria-label="Explore ten destinations">
      <div className="pf-cinema-heading">
        <span>TEN DESTINATIONS. ONE DESIGN LANGUAGE.</span>
        <button type="button" onClick={() => setPaused(!paused)} aria-label={paused ? "Play destination motion" : "Pause destination motion"}>
          {paused ? <Play size={12} /> : <Pause size={12} />}
          <span>{paused ? "Play motion" : "Pause motion"}</span>
        </button>
      </div>
      <div className="pf-destinations">
        {destinations.map((project) => {
          const media = projectImages(project).find((item) => item.kind !== "video" || item.poster)!;
          const photo: GalleryImage = media.kind === "video"
            ? { ...media, src: media.poster!, crop: [0, 0, media.width, media.height] }
            : { ...media, contain: false };
          return (
            <a key={project.code} className="pf-destination" href="#collection" onClick={() => onChoose(project.country)} aria-label={`Explore projects in ${project.country}`}>
              <div className="pf-destination-frame" aria-hidden="true">
                <Photo photo={photo} expanded={false} />
              </div>
              <span className="pf-destination-caption">
                <Flag project={project} />
                <span>{project.country}</span>
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
function Flag({ project }: { project: Sample }) {
  return (
    <img
      className="pf-flag"
      src={`/media/portfolio-preview/${project.code}.svg`}
      alt=""
      width="24"
      height="17"
    />
  );
}
function PortfolioPage() {
  const [country, setCountry] = useState("All destinations");
  const [selected, setSelected] = useState<Sample | null>(null);
  const [limit, setLimit] = useState(6);
  const filtered = samples.filter((p) => country === "All destinations" || p.country === country);
  function choose(value: string) {
    setCountry(value);
    setLimit(6);
  }
  return (
    <div className="pf-page">
      <Container>
        <header className="pf-intro">
          <div className="pf-eyebrow">
            <span /> THE WS COLLECTION
          </div>
          <div className="pf-title-row">
            <h1>
              Global <em>Projects.</em>
            </h1>
            <p>
              Spaces for living, working,
              <br />
              and gathering. Designed with intent.
            </p>
          </div>
          <div className="pf-intro-foot">
            <span>Distinct places. A shared design language.</span>
            <a href="#collection">
              Explore the collection <ArrowRight size={16} />
            </a>
          </div>
          <DestinationCinema onChoose={choose} />
        </header>
        <section className="pf-medina" aria-labelledby="medina-heading">
          <a
            className="pf-medina-link"
            href="https://www.youtube.com/watch?v=1Yid4UTk7NE"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch Medina Project, Saudi Arabia, on YouTube (opens in a new tab)"
          >
            <div className="pf-medina-preview">
              <img
                src="https://i.ytimg.com/vi/1Yid4UTk7NE/hqdefault.jpg"
                alt="Medina Project video preview"
                width="480"
                height="360"
                loading="lazy"
              />
              <span className="pf-medina-play" aria-hidden="true"><Play size={23} fill="currentColor" /></span>
              <span className="pf-medina-youtube">YouTube</span>
            </div>
            <div className="pf-medina-copy">
              <div className="pf-medina-location">
                <img src="/media/portfolio-preview/sa.svg" width="24" height="17" alt="" />
                <span>Saudi Arabia · Project film</span>
              </div>
              <h2 id="medina-heading">Medina Project.</h2>
              <p>A closer look at our Medina project in Saudi Arabia.</p>
              <span className="pf-medina-cta">Watch on YouTube <ArrowUpRight size={17} /></span>
            </div>
          </a>
        </section>
        <section id="collection" className="pf-collection" aria-label="Project collection">
          <div className="pf-filter-bar">
            <div
              className="pf-desktop-filters"
              role="group"
              aria-label="Filter projects by country"
            >
              {["All destinations", ...new Set(samples.map((p) => p.country))].map((c) => (
                <button key={c} aria-pressed={country === c} onClick={() => choose(c)}>
                  {c}
                </button>
              ))}
            </div>
            <label className="pf-mobile-filter">
              Destination
              <select value={country} onChange={(e) => choose(e.target.value)}>
                {["All destinations", ...new Set(samples.map((p) => p.country))].map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>
            <span className="pf-count" aria-live="polite">
              {String(filtered.length).padStart(2, "0")} projects
            </span>
          </div>
          <div className="pf-grid">
            {filtered.slice(0, limit).map((p) => (
              <article
                key={p.name}
                id={
                  p === pilatesProject
                    ? "hot-pilates-studio"
                    : p === australiaProject
                      ? "party-house"
                      : p === saudiProject
                        ? "family-farm"
                        : p === italyProject
                          ? "milan-design-loft"
                          : p === austriaProject
                            ? "alpine-house"
                            : undefined
                }
                className="pf-project"
              >
                <Gallery project={p} enabled={selected === null} onExpand={() => setSelected(p)} />
                <div className="pf-project-meta">
                  <span>
                    <Flag project={p} />
                    {p.country}
                  </span>
                  <span>{p.category}</span>
                </div>
                <Link className="pf-project-title" to="/portfolio/$slug" params={{ slug: projectSlug(p) }}>
                  <h2>{p.name}</h2>
                  <ArrowUpRight size={23} />
                </Link>
                <p className="pf-description">{p.description}</p>
                <Link className="pf-detail-link" to="/portfolio/$slug" params={{ slug: projectSlug(p) }}>View project <ArrowRight size={15} /></Link>
                <span className="pf-project-index">
                  WS / {String(samples.indexOf(p) + 1).padStart(2, "0")}
                </span>
              </article>
            ))}
          </div>
          {filtered.length > limit && (
            <button className="pf-load" onClick={() => setLimit((v) => v + 6)}>
              Load more projects <ArrowRight size={17} />
            </button>
          )}
          <p className="pf-preview-note">
            DESIGN PREVIEW · Selected projects across ten destinations.
          </p>
        </section>
        <section className="pf-outro">
          <span className="pf-eyebrow">YOUR SPACE, NEXT.</span>
          <h2>
            Every place begins
            <br />
            with a <em>possibility.</em>
          </h2>
          <Link to="/contact">
            Let’s discuss your project <ArrowUpRight size={19} />
          </Link>
        </section>
      </Container>
      <Dialog
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent className="pf-dialog" aria-describedby="pf-gallery-description">
          {selected && (
            <>
              <div className="pf-dialog-heading">
                <Flag project={selected} />
                <span>{selected.country}</span>
              </div>
              <DialogTitle className="pf-dialog-title">{selected.name}</DialogTitle>
              <DialogDescription id="pf-gallery-description">
                {selected.description}
              </DialogDescription>
              <Gallery key={selected.name} project={selected} expanded />
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
