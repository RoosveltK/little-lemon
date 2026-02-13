import React, { useState } from 'react';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: 1,
        occasion: 'Birthday'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        if (name === 'date') {
            dispatch({ type: 'UPDATE_TIMES', date: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Reservation Submitted:', formData);
        submitForm(formData);
    };

    const getIsFormValid = () => {
        return (
            formData.date &&
            formData.time &&
            formData.guests >= 1 &&
            formData.guests <= 10 &&
            formData.occasion
        );
    };

    return (
        <form
            className="grid max-w-[400px] gap-5 font-karla text-highlight-dark"
            onSubmit={handleSubmit}
            aria-label="Table reservation form"
        >
            <div className="flex flex-col gap-2">
                <label htmlFor="res-date" className="font-bold text-primary-green">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="p-3 border border-highlight-gray rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green bg-white shadow-sm"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="res-time" className="font-bold text-primary-green">Choose time</label>
                <select
                    id="res-time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="p-3 border border-highlight-gray rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green bg-white shadow-sm"
                >
                    <option value="">Select a time</option>
                    {availableTimes.map((time) => (
                        <option key={time} value={time}>{time}</option>
                    ))}
                </select>
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="guests" className="font-bold text-primary-green">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    required
                    className="p-3 border border-highlight-gray rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green bg-white shadow-sm"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="occasion" className="font-bold text-primary-green">Occasion</label>
                <select
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleInputChange}
                    required
                    className="p-3 border border-highlight-gray rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green bg-white shadow-sm"
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Graduation</option>
                    <option>Other</option>
                </select>
            </div>

            <button
                type="submit"
                disabled={!getIsFormValid()}
                className={`mt-4 font-bold py-3 px-6 rounded-md shadow-md text-lg transition-colors ${getIsFormValid()
                        ? "bg-primary-yellow text-highlight-dark hover:bg-[#eac400]"
                        : "bg-highlight-gray text-gray-500 cursor-not-allowed opacity-50"
                    }`}
                aria-label="Click to submit reservation"
            >
                Make Your Reservation
            </button>
        </form>
    );
};

export default BookingForm;
