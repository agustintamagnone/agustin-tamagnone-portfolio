"use client";
import Image from "next/image";

type Education = {
  logo: string;
  degree: string;
  university: string;
  graduation: string;
  gpa: string;
  details: string[];
};

type EducationProps = {
  educations: Education[];
  darkMode: boolean;
};

const EducationCard = ({ educations, darkMode }: EducationProps) => {
  return (
    <section id="education" className="text-center">
      <h2 className="text-4xl font-bold">My Education</h2>
      <div className="mt-10 space-y-10">
        {educations.map((education, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg flex flex-col md:flex-row items-center md:items-start mx-auto max-w-4xl ${darkMode ? "border border-white" : "border border-black"}`}
          >
          <div className="w-[120px] h-[120px] flex-shrink-0 flex items-center bg-white rounded-full justify-center">
            <Image
              src={education.logo}
              alt="University Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

            <div className="md:ml-6 text-left mt-4 md:mt-0">
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
        ))}
      </div>
    </section>
  );
};

export default EducationCard;
