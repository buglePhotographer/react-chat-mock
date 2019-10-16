import React, { useEffect, useState } from 'react';
import Message from '../Message';
import moment from 'moment';
//import './MessageList.css';

export default function MessageList(props) {
    const [messages, setMessages] = useState(props.messages);

    const renderedMessages = messages.map((message) =>
        <Message data={message} />
    );

    return (
        <div style={{ position: "absolute", top: 0, marginTop: "5vh" }}>
            {renderedMessages}
        </div>
    );
}