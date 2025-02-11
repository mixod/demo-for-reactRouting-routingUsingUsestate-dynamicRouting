import { useContext, useState } from "react";
import AboutMain from "./AboutMain";
import AboutMini from "./AboutMini";
import { NewContext } from "../DataContext";

function About() {
  const [content, setContent] = useState("Apple");
  const { state } = useContext(NewContext);
  return (
    <>
      {state}
      <AboutMain setContent={setContent}></AboutMain>
      <AboutMini content={content} />
    </>
  );
}

export default About;
