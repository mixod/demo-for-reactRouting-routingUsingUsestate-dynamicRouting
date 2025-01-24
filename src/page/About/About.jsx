import { useState } from "react";
import Nothing from "./Nothing";
import Connect from "./Connect";

function About() {
  const [contents, setContents] = useState("Content");
  return (
    <div>
      <Nothing setContents={setContents} />
      <Connect contents={contents} />
    </div>
  );
}

export default About;
