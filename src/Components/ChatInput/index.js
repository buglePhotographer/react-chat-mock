import React, { useState } from "react";

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
    <div style={{ position: "absolute", bottom: 0, marginBottom: "5vh" }}>
      <input
        type="text"
        value={message}
        onChange={e => setMessage(e.target.value)}
        onKeyPress={e => {
          if (e.key === "Enter") {
            handleSetMessages();
          }
        }}
      />
      <input type="button" onClick={() => handleSetMessages()} value="send" />
    </div>
  );
}
