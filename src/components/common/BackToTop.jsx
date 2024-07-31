import React from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const BackToTop = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className="back-to-top show"
      onClick={handleClick}
      aria-label="Back to top"
    >
      <KeyboardArrowUpIcon />
    </button>
  );
};

export default BackToTop;