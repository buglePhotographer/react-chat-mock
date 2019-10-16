import React from 'react';
import moment from 'moment';
import './Message.css';

export default function Message(props) {
  const data = props.data;

  console.log(props.data);
  console.log(data);

  const friendlyTimestamp = moment(data.timestamp).calendar();
  return (
    <div>
      <div>
        {friendlyTimestamp}
      </div>
      <div>{data.author} dice:</div>
      <div>
        <div title={friendlyTimestamp}>
          {data.message}
        </div>
      </div>
    </div>
  );
}