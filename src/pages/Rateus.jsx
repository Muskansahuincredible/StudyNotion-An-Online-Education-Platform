import React, { useState } from "react";
import "./rateus.css";

function RateUsComponent({ previousContent }) {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleStarClick = (star) => {
    setRating(star);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = () => {
    setRating(0);
    setFeedback("");
    setShowModal(false); 
  };

  return (
    <>
      <div className="rate-us-page">
  <div className="rate-us-container">
    <h2 className="rate-us-heading">Rate Our Website</h2>
    <div className="star-rating">
      {/* Stars go here */}
      {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= rating ? "star filled" : "star"}
                onClick={() => handleStarClick(star)}
              >
                ★
              </span>
            ))}
    </div>
    <textarea
      className="feedback-textarea"
      placeholder="Write your feedback here..."
      value={feedback}
      onChange={handleFeedbackChange}
    ></textarea>
    <div className="submit-container">
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  </div>
</div>

    </>
  );
}

export default RateUsComponent;
