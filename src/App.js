import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import logo from './logo.svg';
import './App.css';

import Checkout from './Checkout'
import Toggle from './Toggle'
import Nav from './Nav'

const App = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const navAnimation = useSpring({
    transform: isNavOpen 
    ? `translate3d(70%, 0, 0) scale(1)` 
    : `translate3d(100%, 0, 0) scale(0.6)`
  })
  const fade = useSpring({from: { opacity: 0 }, opacity: 1});

  return (
  <div className="App">
    {/* <animated.div className="App" style={fade}> */}
      <header className="App-header">
        {/* <Nav style={navAnimation} /> */}
        <img src={logo} className="logo" />
        <button 
          className="menu-button"
          onClick={() => setNavOpen(!isNavOpen)}  
        >Menu</button>
      </header>
      <main>
        <Toggle />
        <Checkout isOpen={isNavOpen} />
      </main>
    {/* </animated.div> */}
  </div>
  );
  
}

export default App;
