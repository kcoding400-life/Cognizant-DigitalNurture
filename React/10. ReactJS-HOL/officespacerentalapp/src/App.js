// App.js
import React from "react";

function App() {
  // Office list with details
  const offices = [
    { name: "Prestige Tech Park", rent: 55000, address: "Nayapura, Bhopal" },
    { name: "ABC Ecospace", rent: 75000, address: "New City, Bhopal" },
    { name: "Eight Tech Park", rent: 45000, address: "Lalghati, Bhopal" }
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Heading */}
      <h1>Office Space Rental App</h1>

      {/* Image */}
      <img
        src="office.jpg"
        alt="Office Space"
        style={{ margin: "20px 0", borderRadius: "8px" }}
      />

      {/* Loop through offices */}
      {offices.map((office, index) => (
        <div
          key={index}
          style={{
            marginBottom: "20px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "6px"
          }}
        >
          <h2>{office.name}</h2>
          <p style={{ color: office.rent < 60000 ? "red" : "green" }}>
            Rent: {office.rent}
          </p>
          <p>Address: {office.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
