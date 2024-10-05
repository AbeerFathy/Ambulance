import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Logout from './components/Logout/Logout'
import Register from './components/Register/Register'
import Request from './components/Request/Request'
import Wishlist from './components/Wishlist/Wishlist'
import First from './components/First/First'

import  About from './components/About/About'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Layout from './components/Layout/Layout'


import Navbar from './components/Navbar/Navbar'
import Notfound from './components/Notfound/Notfound'





let x= createBrowserRouter([

  {path:'',element:<Layout/>,children:[
  {index:true,element:<Home/> },

  {path:' Navbar', element:<Navbar/>},
  {path:'Logout', element:<Logout/>},
  {path:'Request', element: <Request/>},
  {path:'Register', element:<Register/>},
  {path:'Wishlist', element:<Wishlist/>},
  {path:'First', element:<First/>},


  {path:'About', element: <About/>},
  {path:'Footer', element:<Footer/>},
  {path:'*', element:<Notfound/>}
  ]}
  
  ])
  
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
    < RouterProvider router={x}></RouterProvider>

   
    </>
  )
}

export default App
