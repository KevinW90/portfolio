import Item from './Item';

import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return <Item {...data} />
}

export default Contact;

const data = {
  color: '#EA7017',
    icon: faCommentAlt,
    label: 'reach out',
    text: `
    
    `
}