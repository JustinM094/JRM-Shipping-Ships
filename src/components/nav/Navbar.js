import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link className="navbar-link" to="/ships">
          Ships
        </Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link" to="/haulers">
          Haulers
        </Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link" to="/docks">
          Docks
        </Link>
      </li>
    </ul>
  );
};
