import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// starting state
const startingState = {
  transactions: [
    {id: 1, text: 'Phone Bill', amount: -90},
    {id: 2, text: 'Freelancer', amount: 125},
    {id: 3, text: 'Toll Plaza', amount: -10},
    {id: 4, text: 'Ebay Phone Sale', amount: 225}
  ],
};

// context
export const GlobalContext = createContext(startingState);

// provider

export const GlobalProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, startingState);
  return (
    <GlobalContext.Provider value={{transactions: state.transactions}}>
      {props.children}
    </GlobalContext.Provider>
  );
}