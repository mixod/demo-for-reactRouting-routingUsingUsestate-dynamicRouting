import { useContext, useState } from "react";
import AboutMain from "./AboutMain";
import AboutMini from "./AboutMini";
import { NewContext } from "../DataContext";

function About() {
  const [content, setContent] = useState("Apple");
  const { state } = useContext(NewContext);
  console.log("StateAbout:", state);
  return (
    <>
      <div>
        {state?.map((item) => (
          <div key={item.id}>
            <div>
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
      <>
        {/* <AboutMain setContent={setContent}></AboutMain>
        <AboutMini content={content} /> */}
      </>
    </>
  );
}

export default About;
