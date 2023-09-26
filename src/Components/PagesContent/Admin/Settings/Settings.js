import React, { useState } from 'react';
import ProfilePhoto from './ProfilePhoto';
import Username from './Username';
import Email from './Email';
import Password from './Password';

function Settings() {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleProfilePhotoChange = (newPhoto) => {
    setProfilePhoto(newPhoto);
  };

  const handleUsernameChange = (newUsername) => {
    setUsername(newUsername);
  };

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
  };
  return (
    <div>
      <h1>Settings</h1>
      <ProfilePhoto
        profilePhoto={profilePhoto}
        onProfilePhotoChange={handleProfilePhotoChange}
      />
      <Username username={username} onUsernameChange={handleUsernameChange} />
      <Email email={email} onEmailChange={handleEmailChange} />
      <Password password={password} onPasswordChange={handlePasswordChange} />
      <button >Save Changes</button>
    </div>
  )
}

export default Settings