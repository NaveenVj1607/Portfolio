import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Contact } from "@/components/sections/Contact";
import { portfolioData } from "@/data/portfolio";
import { fetchMetaImage } from "@/lib/metadata";

export default async function Home() {
  const featuredProjects = portfolioData.projects.slice(0, 4);
  
  const projectsWithImages = await Promise.all(
    featuredProjects.map(async (project) => {
      const image = await fetchMetaImage(project.link);
      return { ...project, image };
    })
  );

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <FeaturedProjects projects={projectsWithImages} />
      <Contact />
    </>
  );
}
