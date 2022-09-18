import React, { useEffect, useRef } from 'react'
import { useLayoutEffect } from 'react'

const LayoutEffect = () => {
    const inputRef=useRef(null)

    useLayoutEffect(()=>{
        console.log("Layout Effect")
        inputRef.current.value="RAja"

    })

    useEffect(() => {
        console.log("useEffect")
        inputRef.current.value="Hacke"
    }, []);

  return (
    <div>
        <h1>HEllo</h1>
        <input type="text" value="Empire" ref={inputRef} /></div>
  )
}

export default LayoutEffect