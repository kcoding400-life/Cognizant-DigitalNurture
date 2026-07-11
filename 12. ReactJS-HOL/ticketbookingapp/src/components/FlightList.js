// src/components/FlightList.js
import React from "react";

function FlightList() {
  const flights = [
    { id: 1, flightNumber: "AI101", origin: "Delhi", destination: "Mumbai", time: "10:00 AM" },
    { id: 2, flightNumber: "AI202", origin: "Bengaluru", destination: "Chennai", time: "01:30 PM" },
    { id: 3, flightNumber: "AI303", origin: "Kolkata", destination: "Hyderabad", time: "05:45 PM" },
    { id: 4, flightNumber: "AI404", origin: "Pune", destination: "Goa", time: "08:15 PM" },
  ];

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Available Flights</h3>
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Flight Number</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Departure Time</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.flightNumber}</td>
              <td>{flight.origin}</td>
              <td>{flight.destination}</td>
              <td>{flight.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FlightList;
