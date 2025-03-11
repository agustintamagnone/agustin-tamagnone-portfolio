"use client"
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
    <div className="z-10 border border-white shadow-lg rounded-xl overflow-hidden transition hover:shadow-xl">
      <Image src={project.image} alt={project.title} width={400} height={250} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-black"}`}>{project.title}</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.labels.map((label, index) => (
            <span key={index} className={`text-sm px-2 py-1 rounded-md ${darkMode ? "border border-white text-white" : "bg-black text-white"}`}>
              {label}
            </span>
          ))}
        </div>
        <p className={`mt-3 ${darkMode ? "text-white" : "text-black"}`}>{project.description}</p>
        <div className="mt-4 flex gap-3">
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
