/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const NewContext = createContext();

const themes = {
  Light: {
    color: "black",
    background: "white",
  },
  Dark: {
    color: "white",
    background: "black",
  },
};
export function DataContext({ children }) {
  const [state, setState] = useState([]);
  const [theme, setTheme] = useState(themes.Light);
  const toggleTheme = () => {
    theme === themes.Light ? setTheme(themes.Dark) : setTheme(themes.Light);
  };
  async function fetchData() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log("alu:", data);
      setState(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <NewContext.Provider value={{ state, setState, theme, toggleTheme }}>
      {children}
    </NewContext.Provider>
  );
}
