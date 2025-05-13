import { useNavigate } from "react-router-dom";
import TypingEffect from "../TypingEffect/TypingEffect";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="top">
        <div className="prop">
          <img src="lock.png" className="lock" />
          <img src="password.png" className="password" />
        </div>
        <div>
          <TypingEffect />
        </div>
      </div>
      <div className="top" id="small">
        <img src="lock.png" className="lock" />
        <img src="password.png" className="password" />
        <div>
          <TypingEffect />
        </div>
      </div>
      <div className="get-started">
        <button
          onClick={() => {
            navigate("/Docs");
          }}
        >
          Get Started
        </button>
      </div>
    </>
  );
};

export default Hero;
