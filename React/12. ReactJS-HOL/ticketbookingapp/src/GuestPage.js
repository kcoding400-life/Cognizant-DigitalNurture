import React from "react";
import LoginButton from "./components/LoginButton";
import FlightList from "./components/FlightList";

function GuestPage({ onLogin }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome, Guest!</h2>
      <p>You can browse available flights below. Please log in to book tickets.</p>

      {/* Flight details */}
      <FlightList />

      {/* Login button */}
      <div style={{ marginTop: "20px" }}>
        <LoginButton onLogin={onLogin} />
      </div>
    </div>
  );
}

export default GuestPage;
