import React, { useState,createContext} from 'react'
import FIrst from '../subcomponents/FIrst'
import Second from '../subcomponents/Second'

export const AppContext=createContext(null)

const Context = () => {
    const [data,setdata]=useState("")
  return (
    <AppContext.Provider value={{data,setdata}}> 

    <FIrst/>
    <Second />

    </AppContext.Provider>
  )
}

export default Context