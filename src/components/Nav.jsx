import React from 'react'

function Nav() {
  return (
    <nav>
      <ul className='flex gap-8 font-karla font-bold text-lg'>
        <li><a href="#" className="hover:text-primary-yellow transition-colors">Home</a></li>
        <li><a href="#" className="hover:text-primary-yellow transition-colors">About</a></li>
        <li><a href="#" className="hover:text-primary-yellow transition-colors">Menu</a></li>
        <li><a href="#" className="hover:text-primary-yellow transition-colors">Reservations</a></li>
        <li><a href="#" className="hover:text-primary-yellow transition-colors">Order Online</a></li>
        <li><a href="#" className="hover:text-primary-yellow transition-colors">Login</a></li>
      </ul>
    </nav>
  )
}

export default Nav