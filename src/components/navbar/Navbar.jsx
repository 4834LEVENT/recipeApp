// import React, { useState } from "react";
import Nav, { Logo, Menu, MenuLink, Hamburger } from "./Navbar.style";

import { links } from "../../data";

import "./navbar.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo>
        <i>{"<LEVENT/>"}</i>
        <span>RECİPE</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </Hamburger>
      <Menu isOpen={isOpen} onClick={() => setIsOpen(false)}>
        {links.map(({ path, name }, i) => {
          return (
            <MenuLink key={i} to={path}>
              {name}
            </MenuLink>
          );
        })}
        <MenuLink to="login" onClick={() => sessionStorage.clear()}>
          LOGOUT
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
