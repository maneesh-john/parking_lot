import React, { createContext, Dispatch, Reducer, useReducer } from "react";

import { initState, reducer } from "./appReducer"; 
import { Context, State } from "../types/context";

export const AppContext = createContext<Context>({ state: initState, dispatch: (a: any) => {} });

const AppProvider:React.FC = ({ children }) => {

  const [state, dispatch] = useReducer<Reducer<State, Dispatch<any>>>(reducer, initState);
  
  return(
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;