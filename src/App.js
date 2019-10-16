import React from 'react';
import logo from './logo.svg';
import './App.css';
import MessageList from './Components/MessageList';
import ChatInput from './Components/ChatInput';

export default function App() {
  let messages = [
    {
      author: 'Gus',
      timestamp: Date.now(),
      message: 'Hola'
    },
    {
      author: 'Gus',
      timestamp: Date.now(),
      message: 'como estas?'
    },
    {
      author: 'Gus',
      timestamp: Date.now(),
      message: 'bien, vos?'
    },
  ];
  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: 'space-around', height: '100vh' }} >
        <div>
          <MessageList messages={messages} />
          <ChatInput />
        </div>
        <div>
          <MessageList messages={messages} />
          <ChatInput />
        </div>
      </div>
    </div >
  );
}

