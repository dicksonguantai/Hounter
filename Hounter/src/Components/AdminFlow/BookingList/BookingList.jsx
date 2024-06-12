import { useState, useEffect } from 'react';
import "./BookingList.css";

export default function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch booking data from API and set it to the state
    // setBookings(data);
  }, []);

  const handleCancel = (bookingId) => {
    // API call to cancel booking
    // Refresh booking list
  };

  return (
    <div className="booking-list">
      <h1 className="text-2xl font-semibold mb-5">Manage Bookings</h1>
      <table className="w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>House ID</th>
            <th>Scheduled Date & Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.name}</td>
              <td>{booking.phone}</td>
              <td>{booking.house_id}</td>
              <td>{booking.scheduled_date_time}</td>
              <td>
                <button
                  className="px-2 py-1 bg-red-600 text-white rounded"
                  onClick={() => handleCancel(booking.id)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
