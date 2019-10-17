import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageList from './Components/MessageList';
import ChatInput from './Components/ChatInput';

export default function App() {

  const [messages, setMessages] = useState([]);

  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: 'space-around', height: '100vh' }} >
        <div>
          <MessageList messages={messages} />
          <ChatInput onSetMessages={() => setMessages()} />
        </div>
        <div>
          <MessageList messages={messages} />
          <ChatInput onSetMessages={() => setMessages()} />
        </div>
      </div>
    </div >
  );
}

