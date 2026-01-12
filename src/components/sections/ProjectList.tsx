"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Smartphone, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  slug: string;
  platform: string;
  description: string;
  techStack: string[] | readonly string[];
  image?: string | null;
}

export function ProjectList({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<"All" | "iOS" | "Android">("All");

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.platform === filter
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h1 className="text-4xl font-bold mb-4">All Projects</h1>
            <p className="text-muted-foreground max-w-xl">
              A collection of {projects.length} mobile applications I've developed.
            </p>
          </div>
          
          {/* Filter */}
          <div className="flex items-center gap-2 bg-muted/50 p-1 rounded-lg">
            {(["All", "Android", "iOS"] as const).map((platform) => (
              <button
                key={platform}
                onClick={() => setFilter(platform)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all",
                  filter === platform
                    ? "bg-background shadow-sm text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {platform}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.slug}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-colors"
          >
            <div className="aspect-video bg-muted relative overflow-hidden flex items-center justify-center">
                {project.image ? (
                   <img 
                      src={project.image} 
                      alt={project.title} 
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                   />
                 ) : (
                   <Smartphone className="w-16 h-16 text-muted-foreground/20" />
                 )}
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
               <div className="absolute bottom-0 left-0 p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium mb-2 border border-primary/20">
                    {project.platform}
                  </span>
               </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                <Link href={`/projects/${project.slug}`}>
                  <span className="absolute inset-0"></span>
                  {project.title}
                </Link>
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
