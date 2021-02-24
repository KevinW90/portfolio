import '../styles/Nav.scss';

import {useWindowWidth} from '../hooks';

import LOGO from '../assets/LOGO.svg';
import BARS from '../assets/bars.svg';

function Nav() {
  const windowWidth = useWindowWidth();

  return (
    <nav>
      <div>
        <img src={LOGO} alt="logo" />
      </div>

      {windowWidth <= 600 ? <CollapsedMenu /> : <ExpandedMenu />}
    </nav>

  )
}

// collapsed menu component
function CollapsedMenu() {
  return (
    <div className="menu-collapsed">
      <img className="blah" src={BARS} alt="menu" />
    </div>
  )
}

// expanded menu component
function ExpandedMenu() {
  return (
    <div>
      expanded
    </div>
  )
}
export default Nav;