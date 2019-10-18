import React from "react";
import Message from "../Message";
//import './MessageList.css';

export default function MessageList(props) {
  const { messages, owner } = props;

  const renderedMessages = messages.map((message, index) => (
    <Message data={message} owner={owner} key={index} />
  ));

  return (
    <div style={{ position: "absolute", top: 0, marginTop: "5vh" }}>
      {renderedMessages}
    </div>
  );
}
