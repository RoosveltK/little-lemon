import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className='flex gap-8 font-karla font-bold'>
        <li><Link to="/" className="hover:text-primary-yellow transition-colors">Home</Link></li>
        <li><a href="#" className="hover:text-primary-yellow transition-colors">About</a></li>
        <li><a href="#" className="hover:text-primary-yellow transition-colors">Menu</a></li>
        <li><Link to="/booking" className="hover:text-primary-yellow transition-colors">Reservations</Link></li>
        <li><a href="#" className="hover:text-primary-yellow transition-colors">Order Online</a></li>
        <li><a href="#" className="hover:text-primary-yellow transition-colors">Login</a></li>
      </ul>
    </nav>
  )
}

export default Nav