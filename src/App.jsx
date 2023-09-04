import React from 'react';
import { useState } from 'react';
import './App.css';
import Intro from './components/Intro/Intro';
import Topbar from './components/Topbar/Topbar';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Menu from './components/Menu/Menu';
import Portfolio from './components/Portfolio/Portfolio';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='app'>
      <Topbar onMenuToggle={handleToggleMenu} isMenuOpen={isMenuOpen} />
      {isMenuOpen && <Menu />}
<div className="sections">
  <Intro></Intro>
      <Portfolio></Portfolio>
<Testimonials></Testimonials>
<Contact></Contact>
</div>
    </div>
  );
}

export default App;
