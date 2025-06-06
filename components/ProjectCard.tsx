"use client";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

type ProjectCardProps = {
  project: {
    image: string;
    title: string;
    labels: string[];
    description: string;
    liveLink?: string;
    githubLink: string;
  };
  darkMode: boolean;
};

const ProjectCard = ({ project, darkMode }: ProjectCardProps) => {
  return (
    <div className={`z-10 flex flex-col h-[650px] justify-between border ${darkMode ? "border-white" : "border-black"} shadow-lg rounded-xl overflow-hidden transition hover:shadow-xl`}>
      
      {/* Image Section - Full Width & Fixed Height */}
      <div className="w-full">
        <Image 
          src={project.image} 
          alt={project.title} 
          width={400} 
          height={250} 
          className="w-full h-48 object-cover" 
        />
      </div>

      {/* Content Section - Uses flex to ensure proper spacing */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-black"}`}>{project.title}</h3>

        {/* Labels */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.labels.map((label, index) => (
            <span key={index} className={`text-sm px-2 py-1 rounded-md ${darkMode ? "border border-white text-white" : "bg-black text-white"}`}>
              {label}
            </span>
          ))}
        </div>

        {/* Description - Expands to ensure all cards match height */}
        <p className={`mt-3 flex-grow ${darkMode ? "text-white" : "text-black"}`}>
          {project.description}
        </p>

        {/* Buttons Section - Always Stays at Bottom */}
        <div className="mt-auto flex gap-3">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center px-4 py-2 rounded-full border transition ${
                darkMode
                  ? "font-medium bg-black text-white border-white hover:opacity-80"
                  : "font-medium bg-white text-black border-black hover:opacity-80"
              }`}
            >
              Link <ExternalLink className="ml-2" size={16} />
            </a>
          )}
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center px-4 py-2 rounded-full border transition ${
              darkMode
                ? "font-medium bg-white text-black border-black hover:opacity-80"
                : "font-medium bg-black text-white border-black hover:opacity-80"
            }`}
          >
            GitHub <Github className="ml-2" size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
