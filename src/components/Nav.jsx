import {useWindowWidth} from '../hooks';

function Nav() {
  const windowWidth = useWindowWidth();

  return (
    <nav>
      <div>
        LOGO
      </div>

      {windowWidth <= 600 ? <CollapsedMenu /> : <ExpandedMenu />}
    </nav>

  )
}

// collapsed menu component
function CollapsedMenu() {
  return (
    <div>
      collapsed
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