/* eslint-disable react/prop-types */

import Content from "./route/Content";
import Photo from "./route/Photo";
import Video from "./route/Video";

function Connect({ contents }) {
  switch (contents) {
    case "Content":
      return <Content />;
    case "Photo":
      return <Photo />;
    case "Video":
      return <Video></Video>;
  }
}

export default Connect;
