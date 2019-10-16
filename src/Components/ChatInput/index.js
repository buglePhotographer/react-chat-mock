import React from 'react';

export default function ChatInput(props) {
    const {
      data
    } = props;

    console.log(props);
    return (
      <div>
        <input type='text' /><input type='button' value='send' />
      </div>
    );
}