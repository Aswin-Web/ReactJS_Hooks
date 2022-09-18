import React, { useContext } from 'react'
import { AppContext } from "../components/Context";



const Second = () => {
    const {data} = useContext(AppContext);
  return (
    <div><h1>{data}</h1></div>
  )
}

export default Second