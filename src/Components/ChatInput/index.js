import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function ChatInput(props) {
  const { setMessages, owner } = props;
  const [message, setMessage] = useState("");

  const handleSetMessages = () => {
    setMessages(m => {
      return [...m, { message: message, author: owner, timestamp: Date.now() }];
    });
    setMessage("");
  };

  return (
    <div style={{ position: "relative", bottom: 0, marginBottom: "5vh" }}>
      <TextField
        style={{marginRight: "1vw"}}
        value={message}
        onChange={e => setMessage(e.target.value)}
        onKeyPress={e => {
          if (e.key === "Enter") {
            handleSetMessages();
          }
        }}
      />
      <Button variant="contained" color="primary" onClick={() => handleSetMessages()}>Send</Button>
    </div>
  );
}
