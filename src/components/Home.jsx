import { faUser, 
         faTools,  
         faDraftingCompass, 
         faStar } from '@fortawesome/free-solid-svg-icons';

import Item from './Item';

function Home() {
  return (
    <div className="home main-page">
      <Item {...data} />
    </div>
    
  )
}

export default Home;

// home page data
const data = {
  page: 'home',
  display: [
    {
      color: '#7018A7',
      icon: faUser,
      label: 'kevin',
      text: `
      I’m a front end engineer with 4 years experience. 
      I’ve built simple and complex user interfaces, 
      experienced many coding languages, and even mentor 
      a group of new programming students in the art of 
      front end development and programming fundamentals.
      `
    },
    {
      color: '#18A75A',
      icon: faTools,
      label: 'engineer',
      text: `
      I specialize in React.js and CSS. I’ve also worked 
      on projects with Perl, Node, PostgreSQL, C++, Java, 
      Lisp, and Lua.
      `
    },
    {
      color: '#D41919',
      icon: faDraftingCompass,
      label: 'designer',
      text: `
      From subtle details that pull a look together, to 
      unique designs that challenge the eyes... If you can 
      dream it, I can build it. And they will come!
      `
    },
    {
      color: '#EA7017',
      icon: faStar,
      label: 'perfect',
      text: `
      There’s no such thing as perfect, except there is. 
      And our next project could be just that. Reach out 
      and let’s talk about it.
      `
    }
  ]
}