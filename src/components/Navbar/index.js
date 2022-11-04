import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/work">Trabalhe conosco</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;