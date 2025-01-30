import { useState } from "react";

function Home() {
  const [product, setProduct] = useState([]);
  async function handleAllProduct() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div>
        <button onClick={handleAllProduct}>Load Products</button>
        <ul className="grid grid-cols-3 gap-40 px-50 justify-center item-center">
          {product.map((item) => (
            <li key={item.id}>
              <div>
                <div>
                  <img src={item.image} className="w-40 border-2 p-10 " />
                </div>
                <div>Price: {item.price}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;
