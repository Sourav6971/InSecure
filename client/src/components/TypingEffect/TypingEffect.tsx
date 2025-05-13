import { useState, useEffect } from "react";
import "./TypingEffect.css";

const keywords = ["Secured.", "Trusted.", "Effortless."];

const TypingEffect = () => {
  const [index, setIndex] = useState(0);
  const [displayedKeyword, setDisplayedKeyword] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = keywords[index];
    let timeout;

    if (!isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedKeyword(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex === currentWord.length) {
          setIsDeleting(true);
        }
      }, 150);
    } else {
      timeout = setTimeout(() => {
        setDisplayedKeyword(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setIndex((index + 1) % keywords.length);
        }
      }, 80);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <div className="typing-container">
      <p>
        We handle the risk, you keep the control&nbsp;
        <span className="keyword">{displayedKeyword}</span>
        <span>|</span>
      </p>
    </div>
  );
};

export default TypingEffect;
