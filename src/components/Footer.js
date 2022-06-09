import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="leftFooter">
        <ul>
          <li>
            <span className="un">CGV</span>
          </li>
          <li>
            <span className="un">CGC</span>
          </li>
          <li>
            <span className="un"></span>
          </li>
        </ul>
      </div>

      <div className="middleFooter">
        <ul>
          <li>
            <span className="un">Github</span>
          </li>
          <li>
            <span className="un">Linkedin</span>
          </li>
          <li>
            <span className="un">Malt</span>
          </li>
        </ul>
      </div>

      <div className="rightFooter">
        <ul>
          <li>
            <span className="un">Contact</span>
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
