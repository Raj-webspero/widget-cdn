import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiMessageCircle, FiX } from 'react-icons/fi'; // Import the icons
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [showChat, setShowChat] = useState(false);
  const chatRef = useRef();


  const toggleChat = () => {
    setShowChat(!showChat);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setShowChat(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Container className="chat-widget">
      <Row>
        <Col xs={12} className={`chat-window ${showChat ? 'active' : ''}`} ref={chatRef}>

          <button className="close-btn" onClick={toggleChat}>
            {showChat ? <FiX /> : <FiMessageCircle />}
          </button>
          <h1>
          component
          </h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
        <button className={`btn btn-primary btn-toggle ${showChat ? 'hide' : ''}`} onClick={toggleChat}>
            {showChat ? <FiX /> : <FiMessageCircle />}
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
