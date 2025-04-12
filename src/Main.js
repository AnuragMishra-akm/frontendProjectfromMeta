import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavComponent from './NavComponent';
import Home from './PagesComponent/HomePage';
import BookingPage from './PagesComponent/BookingPage';
import Chicago from './PagesComponent/Chicago';
import CustomersSay from './PagesComponent/CustomersSay';
import Login from './PagesComponent/Login';
import Specials from './PagesComponent/Specials';
function Main() {
    return (
        <main>
                <NavComponent />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/bookingPage" element={<BookingPage />} />
                    <Route path="/chicago" element={<Chicago />} />
                    <Route path="/customersSay" element={<CustomersSay />} />
                    <Route path="/specials" element={<Specials />} />
                    <Route path="/login" element={<Login />} />
                </Routes>    
        </main>
    )
}
export default Main;