import { ProjectList } from "@/components/sections/ProjectList";
import { portfolioData } from "@/data/portfolio";
import { fetchMetaImage } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Naveen Kumar",
  description: "Explore the mobile applications and projects developed by Naveen Kumar.",
};

export default async function ProjectsPage() {
  const projects = await Promise.all(
    portfolioData.projects.map(async (project) => {
      const image = await fetchMetaImage(project.link);
      return { ...project, image };
    })
  );

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container px-4 mx-auto">
        <ProjectList projects={projects} />
      </div>
    </div>
  );
}
