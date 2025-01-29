function Home() {
  async function handleAllProduct() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSingleProduct() {
    try {
      const action = await fetch("https://fakestoreapi.com/products/1");
      const data = await action.json();
      console.log(data);
    } catch (bug) {
      console.log(bug);
    }
  }

  async function handleLimitProduct() {
    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=5");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function sortProduct() {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products?sort=desc"
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center min-h-screen">
        <div>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            onClick={handleAllProduct}
          >
            All Product
          </button>
        </div>
        <div>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            onClick={handleSingleProduct}
          >
            Single Product
          </button>
        </div>
        <div>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            onClick={handleLimitProduct}
          >
            Limit
          </button>
        </div>
        <div>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            onClick={sortProduct}
          >
            Sort
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
