import React from 'react'
import State from "../src/components/State"
import Reducer from "./components/Reducer"
import Effect from './components/Effect'
import "../src/App.css"
import Ref from './components/Ref'
import LayoutEffect from './components/LayoutEffect'
import UseImperative from './components/UseImperative'
import Context from './components/Context'

const App = () => {
  return (
    <div className='App'>
    {/* <State/>  -Used to change the state of the single variable */}
    {/* <Reducer/>-Used to manage multiple state of a component */}
    {/* <Effect/> -Used to run an function when an component  is mounted eg..API CALL */}
    {/* <Ref/>    -Used to access the dom elements*/}
    {/* <LayoutEffect/> -Used to run an function before  Elements are printed into screen similar to UseEffect */}
    {/* <UseImperative/>-  */}
    <Context/>
    </div>
  )
}

export default App