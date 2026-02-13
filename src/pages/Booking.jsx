import React from 'react';
import BookingForm from '../components/BookingForm';

function Booking({ availableTimes, dispatch }) {
    return (
        <div className='max-w-screen-xl mx-auto p-4 py-16' style={{ minHeight: 'calc(100vh - 4rem)' }}>
            <h1 className='font-markazi text-5xl text-primary-yellow font-medium mb-8'>Reserve a Table</h1>
            <div className="flex flex-col md:flex-row gap-12">
                <div className="flex-1">
                    <p className='font-karla text-xl mb-6 text-highlight-dark'>
                        Fill out the form below to secure your spot at Little Lemon. We look forward to serving you!
                    </p>
                    <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
                </div>
                <div className="flex-1 hidden md:block">
                    <div className="bg-primary-green text-white p-8 rounded-lg shadow-xl">
                        <h2 className="font-markazi text-3xl mb-4">Why Little Lemon?</h2>
                        <ul className="font-karla space-y-4 list-disc list-inside">
                            <li>Authentic Mediterranean flavors</li>
                            <li>Fresh, locally sourced ingredients</li>
                            <li>Cozy and welcoming atmosphere</li>
                            <li>Perfect for special occasions</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Booking;
