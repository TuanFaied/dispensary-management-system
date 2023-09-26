import React, { useState } from 'react';

function Password({ password, onPasswordChange }) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleChangePassword = () => {
    // Send currentPassword and newPassword to your backend for validation and update.
    onPasswordChange(newPassword);
    setCurrentPassword('');
    setNewPassword('');
  };

  return (
    <div>
      <h2>Password</h2>
      <input
        type="password"
        placeholder="Current Password"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={handleChangePassword}>Change Password</button>
    </div>
  );
}

export default Password;
