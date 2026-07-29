import { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { useLang } from "../i18n/LanguageProvider";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string;
  demo_url: string;
  repo_url: string;
  image_key: string;
  view_count: number;
  created_at: string;
}

export default function ProjectsSection() {
  const { t } = useLang();
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = activeTag ? `/api/projects?tag=${encodeURIComponent(activeTag)}` : "/api/projects";
    fetch(url)
      .then((r) => r.json())
      .then((data) => setProjects(data.projects ?? []))
      .catch(() => setProjects([]))
      .finally(() => setLoading(false));
  }, [activeTag]);

  const allTags = [...new Set(projects.flatMap((p) => p.tags.split(",").map((t) => t.trim()).filter(Boolean)))];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-2 text-fg">{t.projects.title}</h2>
          <p className="text-fg-muted text-sm mb-8">{t.projects.subtitle}</p>
        </ScrollReveal>

        {allTags.length > 0 && (
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-8">
              <button
                onClick={() => setActiveTag(null)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeTag === null ? "bg-bg text-fg" : "bg-bg-elv text-fg-sec hover:text-fg"
                }`}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    activeTag === tag ? "bg-bg text-fg" : "bg-bg-elv text-fg-sec hover:text-fg"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </ScrollReveal>
        )}

        {loading ? (
          <p className="text-fg-muted text-sm">{t.projects.loading}</p>
        ) : projects.length === 0 ? (
          <p className="text-fg-muted text-sm">No projects yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const tags = project.tags.split(",").map((t) => t.trim()).filter(Boolean);
  const imageUrl = project.image_key ? `/assets/${project.image_key}` : null;

  useEffect(() => {
    fetch(`/api/projects/${project.id}/view`, { method: "POST" }).catch(() => {});
  }, [project.id]);

  return (
    <ScrollReveal>
      <div className="border border-border rounded-xl overflow-hidden hover:border-fg-sec transition-colors group">
        {imageUrl && (
          <div className="aspect-video bg-bg-sec overflow-hidden">
            <img
              src={imageUrl}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        )}
        <div className="p-5">
          <h3 className="font-semibold mb-1">{project.title}</h3>
          <p className="text-sm text-fg-sec mb-3 line-clamp-2">{project.description}</p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {tags.map((t) => (
                <span key={t} className="px-2 py-0.5 bg-bg-elv rounded text-xs text-fg-sec">{t}</span>
              ))}
            </div>
          )}
          <div className="flex items-center gap-3 text-xs text-fg-muted">
            {project.demo_url && (
              <a href={project.demo_url} target="_blank" rel="noopener noreferrer" className="hover:text-fg-sec transition-colors">
                Live Demo →
              </a>
            )}
            {project.repo_url && (
              <a href={project.repo_url} target="_blank" rel="noopener noreferrer" className="hover:text-fg-sec transition-colors">
                Source →
              </a>
            )}
            <span className="ml-auto">{project.view_count} views</span>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
