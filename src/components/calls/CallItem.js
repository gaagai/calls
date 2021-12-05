import React from 'react';

const CallItem = (props) => {
  const call = props.call;
  return (
    <select value={call.callerId} onChange={props.handleChange}>
      {/* <option value={call.date} /> */}
    </select>
  );
};

export default CallItem;
