import React from 'react';

const IndianPlayers = () => {
  // Step 1: Declare two arrays
  const T20players = ["Virat Kohli", "Rohit Sharma", "KL Rahul", "Hardik Pandya"];
  const RanjiTrophyPlayers = ["Cheteshwar Pujara", "Ajinkya Rahane", "Mayank Agarwal", "Prithvi Shaw"];

  // Step 2: Merge arrays using spread operator
  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  // Step 3: Use destructuring logic to separate odd/even index players
  const oddPlayers = allPlayers.filter((_, index) => index % 2 === 0);
  const evenPlayers = allPlayers.filter((_, index) => index % 2 !== 0);

  return (
    <div>
      <h2>Odd Team Players</h2>
      {oddPlayers.map((player, i) => (
        <p key={i}>{player}</p>
      ))}

      <h2>Even Team Players</h2>
      {evenPlayers.map((player, i) => (
        <p key={i}>{player}</p>
      ))}
    </div>
  );
};

export default IndianPlayers;
