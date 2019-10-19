import React, { useState } from "react";
import ChatDisplay from "../ChatDisplay";

export default function Chat() {
  const [messages, setMessages] = useState([]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100vh",
          justifyContent: "space-evenly"
        }}
      >
        {["Laura", "Bob"].map((owner, index) => {
          return (
            <ChatDisplay
              owner={owner}
              messages={messages}
              setMessages={setMessages}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
