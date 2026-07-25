import React from 'react';

const ListofPlayers = () => {
  // Step 1: Declare an array of 11 players with scores
  const players = [
    { name: "Virat Kohli", score: 85 },
    { name: "Rohit Sharma", score: 72 },
    { name: "MS Dhoni", score: 65 },
    { name: "KL Rahul", score: 90 },
    { name: "Hardik Pandya", score: 55 },
    { name: "Ravindra Jadeja", score: 68 },
    { name: "Shikhar Dhawan", score: 74 },
    { name: "Rishabh Pant", score: 60 },
    { name: "Bhuvneshwar Kumar", score: 45 },
    { name: "Jasprit Bumrah", score: 88 },
    { name: "Mohammed Shami", score: 62 }
  ];

  // Step 2: Use arrow function + filter to get players with score < 70
  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      {/* Step 3: Use map() to display all players */}
      {players.map((player, index) => (
        <p key={index}>{player.name} - {player.score}</p>
      ))}

      <h3>Players with score below 70</h3>
      {/* Step 4: Display filtered players */}
      {lowScorers.map((player, index) => (
        <p key={index}>{player.name} - {player.score}</p>
      ))}
    </div>
  );
};

export default ListofPlayers;
