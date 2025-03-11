"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image'
import { JSX } from "react";
import { Sun, Moon, Linkedin, Github, Mail, Menu, X } from "lucide-react";
import CoverParticles from "../components/CoverParticles";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";
import EducationCard from "../components/EducationCard";


export default function Home(): JSX.Element {
  // Estado para manejar el tema del sitio
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const experiences = [
    {
      date: "ENE 2023 - OCT 2024",
      title: "Territory Manager (South America and Canada)",
      company: "UTR Sports - Palo Alto, CA",
      logo: "/utr-logo.png",
      challenge: "Legacy monolithic frontend architecture hindered system agility and responsiveness, requiring a transformation into agile micro-frontends to improve performance and efficiency.",
      action: "Implemented micro-frontend architecture, increasing system agility and responsiveness.",
      result: "Contributed to the product's scalability by ensuring the frontend could handle the increase from 15k to 75k sub-accounts within a year."
    },
    {
      date: "MAY 2022 - MAY 2023",
      title: "Web Developer (Wordpress, PHP, JavaScript and SASS)",
      company: "Cardinal Digital Marketing - Atlanta, GA",
      logo: "/cardinal-logo.png",
      challenge: "Company needed to expand offerings, accelerate time-to-market, and foster growth in a team of junior developers.",
      action: "Led product development, launched new products, and mentored junior developers.",
      result: "Helped increase company valuation by 10x and cultivated an efficient work environment."
    }
  ];

  const education = {
    logo: "/GGC-logo.png",
    degree: "Bachelor of IT: Software Development",
    university: "Georgia Gwinnett College",
    graduation: "Graduated in 2022",
    gpa: "GPA 3.3/4",
    details: [
      "Student-Athlete for the Grizzlies",
      "Science & Engineering Dean's List - 2020 & 2021"
    ]
  };

  const projects = [
    {
      image: "/LP-Builder.png",
      title: "Landing Page Builder",
      labels: ["Wordpress", "PHP", "JavaScript", "SASS"],
      description: "to-result is Ruby gem, a small but handy wrapper build over dry-monads to make working with monads easier, consistent and safer.",
      liveLink: "#",
      githubLink: "#"
    },
    {
      image: "/GPN.png",
      title: "Global Padel Number",
      labels: ["Python", "NextJS", "AWS"],
      description: "Faenz is a simple, open source, lightweight and privacy friendly web analytics, similar to Plausible.",
      liveLink: "#",
      githubLink: "#"
    },
    {
      image: "/siempremono.jpeg",
      title: "Medium No Thanks",
      labels: ["Android", "Kotlin"],
      description: "Android application to freely read medium.com articles that works by emulating the browser anonymous navigation.",
      liveLink: "#",
      githubLink: "#"
    }
  ];
  

  return (
    <div className={darkMode ? "bg-black text-white min-h-screen" : "bg-white text-black min-h-screen"}>

      <CoverParticles/>

      <main className="max-w-[1180px] w-full mx-auto px-6 z-30">

        <div className="relative z-20">
          <header className="fixed top-0 left-0 right-0 flex justify-center bg-opacity-90 backdrop-blur-md z-40 shadow-md">
            <div className="max-w-[1180px] w-full flex items-center justify-between px-6 py-4">
              <a href="#" className="text-xl font-bold">Agustin Tamagnone</a>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex text-center">
                <ul className="flex justify-center space-x-6 text-lg">
                  <li><a href="#about" className="hover:text-gray-400">About</a></li>
                  <li><a href="#experience" className="hover:text-gray-400">Experience</a></li>
                  <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
                  <li><a href="#education" className="hover:text-gray-400">Education</a></li>
                  <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
                </ul>
              </nav>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-md">
                  {menuOpen ? <X size={24} className={`${darkMode ? "text-white" : "text-black"}`} /> : <Menu size={24} className={`${darkMode ? "text-white" : "text-black"}`} />}
                </button>
              </div>

              <div className="hidden md:flex items-center space-x-4">
                <a href="https://www.linkedin.com/in/agustin-tamagnone" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="transition duration-300 hover:text-gray-400" size={22} />
                </a>
                <a href="https://github.com/agustintamagnone" target="_blank" rel="noopener noreferrer">
                  <Github className="transition duration-300 hover:text-gray-400" size={22} />
                </a>
                <a href="mailto:agustintamagnone1@hotmail.com" target="_blank">
                  <Mail className="transition duration-300 hover:text-gray-400" size={22} />
                </a>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full transition duration-300 bg-gray-100 dark:bg-gray-300 hover:bg-gray-400"
                >
                  {darkMode ? <Sun className="text-black" size={18} /> : <Moon className="text-black-800" size={18} />}
                </button>
              </div>
            </div>
          </header>

          {/* Mobile Menu Drawer */}
          {menuOpen && (
            <div className={`fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-6 z-50 md:hidden transition-colors duration-300 ${darkMode ? "bg-black bg-opacity-90 text-white" : "bg-white text-black"}`}>
              <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6">
                <X size={30} className={`${darkMode ? "text-white" : "text-black"}`} />
              </button>
              <a href="#about" className="text-xl hover:text-gray-400" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#experience" className="text-xl hover:text-gray-400" onClick={() => setMenuOpen(false)}>Experience</a>
              <a href="#projects" className="text-xl hover:text-gray-400" onClick={() => setMenuOpen(false)}>Projects</a>
              <a href="#education" className="text-xl hover:text-gray-400" onClick={() => setMenuOpen(false)}>Education</a>
              <a href="#contact" className="text-xl hover:text-gray-400" onClick={() => setMenuOpen(false)}>Contact</a>
              <button
                onClick={() => { setDarkMode(!darkMode); setMenuOpen(false); }}
                className="mt-4 p-2 rounded-full bg-gray-100 dark:bg-gray-300 hover:bg-gray-400"
              >
                {darkMode ? <Sun className="text-black" size={24} /> : <Moon className="text-black-800" size={24} />}
              </button>
              <div className="flex items-center justify-center py-6 space-x-3">
                <a href="https://www.linkedin.com/in/agustin-tamagnone" target="_blank">
                  <Linkedin className="transition duration-300 hover:text-gray-400" size={22}></Linkedin>
                </a>
                <a href="https://github.com/agustintamagnone" target="_blank">
                  <Github className="transition duration-300 hover:text-gray-400" size={22}></Github>
                </a>
                <a href="mailto:agustintamagnone1@hotmail.com" target="_blank">
                  <Mail className="transition duration-300 hover:text-gray-400" size={22}></Mail>
                </a>
              </div>
            </div>
          )}
        </div>
        
        <section id="about" className="flex flex-col pt-40 py-20 text-center">

          <div className="flex flex-col text-center items-center">
            <Image src="/profile-bandw2.png" width={300} height={300} alt="Profile" className="relative rounded-lg w-32 top-2 md:w-48" />
            <motion.h2 className="text-4xl pt-10 font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              Agustin Tamagnone
            </motion.h2>
            <motion.h2 className="text-xl mb-1 pt-2 font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              Software Developer
            </motion.h2>
            <h1 className='mb-5 text-lg leading-tight text-center md:text-left md:text-2xl md:mb-10'>Si puedes pensarlo,
                        <TypeAnimation
                            sequence={[
                                " puedes programarlo.",
                                1000,
                                " puedes optimizarlo.",
                                1000,
                                " puedes implementarlo.",
                                1000,
                                " puedes desarrollarlo.",
                                100
                            ]}
                            wrapper='span'
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
            </h1>
            <p className="mt-1 max-w-2xl mx-auto">
              Desarrollador de software con pasión por crear sistemas dinámicos y responsivos, inlcuyendo
              aplicaciones y sitios web. He adquirido
              una amplia experiencia en el desarrollo de soluciones personalizadas, y estoy siempre en busca de
              oportunidades para ampliar mis conocimientos y habilidades en nuevas tecnologías y campos del
              desarrollo de software.
            </p>
            <div className="flex items-center justify-center py-6 space-x-3">
              <a href="https://www.linkedin.com/in/agustin-tamagnone" target="_blank">
                <Linkedin className="transition duration-300 hover:text-gray-400" size={22}></Linkedin>
              </a>
              <a href="https://github.com/agustintamagnone" target="_blank">
                <Github className="transition duration-300 hover:text-gray-400" size={22}></Github>
              </a>
              <a href="mailto:agustintamagnone1@hotmail.com" target="_blank">
                <Mail className="transition duration-300 hover:text-gray-400" size={22}></Mail>
              </a>
            </div>
            <div className="z-10 mt-6 flex space-x-4">
              <ButtonPrimary text="Schedule a Meeting" darkMode href="https://calendar.app.google/x9MNvYvJyzQe1RKv8"/>
              <ButtonSecondary text ="View Resume" darkMode href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:087ee381-3148-43a2-9794-ecdb0dac30c2" />
            </div>
          </div>
        </section>

        <section id="experience" className="py-20">
          <motion.h2 className="text-4xl font-bold text-center">Experience</motion.h2>
          <div className="mt-10 -left-4 relative border-l-2 border-gray-400 dark:border-gray-600 pl-8">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-10 relative">
                <div className="absolute -left-15 top-0 flex items-center justify-center w-13.5 h-13.5 bg-white dark:bg-gray-800 rounded-full shadow-md border border-gray-300 dark:border-gray-600">
                  <Image src={exp.logo} alt={`${exp.company} Logo`} width={40} height={40} />
                </div>
                <p className="text-sm">{exp.date}</p>
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="text-lg font-semibold">{exp.company}</p>
                <p className="mt-2"><strong>Challenge:</strong> {exp.challenge}</p>
                <p className="mt-2"><strong>Action:</strong> {exp.action}</p>
                <p className="mt-2"><strong>Result:</strong> {exp.result}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="py-20">
          <h2 className="text-4xl font-bold text-center">Projects</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} darkMode={darkMode}/>
            ))}
          </div>
        </section>

        <section id="education" className="py-20 text-center">
          <EducationCard education={education} darkMode={darkMode}/>
        </section>

        <section id="contact" className="text-center mb-20 z-20">
          <motion.h2 className="text-4xl font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>Contact Me</motion.h2>
          <motion.p className="mt-4 mb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>You can reach out to me via <a href="mailto:agustintamagnone1@hotmail.com" className="text-blue-500 hover:underline">agustintamagnone1@hotmail.com</a> or through this form.</motion.p> 
          <form action="https://formspree.io/f/mjkyvoog " method="POST" className={`relative mt-6 max-w-lg mx-auto  p-6 rounded-lg ${darkMode ? "border border-white" : "border border-black"}`}>
            <input type="email" name="email" placeholder="Your email" required className="w-full p-3 text-black rounded-md bg-white dark:bg-gray-900 border border-black-300 dark:border-gray-700 mb-4" />
            <textarea name="message" placeholder="Your message" required className="w-full p-3 text-black rounded-md bg-white dark:bg-gray-900 border border-black-300 dark:border-gray-700 h-32 mb-4"></textarea>
            <button type="submit" className={`px-6 py-3 rounded-full border transition ${darkMode
              ? "font-medium bg-black text-white border-white hover:opacity-80"
              : "font-medium bg-white text-black border-black hover:opacity-80"
              }`}>
              Submit
            </button>
          </form>
        </section>

      </main>

      <footer className={`relative z-10 border-t py-3 flex flex-row items-center text-center ${darkMode ? " border-white" : "border-black"}`}>
        <p className="flex-1/2">© 2025 Designed with ❤️ by Agustin Tamagnone. All rights reserved.</p>
        <div className="flex-1/3 flex items-center justify-center py-6 space-x-3">
              <ButtonPrimary text="Schedule a Meeting" darkMode href="https://calendar.app.google/x9MNvYvJyzQe1RKv8"/>
              <a href="https://www.linkedin.com/in/agustin-tamagnone" target="_blank">
                <Linkedin className="transition duration-300 hover:text-gray-400" size={22}></Linkedin>
              </a>
              <a href="https://github.com/agustintamagnone" target="_blank">
                <Github className="transition duration-300 hover:text-gray-400" size={22}></Github>
              </a>
              <a href="mailto:agustintamagnone1@hotmail.com" target="_blank">
                <Mail className="transition duration-300 hover:text-gray-400" size={22}></Mail>
              </a>
        </div>
      </footer>

    </div>
  );
}