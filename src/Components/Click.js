import React, { useState } from "react";
const Click = () => {
  const [count, setcount] = useState(0);
  const change = () => {
    setcount(count + 1);
  };
  return (
    <div>
      <div>{count}</div>
      <button onClick={change}>Update</button>
    </div>
  );
};
export default Click;
