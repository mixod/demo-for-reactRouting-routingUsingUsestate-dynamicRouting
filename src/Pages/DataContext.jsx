/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const newContext = createContext();

export function DataContext({ children }) {
  const [state, setState] = useState();
  return (
    <newContext.Provider value={{ state, setState }}>
      {children}
    </newContext.Provider>
  );
}
