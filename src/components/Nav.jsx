import '../styles/Nav.scss';

import LOGO from '../assets/LOGO.svg';

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <img src={LOGO} alt="logo" />
      </div>

      <ul className="nav__menu">
        <li className="nav__item">
          <a className="nav__link" href='#'>home</a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href='#'>projects</a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href='#'>contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;