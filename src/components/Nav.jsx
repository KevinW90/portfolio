import '../styles/Nav.scss';

import LOGO from '../assets/LOGO.svg';

import { Link } from 'react-router-dom';

function Nav({link, changeLink}) {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <img src={LOGO} alt="logo" />
      </div>

      <ul className="nav__menu">
        <li className="nav__item" >
          <Link to="/" 
                className={`nav__link ${link === 'home' ? 'nav__link--active' : ''}`} 
                onClick={() => changeLink('home')}>
            home
          </Link>
        </li>
        <li className="nav__item" onClick={() => changeLink('projects')}>
          <Link to="/projects" 
                className="nav__link"
                className={`nav__link ${link === 'projects' ? 'nav__link--active' : ''}`}>
            projects
          </Link>
        </li>
        <li className="nav__item" onClick={() => changeLink('contact')}>
          <Link to="/contact" 
                className="nav__link"
                className={`nav__link ${link === 'contact' ? 'nav__link--active' : ''}`}>
            contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;