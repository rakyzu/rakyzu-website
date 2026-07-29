import { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";

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
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <p className="text-zinc-500 text-sm mb-8">Things I've built</p>
        </ScrollReveal>

        {allTags.length > 0 && (
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-8">
              <button
                onClick={() => setActiveTag(null)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeTag === null ? "bg-zinc-100 text-zinc-900" : "bg-zinc-800 text-zinc-400 hover:text-zinc-200"
                }`}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    activeTag === tag ? "bg-zinc-100 text-zinc-900" : "bg-zinc-800 text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </ScrollReveal>
        )}

        {loading ? (
          <p className="text-zinc-600 text-sm">Loading...</p>
        ) : projects.length === 0 ? (
          <p className="text-zinc-600 text-sm">No projects yet.</p>
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
      <div className="border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-600 transition-colors group">
        {imageUrl && (
          <div className="aspect-video bg-zinc-900 overflow-hidden">
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
          <p className="text-sm text-zinc-400 mb-3 line-clamp-2">{project.description}</p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {tags.map((t) => (
                <span key={t} className="px-2 py-0.5 bg-zinc-800 rounded text-xs text-zinc-400">{t}</span>
              ))}
            </div>
          )}
          <div className="flex items-center gap-3 text-xs text-zinc-500">
            {project.demo_url && (
              <a href={project.demo_url} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">
                Live Demo →
              </a>
            )}
            {project.repo_url && (
              <a href={project.repo_url} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">
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
