import { useParams } from "react-router-dom";

function Description() {
  const params = useParams();
  if (isNaN(params.desc)) {
    alert("it is not a numner");
  }

  return <div>Description ...</div>;
}

export default Description;
