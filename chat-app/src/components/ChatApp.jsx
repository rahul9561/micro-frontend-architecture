import React, { useState, useCallback } from "react";
import debounce from "lodash.debounce"; // Prevents excessive requests
import Button from "mainApp/Button";
import "./chatApp.css"; // Import external CSS

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Predefined bot responses
  const getBotResponse = (message) => {
    const lowercaseMsg = message.toLowerCase();

    if (lowercaseMsg.includes("hi")) return "Hi there! How can I help you?";
    if (lowercaseMsg.includes("hello")) return "Hi there! How can I help you?";
    if (lowercaseMsg.includes("how are you")) return "I'm just a bot, but I'm doing great!";
    if (lowercaseMsg.includes("your name")) return "I'm ChatBot 🤖!";
    if (lowercaseMsg.includes("bye")) return "Goodbye! Have a nice day!";
    
    return "I'm not sure how to respond to that. Try asking something else!";
  };

  // Simulate bot reply with a delay (debounced)
  const sendMessage = useCallback(
    debounce((message) => {
      if (!message.trim()) return;

      setLoading(true);

      const userMessage = { text: message, type: "user" };
      setMessages((prev) => [...prev, userMessage]);

      // Simulate bot response after 1.5s
      setTimeout(() => {
        const botMessage = { text: getBotResponse(message), type: "bot" };
        setMessages((prev) => [...prev, botMessage]);
        setLoading(false);
      }, 1500);
    }, 500), // Delay 500ms to prevent excessive calls
    []
  );

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  };

  return (
    <div className="chat-container">
      <h2>ChatBot</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.type}-message`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          disabled={loading}
        />
        <Button onClick={handleSend} disabled={loading}>
          {loading ? "Loading..." : "Send"}
        </Button>
      </div>
    </div>
  );
}

export default ChatApp;
