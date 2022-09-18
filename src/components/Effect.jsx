import React, { useEffect, useState } from "react";
import axios from "axios";
const Effect = () => {
  const [dat, setday] = useState(0);
  const a = [];
  useEffect(() => {
    console.log("render")
    axios.get("https://jsonplaceholder.typicode.com/comments").then((r) => {
      a.push(r.data)
      console.log("page Render");
    });
  },[]); //When it is Empty it calls only oncee at time of initialization because the data to render is not specified
        //When it has value eg..[dat] it runs everytime the the state of the or value changes in [dat]
        // When it is not present it runs when an render occurs

  return (
    <div>
      <h1>{dat}</h1>
      <button onClick={() => [setday(dat + 1)]}>click</button>
    </div>
  );
};

export default Effect;
