import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { useState } from 'react';

function App() {
  const [link, setLink] = useState('home');

  function changeLink(newLink) {
    setLink(newLink);
  }
  
  return (
    <Router>
      <div className="app">
        <Nav link={link} changeLink={changeLink}/>
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home changeLink={changeLink}/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
