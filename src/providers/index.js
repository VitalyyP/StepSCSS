import React, { useReducer, createContext } from "react";

const AppContext = createContext();

let reducer = (state, { type, payload }) => {
  switch (type) {
    case "incrementRate":
      return { ...state, rate: state.rate + 1 };
    case "decrementRate":
      return { ...state, rate: state.rate - 1 };
    case "incrementStep":
      return { ...state, step: state.step + 1 };
    case "resetStep":
      return { ...state, step: 0 };
    case "setText":
      const { name, value } = payload;
      return { ...state, [name]: value };
    case "setChecked":
      const { name1, isChecked1 } = payload;
      return { ...state, [name1]: isChecked1 };
    case "setMember":
      return {
        ...state,
        members: [...payload],
      };
    case "setCategory":
      return {
        ...state,
        votes: [...payload],
      };
    case "setConfirmNextStage":
      return {
        ...state,
        nextStage: [...payload],
      };
    case "setRate":
      return {
        ...state,
        categoriesOfRate: [...payload],
      };
    case "setOption":
      return {
        ...state,
        ...payload,
      };

    default:
      throw new Error(`Unsuported action type ${type}`);
  }
};

const initialState = {
  step: 1,
  rate: 1,
  votes: [
    { id: "1", category: "All votes", isChecked: false },
    { id: "2", category: "Majority", isChecked: false },
    { id: "3", category: "Veto", isChecked: false },
  ],
  members: [
    { id: "1", name: "Kathryn Murphy", veto: false },
    { id: "2", name: "Darrell Steward", veto: false },
    { id: "3", name: "Darlene Robertson", veto: false },
  ],
  categoriesOfRate: [
    { id: "1", name: "Team Player", rate: 0 },
    { id: "2", name: "Professional Skills", rate: 0 },
    { id: "3", name: "Parameter#3", rate: 0 },
  ],
  nextStage: [
    { id: "1", category: "Confirm next stage", isChecked: false },
    { id: "2", category: "Not suitable for the next stage", isChecked: false },
  ],
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
