import React from 'react';

const ConfirmedBooking = () => {
    return (
        <div className="max-w-screen-xl mx-auto p-4 py-32 text-center" style={{ minHeight: 'calc(100vh - 4rem)' }}>
            <h1 className="font-markazi text-6xl text-primary-yellow mb-8">Booking Confirmed!</h1>
            <p className="font-karla text-2xl text-highlight-dark mb-12">
                Thank you for choosing Little Lemon. Your table has been successfully reserved.
            </p>
            <div className="bg-primary-green text-white p-8 rounded-lg shadow-xl inline-block">
                <p className="font-karla text-xl">
                    We've sent a confirmation email with all the details to your inbox.
                </p>
                <p className="font-karla text-xl mt-4">
                    See you soon!
                </p>
            </div>
        </div>
    );
};

export default ConfirmedBooking;
