"use client";
import React from "react";
import Title from "../title";
import { Video } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Mon Portfolio",
    description:
      "Site internet où je présente mes compétences et mes différentes réalisations.",
    technologies: ["NextJS", "Tailwind CSS"],
    demoLink: "https://ysmg-portfolio.netlify.app/",
    repoLink: "https://github.com/YVESMANGA/ysmgPortfolio",
    image: "/SiteP.PNG",
  },
  {
    title: "Saoro Negoce",
    description: "Site vitrine pour une entreprise evoluant dans le BTP",
    technologies: ["NextJS", "Tailwind CSS"],
    demoLink: "http://saoronegoce.com/",
    image: "/logos.JPG",
  },
  {
    title: "Modexa",
    description:
      "Marketplace permettant à d'autres boutiques de renseigner leurs produits.",
    technologies: ["Laravel", "Tailwind CSS"],
    demoLink: "http://modexa.moda/",
    image: "/modexa.JPG",
  },
  {
    title: "zynew-materials",
    description: "Site vitrine pour une entreprise evoluant dans le peinture",
    technologies: ["Laravel", "Tailwind CSS"],
    demoLink: "https://www.zynew-materials.com/",
    image: "/logoz.png",
  },
  {
    title: "Gaming Store",
    description: "Site e-commerce d'une boutique de Jeux Videos",
    technologies: ["Laravel", "Tailwind CSS"],
    demoLink: "https://gamingstore.store/",
    image: "/hero.webp",
  },
  {
    title: "cmilka",
    description:
      "Site vitrine et e-commerce, d'une entreprise, evoluant dans le domaine de la boulangerie et restauration",
    technologies: ["Laravel", "Tailwind CSS"],
    demoLink: "https://cmilka.sn/",
    image: "/logo cmilka.jpg",
  },
  {
    title: "SenTech",
    description:
      "Site vitrine de SenTech, entreprise evoluant dans le domaine du numerique.",
    technologies: ["NextJs"],
    demoLink: "https://sen-tech.sn/",
    image: "/logo.png",
  },
];

const Project = () => {
  return (
    <div className="py-16 px-6 md:px-20 bg-white" id="project">
      <Title title="Mes Projets" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative rounded-2xl shadow-xl overflow-hidden cursor-pointer bg-base-100"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5, type: "spring" }}
          >
            <div className="relative w-full h-56">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-t-2xl"
                unoptimized
              />
              {/* Overlay au hover */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
                <h2 className="text-lg font-bold mb-2 text-center">
                  {project.title}
                </h2>
                <div className="flex gap-2 mb-3 flex-wrap justify-center">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-400 text-white text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded flex items-center gap-1 text-sm font-semibold"
                  >
                    Demo <Video className="w-4 h-4" />
                  </a>
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-800 hover:bg-gray-100 px-3 py-1 rounded text-sm font-semibold"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Description visible en dessous de l’image */}
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 text-sm">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
