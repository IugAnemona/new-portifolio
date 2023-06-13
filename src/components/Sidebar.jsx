import avatar from "../img/icon.png";

import "../styles/components/sidebar.sass";
import InformationContairner from "./InformationContainer";
import Social from "./Social";

const Siderbar = () => {
  return (
    <aside id="sidebar">
      <img src={avatar} alt="eu" />
      <p className="title">Desenvolvedor Front-End</p>
      <Social />
      <InformationContairner />
      <a
        href="https://drive.google.com/file/d/1_Qlrs2Mxarus4StE7lAwNtOvbJnQjLTS/view?usp=sharing"
        target="_blank"
        className="btn"
        rel="noreferrer"
      >
        Download currículo
      </a>
    </aside>
  );
};

export default Siderbar;
