import React from "react";
import moment from "moment";
import "./Message.css";

export default function Message(props) {
  const data = props.data;

  const timestamp = moment(data.timestamp).calendar();
  return (
    <div>
      <div>
        {timestamp} {data.author} says:
      </div>
      <div>
        <div>{data.message}</div>
      </div>
    </div>
  );
}
