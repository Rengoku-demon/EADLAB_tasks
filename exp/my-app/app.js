import React from 'react';
import PasswordStrengthChecker from './components1/PasswordStrengthChecker';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <PasswordStrengthChecker />
      </header>
    </div>
  );
}

export default App;

//app.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
