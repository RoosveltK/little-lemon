import React from 'react'
import Nav from './Nav'
import Logo from "../assets/icons_assets/Logo.svg"

function Header() {
    return (
        <header className='flex justify-between items-center max-w-screen-xl mx-auto p-4'>
            <img src={Logo} alt="Little Lemon Logo" />
            <Nav />
        </header>
    )
}

export default Header