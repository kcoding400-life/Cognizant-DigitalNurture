import React, { useState } from "react";
import LogoutButton from "./components/LogoutButton";
import FlightList from "./components/FlightList";

function UserPage({ onLogout }) {
  const [selectedFlight, setSelectedFlight] = useState("");
  const [passengerName, setPassengerName] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();
    if (selectedFlight && passengerName) {
      alert(`Ticket booked for ${passengerName} on flight ${selectedFlight}!`);
      setSelectedFlight("");
      setPassengerName("");
    } else {
      alert("Please select a flight and enter passenger name.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome, User!</h2>
      <p>You can book tickets for available flights below.</p>

      {/* Flight details */}
      <FlightList />

      {/* Booking form */}
      <form onSubmit={handleBooking} style={{ marginTop: "20px" }}>
        <div>
          <label>
            Select Flight:
            <input
              type="text"
              value={selectedFlight}
              onChange={(e) => setSelectedFlight(e.target.value)}
              placeholder="Enter flight number"
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>
        <div style={{ marginTop: "10px" }}>
          <label>
            Passenger Name:
            <input
              type="text"
              value={passengerName}
              onChange={(e) => setPassengerName(e.target.value)}
              placeholder="Enter your name"
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>
        <button type="submit" style={{ marginTop: "15px" }}>
          Book Ticket
        </button>
      </form>

      {/* Logout button */}
      <div style={{ marginTop: "20px" }}>
        <LogoutButton onLogout={onLogout} />
      </div>
    </div>
  );
}

export default UserPage;