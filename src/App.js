import React from 'react'
import Back from './Component/Back'
import Front from './Component/Front'

// import { CgProfile } from "react-icons/cg";


const App = () => {

  return (
    <>
      <div className='relative w-full h-screen bg-zinc-700'>
        <Back/>
        <Front/>
      </div>
    </>
  )
}

export default App