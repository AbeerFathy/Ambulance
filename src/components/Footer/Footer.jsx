import React, { useEffect, useState } from 'react'

import Ambulance from '../../assets/images/ambulance.png'
export default function Footer() {

const [counter, setcounter] = useState(0);
useEffect(() => {}, [])


  return (
    <footer className=" text-light py-5 d-flex footer justify-content-center">
          <div className="container   d-flex px-16 ">
      <div className="row    d-flex ">
        {/* Left Section */}
        <div className="col-md-4   ">
          <img
            src={Ambulance}
            alt="Ambulance"
            className=" m-auto  "
            style={{ width: '100px' }}
          />
           <p className=' d-flex justify-content-center color mt-2 ' >Egyptian Ambulance Organization</p>
          <p style={{ fontSize: '14px' }} className=' text-center '>
          هيئة الإسعاف المصرية هي هيئة مستقلة أنشئت بموجب القرار الجمهوري رقم 139 لسنة 2009، وهي تقدم خدمات طبية طارئة وتلعب دورًا حيويًا في إنقاذ أرواح المواطنين والأجانب في مصر، وقد ساهمت هيئة الإسعاف المصرية بشكل كبير في تطوير خدمات الإسعاف
          .الطبية الطارئة
          </p>
          <small className=' text-center d-flex justify-content-center '>© 2024 All rights reserved for the Egyptian Ambulance Organization</small>
        </div>

        {/* Center Section */}
        <div className="col-md-5 text-center    ">
          <h5 >القائمه البريديه</h5>
          <p  className='p-4  mt-3' style={{ fontSize: '14px' }}>شترك في القائمه البريديه ليصلك كل التحديثات الخاصه بتطورات هيئه الاسعاف المصريه ,قم بكتابه بريدك الالكتروني لتسجيل الاشتراك</p>
          <form className="d-flex justify-content-center ">
            <input
              type="email"
              className="form-control w-75"
              placeholder="قم بكتابه بريدك الالكتروني"
            
              style={{ marginRight: '10px' }}/>
            <button className="btn colorbutton ">اشتراك</button>
          </form>
          <button type="button " class="btn btn-transparent text-white hoverfooter">    <span style={{ fontSize: '14px' }}>انضم الينا وتابع احدث الاخبار</span></button>
          <div>
          <a href="https://facebook.com" className="text-light mr-3">  <i className="fab fa-facebook   "></i> </a>
          <a href="https://youtube.com"> <i className="fab fa-youtube"></i> </a>   
          </div>
      

        </div>

        {/* Right Section */} 
        <div className="col-md-3 ">
          <div className=' d-flex justify-content-end responsivefooter '>
          <button type="button" class="btn btn-warning  mx-3 "> <i class="fa-solid fa-phone"></i> 123 </button>
         
          <h5 className='  d-flex'>للتواصل والدعم</h5>
        
          </div>
       
          <ul className="list-unstyled  text-center     mt-3 ">
          <li className=' text-end'><a href="/" className="text-primary  underline   " style={{ fontSize: '14px' }}>الصفحه الرئيسيه</a></li>
            <li className=' text-end'><a href="/about" className="text-primary  underline   " style={{ fontSize: '14px' }}>عن هيئه الاسعاف المصريه</a></li>
            <li className=' text-end'><a href="/services" className="text-primary  underline " style={{ fontSize: '14px' }}>الخدمات</a></li>
            <li className=' text-end'><a href="/news" className="text-primary  underline " style={{ fontSize: '14px' }}>الاخبار والفعاليات</a></li>
            <li className=' text-end'><a href="/awareness" className="text-primary  underline " style={{ fontSize: '14px' }}>التوعيه العامه</a></li>
            <li className=' text-end'><a href="/donations" className="text-primary  underline " style={{ fontSize: '14px' }}>التبرعات</a></li>
          </ul>
          
        </div>
      </div>
    </div>
  </footer>
  )
}
