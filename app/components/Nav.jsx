import React from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink';

const Nav = () => (
  <nav className="nav">
    <NavLink to="/" brand>ReactSpeed</NavLink>
    <NavLink to="/book">Book</NavLink>
    <NavLink
      href="https://github.com/manavsehgal/react-speed-book">
        Code
    </NavLink>
    <NavLink
      href="https://manavsehgal.github.io/react-speed-demos/">
        Demos
    </NavLink>
    <NavLink href="https://reactspeed.com">
      Website
    </NavLink>
  </nav>
);

export default Nav;
