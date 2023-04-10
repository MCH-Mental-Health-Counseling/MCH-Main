// Profile component
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const history = useNavigate();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('/api/profile');
        setUser(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  const handleLogout = async () => {
    try {
      await axios.post('/api/logout');
      // Redirects user to home page
      history("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Profile;