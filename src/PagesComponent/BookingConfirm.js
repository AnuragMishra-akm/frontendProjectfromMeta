import React from 'react';
function BookingConfirm() {
    return (
        <div className="booking-confirmation">
            <h1>Booking Confirmation</h1>
            <p>Your booking has been confirmed!</p>
            <p>Thank you for choosing us.</p>
            <button onClick={() => window.location.href = '/'}>Go to Home</button>
        </div>
    );
}
export default BookingConfirm;