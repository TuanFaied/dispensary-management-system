import React, { useState } from 'react';

function Email({ email, onEmailChange }) {
  const [newEmail, setNewEmail] = useState(email);

  const handleEmailChange = () => {
    onEmailChange(newEmail);
  };

  return (
    <div>
      <h2>Email</h2>
      <input
        type="email"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />
      <button onClick={handleEmailChange}>Save</button>
    </div>
  );
}

export default Email;
