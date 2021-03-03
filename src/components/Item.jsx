import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Item({page, display}) {
  let badge;

  return (
    <>
      {display.map((data, ndx) => {
        if (page === 'home' || 
            page === 'contact') {
          badge = {
            'color': data.color,
            'icon': data.icon,
            'label': data.label
          }
        }

        if (page === 'home') {
          return (
            <HomeItem 
              key={data.color}
              badge={badge}
              text={data.text}
              ndx={ndx}
            />
          )
        }
      })}
    </>
  )
}

export default Item;

function Badge({color, icon, label}) {
  return (
    <div 
      className="item__badge"
      style={{background: color}}
    >
      <div className="item__circle">
        <FontAwesomeIcon className="item__icon" icon={icon} />
      </div>
      <div className="item__label">
        {label}
      </div>
    </div>
  )
}

function HomeItem({badge, text, ndx}) {
  return (
    <div className="item">
      <Badge {...badge} />
      <div className="item__text">
        {text}

        {ndx === 3
          ?
          <button className="cta">
            reach out
          </button>
          :
          <></>
        }
      </div>
    </div>
  )

}

function ProjectItem({img, title, link, text, labels}) {

}

function ContactItem({badge}) {

}