import React from 'react';

const BookingSlot = ({ time }) => {
    return (
        <div className="bg-highlight-gray p-4 rounded-md shadow-sm border border-secondary-peach flex flex-col items-center justify-center hover:bg-secondary-peach transition-colors cursor-default">
            <span className="font-karla font-bold text-primary-green text-lg">{time}</span>
            <span className="font-karla text-sm text-highlight-dark">Available</span>
        </div>
    );
};

export default BookingSlot;
