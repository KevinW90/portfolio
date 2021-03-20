import Item from './Item';

import DD_img from '../assets/dungeon_dom_img.png';
import PF_img from '../assets/pie_felicia_img.png';
import CS_img from '../assets/csc_img.png';

import '../styles/Projects.scss';

function Projects() {
  return (
    <div className="projects main-page">
      <Item {...data}/>
    </div>
  )
}

export default Projects;

const data = {
  page: 'projects',
  display: [
    {
      img: DD_img,
      title: 'Dungeon DOM',
      link: 'https://github.com/heykc/READMEDungeon',
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
      link: 'https://pie-felicia.vercel.app/',
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
      link: 'https://www.figma.com/file/DHad1hqKrpZNu4feY7We3Z/Website?node-id=1%3A7',
      text: `
        A website designed for my Discord server where I mentor 
        new programming students. It’s still in the development 
        phase, but you can <a href="https://discord.gg/hDtqsZvUuT" target="_blank">join the server</a> to access some 
        articles I’ve designed as well. Look at the pinned 
        messages in the code-help channel.
      `,
      labels: [
        'Design'
      ]
    }
  ]
}