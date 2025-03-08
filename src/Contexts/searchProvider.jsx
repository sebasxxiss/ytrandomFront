import { createContext, useReducer, useState } from "react";

export const searchContext = createContext("");
function reducer(state, action) {
  if (action.type == "setSearch") {
    return { search: action.newSearch, counter: state.counter };
  }
  if (action.type == "reload") {
    return { search: state.search, counter: state.counter + 1 };
  }
  throw Error("Not supported action: " + action.type);
}
export default function SearchProvider({ children }) {
  const [search, setSearch] = useState("");
  const [state, dispatch] = useReducer(reducer, { search: "", counter: 0 });
  return (
    <searchContext.Provider value={{ state, dispatch }}>
      {children}
    </searchContext.Provider>
  );
}
