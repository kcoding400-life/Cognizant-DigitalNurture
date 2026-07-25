
import React from "react";

function LogoutButton({ onLogout }) {
  return (
    <button onClick={onLogout} style={{ padding: "10px 20px", cursor: "pointer" }}>
      Logout
    </button>
  );
}

export default LogoutButton;