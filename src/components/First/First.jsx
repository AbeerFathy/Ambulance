import React, { useEffect, useState } from 'react'
import firstac from '../../assets/images/4.png'
import { Link } from 'react-router-dom';
export default function First() {

const [counter, setcounter] = useState(0);
useEffect(() => {}, [])


  return (
    <section class="firstAC d-flex py-8" >
    <div className="container ">
      <div className=' text-end'> 
      <h1 className=' font-bold  fs-1 pe-3'>دوره الاسعافات الاوليه</h1>
      <h2 className=' text-muted textfont py-3'>تزودك دورتنا الشامله في الاسعافات الاوليه بالمهارات الاساسيه للتعامل مع حالات الطوارئ غير المتوقعه في الحياه

      </h2>
      </div>
      
      <div className='underlinesection'></div>
      <div className="row ">
        <div className="col-lg-6 pt-5">
          <img className="w-100 p-1 border border-1 rounded-1" src={firstac}/>
        </div>
        <div className="col-lg-6 pt-5  ">
          <div className=' d-flex  justify-content-end'>
          <h3 className='font-bold'>تعلم تقنيات الانعاش القلبي الرئوي(انقذ حياه)</h3>
          <span className='px-1  '><i class="fa-solid fa-circle fa-2xs "></i></span>
          </div>
          <div className=' d-flex  justify-content-end '>
          <h3 className='font-bold'> تعلم كيفيه وقف النزيف وعلاج الجروح كلمحترفين</h3>
          <span className='px-1  '><i class="fa-solid fa-circle fa-2xs "></i></span>
          </div>
          <div className=' d-flex  justify-content-end '>
          <h3 className='font-bold'> اكتسب الثقه في التعامل مع الكسور والالتواءات</h3>
          <span className='px-1  '><i class="fa-solid fa-circle fa-2xs "></i></span>
          </div>
          <div className=' d-flex  justify-content-end '>
          <h3 className='font-bold'>  اكتشف كيفيه التعامل السريه مع حالات الاختناق</h3>
          <span className='px-1  '><i class="fa-solid fa-circle fa-2xs "></i></span>
          </div>
          <div className=' d-flex  justify-content-end'>
          <h3 className='font-bold'> الاجراءات الوقائيه في حالات الحروق وتصحيح المفاهيم</h3>
          <span className='px-1  '><i class="fa-solid fa-circle fa-2xs "></i></span>
          </div>
          <div className=' d-flex  justify-content-end '>
          <h3 className='font-bold'>حدد العلامات الحاسمه للنوبات القلبيه  والسكتات الدماغيه</h3>
          <span className='px-1  '><i class="fa-solid fa-circle fa-2xs "></i></span>
          </div>
          <div className=' d-flex  justify-content-end '>
          <h3 className='font-bold'> اعرف بالظبط ما يجب فعله في حالات التسمم</h3>
          <span className='px-1  '><i class="fa-solid fa-circle fa-2xs "></i></span>
          </div>
         
          <div className=' d-flex  justify-content-end '>
          <h3 className='font-bold'> تعامل مع الانهاك الحراري وانخفاض حراره الجسم بفعاليه</h3>
          <span className='px-1  '><i class="fa-solid fa-circle fa-2xs "></i></span>
          </div>
         
          <div className=' d-flex  justify-content-end '>
          <h3 className='font-bold'> طور مهاراتك في الاستجابه لاي سيناريو طارئ</h3>
          <span className='px-1  '><i class="fa-solid fa-circle fa-2xs "></i></span>
          </div>
          <div className=' d-flex justify-content-end m-3'>
          <div className=' d-flex mx-16 coloricon'>
            <i class="fa-solid fa-star px-1 py-1"></i>
            <i class="fa-solid fa-star px-1 py-1"></i>
            <i class="fa-solid fa-star px-1 py-1"></i>
            <i class="fa-solid fa-star px-1 py-1"></i>
            <i class="fa-solid fa-star px-1 py-1"></i>
            </div>
            <h3 className='font-bold  textfontn'>4.7</h3>
            
          </div>
          <div className=' d-flex    ms-auto justify-content-around  bg-light w-50  py-2  border rounded-1 '>
          <div className='d-flex'>
            <h3> 8 ساعات</h3>
            <i class="fa-regular fa-clock  "></i></div>
        
            <div className='d-flex'>    <h3>  ا05 اكتوبر 2024 </h3>
            <i class="fa-regular fa-calendar  "></i></div>
         </div>  

        
           
          
          <div className=' text-muted font-bold fs-1 d-flex justify-content-end'> 16,500 LE</div>
          <div className=' d-flex justify-content-end m3-5'
          >
       <Link to={"/Request"}>   <button class="btn  active  font-bold text-white " >للالتحاق بالدوره</button></Link>   </div>
          
         
          
    </div>
      </div>
    </div>
  </section>
  )
}
