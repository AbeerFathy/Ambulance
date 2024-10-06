import React, { useEffect, useState } from 'react'

import image2 from '../../assets/images/2.jpeg'
import image1 from '../../assets/images/1.png'

export default function About() {

const [counter, setcounter] = useState(0);
useEffect(() => {}, [])


  return (
    <div class="container bgAbout text-center textAbout font-bold  About  w-100 ">
    <div class="row g-2   d-flex justify-content-end">
    <div class="col-2  justify-content-center  ">
        <div className=' d-flex justify-content-center'> 
          <div className='px-2'><h3>عن هيئه الاسعاف المصريه</h3></div>
        <div><i class="fa-solid fa-star-of-life"></i></div> </div>
        <img src={image2} alt=" AboutAmbulance2"  className=' w-100  mt-5  border  rounded-1'/>
     <img src={image1} alt=" AboutAmbulance1"  className=' w-100  mt-5 border  rounded-1'/>
     <ul className='flex  flex-col items-center justify-content-around lg:flex-row m-4'>
<li className='flex items-center py-2 '>
  
<a  href="https://facebook.com"> <i className=' fab fa-facebook mx-2 fa-xl text-white'></i></a>  

 <a   href="https://youtube.com"> <i className=' fab fa-youtube mx-2  fa-xl text-white'></i></a> 
</li>
</ul>
      </div>
      <div class="col-3 justify-content-center  ">
        <div className=' d-flex justify-content-center'> 
          <div className='px-2'><h3>التوعيه العامه</h3></div>
        <div><i class="fa-solid fa-star-of-life"></i></div> </div>
     
        <button type="button " class="btn btn-transparent"><h4 className='py-3 mx-4 px-4 font-bold text-white ' >نقل الحالات المرضيه الغير طارئه</h4></button>
        <button type="button " class="btn btn-transparent"><h4 className='py-3 mx-4 px-4 font-bold text-white' >تامين الخدمات المتخصصه</h4></button>
        <button type="button " class="btn btn-transparent"><h4 className='py-3 mx-4 px-4 font-bold text-white' >الاعفاء من رسوم الاسعاف للحالات الغير قادره</h4></button>
        <div className=' d-flex justify-content-center'> 
     <div className='px-2'><h3>انضم الينا</h3></div>
        <div><i class="fa-solid fa-star-of-life"></i></div> </div>
     
        <button type="button " class="btn btn-transparent"><h4 className='py-3 mx-4 px-4 font-bold text-white ' >نقل الحالات المرضيه الغير طارئه</h4></button>
        <button type="button " class="btn btn-transparent"><h4 className='py-3 mx-4 px-4 font-bold text-white' >تامين الخدمات المتخصصه</h4></button>
        <button type="button " class="btn btn-transparent"><h4 className='py-3 mx-4 px-4 font-bold text-white' >الاعفاء من رسوم الاسعاف للحالات الغير قادره</h4></button>
        
      </div>
     <div class="col-3 justify-content-center  ">
        <div className=' d-flex justify-content-center'> 
          <div className='px-2'><h3>الاخبار والفعاليات</h3></div>
        <div><i class="fa-solid fa-star-of-life"></i></div> </div>
     
        <button type="button " class="btn btn-transparent"><h4 className='py-3 mx-4 px-4 font-bold text-white ' >نقل الحالات المرضيه الغير طارئه</h4></button>
        <button type="button " class="btn btn-transparent"><h4 className='py-3 mx-4 px-4 font-bold text-white' >تامين الخدمات المتخصصه</h4></button>
        <button type="button " class="btn btn-transparent"><h4 className='py-3 mx-4 px-4 font-bold text-white' >تشغيل سياره بنظام التعاقد</h4></button>
        <button type="button " class="btn btn-transparent"><h4 className='py-3 mx-4 px-4 font-bold text-white' >طلب مطابقه فنيه لتخصيص سياره اسعاف</h4></button>
        <button type="button " class="btn btn-transparent"><h4 className='py-3 mx-4 px-4 font-bold text-white' >الاعفاء من رسوم الاسعاف للحالات الغير قادره</h4></button>
        
        <button type="button " class="btn btn-transparent"><h4 className='py-3 mx-4 px-4 font-bold text-white' >طلب خدمات الاسعاف النهري</h4></button>
        
      </div>
      <div class="col-4  justify-content-center  ">
        <div className=' d-flex justify-content-center'> 
          <div className='px-2'><h3>الخدمات</h3></div>
        <div><i class="fa-solid fa-star-of-life"></i></div> </div>
     
        <button type="button " class="btn btn-transparent"><h4 className='py-3 mx-4 px-4 font-bold text-white ' >نقل الحالات المرضيه الغير طارئه</h4></button>
        <button type="button " class="btn btn-transparent"><h4 className='py-3 mx-4 px-4 font-bold text-white' >تامين الخدمات المتخصصه</h4></button>
        <button type="button " class="btn btn-transparent"><h4 className='py-3 mx-4 px-4 font-bold text-white' >تشغيل سياره بنظام التعاقد</h4></button>
        <button type="button " class="btn btn-transparent"><h4 className='py-3 mx-4 px-4 font-bold text-white' >طلب مطابقه فنيه لتخصيص سياره اسعاف</h4></button>
        <button type="button " class="btn btn-transparent"><h4 className='py-3 mx-4 px-4 font-bold text-white' >الاعفاء من رسوم الاسعاف للحالات الغير قادره</h4></button>
        
        <button type="button " class="btn btn-transparent"><h4 className='py-3 mx-4 px-4 font-bold text-white' >طلب خدمات الاسعاف النهري</h4></button>
        
      </div>
      </div>
      </div>
  )
}
