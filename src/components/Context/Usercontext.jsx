import React, { createContext, useContext, useState } from 'react'

export  let Usercontext= createContext();
export default  function Usercontextprovider( props) {
    const [Userlogin,setUserlogin]=useState(null)

  return (
 <Usercontext.Provider value={{
  Userlogin,setUserlogin
    
 }}>
  {props.children}

  </Usercontext.Provider>
  )
}
