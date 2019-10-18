import React, { useState } from "react";
import MessageList from "../MessageList";
import ChatInput from "../ChatInput";

export default function Chat() {
  const [messages, setMessages] = useState([]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          height: "100vh"
        }}
      >
        <div>
          <MessageList messages={messages} owner="Laura" />
          <ChatInput owner="Laura" setMessages={setMessages} />
        </div>
        <div>
          <MessageList messages={messages} owner="Bob" />
          <ChatInput owner="Bob" setMessages={setMessages} />
        </div>
      </div>
    </div>
  );
}
