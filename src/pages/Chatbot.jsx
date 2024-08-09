// src/components/Chatbot.js
import React, { useState, useEffect } from 'react';
import './Rating.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [visible, setVisible] = useState(false);

  const faqData = {
    "What is your return policy?": "Our return policy is 30 days with a receipt.",
    "What are your hours of operation?": "We are open from 9am to 9pm, Monday to Saturday.",
    "Where can I find the courses?": "You can find them all on the landing page of the website.",
    "Where can I find projects to learn?": "You can find them all at the Projects section collectively.",
    "Will this be really beneficial for me?": "Yes, of course, if you are a true learner."
    // Add more FAQs here
     
  };

  useEffect(() => {
    // Add initial message on component mount
    setMessages([{ text: "Hello, How can I help you?", sender: 'bot' }]);
  }, []);

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: 'user' };
      const botResponse = faqData[input.trim()] || "Sorry, I can able to answer for courses, projects & return policy.";

      setMessages([...messages, userMessage, { text: botResponse, sender: 'bot' }]);

      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      
      handleSend();
    }
  };

  return (
    <div>
      <div className="chatbot-icon" onClick={() => setVisible(!visible)}>
        💬
      </div>
      {visible && (
        <div className="chatbot">
          <div className="chatbot-header">
            <h4>FAQ Chatbot</h4>
            <button onClick={() => setVisible(false)}>X</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask a question..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
