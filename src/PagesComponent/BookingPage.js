import React from 'react';
import BookingForm from '../BookingForm';
function BookingPage({updateTimes , submitForm}) {
    return(
        <div className="booking-page">
            <h1>Book a Table</h1>
            <BookingForm updateTimes={updateTimes} submitForm={submitForm}/>
            <div className="booking-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1521737604893-d14a6d8f1b1b)' }}></div>
            </div>
    )
}
export default BookingPage;