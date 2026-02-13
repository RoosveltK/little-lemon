import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Booking from '../pages/Booking';

/* global fetchAPI */

export const initializeTimes = () => {
  const today = new Date();
  // fetchAPI is defined in the global scope via index.html script tag
  return typeof fetchAPI !== 'undefined' ? fetchAPI(today) : [
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
      const selectedDate = new Date(action.date);
      return typeof fetchAPI !== 'undefined' ? fetchAPI(selectedDate) : state;
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