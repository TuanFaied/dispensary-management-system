import React, { useState } from 'react';

function ProfilePhoto({ profilePhoto, onProfilePhotoChange }) {
  const [newPhoto, setNewPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setNewPhoto(URL.createObjectURL(file));
  };

  return (
    <div>
      <h2>Profile Photo</h2>
      <img src={newPhoto || profilePhoto} alt="Profile" style={{
                width:"150px",
                height:"150px",
                borderRadius:"50%",
                objectFit:"cover"
            }
            }/>
      <input type="file" accept="image/*" onChange={handlePhotoChange} />
      <button onClick={() => onProfilePhotoChange(newPhoto)}>Save</button>
    </div>
  );
}

export default ProfilePhoto;
