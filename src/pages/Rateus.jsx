import React, { useState } from "react";
import ContactDetails from "../components/ContactPage/ContactDetails";
import Footer from "../components/common/Footer";
import ReviewSlider from "../components/common/ReviewSlider";
import { motion } from 'framer-motion';

function RateUsComponent({ previousContent }) {
  const [errorRating, setErrorRating] = useState(false);
  const [errorFeedback, setErrorFeedback] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseOver = (index) => {
    setHoverRating(index);
  };

  const handleMouseOut = () => {
    setHoverRating(0);
  };

  const handleClick = (index) => {
    setRating(index);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = () => {
    setErrorRating(false);
    setErrorFeedback(false);
    if (!rating) {
      setErrorRating(true);
    }
    if (!feedback) {
      setErrorFeedback(true);
    } else if (feedback && rating) {
      setRating(0);
      setFeedback("");
      alert("Thank you for the feedback!");
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between w-11/12 mx-auto max-w-6xl py-16 lg:py-24 bg-richblack-900 rounded-lg shadow-lg">
        <div className="lg:w-3/5 p-8 bg-richblack-800 border border-richblack-600 rounded-lg shadow-md transition-all duration-300 hover:border-richblack-300 hover:shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-richblack-5 mb-4">We Value Your Feedback!</h2>
          <p className="text-center text-richblack-300 mb-6">Please take a moment to rate your experience with our service. Your feedback helps us improve and provide you with the best service possible.</p>
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, index) => {
              const starIndex = index + 1;
              return (
                <span
                  key={starIndex}
                  className={`text-3xl cursor-pointer transition-colors duration-300 ${starIndex <= (hoverRating || rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  onMouseOver={() => handleMouseOver(starIndex)}
                  onMouseOut={handleMouseOut}
                  onClick={() => handleClick(starIndex)}
                >
                  &#9733;
                </span>
              );
            })}
          </div>
          {errorRating && (
            <span className="text-xs text-yellow-100 mb-4 block text-center">
              *Please enter a rating.
            </span>
          )}
          <motion.textarea
            className="w-full h-40 p-3 bg-richblack-700 text-richblack-5 placeholder:text-richblack-400 border border-richblack-600 rounded-md shadow-sm focus:outline-none focus:border-yellow-300 focus:ring-1 focus:ring-yellow-300 transition-all duration-200"
            placeholder="Enter feedback here"
            value={feedback}
            onChange={handleFeedbackChange}
            initial={{ borderColor: '#6f81a5' }}
            whileFocus={{ borderColor: '#0a53e4', boxShadow: '0 0 0 2px #0a53e4' }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          />
          {errorFeedback && (
            <label className="text-xs text-yellow-100 mt-2 block text-center">
              *Please enter feedback.
            </label>
          )}
          <div className="mt-8">
            <button
              className="w-full py-3 bg-yellow-50 text-black font-semibold text-lg rounded-md shadow-md transition-transform duration-200 hover:scale-95 hover:shadow-none"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="lg:w-2/5 mt-8 lg:mt-0">
          <ContactDetails />
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center w-11/12 mx-auto my-16 max-w-6xl bg-richblack-900 rounded-lg shadow-lg py-12">
        <h1 className="text-4xl font-semibold text-center text-richblack-5 mb-6">Happy & Satisfied Learners!</h1>
        <ReviewSlider />
      </div>
      <Footer />
    </>
  );
}

export default RateUsComponent;
