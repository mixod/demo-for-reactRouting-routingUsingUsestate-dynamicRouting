import { useState } from "react";

function Home() {
  const [product, setProduct] = useState([]);
  async function handleAllProduct() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <button
        onClick={handleAllProduct}
        className="bg-red-600 hover:bg-red-500 text-white px-6 py-2 rounded-md mb-8 "
      >
        Load Products
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16  p-2">
        {product.map((item) => (
          <div
            key={item.id}
            className=" p-10 rounded shadow-md hover:shadow-gray-600"
          >
            <div>
              <img
                src={item.image}
                alt={item.title}
                className=" w-48 h-48 flex mb-2"
              />
            </div>
            <h2 className="font-semibold mb-2">{item.title}</h2>
            <p className="text-green-400 mb-2">
              $<spam className="text-black mb-2">{item.price}</spam>
            </p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
