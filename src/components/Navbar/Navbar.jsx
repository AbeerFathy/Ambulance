import React, { useContext, useEffect, useState } from 'react'
import logo from '../../assets/images/ambulance.png'
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';


import { FaCommentAlt } from "react-icons/fa";
import { FaUserPlus, FaSignInAlt, FaGlobe, FaClock ,FaSearch} from "react-icons/fa";


export default function Navbar() {
  
let navigate=useNavigate()
const [counter, setcounter] = useState(0);
useEffect(() => {}, [])

function logout() {
localStorage.removeItem ("usertoken");

navigate("/Login")
  
}
const trackRequest = () => {
  alert("سيتم تتبع طلبك.");
};

  return (
  <>

<nav className="navbar d-flex justify-content-around top-0 right-0 left-0 ">
      <div className="left-section">
        <div className="button-group">
          <div className="button-item">
         
            <span className=' underline font-bold'>مستخدم جديد</span>
          </div>
          <div className="button-item   radiousicon  d-flex justify-content-center align-items-center  ">
            
            <FaSignInAlt className="icon text-white fs-xl  " />
         
          </div>
          <div className="button-item radiousicon  d-flex justify-content-center  align-items-center ">
            <FaGlobe className="icon text-white fs-xl  " />
          </div>

          <button  className="track-request ">
            <span className='px-1'>تتبع طلب</span>
            <FaClock className="icon text-white fs-xl " />
          </button>

          <div className="inquiries-button">
            <FaCommentAlt className="icon text-white fs-xl" />
            <span>للإستفسارات والشكاوى</span>
          </div>
          <input type="text" placeholder="بحث" className="search-bar" />
          
        </div>
        <div className=' d-flex  w-50  pt-8 justify-content-between iconnav '>
       <div className=' px-4 '> 
     
       <Link to={"/About"}> <i class="fa-solid fa-bars"></i></Link>
       </div>
        <div className="button-item px-4 ">
      <Link to={"/"}> <h1 className=' px-2 font-bold underline'>الصفحه الرئيسيه</h1></Link> 
          <i class="fa-solid fa-house"></i>
        </div>
        </div>
      </div>

      

      <div className="right-section d-flex responsive ">
        
         
          <div className=' px-3 font-bold '> 
             <span className=' d-flex justify-content-end  text-3xl'>هيئة الإسعاف المصرية</span>
          <p className=' d-flex justify-content-center' >Egyptian Ambulance Organization</p></div>
          <img src={logo} alt="Egyptian Ambulance Organization" className="logo-img " />
    
      
     
      </div>
    </nav>




     

     

  












</>




  )
}
