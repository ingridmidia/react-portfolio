import { Link } from "react-router-dom";

import "../styles/Navigation.css";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <strong>Ingrid Miranda</strong>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
