
import React, { useState } from 'react';
import './App.css';
import { generateAiContext } from './gemini';

const App = () => {
  const [clickbaitRating, setClickbaitRating] = useState('');

  const checkClickbait = async () => {
    // Implement your clickbait-checking logic here
    // For simplicity, let's assume a basic comparison between title and content
    const title = 'Warnings Unheard, Warnings Unheeded: The story of the 2019 Alaska mid-air collision';
    const content = 'On the 13th of May, 2019, two commercial seaplanes carrying sightseers collided in mid-air near Ketchikan, Alaska, sending both planes plummeting into a fjord from 3,000 feet. The smaller of the two planes disintegrated in the air and fell to earth, killing all five occupants, but in a miraculous feat of flying, the pilot of the other plane managed to recover control at the last possible moment, fighting confusion and shock — and a broken windshield — to bring his DHC-3 Otter to a controlled crash landing. Despite serious injuries and frigid waters, 10 of the 11 people aboard escaped with their lives.';

    const score = await generateAiContext(title, content)
    console.log(score)
    setClickbaitRating(score)
  };

  return (
    <div className="App">
      <h1>Clickbait Checker</h1>
      <button onClick={checkClickbait}>Check Clickbait</button>
      {clickbaitRating !== null && (
        <div>
          <p>Clickbait Rating: {clickbaitRating}%</p>
        </div>
      )}
    </div>
  );
};

export default App;

