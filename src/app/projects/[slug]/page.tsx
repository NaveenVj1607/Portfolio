import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioData } from "@/data/portfolio";
import { fetchMetaImage } from "@/lib/metadata";
import { ArrowLeft, ExternalLink, Smartphone } from "lucide-react";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => p.slug === slug);
  
  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const image = await fetchMetaImage(project.link);

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container px-4 mx-auto max-w-4xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
        
        <header className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-b border-border pb-8">
            <div>
               <div className="flex items-center gap-3 mb-4">
                 <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium border border-primary/20">
                   {project.platform}
                 </span>
                 <span className="text-muted-foreground text-sm flex items-center gap-1">
                   {project.role}
                 </span>
               </div>
               <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
               <div className="flex flex-wrap gap-2">
                 {project.techStack.map((tech) => (
                   <span key={tech} className="text-sm bg-muted px-3 py-1 rounded-full text-muted-foreground">
                     {tech}
                   </span>
                 ))}
               </div>
            </div>
            
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                View Live App
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </header>

        <div className="grid grid-cols-1 gap-12">
          <div className="aspect-video bg-muted rounded-2xl flex items-center justify-center overflow-hidden relative">
            {image ? (
                <img 
                  src={image} 
                  alt={project.title} 
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover"
                />
            ) : (
                <Smartphone className="w-32 h-32 text-muted-foreground/20" />
            )}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.problem}
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.solution}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Key Outcomes</h2>
                <p className="text-muted-foreground text-lg leading-relaxed border-l-4 border-primary pl-6 bg-primary/5 py-4 rounded-r-lg">
                  {project.impact}
                </p>
              </section>
            </div>
            
            <div className="space-y-8">
              <div className="bg-card border border-border rounded-xl p-6">
                 <h3 className="font-semibold mb-4">Tech Details</h3>
                 <ul className="space-y-3">
                   {project.techStack.map((tech) => (
                     <li key={tech} className="flex items-center gap-2 text-sm text-muted-foreground">
                       <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                       {tech}
                     </li>
                   ))}
                 </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
