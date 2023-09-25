import { NavLink } from "react-router-dom";
import "./Hero.module.css";

const HeroPage = () => {
  return (
    <main className="hero">
      <div className="container">
        <div className="col-6">
          <p className="main">
            Posted on <span className="bold">startup</span>
          </p>
          <h2>Step-by-step guide to choosing great font pairs</h2>
          <p className="date">
            By <span>James West</span> | May 23, 2022{" "}
          </p>
          <p className="comment">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <NavLink className="btn-hero">
            Read More <i className="fa fa-chevron-right"></i>
          </NavLink>
        </div>
      </div>
    </main>
  );
};

export default HeroPage;
