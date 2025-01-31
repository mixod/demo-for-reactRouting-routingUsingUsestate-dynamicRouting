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
      <div className="max-w-6xl mx-auto p-30 ">
        {state && (
          <div className="flex flex-col  gap-5 shadow-2xl p-10">
            <div>
              <img
                src={state.image}
                className=" h-60 w-60 shadow-lg hover:shadow-2xl p-10 "
              ></img>
            </div>
            <div>
              <h2 className="font-semibold mb-2  text-2xl">{state.title}</h2>
              <p className="text-green-400 mb-2 ">
                $<spam className="text-black mb-2">{state.price}</spam>
              </p>
              <p className="flex flex-wrap  text-gray-500 text-xl">
                {state.description}
              </p>
            </div>
            <div>{state.rate}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Description;
