import "./Profile.css";
import { useState } from "react";

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleChange = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <div className="animation">
        <img src="lock-video.gif" alt="Lock animation" />
      </div>
      <div className="auth">
        <div>
          <p onClick={handleChange}>
            {!isLoggedIn
              ? "Don't have an account? Signup here"
              : "Already have an account? Login here."}
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile;
