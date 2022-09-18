import React from 'react'
import { useRef } from 'react'

const Ref = () => {
    const inputRef=useRef(null)

    const handleClick=()=>{
        inputRef.current.value=" You Are Hacked"
        inputRef.current.focus()
        console.log(inputRef)
    }
  return (
    <div>
       
    <input type="text" ref={inputRef} />
    <button onClick={handleClick}>Enter </button>


    </div>
  )
}

export default Ref