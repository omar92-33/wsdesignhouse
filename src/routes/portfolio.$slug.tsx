import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/site/Section";
import { Gallery, Photo, projectImages } from "@/components/site/PortfolioGallery";
import { portfolioProjects, projectSlug, projectStories } from "@/lib/portfolio-projects";
import "@/portfolio.css";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = portfolioProjects.find((p) => projectSlug(p) === params.slug);
    if (!project) throw notFound();
    return { project, slug: params.slug };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.project.name} | WS DESIGNHOUSE` : "Project unavailable | WS DESIGNHOUSE" },
      { name: "description", content: loaderData?.project.description ?? "Explore the WS Designhouse portfolio." },
      { name: "robots", content: "noindex" },
    ],
  }),
  notFoundComponent: () => (
    <div className="pf-page pf-detail"><Container>
      <h1>Project not found.</h1>
      <Link to="/portfolio">Explore current projects</Link>
    </Container></div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project, slug } = Route.useLoaderData();
  const story = projectStories[slug];
  const images = projectImages(project);
  const stills = images.filter((image) => image.kind !== "video");
  const next = portfolioProjects[(portfolioProjects.findIndex((p) => projectSlug(p) === slug) + 1) % portfolioProjects.length]!;
  return (
    <div className="pf-page pf-detail" key={slug}>
      <Container>
        <Link className="pf-back" to="/portfolio"><ArrowLeft size={16} /> All projects</Link>
        <header className="pf-detail-heading">
          <div className="pf-dialog-heading">
            <img className="pf-flag" src={`/media/portfolio-preview/${project.code}.svg`} width="24" height="17" alt="" />
            <span>{story?.location ?? project.country}</span>
          </div>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <dl className="pf-detail-facts">
            <div><dt>Location</dt><dd>{story?.location ?? project.country}</dd></div>
            <div><dt>Scope</dt><dd>{project.category}</dd></div>
            <div><dt>Collection</dt><dd>{images.length} views {images.some((item) => item.kind === "video") ? "/ Includes film" : ""}</dd></div>
          </dl>
        </header>
        <section className="pf-detail-gallery" aria-label="Explore the project">
          <Gallery key={slug} project={project} expanded />
        </section>
        {story && (
          <section className="pf-detail-story" aria-label="Project story">
            <div><span className="pf-eyebrow">THE APPROACH</span><h2>Thoughtfully composed.</h2><p>{story.approach}</p></div>
            <div><span className="pf-eyebrow">THE DETAILS</span><h2>A closer look.</h2><p>{story.details}</p></div>
          </section>
        )}
        <section className="pf-detail-stills" aria-labelledby="project-images-heading">
          <div className="pf-detail-section-heading"><h2 id="project-images-heading">Inside the project.</h2><span>{String(stills.length).padStart(2, "0")} photographs & views</span></div>
          <div className="pf-detail-images">
            {stills.map((photo, index) => (
              <figure key={`${photo.src}-${index}`}>
                <Photo photo={photo} expanded />
                <figcaption><span>{String(index + 1).padStart(2, "0")}</span>{photo.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>
        <nav className="pf-detail-next" aria-label="More projects">
          <Link to="/portfolio"><ArrowLeft size={16} /> Back to all projects</Link>
          <Link to="/portfolio/$slug" params={{ slug: projectSlug(next) }}><span>Next project<strong>{next.name}</strong></span><ArrowRight size={22} /></Link>
        </nav>
      </Container>
    </div>
  );
}
