import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="leftFooter">
        <ul>
          <li>
            <NavLink to="/CGV">
              <span className="un">CGV</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/CGC">
              <span className="un">CGC</span>
            </NavLink>
          </li>
          <li>
            <span className="un"></span>
          </li>
        </ul>
      </div>

      <div className="middleFooter">
        <ul>
          <li>
            <span className="un">
              <a
                rel="noreferrer"
                href="https://www.malt.fr/profile/tristanboettger"
                target={"_blank"}
              >
                Malt
              </a>
            </span>
          </li>
          <li>
            <span className="un">
              <a
                rel="noreferrer"
                href="https://github.com/tribot17"
                target={"_blank"}
              >
                Github
              </a>
            </span>
          </li>
          <li>
            <span className="un">
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/tristan-boettger-magnier-862378210/"
                target={"_blank"}
              >
                Linkedin
              </a>
            </span>
          </li>
        </ul>
      </div>

      <div className="rightFooter">
        <ul>
          <li>
            <NavLink to="/contact">
              <span className="un">Contact</span>
            </NavLink>
          </li>
          <li>
            <span className="un"></span>
          </li>
          <li>
            <span className="un"></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
