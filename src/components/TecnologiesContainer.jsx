import { DiHtml5, DiCss3, DiJsBadge, DiReact } from "react-icons/di";

import { FaVuejs } from "react-icons/fa";
import { SiTailwindcss, SiSass } from "react-icons/si";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "vuejs", name: "VueJs", icon: <FaVuejs /> },
  { id: "tailwindcss", name: "TailwindCSS", icon: <SiTailwindcss /> },
  { id: "sass", name: "Sass", icon: <SiSass /> },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div id={tech.id} key={tech.id} className="technology-card">
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
