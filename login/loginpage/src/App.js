import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [users, setUsers] = useState([]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    if (isSignUp) {
      if (users.find(user => user.username === username)) {
        setError('Username already exists. Please choose a different username.');
      } else {
        setUsers([...users, { username, password }]);
        alert('Sign-up successful!');
        setIsSignUp(false);
        setUsername('');
        setPassword('');
        setError('');
      }
    } else {
      const user = users.find(user => user.username === username && user.password === password);
      if (user) {
        alert('Login successful!');
        setUsername('');
        setPassword('');
        setError('');
      } else {
        setError('Invalid username or password.');
      }
    }
  };

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    <div className="App">
      <div className="login-container">
        <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input type="text" value={username} onChange={handleUsernameChange} />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
          </div>
          <button type="submit" className="login-button"> {/* Apply login-button class */}
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>
        <div className="toggle-sign-up">
          <span>{isSignUp ? 'Already have an account?' : "Don't have an account?"}</span>
          <button onClick={toggleSignUp} className="login-button"> {/* Apply login-button class */}
            {isSignUp ? 'Login' : 'Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
