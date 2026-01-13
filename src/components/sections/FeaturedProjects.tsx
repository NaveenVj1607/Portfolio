"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Smartphone } from "lucide-react";

interface Project {
  title: string;
  slug: string;
  platform: string;
  description: string;
  techStack: string[] | readonly string[];
  image?: string | null;
}

export function FeaturedProjects({ projects }: { projects: Project[] }) {

  return (
    <section id="projects" className="py-24 bg-muted/20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-xl">
              A selection of mobile applications I&apos;ve built and led.
            </p>
          </div>
          <Link
            href="/projects"
            className="flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
      </div>
    </section>
  );
}
