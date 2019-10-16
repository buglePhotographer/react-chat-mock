import React from 'react';

export default function ChatInput(props) {
  const data = props;

  console.log(props);
  return (
    <div style={{ position: "absolute", bottom: 0, marginBottom: "5vh" }}>
      <input type='text' /><input type='button' value='send' />
    </div>
  );
}