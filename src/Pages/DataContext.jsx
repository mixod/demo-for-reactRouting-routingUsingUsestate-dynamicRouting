/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const NewContext = createContext();

export function DataContext({ children }) {
  const [state, setState] = useState([]);

  async function fetch() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setState(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetch();
  }, []);
  return (
    <NewContext.Provider value={{ state, setState }}>
      {children}
    </NewContext.Provider>
  );
}
