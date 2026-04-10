import "./styles.css"
import logo from '../../assets/pokelogo.jpeg';

export function Header() {
  return (
    <header className="header">
        <div id="logoSec">
            <img src={logo} alt="Pokedex Logo" />
            <span id="pokedex-title">Pokedex</span>
        </div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>
    </header>
  )
}