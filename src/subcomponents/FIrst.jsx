import React, { useContext } from "react";
import { AppContext } from "../components/Context";


const FIrst = () => {
    const {setdata} =useContext(AppContext)
  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setdata(event.target.value);
        }}
      />
    </div>
  );
};

export default FIrst;
