"use client"

import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";


const MENU_LIST = [
  { text: "Presentación", href: "/#presentacion" },
  { text: "Acerca", href: "/#acerca" },
  { text: "Habilidades", href: "/#habilidades" },
  { text: "Portafolio", href: "/#portafolio" },
  { text: "Contacto", href: "/#contacto" }
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link className="navbar-brand" href={"/"}>Portfolio</Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>

      </nav>
    </header>
  );
};

export default Navbar;