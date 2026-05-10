import React from 'react';
import { useState } from 'react';

// list of facts about me
const personalFacts = [
  "I have run a full marathon",
  "I love traveling, exploring new places, and trying new flavors",
  "I am a triathlete",
  ];

const FactGenerator = () => {
    const [currentFact, setCurrentFact] = useState('');

    const generateRandomFact = () => {
        if (personalFacts.length > 0) {
            const randomIndex = Math.floor(Math.random() * personalFacts.length);
            setCurrentFact(personalFacts[randomIndex]);
        }
    };

    return (
        <div className="fun-fact-generator">
            <h2>🎲 Discover Something About Me 🎲</h2>
            
            <button 
                className="fact-button" 
            >   
                Show Me A Fun Fact!
            </button>
            
        </div>
    )
}

export default FactGenerator;
