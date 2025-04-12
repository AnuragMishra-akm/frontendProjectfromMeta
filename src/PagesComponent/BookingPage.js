function BookingPage() {
    return(
        <div className="booking-page">
            <h1>Book a Table</h1>
            <form className="booking-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" required />

                <label htmlFor="time">Time:</label>
                <input type="time" id="time" name="time" required />

                <label htmlFor="guests">Number of Guests:</label>
                <input type="number" id="guests" name="guests" required min="1" />

                <button type="submit">Book Now</button>
            </form>
            </div>
    )
}
export default BookingPage;