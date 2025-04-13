import React, { useState , useEffect} from 'react';

function BookingForm({updateTimes,submitForm}) {
    const [name, setName] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // Default date set to today
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');
    const [availableTimes, setAvailableTimes] = useState([]);

// Fetch available times for todays date when the component mounts
    useEffect(() => {
        const fetchAvailableTimes = async () => {
            const responseAsTime = await window.fetchAPI(new Date (date));
            setAvailableTimes(responseAsTime);
        };
        fetchAvailableTimes();
    }, [date]); // Re-fetch available times when the date changes


    const handleDateChange = (event) => {
        const selectedDate = event.target.value;
        setDate(selectedDate);
        updateTimes(selectedDate); // Call the updateTimes function with the selected date
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const bookingDetails = {
            name,
            date,
            time,
            guests,
            occasion,
        };
        // Handle the booking details (e.g., send to server or display confirmation)
        // const success = await window.submitAPI(bookingDetails); //Submit the booking details
        // if (success) {
        //     alert('Booking successful!');
        //     console.log('Booking SuccesFul:', bookingDetails);
        // } else {
        //     alert('Booking failed. Please try again.');
        //     console.log('Booking Failed:');
        // }
        // console.log('Booking Details:', bookingDetails);
        // // Here you can send the bookingDetails to your server or perform any other action

await submitForm(bookingDetails); // Call the submitForm function with the booking details
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