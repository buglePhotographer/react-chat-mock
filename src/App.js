import React from 'react';
import logo from './logo.svg';
import './App.css';
import MessageList from './Components/MessageList';

export default function App() {
  // let data = {
  //   author: 'Gus',
  //   timestamp: Date.now(),
  //   message: 'Hola'
  // };
  // return (
  //   <div className="App">
  //     <Message data={data} />
  //   </div>
  // );
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
      <MessageList messages={messages} />
    </div>
  );
}

