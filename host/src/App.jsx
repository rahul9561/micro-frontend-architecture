import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import ChatApp from 'chatApp/ChatApp'; 
import EmailApp from 'emailApp/EmailApp'; 
import "./App.css"; 


const App = () => (
  <Router>
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/chat">Chat</Link> | 
      <Link to="/email">Email</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<ChatApp />} />
      <Route path="/email" element={<EmailApp />} />
    </Routes>
  </Router>
);

export default App;
