import logo from "../img/Logo.jpg";
import { GiHamburgerMenu } from "react-icons/gi";

import "../styles/components/header.sass";
import { useState } from "react";

export function Header() {
  const [active, setActive] = useState(false);

  const ToggleMenu = () => {
    setActive(!active);
  };

  return (
    <header>
      <div className="header-container">
        <div className="nav-container">
          <div>
            <a
              href="https://www.instagram.com/guianemona/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="img w-14 rounded-full" src={logo} alt="" />
            </a>
          </div>
          <div className={active ? "links " : "links links-off"}>
            <nav className="nav-content">
              <ul>
                <li className="list px-4 m-10 md:m-0">
                  <a
                    target="_blank"
                    className="list hover:text-slate-500 text-xl"
                    href="https://master--unrivaled-cajeta-5f5093.netlify.app"
                    rel="noreferrer"
                  >
                    Sobre
                  </a>
                </li>
                <li className="list px-4 m-10 md:m-0">
                  <a
                    target="_blank"
                    className="list hover:text-slate-500 text-xl"
                    href="https://master--unrivaled-cajeta-5f5093.netlify.app"
                    rel="noreferrer"
                  >
                    Projetos
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div onClick={ToggleMenu} className="menu-icon">
            <GiHamburgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
