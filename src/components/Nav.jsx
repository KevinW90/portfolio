import '../styles/Nav.scss';

import LOGO from '../assets/LOGO.svg';

import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <img src={LOGO} alt="logo" />
      </div>

      <ul className="nav__menu">
        <li className="nav__item">
          <Link to="/" className="nav__link">home</Link>
        </li>
        <li className="nav__item">
          <Link to="/projects" className="nav__link">projects</Link>
        </li>
        <li className="nav__item">
          <Link to="/contact" className="nav__link">contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;