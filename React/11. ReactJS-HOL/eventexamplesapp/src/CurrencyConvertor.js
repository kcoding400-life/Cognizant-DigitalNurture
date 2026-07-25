import React, { useState } from "react";

function CurrencyConvertor() {
  const [rupees, setRupees] = useState("");
  const [euros, setEuros] = useState("");

  // Conversion rate (example: 1 INR = 0.011 EUR)
  const conversionRate = 0.0092;

  // Handle input change
  const handleChange = (event) => {
    setRupees(event.target.value);
  };

  // Handle submit event
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload
    const convertedValue = (parseFloat(rupees) * conversionRate).toFixed(2);
    setEuros(convertedValue);
  };

  // Convert back from Euro to Rupees
  const convertToRupees = () => {
    const convertedBack = (parseFloat(euros) / conversionRate).toFixed(2);
    setRupees(convertedBack);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Currency Convertor</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter amount in Rupees:{" "}
          <input
            type="number"
            value={rupees}
            onChange={handleChange}
            placeholder="₹"
          />
        </label>
        <br /><br />
        <button type="submit">Convert to Euro</button>
      </form>

      {euros && (
        <div>
          <p>Converted Amount: €{euros}</p>
          <button onClick={convertToRupees}>Convert back to Rupees</button>
        </div>
      )}
    </div>
  );
}

export default CurrencyConvertor;
