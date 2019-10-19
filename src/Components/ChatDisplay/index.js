import React from "react";
import MessageList from "../MessageList";
import ChatInput from "../ChatInput";

export default function ChatDisplay(props) {
  const { owner, messages, setMessages } = props;

  return (
    <div style={{ border: "1px solid black", borderRadius: "4px" }}>
      <div style={{ fontWeight: 'bold' }}>{owner}</div>  
      <MessageList messages={messages} owner={owner} />
      <ChatInput owner={owner} setMessages={setMessages} />
    </div>
  );
}
