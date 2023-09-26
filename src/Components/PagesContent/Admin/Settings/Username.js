import React, { useState } from 'react';

function Username({ username, onUsernameChange }) {
  const [newUsername, setNewUsername] = useState(username);

  const handleUsernameChange = () => {
    onUsernameChange(newUsername);
  };

  return (
    <div>
      <h2>Username</h2>
      <input
        type="text"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <button onClick={handleUsernameChange}>Save</button>
    </div>
  );
}

export default Username;
