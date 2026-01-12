"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey in mobile development, leading teams and building scalable applications.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-px"></div>

          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 md:mb-24 flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] md:left-1/2 w-3 md:w-4 h-4 rounded-full bg-primary transform md:-translate-x-1/2 mt-1.5 md:mt-1.5 z-10 ring-4 ring-background"></div>

              {/* Content */}
              <div className="md:w-1/2 pl-8 md:px-12">
                <div className={`flex flex-col ${index % 2 === 0 ? "md:items-start" : "md:items-end"}`}>
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <div className="text-primary font-medium mb-2 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    {exp.company}
                  </div>
                  <div className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <p className={`text-muted-foreground mb-4 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    {exp.description}
                  </p>
                  <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground relative inline-block">
                        • {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Spacer for the other side */}
              <div className="md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
