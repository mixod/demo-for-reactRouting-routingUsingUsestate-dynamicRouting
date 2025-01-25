import { useState } from "react";
import AboutMain from "./AboutMain";
import AboutMini from "./AboutMini";

function About() {
  const [content, setContent] = useState("Apple");
  return (
    <>
      <AboutMain setContent={setContent}></AboutMain>
      <AboutMini content={content} />
    </>
  );
}

export default About;
