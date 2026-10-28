import { useState } from "react";

export default function LikedButton() {
  let [clickMe, setClickMe] = useState(false);

  let toggle = () => {
    setClickMe(!clickMe);
  };
  return (
    <>
      <h3>toggle it</h3>

      <i onClick={toggle}>
        {!clickMe ? <h6>Unclick Me</h6> : <h6>Click me</h6>}
      </i>
    </>
  );
}
