import React, { useContext } from "react";
import { InputValueContext } from "../context/InputValueContext";

function PrintCount() {
  const { state, dispatch } = useContext(InputValueContext);

  const incrementHandler = () => {
    dispatch({ type: "SET_COUNT_100" ,payload:state.initialValue});
  };
  return (
    <div>
      <p>Print Count:{state.initialValue}</p>
      <button onClick={incrementHandler}>Count up to 100:</button>
    </div>
  );
}

export default PrintCount;
