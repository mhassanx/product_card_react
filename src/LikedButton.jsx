import { useState } from "react";

export default function LikedButton() {
  let [clickMe, setClickMe] = useState(false);

  let toggle = () => {
    setClickMe(!clickMe);
  };

  let styles = { color: "red" };
  return (
    <>
      <h3>toggle it</h3>

      <i onClick={toggle}>
        {!clickMe ? <h4 style={styles}>Click me</h4> : <h4>UnClick me</h4>}
      </i>
    </>
  );
}
