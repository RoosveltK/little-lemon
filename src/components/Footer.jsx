import React from 'react'
import logo from '../assets/icons_assets/Logo.svg' // Note the space in filename "Logo .svg" vs "Logo.svg" in header. checking file list... "Logo .svg" exists.

function Footer() {
  return (
    <footer className='bg-primary-green text-white py-16'>
      <div className='max-w-screen-xl mx-auto p-4 grid grid-cols-1 md:grid-cols-4 gap-8'>
        <div>
          <img src={logo} alt="Little Lemon Footer Logo" className='w-40 bg-white p-2 rounded' />
        </div>
        <div>
          <h3 className='font-karla font-bold text-xl mb-4 text-primary-yellow'>Doormat Navigation</h3>
          <ul className='space-y-2 font-karla'>
            <li><a href="#" className="hover:text-primary-yellow">Home</a></li>
            <li><a href="#" className="hover:text-primary-yellow">Reservations</a></li>
          </ul>
        </div>
        <div>
          <h3 className='font-karla font-bold text-xl mb-4 text-primary-yellow'>Contact</h3>
          <ul className='space-y-2 font-karla'>
            <li>Address</li>
            <li>phone number</li>
            <li>email</li>
          </ul>
        </div>
        <div>
          <h3 className='font-karla font-bold text-xl mb-4 text-primary-yellow'>Social Media Links</h3>
          <ul className='space-y-2 font-karla'>
            <li><a href="#" className="hover:text-primary-yellow">Facebook</a></li>
            <li><a href="#" className="hover:text-primary-yellow">Instagram</a></li>
            <li><a href="#" className="hover:text-primary-yellow">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer