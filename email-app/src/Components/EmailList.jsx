// EmailList.jsx
import React from 'react';

const EmailList = ({ emails, onEmailSelect }) => (
  <div className="email-list">
    {emails.map((email) => (
      <div
        key={email.id}
        className="email-item"
        onClick={() => onEmailSelect(email)} // Trigger view email on click
      >
        <p className="email-subject">{email.subject}</p>
        <p className="email-sender">{email.sender}</p>
      </div>
    ))}
  </div>
);

export default EmailList;
