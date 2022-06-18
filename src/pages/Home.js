import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="homeCenter">
        <h1>Redux Store</h1>
        <div className="centerButton">
          <NavLink to="/homme">
            <button>Homme</button>
          </NavLink>
          <NavLink to="/femme">
            <button>Femme</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
