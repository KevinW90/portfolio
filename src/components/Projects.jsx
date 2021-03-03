import DD_img from '../assets/dungeon_dom_img.svg';
import PF_img from '../assets/pie_felicia_img.svg';
import CS_img from '../assets/csc_img.svg';

import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/Projects.scss';

function Projects() {
  return (
    <div className="projects main-page">
      {data.map((info, ndx) => {
        return <Item key={info.title} {...info} ndx={ndx}/>
      })}
    </div>
  )
}

export default Projects;

function Item({img, title, link, text, labels, ndx}) {
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
        
        {ndx === 2
        ?
          <p dangerouslySetInnerHTML={{__html: text}}></p>
        :
          <p>{text}</p>
        }
        <div className="project-item__tech-labels">
          {labels.map((label, ndx) => <span key={`${label}${ndx}`} className="project-item__tech-label">{label}</span>)}
        </div>
      </div>
    </div>
  )
}

const data = [
  {
    img: DD_img,
    title: 'Dungeon DOM',
    link: '',
    text: `
      Co-developing a rogue-lite dungeon-crawler. 
      The app is built in Vanilla JS with the Web 
      Component API. I’ve been in charge of the 
      design and the code to create it, plus some 
      minor logic implementation.
    `,
    labels: [
      'JavaScript',
      'Web Component'
    ]
  },
  {
    img: PF_img,
    title: 'Pie Felicia!',
    link: '',
    text: `
      A semi-functional mobile app concept for a 
      pie shop catering business. Horizontal scrolling 
      areas, strategic layering effects, and a sideways 
      navigation show off the modern side of app building.
    `,
    labels: [
      'JavaScript',
      'React'
    ]
  },
  {
    img: CS_img,
    title: 'cornerstone_coding',
    link: '',
    text: `
      A website designed for my Discord server where I mentor 
      new programming students. It’s still in the development 
      phase, but you can <a>join the server</a> to access some 
      articles I’ve designed as well. Look at the pinned 
      messages in the code-help channel.
    `,
    labels: [
      'Design'
    ]
  },
]