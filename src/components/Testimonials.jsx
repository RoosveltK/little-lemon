import React from 'react'

const testimonialsData = [
    {
        id: 1,
        rating: 5,
        name: "John Doe",
        review: "The Greek Salad was amazing! Highly recommended.",
        image: "https://i.pravatar.cc/150?img=1" // Using a placeholder service or I could use a local asset if available.
    },
    {
        id: 2,
        rating: 4,
        name: "Jane Smith",
        review: "Great atmosphere and delicious food.",
        image: "https://i.pravatar.cc/150?img=5"
    },
    {
        id: 3,
        rating: 5,
        name: "Michael Brown",
        review: "Best bruschetta I've ever had!",
        image: "https://i.pravatar.cc/150?img=8"
    },
    {
        id: 4,
        rating: 5,
        name: "Emily Davis",
        review: "Love the lemon dessert. A must try!",
        image: "https://i.pravatar.cc/150?img=9"
    }
]

function Testimonials() {
    return (
        <section className='bg-primary-green py-16 text-white'>
            <div className='max-w-screen-xl mx-auto p-4'>
                <h2 className='font-markazi text-4xl text-center mb-12'>Testimonials</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                    {testimonialsData.map((item) => (
                        <div key={item.id} className='bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center text-center'>
                            <div className='text-primary-yellow mb-4'>
                                {"★".repeat(item.rating)}
                            </div>
                            <div className='w-20 h-20 rounded-full overflow-hidden mb-4'>
                                <img src={item.image} alt={item.name} className='w-full h-full object-cover' />
                            </div>
                            <h3 className='font-karla font-bold text-lg mb-2'>{item.name}</h3>
                            <p className='font-karla text-sm text-gray-600'>{item.review}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
