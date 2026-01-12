"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const skills = [
    ...portfolioData.skills.mobile,
    ...portfolioData.skills.architecture,
    ...portfolioData.skills.backend,
  ];

  return (
    <section id="about" className="py-24 bg-muted/20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* About Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p className="leading-relaxed mb-6">
                {portfolioData.personal.summary}
              </p>
              <p className="leading-relaxed">
                Based in {portfolioData.personal.location}, I am passionate about creating clean, maintainable code and
                delivering exceptional user experiences. My expertise spans the entire mobile development lifecycle,
                from architecture design to App Store deployment.
              </p>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(portfolioData.skills).map(([category, items]) => (
                <div key={category} className="mb-6">
                   <h4 className="text-lg font-medium capitalize mb-3 text-primary">{category}</h4>
                   <ul className="space-y-2">
                     {items.slice(0, 5).map((skill) => (
                       <li key={skill} className="flex items-center gap-2 text-sm text-muted-foreground">
                         <CheckCircle2 className="w-4 h-4 text-green-500" />
                         {skill}
                       </li>
                     ))}
                   </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
