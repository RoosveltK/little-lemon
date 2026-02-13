import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Booking from '../pages/Booking';

export const initializeTimes = () => {
  return [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ];
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // For now, return the same times regardless of date
      return initializeTimes();
    default:
      return state;
  }
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking availableTimes={availableTimes} dispatch={dispatch} />} />
      </Routes>
    </main>
  );
}

export default Main;