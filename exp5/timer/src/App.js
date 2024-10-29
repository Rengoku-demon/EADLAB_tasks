import React from 'react';
import Timer from './Timer'; // Import the Timer component
import './App.css'; // Keep your styles for the rest of the app

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Timer</h1>
        <Timer /> {/* Use the Timer component here */}
      </header>
    </div>
  );
}

export default App;
