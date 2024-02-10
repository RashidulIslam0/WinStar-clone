import React, { useEffect, useState } from "react";
import axios from "axios";

const MyComponent = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(
          "https://user-api.simplybook.me/login",
          {
            headers: {
              Authorization: "Bearer YOUR_API_KEY_HERE",
            },
          }
        );
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h1>My Bookings</h1>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>{booking.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
