import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Item({color, icon, label, text, ndx}) {
  return (
    <div className="item">
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

export default Item;