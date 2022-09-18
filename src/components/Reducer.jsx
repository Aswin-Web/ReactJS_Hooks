import React, { useReducer} from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, data: state.data + 1 };
      
    case "CHANGECOLOR":
      return { ...state, text: !state.text };

    default:
      break;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, { data: 0, text: true });

  const HandleClick = () => {
    dispatch({ type: "INCREMENT" });
    dispatch({ type: "CHANGECOLOR" });
  };
  return (
    <div>
      <h1>{state.data}</h1>
      <button onClick={HandleClick}>+</button>
      {state.text ? <p>black</p> : <p>White </p>}
    </div>
  );
};

export default Reducer;
