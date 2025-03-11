"use client";
import Image from "next/image";

type EducationProps = {
  education: {
    logo: string;
    degree: string;
    university: string;
    graduation: string;
    gpa: string;
    details: string[];
  };
  darkMode: boolean;
};

const EducationCard = ({ education, darkMode }: EducationProps) => {
  return (
    <section id="education" className="text-center">
      <h2 className="text-4xl font-bold">My Education</h2>
      <div className={`mt-6 p-6 rounded-lg flex flex-col md:flex-row items-center md:items-start ${darkMode ? "border border-white" : "border border-black"}`}>
        <div className={`p-3 rounded-full ${darkMode ? "bg-white" : ""}`}>
          <Image src={education.logo} alt="University Logo" width={100} height={100} className="rounded-md" />
        </div>
        <div className="md:ml-6 text-left">
          <h3 className="text-2xl font-bold">{education.degree}</h3>
          <p className="text-lg">{education.university}</p>
          <p className="text-md">{education.graduation}</p>
          <p className="text-md">{education.gpa}</p>
          <ul className="mt-2 list-disc list-inside">
            {education.details.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EducationCard;
