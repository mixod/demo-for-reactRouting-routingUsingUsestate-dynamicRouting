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
      <div className="max-w-6xl mx-auto ">
        {state && (
          <div className="flex flex-col justify-center items-center gap-5">
            <div>
              <img src={state.image} className="flex h-50 w-50 "></img>
            </div>
            <div>
              <h2 className="font-semibold mb-2">{state.title}</h2>
              <p className="text-green-400 mb-2">
                $<spam className="text-black mb-2">{state.price}</spam>
              </p>
              <p>{state.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Description;
