
import React from "react";

function LoginButton({ onLogin }) {
  return (
    <button onClick={onLogin} style={{ padding: "10px 20px", cursor: "pointer" }}>
      Login
    </button>
  );
}

export default LoginButton;
