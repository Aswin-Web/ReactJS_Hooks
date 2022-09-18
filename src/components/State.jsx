import React, { useState } from "react";

const State = () => {
  const [value, setValue] = useState(0);
  const [data,setdata]=useState("")

  const handleClick = (control) => {
    if (control === "INC") {
      setValue(value + 1);
    } else if (control === "DEC") {
      setValue(value - 1);
    }
  };
  const hanndleChange=(event)=>{
    console.log(event)
    setdata(event.target.value)

  }

  return (
    <>
      <h1>{value}</h1>
      <button
        onClick={() => {
          handleClick("INC");
        }}
      >
        <h3>+</h3>
      </button>
      <button
        onClick={() => {
          handleClick("DEC");
        }}
      >
        <h3>-</h3>
      </button>

      <br />
      <input type="text"  onChange={hanndleChange} />
      <h3>{data}</h3>
    </>
  );
};

export default State;
