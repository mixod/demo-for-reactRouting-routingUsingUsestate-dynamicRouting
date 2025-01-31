import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Description() {
  const params = useParams();
  const [state, setState] = useState(" ");
  async function singleFetch() {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/" + params.desc
      );
      const data = await response.json();
      console.log(data);
      setState(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    singleFetch();
  }, []);

  if (isNaN(params.desc)) {
    alert("it is not a numner");
  }

  return (
    <div>
      <div>{state && <img src={state.image}></img>}</div>
    </div>
  );
}

export default Description;
