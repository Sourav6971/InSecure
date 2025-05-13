import "./Auth.css";
import { useState } from "react";

const Auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="auth">
      <div className="animation">
        <img src="lock-video.gif" alt="Lock animation" />
      </div>
      <div className="auth-section">{isLoggedIn ? "Login" : "Signin"}</div>
    </div>
  );
};

export default Auth;
