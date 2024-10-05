import React, { useEffect, useState } from 'react'


import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

export default function Layout() {

const [counter, setcounter] = useState(0);
useEffect(() => {}, [])


  return (
   <><Navbar />
   <Outlet></Outlet>

   <Footer/>
   </>
  )
}
