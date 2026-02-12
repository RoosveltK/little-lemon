import React from 'react'
import greekSalad from '../assets/icons_assets/greek salad.jpg'
import bruschetta from '../assets/icons_assets/bruchetta.svg'
import lemonDessert from '../assets/icons_assets/lemon dessert.jpg'
import deliveryIcon from '../assets/icons_assets/basket .svg' // Assuming this is the delivery icon based on name, though 'basket .svg' has a space.

const specialsData = [
    {
        id: 1,
        title: "Greek salad",
        price: "$12.99",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        image: greekSalad,
    },
    {
        id: 2,
        title: "Bruchetta",
        price: "$ 5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        image: bruschetta,
    },
    {
        id: 3,
        title: "Lemon Dessert",
        price: "$ 5.00",
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        image: lemonDessert,
    },
]

function Specials() {
    return (
        <section className='max-w-screen-xl mx-auto p-4 my-16'>
            <div className='flex justify-between items-center mb-8'>
                <h2 className='font-markazi text-4xl font-bold'>Specials</h2>
                <button className='bg-primary-yellow text-black font-karla font-bold py-3 px-6 rounded-2xl hover:bg-yellow-500 transition-colors'>
                    Online Menu
                </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {specialsData.map((item) => (
                    <div key={item.id} className='bg-highlight-gray rounded-t-2xl overflow-hidden shadow-lg flex flex-col'>
                        <div className='h-48 overflow-hidden'>
                            <img src={item.image} alt={item.title} className='w-full h-full object-cover' />
                        </div>
                        <div className='p-4 flex-1 flex flex-col'>
                            <div className='flex justify-between items-center mb-4'>
                                <h3 className='font-markazi text-2xl font-bold'>{item.title}</h3>
                                <span className='text-secondary-orange font-bold font-karla'>{item.price}</span>
                            </div>
                            <p className='text-highlight-dark font-karla text-base flex-1 mb-6'>
                                {item.description}
                            </p>
                            <div className='flex items-center gap-3 mt-auto cursor-pointer hover:underline'>
                                <span className='font-karla font-bold text-sm'>Order a delivery</span>
                                {/* Using a simple icon or the image if valid */}
                                <img src={deliveryIcon} alt="Delivery" className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Specials
