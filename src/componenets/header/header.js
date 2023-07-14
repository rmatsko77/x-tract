import React from 'react'
import './header.css'

function Header() {
    return (
        <nav className='nav-container'>
            <ul className='nav-list'>
                <li><a href='#story'>Our Story</a></li>
                <li><a href='#events'>Events</a></li>
                <li><a href='#menu'>Menu</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </nav>
    )
}

export default Header