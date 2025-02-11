import { useContext } from "react";
import { NewContext } from "../DataContext";

/* eslint-disable react/prop-types */
function AboutMain({ setContent }) {
  const { state } = useContext(NewContext);
  return (
    <div>
      {state}
      <ul>
        <li onClick={() => setContent("apple")}>Apple</li>
        <li onClick={() => setContent("banana")}>Banana</li>
      </ul>
    </div>
  );
}

export default AboutMain;
