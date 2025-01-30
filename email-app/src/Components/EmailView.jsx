// EmailView.jsx
import React from 'react';

const EmailView = ({ email }) => (
  <div className="email-view">
    <h3>{email.subject}</h3>
    <p><strong>From:</strong> {email.sender}</p>
    <p><strong>To:</strong> {email.recipient}</p>
    <div className="email-body">
      <p>{email.body}</p>
    </div>
  </div>
);

export default EmailView;
