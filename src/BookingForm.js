import React, { useState } from 'react';

function BookingForm({availableTimes , updateTimes}) {
    const [name, setName] = useState('');
    const [date, setDate] = useState('2023-10-01'); // Default date set to today
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');


    const handleDateChange = (event) => {
        const selectedDate = event.target.value;
        setDate(selectedDate);
        updateTimes(selectedDate); // Call the updateTimes function with the selected date
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const bookingDetails = {
            name,
            date,
            time,
            guests,
            occasion,
        };
        console.log('Booking Details:', bookingDetails);
        // Here you can send the bookingDetails to your server or perform any other action
    };
    return (
        <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '400px', margin: '0 auto',gap:'20px' }}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            <label htmlFor="res-date">Date:</label>
            <input type="date" id="res-date" value={date} onChange={(e) => {handleDateChange(e)}} required />
            <label htmlFor="res-time">Time:</label>
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
                <option value="">Select a time</option>
                {availableTimes.map((availableTime) => (
                    <option key={availableTime} value={availableTime}>
                        {availableTime}
                    </option>
                ))}
            </select>
            <label htmlFor="guests">Number of Guests:</label>
            <input type="number" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} required min="1" />
            <label htmlFor="occasion">Occasion:</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Other">Other</option>
            </select>
            <button type="submit" >
                Make Your reservation</button>
        </form>

    )

}
export default BookingForm;