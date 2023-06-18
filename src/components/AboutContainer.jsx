import { TypeAnimation } from "react-type-animation";

const AboutContainer = () => {
  return (
    <section className="about-container">
      <h2>Sobre</h2>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed once, initially
          `Meu nome é Guilherme Alves, trabalho com manutenção de computadores e Help desk. 
          
          Sou um desenvolvedor web iniciante, entusiasmado e com grande interesse em aprender e crescer na área. Tenho conhecimentos em HTML e CSS, JavaScript, React e Vuejs e estou em busca de uma oportunidade para iniciar minha carreira como desenvolvedor front-end.
          
          Estou familiarizado com os conceitos fundamentais do desenvolvimento web. Atualmente uso Tailwind CSS e React para criar Aplicações web Mobile First, e ao longo do desenvolvimento, expandindo para outros tamanhos de tela.`,
          1000,
        ]}
        speed={75}
        style={{ fontSize: "1rem", whiteSpace: "pre-line" }}
        repeat={Infinity}
      />
    </section>
  );
};

export default AboutContainer;
