import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";

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
  const post = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify({
          name: "jhdgjjd",
        }),
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    post();
  }, []);

  return (
    <div>
      <button
        onClick={handleAllProduct}
        className="bg-red-600 hover:bg-red-500 text-white px-6 py-2 rounded-md mb-8 flex justify-center items-center max-w-6xl mx-auto mt-40 "
      >
        Load Products
      </button>
      aknjsdjkasbd
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16  p-2 max-w-6xl mx-auto">
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
            <NavLink to={"/home/" + item.id} className="hover:font-bold">
              Readmore....
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
