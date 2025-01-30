// ComposeEmail.jsx
import React, { useState } from 'react';

const ComposeEmail = ({ onClose, onSend }) => {
  const [subject, setSubject] = useState('');
  const [recipient, setRecipient] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = () => {
    const newEmail = { subject, recipient, body };
    onSend(newEmail); // Send the email data to the parent component (App)
    onClose(); // Close the compose modal
  };

  return (
    <div className="compose-email-modal">
      <h3>Compose New Email</h3>
      <label>Subject:</label>
      <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
      
      <label>Recipient:</label>
      <input type="text" value={recipient} onChange={(e) => setRecipient(e.target.value)} />
      
      <label>Body:</label>
      <textarea value={body} onChange={(e) => setBody(e.target.value)} />

      <button onClick={handleSubmit}>Send</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default ComposeEmail;
