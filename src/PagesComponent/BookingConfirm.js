import React from 'react';
function BookingConfirm() {
    const storedBookingDetails = localStorage.getItem('bookingDetails');
    const bookingDetails = storedBookingDetails ? JSON.parse(storedBookingDetails) : null;
    return (
        <div className="booking-confirmation">
            <h1>Booking Confirmation</h1>
            {bookingDetails ? (
                <div>
                    <h1>Your booking has been confirmed!</h1>
                    <h2>Booking Details:</h2>
                    <p>Name: {bookingDetails.name}</p>
                    <p>Date: {bookingDetails.date}</p>
                    <p>Time: {bookingDetails.time}</p>
                    <p>Guests: {bookingDetails.guests}</p>
                    <p>Occasion: {bookingDetails.occasion}</p>
                </div>
            ) : (
                <p>No booking details found.</p>
            )}
            <p>Thank you for choosing us.</p>
            <button onClick={() => window.location.href = '/'}>Go to Home</button>
        </div>
    );
}
export default BookingConfirm;