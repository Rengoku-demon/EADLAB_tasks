import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0); // Timer value in seconds
  const [isActive, setIsActive] = useState(false); // To track if the timer is running
  const timerRef = useRef(null); // To store the timer interval

  // Start the timer
  const startTimer = () => {
    if (!isActive) {
      setIsActive(true);
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000); // Increment time every second
    }
  };

  // Pause the timer
  const pauseTimer = () => {
    setIsActive(false);
    clearInterval(timerRef.current); // Clear the interval
  };

  // Reset the timer
  const resetTimer = () => {
    setIsActive(false);
    clearInterval(timerRef.current); // Stop the timer
    setTime(0); // Reset the time to 0
  };

  // Clean up the interval when the component is unmounted
  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  // Format the time in MM:SS format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.timer}>{formatTime(time)}</h1>
      <div>
        <button onClick={startTimer} style={styles.button}>Start</button>
        <button onClick={pauseTimer} style={styles.button}>Pause</button>
        <button onClick={resetTimer} style={styles.button}>Reset</button>
      </div>
    </div>
  );
};

// Simple inline styles
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  timer: {
    fontSize: '48px',
    marginBottom: '20px',
  },
  button: {
    fontSize: '18px',
    padding: '10px 20px',
    margin: '5px',
    cursor: 'pointer',
  }
};

export default Timer;
