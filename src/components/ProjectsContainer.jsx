import "../styles/components/projectscontent.sass";
import weatherimg from "../img/projects-img/weatherapp.png";
import spotify from "../img/projects-img/spotify.png";
import imc from "../img/projects-img/imc.png";
import animeapp from "../img/projects-img/Animeapp.gif";
import { DiHtml5, DiCss3, DiJsBadge, DiReact } from "react-icons/di";

import { FaVuejs } from "react-icons/fa";
import { SiTailwindcss, SiSass } from "react-icons/si";

const tech = {
  html: { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  css: { id: "css", name: "CSS3", icon: <DiCss3 /> },
  js: { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  react: { id: "react", name: "React", icon: <DiReact /> },
  vue: { id: "vuejs", name: "VueJs", icon: <FaVuejs /> },
  tailwind: { id: "tailwindcss", name: "TailwindCSS", icon: <SiTailwindcss /> },
  sass: { id: "sass", name: "Sass", icon: <SiSass /> },
};

const projetcs = [
  {
    id: "animeapp",
    name: "Anime Search App",
    description:
      "Site que usa uma API do TraceMoe que busca animes e episodios usando somente um link de uma imagem do anime em questão. Fiz esse projeto para me familiarizar mais com APIs e melhorar mais ainda minha habilidade com Responsividade e ReactJs",
    img: animeapp,
    link: "https://warm-torrone-fe35a2.netlify.app",
    technologies: [tech.html, tech.css, tech.tailwind, tech.js, tech.react],
  },
  {
    id: "weatherapp",
    name: "WeatherApp",
    description:
      "Aplicativo que permite o usuário pesquisar a atual condições climaticas de qualquer cidade do mundo. Usei Vue.js para receber dados da Weather API transformar em um JSON, manipular os dados do JSON e jogar no DOM do Html.",
    img: weatherimg,
    link: "https://roaring-pithivier-eb6915.netlify.app",
    technologies: [tech.html, tech.css, tech.js, tech.vue],
  },
  {
    id: "spotify",
    name: "Spotify clone",
    description:
      "Clone da home do spotify responsiva. Fiz esse projeto para aprender Tailwindcss, e usei React para aprender mais sobre Componentes e Props.",
    img: spotify,
    link: "https://relaxed-tartufo-07ce1b.netlify.app",
    technologies: [tech.html, tech.css, tech.tailwind],
  },
  {
    id: "imc",
    name: "Calculadora de IMC",
    description:
      "Calculadora de imc, usando Tailwind CSS e ReactJs. Refiz uma calculadora de imc para melhorar minha habilidade em responsividade e em ReactJs",
    img: imc,
    link: "https://inquisitive-dragon-108049.netlify.app",
    technologies: [tech.html, tech.css, tech.tailwind, tech.js, tech.react],
  },
];

const ProjectsContainer = () => {
  return (
    <div id="project-content">
      <section className="">
        <div className="title">
          <h2>Projetos</h2>
        </div>
        {projetcs.map((project) => (
          <div key={project.id} className="content">
            <div className="img-content">
              <img src={project.img} alt="" />
            </div>
            <div className="description-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tech-container">
                {project.technologies.map((tech) => (
                  <div key={tech.id} id={tech.id}>
                    {tech.icon}
                  </div>
                ))}
              </div>
            </div>
            <div className="link">
              <a
                href={project.link}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Ver Projeto
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProjectsContainer;
