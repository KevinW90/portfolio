import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

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
        else if (page === 'projects') {
          return (
            <ProjectItem
              key={data.title}
              {...data}
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
  return (
    <div className="project-item">
      <div className="project-item__img">
        <img src={img} alt={title} />
      </div>
      
      <div className="project-item__words">
        <span className="project-item__title">
          {title} 
          {link && 
            <FontAwesomeIcon 
              className="project-item__icon" 
              icon={faExternalLinkAlt} />
          }
        </span>
        
        <p dangerouslySetInnerHTML={{__html: text}}></p>
        
        <div className="project-item__tech-labels">
          {labels.map((label, ndx) => <span key={`${label}${ndx}`} className="project-item__tech-label">{label}</span>)}
        </div>
      </div>
    </div>
  )
}

function ContactItem({badge}) {

}