import { useContext } from "react";

import { NewContext } from "../DataContext";

function About() {
  const { state, theme, toggleTheme } = useContext(NewContext);
  console.log("StateAbout:", state);
  return (
    <div
      style={{
        color: theme.color,
        background: theme.background,
        height: "100%",
        width: "100%",
      }}
    >
      <button onClick={toggleTheme}>Theme Toggle</button>
      {/* <AboutMain setContent={setContent}></AboutMain>
      <AboutMini content={content} /> */}
      <div>
        <div>
          {state.map((item) => (
            <div key={item.id}>
              <div>
                <img src={item.image} alt={item.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
