import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbarList">
        <div className="middlePart">
          <li>
            <NavLink to="/">
              <span className="un">Acceuil</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/homme">
              <span className="un">Homme</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/femme">
              <span className="un">Femme</span>
            </NavLink>
          </li>
        </div>
        <div className="navbarLeft">
          <li>
            <NavLink to="/">
              <span className="un">Panier</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <span className="un">Mon compte</span>
            </NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
