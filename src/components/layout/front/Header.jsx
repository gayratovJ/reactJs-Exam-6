import { NavLink } from "react-router-dom";
import logo from "../../../assets/Logo(1).svg";
import "./Header.module.css";
const Header = () => {
  return (
    <header className="black">
      <div className="container d-flex jc-sb">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul>
          <li>
            <NavLink className="link" to="/">
              Home
            </NavLink>
            <NavLink className="link" to="/blog">
              Blog
            </NavLink>
            <NavLink className="link" to="/aboutus">
              About us
            </NavLink>
            <NavLink className="link" to="/register">
              Register
            </NavLink>
          </li>
          <NavLink className="btn" to="/login">
            Login
          </NavLink>
        </ul>
      </div>
    </header>
  );
};

export default Header;
