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
      <div className='line'></div>
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
          <div class="d-flex flex-column flex-md-row resi ms-auto justify-content-around bg-light w-100 py-2 border rounded-1 resposivefirst">
  <div class="d-flex align-items-center mb-2 mb-md-0">
    <i class="fa-regular fa-clock me-2"></i>
    <h3 class="m-0">8 ساعات </h3>
  </div>

  <div class="d-flex align-items-center">
    <i class="fa-regular fa-calendar me-2"></i>
    <h3 class="m-0">05 اكتوبر 2024</h3>
  </div>
</div>

        
           
          
<div class="d-flex justify-content-end text-muted font-bold fs-1 resi">
  16,500 LE
</div>

<div class="d-flex justify-content-end m-3 resi">
  <Link to="/Request">
    <button class="btn font-bold text-white">لالتحاق بالدوره</button>
  </Link>
</div>
          
    </div>
      </div>
    </div>
  </section>
  )
}
