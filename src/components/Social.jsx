import "../styles/components/social.sass";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const socialNetworks = [
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/guilherme-alves-25109624a/",
  },
  { name: "github", icon: <FaGithub />, link: "https://github.com/IugAnemona" },
  {
    name: "instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/guianemona/",
  },
];

const Social = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          target="_blank"
          href={network.link}
          className="social-btn"
          id={network.name}
          key={network.name}
          rel="noreferrer"
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default Social;
