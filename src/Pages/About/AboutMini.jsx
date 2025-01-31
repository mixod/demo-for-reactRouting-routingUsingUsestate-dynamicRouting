/* eslint-disable react/prop-types */
import Apple from "./route/Apple";
import Banana from "./route/Banana";

function AboutMini({ content }) {
  switch (content) {
    case "apple":
      return <Apple />;
    case "banana":
      return <Banana />;
  }
}

export default AboutMini;
