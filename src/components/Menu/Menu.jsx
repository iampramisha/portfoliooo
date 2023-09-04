import './Menu.css'
import React from 'react'

const Menu = () => {
  return (
    <div className="menu">
        <ul>
            <li>
                <a href='#intro'>Home</a>
            </li>
            
            <li>
                <a href='#Portfolio'>Portfolio</a>
            </li>
            
            <li>
                <a href='#Testimonials'>Testimonials</a>
            </li>
            
            <li>
                <a href='#Contact'>Contact</a>
            </li>

        </ul>
    </div>
  )
}

export default Menu