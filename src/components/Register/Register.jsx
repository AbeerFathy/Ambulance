import axios from 'axios';
import { Formik, useFormik } from 'formik';
import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { NavLink,Link } from 'react-router-dom'

import * as yup from 'yup'
import { Usercontext } from '../Context/Usercontext';


export default function Register() {
  let { Userlogin,setUserlogin}=useContext(Usercontext)
  let navigate=useNavigate();
  const [apierror,setapierror]=useState('');
const [isloading,setisloading]=useState(false);
   async function handregister( formvalue){
    setisloading(true)
    axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',formvalue)
    .then((res)=>
  
      {
setisloading(false);
console.log(res);
if(res.data.message=="success"){
  localStorage.setItem("usertoken",res.data.token),
  setUserlogin(res.data.token)
  navigate("/")}

      }
  
  )
  .catch((res) =>{
    setisloading(false);
    setapierror(res.response.data.message);}
  )
  
  }

  let valdationschema=yup.object().shape(
    {
name:yup.string().min(3,'Name Men Length Is 3').max(10,'Name Max Length Is 10').required('Name Is Required'),
email:yup.string().email('"Invalid email format," "Missing @ symbol.com"').required('Email Is Required'),
phone: yup.string().matches(/^01[0-2,5]{1}[0-9]{8}$/,'Numper must Be Vailed Egyptian Numper').required('Phone Is Required'),
password:yup.string().matches(/^[A-Za-z0-9]{6,10}$/,'must be Start with a letter  uppercase. Be between 8 and 9 characters in total.Can only contain letters (A-Z or a-z) and numbers (0-9)')

.required('Password Is Required'),
rePassword:yup.string().oneOf([yup.ref('password','Password And Re-password Must Be Tha Same')]).required('Re-Password Is Required'),

    }
  )
  let formik =useFormik({
  initialValues:{
      name:'',
      email:'',
      password:'',
      rePassword:'',
      Phone:''
 },
 validationSchema:valdationschema,
onSubmit:handregister,


})
  
  return (
    <>
   {apierror ?  <div className=' w-1\2  bg-red-600  font-bold  text-white rounded-lg p-3'>
      {apierror}
    </div> :null}
<div className='w-full py-12 px-24 '>

  <h1 className=' text-3xl font-bold text-green-700 py-8'> Register</h1>
 
<form onSubmit={formik.handleSubmit}>

<div className="relative  mb-3  group">
            <label htmlFor="name" className="block  mb-2 text-sm font-medium text-green-700 dark:text-white">  Name:</label>
            <input type="text"  name="name" id="name"   value={formik.values.name}  onChange={formik.handleChange} onBlur={formik.handleBlur} className="bg-gray-50 border border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 block w-full p-2.5 dark:bg-gray-700 dark:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-700 dark:focus:border-green-700"   required />
        </div>
        {formik.errors.name && formik.touched.name  ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
 {formik.errors.name}
</div>:null
        }
    
        <div className="relative  mb-3   group">
            <label htmlFor="email" className="block  mb-2 text-sm font-medium text-green-700 dark:text-white"> Email:</label>
            <input type="email"  name="email" id="email"   value={formik.values.email}  onChange={formik.handleChange} onBlur={formik.handleBlur} className="bg-gray-50 border border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 block w-full p-2.5 dark:bg-gray-700 dark:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-700 dark:focus:border-green-700"  required />
        </div>
        {formik.errors.email && formik.touched.email ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
 {formik.errors.email}
</div>:null
        }
        <div className="relative  mb-3   group">
            <label htmlFor="password" className="block  mb-2 text-sm font-medium text-green-700 dark:text-white"> password:</label>
            <input type="password"  name="password" id="password"   value={formik.values.password}  onChange={formik.handleChange} onBlur={formik.handleBlur} className="bg-gray-50 border border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 block w-full p-2.5 dark:bg-gray-700 dark:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-700 dark:focus:border-green-700"  required />
        </div>
        {formik.errors.password && formik.touched.password ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
 {formik.errors.password}
</div>:null
        }
        <div className="relative  mb-3   group">
            <label htmlFor="rePassword" className="block  mb-2 text-sm font-medium text-green-700 dark:text-white"> Re-Password:</label>
            <input type="Password"  name="rePassword" id="rePassword"   value={formik.values.rePassword}  onChange={formik.handleChange} onBlur={formik.handleBlur} className="bg-gray-50 border border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 block w-full p-2.5 dark:bg-gray-700 dark:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-700 dark:focus:border-green-700"  required />
        </div>
        {formik.errors.rePassword && formik.touched.rePassword ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
 {formik.errors.rePassword}
</div>:null
        }
        <div className="relative  mb-3   group">
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-green-700 dark:text-white">phoneNumber:</label>
            <input type="tel" name="phone"  id="phone" value={formik.values.phone}  onChange={formik.handleChange} onBlur={formik.handleBlur} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""  required />
   
        </div>
        {formik.errors.phone ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
 {formik.errors.phone}
</div>:null}
 <div className='flex  justify-content-between gap-4  mt-4'>
 <button type="submit" className="  text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-700   dark:hover:bg-green-700 dark:focus:ring-green-800"> {isloading?<i className=' fas fa-spinner fa-spin'></i>:'Register'}
 </button>
<span>  do you have an account ?   <Link to={"/Login"}> <span className='text-gray-900'> Login Now </span> </Link></span> 
 </div>
  
</form>
</div>


   </>
  )
}

