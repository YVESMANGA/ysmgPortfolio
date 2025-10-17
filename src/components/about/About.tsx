"use client";
import React from "react";
import Title from "../title";
import { LetterText, Code, Database } from "lucide-react";
import { motion } from "framer-motion";

const aboutSections = [
  {
    id: 1,
    title: "Développeur Frontend",
    description:
      "Je crée des interfaces modernes et performantes, avec une expérience utilisateur fluide et des designs responsives.",
    icon: <LetterText className="text-white w-12 h-12" />,
    color: "bg-blue-300", // bleu clair uniforme
  },
  {
    id: 2,
    title: "Développeur Backend",
    description:
      "Je construis des APIs robustes et sécurisées, en utilisant les meilleures pratiques pour le backend.",
    icon: <Database className="text-white w-12 h-12" />,
    color: "bg-blue-300",
  },
  {
    id: 3,
    title: "Data Scientist",
    description:
      "Je transforme les données en informations exploitables, avec des analyses et modèles prédictifs pour soutenir la prise de décision.",
    icon: <Code className="text-white w-12 h-12" />,
    color: "bg-blue-300",
  },
];

const About = () => {
  return (
    <div className="bg-myBlue py-16 md:py-32 px-6 md:px-20" id="about">
      <Title title="À propos" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
        {aboutSections.map((section, index) => (
          <motion.div
            key={section.id}
            className="relative flex flex-col items-center bg-base-100 p-8 rounded-3xl shadow-xl cursor-pointer overflow-hidden"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.2,
              duration: 0.6,
              type: "spring",
              stiffness: 80,
            }}
          >
            {/* Cercle bleu clair derrière l'icône */}
            <div className={`p-5 rounded-full mb-6 ${section.color} shadow-lg`}>
              {section.icon}
            </div>
            <h2 className="text-2xl font-extrabold mb-3 text-gray-900">
              {section.title}
            </h2>
            <p className="text-gray-700 text-center">{section.description}</p>
            {/* Glow bleu clair */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-blue-300 opacity-20 blur-2xl"
              whileHover={{ opacity: 0.4 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
