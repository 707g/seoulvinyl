import React, { createContext, useContext, useReducer } from "react"

const list = [
  [
    
  ],
]

function proReducer(list, action) {}

const ProStateContext = createContext();

export function ProProvider({children}) {
  const [ state, dispatch ] = useReducer(proReducer, list);
  return(
    <ProStateContext.Provider value={state}>
      {children}
    </ProStateContext.Provider>
  );
}

export function useProState() {
  const context = useContext(ProStateContext);
  if(!context) {
    throw new Error();
  }
  return context;
}