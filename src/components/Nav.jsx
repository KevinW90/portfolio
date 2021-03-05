import '../styles/Nav.scss';

import LOGO from '../assets/LOGO.svg';

import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <img src={LOGO} alt="logo" />
      </div>

      <ul className="nav__menu">
        <li className="nav__item" >
          <NavLink exact
                   to="/" 
                   className="nav__link"
                   activeClassName='nav__link--active'>
            home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/projects" 
                   className="nav__link"
                   activeClassName='nav__link--active'>
            projects
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/contact" 
                   className="nav__link"
                   activeClassName='nav__link--active'>
            contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;