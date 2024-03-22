import React, { useState } from 'react';

const Tp = () => {
  // State to store the chat messages
  const [messages, setMessages] = useState([]);

  // Function to add a new message
  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div>
      {/* Render previous messages */}
      <div>
        {console.log(messages)}
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>

      {/* Input field to send new messages */}
      <input
        type="text"
        placeholder="Type your message..."
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addMessage(e.target.value);
            e.target.value = ''; // Clear input field after sending message
          }
        }}
      />
    </div>
  );
};

export default Tp;
