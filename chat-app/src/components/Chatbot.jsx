import React, { useState } from 'react';

const Chatbot = () => {
  // State to store the user's message
  const [userMessage, setUserMessage] = useState('');
  
  // State to store chatbot's response
  const [botResponse, setBotResponse] = useState('');
  
  // State to store the conversation history (user and bot messages)
  const [conversation, setConversation] = useState([]);
  
  // Function to handle the user's message input
  const handleUserMessage = (event) => {
    setUserMessage(event.target.value);
  };

  // Function to handle form submission (send user message and get bot response)
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Add user's message to conversation history
    setConversation((prevConversation) => [...prevConversation, { user: userMessage }]);
    
    // Simulate chatbot's response (replace this with an API call in the future)
    const botMessage = `Bot: You said "${userMessage}". Let me think...`;
    setConversation((prevConversation) => [...prevConversation, { bot: botMessage }]);
    
    // Clear the user input field after submitting the message
    setUserMessage('');
  };
  
  return (
    <div className="chatbot-container">
      <h2>Chatbot</h2>
      <div className="conversation-history">
        {/* Displaying the conversation */}
        {conversation.map((message, index) => (
          <div key={index} className="message">
            {message.user && <p><strong>You:</strong> {message.user}</p>}
            {message.bot && <p><strong>Bot:</strong> {message.bot}</p>}
          </div>
        ))}
      </div>

      {/* Input field for the user to type a message */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userMessage}
          onChange={handleUserMessage}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
