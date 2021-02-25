import '../styles/Nav.scss';

import LOGO from '../assets/LOGO.svg';

function Nav() {
  return (
    <nav>
      <div>
        <img src={LOGO} alt="logo" />
      </div>

      <ul className="menu">
        <li>
          <a href='#'>home</a>
        </li>
        <li>
          <a href='#'>projects</a>
        </li>
        <li>
          <a href='#'>contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;