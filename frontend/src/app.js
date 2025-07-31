// frontend/src/App.js
import React, { useState, useRef, useEffect } from 'react'; // Import React and hooks
import axios from 'axios'; // Import Axios for API requests

function App() {
  // State for the input field to add a new user
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef();

  // Add a new user via the API
  const addUser = async () => {
    await axios.post('http://localhost:3000/users', { name }); // Post new user
    setName(''); // Clear input field
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitted(false);
    if (!name) {
      setError('error: name required');
      return;
    }
    setLoading(true);
    timeoutRef.current = setTimeout(async () => {
      setLoading(false);
      await addUser(); // Add the user after loading
      setSubmitted(true);
    }, 500);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div>
      <h1>welcome</h1>
      {/* Input for new user name */}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="enter your name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        {/* Button to add user */}
        <button type="submit">submit</button>
      </form>
      {loading && <div data-testid="loading">Loading...</div>}
      {error && <div>{error}</div>}
      {submitted && <div data-testid="submitted">Submitted!</div>}
    </div>
  );
}

export default App; // Export the component