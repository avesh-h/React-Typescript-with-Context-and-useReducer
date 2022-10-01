import { createContext, useReducer } from "react";
import { JsxElement } from "typescript";

type AppState = typeof initialState;

type Action = { type: string; payload: number };

const initialState = {
  initialValue: 0,
};

interface InputProviderProps {
  children: React.ReactNode;
}

const reducer = (currState: AppState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_COUNT_INITIAL":
      return {
        ...currState,
        initialValue: payload,
      };
    case "SET_COUNT_100":
      return {
        ...currState,
        initialValue: 100,
      };
    default:
      return currState;
  }
};

const InputValueContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

const InputValueProvider = ({ children }: InputProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <InputValueContext.Provider value={{ state, dispatch }}>
      {children}
    </InputValueContext.Provider>
  );
};

export { InputValueProvider, InputValueContext };
