import Button from "mainApp/Button";
import "./emailApp.css"; // Import external CSS

function EmailApp() {
  const emails = [
    { id: 1, subject: "Hello", content: "This is a test email." },
    { id: 2, subject: "Reminder", content: "Don't forget the meeting." },
  ];

  return (
    <div className="email-container">
      <h2>Email Application</h2>
      <ul className="email-list">
        {emails.map((email) => (
          <li key={email.id}>
            <span className="email-subject">{email.subject}</span>
            <p>{email.content}</p>
            <Button onClick={() => alert(`Email ID: ${email.id}`)}>
              View Details
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmailApp;
