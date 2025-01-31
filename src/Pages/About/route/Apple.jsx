import { useState } from "react";

function Apple() {
  const [state, setState] = useState([]);
  async function singleProduct() {
    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=5");
      const data = await response.json();
      console.log(data);
      setState(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <button onClick={singleProduct}>Click</button>

      <div className="grid grid-cols-3">
        {state.map((item) => (
          <div key={item.id}>
            <div>
              <img src={item.image} className="h-80 w-80"></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Apple;
