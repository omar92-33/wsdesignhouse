import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Container, Eyebrow } from "./Section";
import { ProjectFilm } from "./ProjectFilm";
export function FeaturedPilates() {
  return (
    <section
      className="featured-pilates"
      id="featured-project"
      aria-labelledby="pilates-feature-heading"
    >
      <Container>
        <div className="featured-pilates-grid">
          <div className="featured-pilates-copy">
            <Eyebrow>Featured project</Eyebrow>
            <h2 id="pilates-feature-heading">
              Designed
              <br />
              for <em>movement.</em>
            </h2>
            <p>
              Inside Hot Pilates Studio. A warm, considered setting where light, material, and
              movement find their rhythm.
            </p>
            <div className="featured-pilates-place">
              <img src="/media/portfolio-preview/us.svg" alt="" />
              Los Angeles, USA
            </div>
            <div className="featured-pilates-links">
              <Link to="/portfolio" hash="hot-pilates-studio">
                Explore the project <ArrowUpRight size={17} />
              </Link>
              <Link to="/portfolio">
                View all projects <ArrowRight size={17} />
              </Link>
            </div>
          </div>
          <div>
            <div className="featured-pilates-media">
              <ProjectFilm
                src="/media/pilates/film-02.mp4"
                label="Hot Pilates Studio feature film"
              />
            </div>
            <div className="featured-pilates-caption">
              <span>Hot Pilates Studio</span>
              <span>Design proposal · 01</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
