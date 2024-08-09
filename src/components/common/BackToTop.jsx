import React, { useState, useEffect } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <button
      id="myBtn"
      className={`back-to-top ${isVisible ? 'show' : ''}`}
      onClick={handleClick}
      aria-label="Back to top"
    >
      <KeyboardArrowUpIcon />
    </button>
  );
};

export default BackToTop;
