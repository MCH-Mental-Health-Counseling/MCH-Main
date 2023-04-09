import React from "react";

const ProfileIcon = ({ user, logout }) => {
  return (
    <div className="profile-icon">
      <div className="profile-name">{user.name}</div>
      <button className="logout-button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default ProfileIcon;