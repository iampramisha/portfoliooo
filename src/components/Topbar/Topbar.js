import React, { useState } from 'react';
import './topbar.css';

const Topbar = ({onMenuToggle, isMenuOpen}) => {
    const [mode,setMode]=useState("dark")
    const handleToggleMode = () => {
        setMode(mode === 'dark' ? 'lightmode' : 'dark');
    };
    return (
        <div className={`topbar ${mode}`}>
            <h1>
                <a href='#logo' className='gen'>Techie</a>
            </h1>
           
            <img className='user' src='https://th.bing.com/th/id/OIP.HxGKclaD-srDOWiTBP5RpwHaHa?pid=ImgDet&rs=1' alt='pic'/>
            <h2> 9843196853</h2>
             <img className='mail' src='https://th.bing.com/th/id/OIP.SWQkSUWW2jkoU-G9CWda6QHaHa?pid=ImgDet&rs=1'alt='mail'/>
             <h3 className='email' >pramisha919@gmail.com</h3>
    <button className='toggle' onClick={handleToggleMode}> {mode === 'dark' ? '🌚' : '🌙'}</button>
    <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}
       onClick={onMenuToggle}>
    <div className="line"></div>
    <div className="line"></div>
    <div className="line"></div>
    </div>
                  </div>
    );
}
export default Topbar;
