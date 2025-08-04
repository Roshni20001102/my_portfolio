"use client";
import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Work = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      {/* Section headers */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Portfolio
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Latest work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        A collection of my recent projects showcasing skills in frontend
        development & UI/UX design.
      </motion.p>

      {/* Project grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-auto mt-10 gap-6"
      >
        {workData.map((project, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group bg-white min-h-[250px]"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: `url(${project.bgImage})` }}
              ></div>

              {/* Card content */}
              <div className="relative z-10 p-5 flex flex-col justify-between h-full">
                <div>
                  <h2 className="font-semibold text-lg">{project.title}</h2>
                  <p className="text-sm text-gray-700">{project.description}</p>

                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="mt-3 text-sm font-medium text-teal-600 border border-teal-500 px-3 py-1 rounded-full hover:bg-teal-100 transition duration-300"
                  >
                    {isExpanded ? "Show Less" : "Show More"}
                  </button>
                </div>

                {/* Expanded section */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-sm text-gray-800"
                  >
                    {Array.isArray(project.fullDescription) ? (
                      <ul className="list-disc list-inside space-y-1 mb-2">
                        {project.fullDescription.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mb-2">{project.fullDescription}</p>
                    )}

                    {project.tech && (
                      <p>
                        <strong>Technologies:</strong> {project.tech.join(", ")}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-3 mt-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium px-4 py-1.5 rounded-full border border-gray-500 text-gray-800 hover:bg-gray-100 hover:text-black transition duration-300"
                        >
                          GitHub
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium px-4 py-1.5 rounded-full border border-green-600 text-green-700 hover:bg-green-100 hover:text-green-900 transition duration-300"
                        >
                          Live Site
                        </a>
                      )}
                      {project.behance && (
    <a
      href={project.behance}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm font-medium px-4 py-1.5 rounded-full border border-blue-600 text-blue-700 hover:bg-blue-100 hover:text-blue-900 transition duration-300"
    >
      Behance
    </a>
  )}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Work;
