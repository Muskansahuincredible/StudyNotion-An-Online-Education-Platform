import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsVisible(currentScrollY > 350); 
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <Wrapper onClick={goToTop}>
          <FaArrowUp className="top-btn--icon" />
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: white;
  background-color: #21253E;
  width: 47px;
  height: 47px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    background-color: #111637;
    box-shadow: 0 0 15px 5px rgba(0, 255, 255, 0.7);
  }
`;

export default GoToTop;
