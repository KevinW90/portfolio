import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedinIn,
  faDiscord
} from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-router-dom';

function Item({page, display, changeLink}) {
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
              changeLink={changeLink}
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
        else {
          return (
            <ContactItem
              key={data.color}
              badge={badge}
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

function HomeItem({badge, text, ndx, changeLink}) {
  return (
    <div className="item">
      <Badge {...badge} />
      <div className="item__text">
        {text}

        {ndx === 3
          ?
          <Link to="/contact">
            <button className="cta"
                    onClick={() => changeLink('contact')}>
              reach out
            </button>
          </Link>
          
          :
          <></>
        }
      </div>
    </div>
  )

}

function ProjectItem({img, title, link, text, labels}) {
  console.log(img);
  return (
    <div className="project-item">
      <div>
        <img 
          src={img} 
          alt={title}
          className="project-item__img"
        />
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
        
        <p 
          dangerouslySetInnerHTML={{__html: text}}
          className="project-item__text"
        >
        </p>
        
        <div className="project-item__tech-labels">
          {labels.map((label, ndx) => <span key={`${label}${ndx}`} className="project-item__tech-label">{label}</span>)}
        </div>
      </div>
    </div>
  )
}

function ContactItem({badge}) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  function updateForm({target: {name, value}}) {
    setForm({
      ...form,
      [name]: value
    })
  }

  return (
    <div className="item">
      <Badge {...badge} />
      <div className="item__text">
        <form>
          <label htmlFor="name">
            Name
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={updateForm}
            />
          </label>

          <label htmlFor="email">
            Email
            <input
              name="email"
              type="text"
              value={form.email}
              onChange={updateForm}
            />
          </label>

          <label htmlFor="message">
            Message
            <textarea
              name="message"
              rows='5'
              value={form.message}
              onChange={updateForm}
            />
            <p className="req-text">All fields required</p>
          </label>
          

          <input
            className="cta"
            type="submit"
          />
        </form>

        <div className="social">
          <FontAwesomeIcon className="social__icon" icon={faGithub} />
          <FontAwesomeIcon className="social__icon" icon={faLinkedinIn} />
          <FontAwesomeIcon className="social__icon" icon={faDiscord} />
        </div>
      </div>
    </div>
  )
}