import React from 'react';
import { useReducer } from 'react';
import { BrowserRouter as Router, Route, Routes, data } from 'react-router-dom';
import NavComponent from './NavComponent';
import Home from './PagesComponent/HomePage';
import BookingPage from './PagesComponent/BookingPage';
import Chicago from './PagesComponent/Chicago';
import CustomersSay from './PagesComponent/CustomersSay';
import Login from './PagesComponent/Login';
import Specials from './PagesComponent/Specials';

const initilizeTimes = () => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00'];
}

const timesReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return initilizeTimes();
        default:
            return state;
    }
}

function Main() {
    const [availableTimes, dispatch] = useReducer(timesReducer, initilizeTimes());
    const updateTimes = (selectedDate) => {
    dispatch({ type: 'UPDATE_TIMES' , data: selectedDate});
    }
    return (
        <main>
                <NavComponent />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/bookingPage" element={<BookingPage availableTimes={availableTimes} updateTimes={updateTimes}/>} />
                    <Route path="/chicago" element={<Chicago />} />
                    <Route path="/customersSay" element={<CustomersSay />} />
                    <Route path="/specials" element={<Specials />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
        </main>
    )
}
export default Main;