import React from 'react'
import marioAdrianA from '../assets/icons_assets/Mario and Adrian A.jpg'
import marioAdrianB from '../assets/icons_assets/Mario and Adrian b.jpg'

function About() {
    return (
        <section className='max-w-screen-xl mx-auto p-4 my-16'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='flex-1'>
                    <h2 className='font-markazi text-5xl text-primary-yellow font-medium'>Little Lemon</h2>
                    <h3 className='font-markazi text-3xl text-black'>Chicago</h3>
                    <p className='font-karla text-lg text-gray-700 my-4 max-w-md'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                    </p>
                </div>
                <div className='flex-1 relative h-96 mt-8 md:mt-0'>
                    <div className='absolute top-0 right-10 w-64 h-80 rounded-2xl overflow-hidden shadow-lg z-10'>
                        <img src={marioAdrianA} alt="Mario and Adrian A" className='w-full h-full object-cover' />
                    </div>
                    <div className='absolute top-20 right-40 w-64 h-80 rounded-2xl overflow-hidden shadow-lg z-20'>
                        <img src={marioAdrianB} alt="Mario and Adrian B" className='w-full h-full object-cover' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
