import React from 'react';
import moment from 'moment';
import './Message.css';

export default function Message(props) {
    const {
      data
    } = props;

    console.log(props);

    const friendlyTimestamp = moment(data.timestamp).format('LLLL');
    return (
      <div className='message'>
        <div>{data.author} dice:</div>
        <div className="bubble-container">
          <div className="bubble" title={friendlyTimestamp}>
            { data.message }
          </div>
        </div>
        <div className="timestamp">
          { friendlyTimestamp }
        </div>
      </div>
    );
}