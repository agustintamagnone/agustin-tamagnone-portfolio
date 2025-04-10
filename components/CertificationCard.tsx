"use client";
import Image from "next/image";

type Certification = {
  badge: string;
  title: string;
  date: string;
};

type Props = {
  certifications: Certification[];
  darkMode: boolean;
};

const CertificationCard = ({ certifications, darkMode }: Props) => {
  return (
    <section id="certifications" className="text-center py-20">
      <h2 className="text-4xl font-bold mb-10">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg flex flex-col items-center border ${darkMode ? "border-white" : "border-black"}`}
          >
            <Image src={cert.badge} alt={cert.title} width={100} height={100} />
            <h3 className="mt-4 text-lg font-semibold">{cert.title}</h3>
            <p className="text-sm">{cert.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationCard;
