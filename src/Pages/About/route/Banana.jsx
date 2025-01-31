import { useEffect, useState } from "react";

function Banana() {
  const [products, setProducts] = useState("");
  async function product() {
    try {
      const response = await fetch("https://fakestoreapi.com/products/1");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    product();
  }, []);
  return (
    <div>
      <button onClick={product}>Click</button>
      {products && <img src={products.image}></img>}
    </div>
  );
}

export default Banana;
