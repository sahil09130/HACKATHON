import React, { useState } from 'react';

const Chatbot = () => {
  const [chatbotOpened, setChatbotOpened] = useState(false);

  const openChatbotInNewTab = () => {
    window.open('http://localhost:8000/', '_blank');
    setChatbotOpened(true);
  };

  return (
    <div>
      {chatbotOpened ? (
        <div>
          Thank you for checking out our bot. You will receive your appointment slot via email shortly.
        </div>
      ) : (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#55ccff',
          width: '200%',
      }}>
          <div style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '20px',
              textAlign: 'center',
          }}>
              Checkout our chatbot
          </div>
          <button
              onClick={openChatbotInNewTab}
              style={{
                  backgroundColor: 'black',
                  color: '#fff',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  border: 'none',
                  outline: 'none',
              }}
          >
              Click here
          </button>
      </div>
      

      )}
    </div>
  );
};

export default Chatbot;

