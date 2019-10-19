import React from "react";
import Message from "../Message";
import { List } from "@material-ui/core";
//import './MessageList.css';

export default function MessageList(props) {
  const { messages, owner } = props;

  const renderedMessages = messages.map((message, index) => (
    <Message data={message} owner={owner} key={index} />
  ));

  return (
    <List component="nav" style={{ height: "80vh", width: "25vw", overflow: "auto", display: "flex", flexDirection: "column" }}>
      {renderedMessages}
    </List>
  );
}
