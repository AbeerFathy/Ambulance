import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import tel from '../../assets/images/5.jpg'


export default function Home() {

const [counter, setcounter] = useState(0);
useEffect(() => {}, [])


  return (
  <> 
  <header className="home  d-flex  align-items-center justify-content-end   text-end  position-relative" >
            <div class="container  bannr-text text-light justify-content-end  align-items-end  me-5  p-1 " >
                
          <h1>معك في كل مكان لمساعدتك</h1>
          <p>الإسعاف الطبي بالمجان لجميع المواطنين والمقيمين بجمهورية مصر العربية في حالات الحوادث والكوارث</p>
            </div>
            
<div className='  d-flex position-absolute end-0 bottom-0 start-0  position-relative '> 


<div class=" text-center overlabhome   w-100 position-absolute end-0 bottom-0 start-0  ">
<h1 className=' font-bold fonttextH text-center  fs-2 '>احصائيات وارقام</h1>
  <div class="row align-items-around textoverlap  ">
    <div class="col  ">
    <h3 className=' fs-1 text-white'>90%</h3>
    <span className='font-bold'> تقيمات ايجابيه</span>
    <h4 className='text-white'>من عملائنا الراضين</h4>
    </div>
    <div class="col">
    <h3 className='   fs-1 text-white'>+1400</h3>
    <span className='font-bold'>في خلال سنه</span>
    <h4 className='text-white'>نقل مريض عن طريق خبير</h4>
    </div>
    <div class="col">
    <h3 className='  fs-1 text-white'>+400</h3>
    <span className='font-bold'> مساعده في الاستشفاء</span>
    <h4 className='text-white'>ارشادات الخبراء في الاستشفاء</h4>
    </div>
  </div>
</div>

<div className='layerposition   position-absolute  bg-white rounded-1 '>
            <div className='d-flex font-semibold text-muted textsize justify-content-center '>
            <img src={tel} alt=" AboutAmbulance2"  className='     rounded-1'/>
               <p>123</p>
           </div> 
              <p className=' font-semibold text-muted size2 text-center '>اتصل بنا علي الخط الساخن اذا كنت تحتاج الي مساعده طارئه</p>
            </div>


</div>
           
        </header>


    <Link to={"/First"}>  <button  className='btn  btn-danger'>  اضغط للاشتراك  </button></Link>   


      
</>
   
  )
}
