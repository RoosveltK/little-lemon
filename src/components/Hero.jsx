import React from 'react'
import heroImage from '../assets/icons_assets/restauranfood.jpg'

function Hero() {
    return (
        <section className='bg-primary-green relative'>
            <div className='max-w-screen-xl mx-auto p-4 flex flex-col md:flex-row justify-between items-start gap-8'>
                <div className='flex-1 py-8'>
                    <h1 className='font-markazi text-5xl md:text-6xl text-primary-yellow font-medium'>Little Lemon</h1>
                    <h2 className='font-markazi text-3xl md:text-4xl text-white'>Chicago</h2>
                    <p className='font-karla text-lg text-white my-4 max-w-md'>
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <button className='bg-primary-yellow text-black font-karla font-bold py-2 px-4 rounded-2xl hover:bg-yellow-500 transition-colors mt-4'>
                        Reserve a Table
                    </button>
                </div>
                <div className='flex-1 relative md:absolute md:right-30 md:top-8 w-full md:w-80 h-80 rounded-2xl overflow-hidden mt-8 md:mt-0'>
                    <img src={heroImage} alt="Restaurant Food" className='w-full h-full object-cover' />
                </div>
            </div>
            {/* Spacer to push content down if image is absolute, or just let flow naturally if not absolute on mobile. 
          The design shows image overlapping somewhat or just next to it. 
          For now, I'll keep it simple flex on mobile, and maybe absolute on desktop if I want that specific overlap look, 
          but flex is safer for responsiveness.
          Let's adjust the layout to be a simple grid or flex row without absolute positioning for the image to ensure it takes up space correctly.
      */}
        </section>
    )
}

// Refined version without absolute positioning for better flow, 
// unless the design strictly demands the overlap. 
// The maquette shows the image distinct in the right column. 
// Let's stick to flex row.

function HeroRefined() {
    return (
        <section className='bg-primary-green'>
            <div className='max-w-screen-xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8'>
                <div className='flex flex-col items-start'>
                    <h1 className='font-markazi text-6xl text-primary-yellow font-medium'>Little Lemon</h1>
                    <h2 className='font-markazi text-4xl text-white'>Chicago</h2>
                    <p className='font-karla text-lg text-white my-6 leading-relaxed'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button className='bg-primary-yellow text-black font-karla font-bold text-lg py-3 px-8 rounded-2xl hover:bg-yellow-500 transition-colors'>
                        Reserve a Table
                    </button>
                </div>
                <div className='w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl md:-mb-16 z-10'>
                    <img src={heroImage} alt="Restaurant Food" className='w-full h-full object-cover' />
                </div>
            </div>
        </section>
    )
}

export default HeroRefined
