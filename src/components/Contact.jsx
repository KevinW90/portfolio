import Item from './Item';

import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';

import '../styles/Contact.scss';

function Contact() {
  return (
    <div className="contact main-page">
      <Item {...data} />
    </div>
  )
}

export default Contact;

const data = {
  page: 'contact',
  display: [
    {
      color: '#EA7017',
      icon: faCommentAlt,
      label: 'reach out',
      text: `
      
      `
    }
  ]
}