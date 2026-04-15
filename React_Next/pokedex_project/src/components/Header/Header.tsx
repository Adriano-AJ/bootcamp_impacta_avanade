import "./styles.css"
import logo from '../../assets/pokelogo.jpeg';
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
        <div id="logoSec">
            <img src={logo} alt="Pokedex Logo" />
            <span id="pokedex-title">Pokedex</span>
        </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  )
}