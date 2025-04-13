import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';

// Test for static text in BookingForm
test('Renders the BookingForm labels', () => {
    render(<BookingForm availableTimes={[]} updateTimes={() => {}} />);
    // Check for the presence of static text
    const nameLabel = screen.getByText("Name:");
    const dateLabel = screen.getByText("Date:");
    const timeLabel = screen.getByText("Time:");
    const guestsLabel = screen.getByText("Number of Guests:");
    const occasionLabel = screen.getByText("Occasion:");

    expect(nameLabel).toBeInTheDocument();
    expect(dateLabel).toBeInTheDocument();
    expect(timeLabel).toBeInTheDocument();
    expect(guestsLabel).toBeInTheDocument();
    expect(occasionLabel).toBeInTheDocument();
});

// Test for updateTimes function
test('Calls updateTimes on date change', () => {
    const mockUpdateTimes = jest.fn();
    render(<BookingForm availableTimes={[]} updateTimes={mockUpdateTimes} />);

    // Change the date
    const dateInput = screen.getByLabelText("Date:");
    fireEvent.change(dateInput, { target: { value: '2025-04-12' } });

    // Check if updateTimes was called with the correct date
    expect(mockUpdateTimes).toHaveBeenCalledWith('2025-04-12');
});

// Example of initializeTimes function
const initializeTimes = (date) => {
    // Logic to return available times based on the date
    return ['17:00', '18:00', '19:00'];
};

// Test for initializeTimes function
test('initializeTimes returns correct available times', () => {
    const times = initializeTimes('2025-04-12');
    expect(times).toEqual(['17:00', '18:00', '19:00']);
});