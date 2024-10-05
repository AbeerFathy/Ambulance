import React, { useEffect, useState } from 'react'


export default function Request() {

const [counter, setcounter] = useState(0);
useEffect(() => {}, [])

const [formData, setFormData] = useState({
  Name: '',
  arabicFullName: '',
  nationality: 'Saudi',
  email: '',
  phone: '',
  idNumber: '',
  employmentStatus: '',
  licenseType: '',
  additionalInfo: '',
  agreeToPublish: false,
  isMedicalProfessional: false,
});

const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setFormData({
    ...formData,
    [name]: type === 'checkbox' ? checked : value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formData);
  alert('Form submitted successfully!');
};

return (<>
  <div className="container form-container bg">
  <form onSubmit={handleSubmit}>
    <h2 className="text-end px-5 py-2 fs-2 font-bold">دورة الإسعافات الأولية</h2>
    <p className=' fs-6 font-bold text-muted mb-5 text-end'>يمكنك طلب اسعافات للحالات الطارئه والحالات الغير طارئه يمكنك ايضا الدفع من خلال بوابتنا الالكترونيه الامنه لطلب ساره اسعاف فقط قم بملئ النموذج ثم اضغط تاكيد</p>
  
    <div className='row justify-content-center gap-3'>
          <div className="col-md-3 col-12 d-flex justify-content-center bgrequest border shadow-sm rounded-2 mb-3">
            <button className="btn font-bold fs-2 text-white m-3">جهات</button>
            <span><i className="fa-solid fa-id-card fa-2xl coloriconrequest"></i></span>
          </div>
          <div className="col-md-3 col-12 d-flex justify-content-center border shadow-sm rounded-2 mb-3">
            <button className="btn font-bold fs-2 m-3">مواطنين</button>
            <span><i className="fa-solid fa-people-roof fa-2xl"></i></span>
          </div>
        </div>
  <div className="form-row mb-3 formm mt-5  w-50  ms-auto">
        <div className="col-md-6  responsiveform responsiveform4 justify-content-end  text-end    font-sembold position-relative">
            <label htmlFor="Name">اسم الجهه</label>
            <input type="text" className="form-control shadow-sm  bg-white rounded" id="Name" name="Name" value={formData.Name} onChange={handleChange} required />
            <i class="fa-regular fa-user position-absolute top-9 right-3  text-muted"></i>
           </div></div>
  <div className="form-row mb-3 d-flex  responsiveform  gap-3 justify-content-end ms-5  justify-content-center">
 
          <div className="col-md-6 justify-content-end  text-end w-80 responsiveform  font-sembold position-relative ">
          <label htmlFor="fullName ">الاسم الثلاثي باللغه الانجليزيه</label>
          <input type="text" className="form-control shadow-sm  bg-white rounded" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
          <i class="fa-regular fa-user position-absolute top-9 right-3  text-muted"></i>
           
          </div>
          <div className="col-md-6 justify-content-end responsiveform  text-end justify-content-end w-80   font-sembold position-relative">
            <label htmlFor="arabicFullName">الاسم الثلاثي باللغه العربيه</label>
            
            <input type="text" className="form-control position-relative shadow-sm  bg-white rounded" id="arabicFullName" name="arabicFullName" value={formData.arabicFullName} onChange={handleChange} required />
            <i class="fa-regular fa-user position-absolute top-9 right-3  text-muted"></i>
           
          </div>
        </div>
        
        <div className="form-row mb-3  d-flex   gap-3 justify-content-end me-5 justify-content-center responsiveform  responsiveform2">
        <div className="col-md-6 justify-content-end  text-end w-80    font-sembold position-relative">
            <label htmlFor="idNumber">الرقم القومي</label>
            <input type="text" className="form-control shadow-sm  bg-white rounded" id="idNumber" name="idNumber" value={formData.idNumber} onChange={handleChange} required />
            <i class="fa-solid fa-building-un position-absolute top-9 right-3  text-muted  text-muted"></i>
           </div>
          <div className="col-md-6 justify-content-end responsiveform3 responsiveform responsiveform2  text-end w-80   font-sembold position-relative">
            <label htmlFor="phone">رقم الهاتف</label>
            <input type="tel" className="form-control shadow-sm  bg-white rounded" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            <i class="fa-solid fa-phone position-absolute top-9 right-3  text-muted  text-muted"></i>
          </div>
        </div>

        <div className="form-row mb-3 formm w-50  ms-auto">
         
          <div className="col-md-6 justify-content-end  responsiveform4 text-end responsiveform   font-sembold position-relative">
            <label htmlFor="employmentStatus">طبيعه عمل السياره</label>
            <select className="form-control shadow-sm  bg-white rounded" id="employmentStatus" name="employmentStatus" value={formData.employmentStatus} onChange={handleChange} required>
              <option value="">اختر</option>
              <option value="employed">موظف</option>
              <option value="unemployed">غير موظف</option>
            </select>
            <i class="fa-solid fa-truck-medical position-absolute top-9 right-3  text-muted  text-muted"></i>
          </div>
        </div>
        <div className="form-row mb-3 formm w-50  ms-auto">
         
          <div className="col-md-6 justify-content-end   text-end    font-sembold position-relative">
            <label htmlFor="employmentStatus"> هل انت من ذوي الهمم</label>
           
           
          </div>
        </div>
        
        <div className="form-group  w-60  m-auto d-flex ">
        <label class="inline-flex items-center mb-5 cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer"/>
  <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-Purple-600 dark:peer-focus:ring-Purple-600 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-Purple-600"></div>
  <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">احتاج لانش اسعاف</span>
</label>
<label class="inline-flex items-center mb-5 cursor-pointer ">
  <input type="checkbox" value="" class="sr-only peer"/>
  <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-Purple-600 dark:peer-focus:ring-Purple-600 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked: bg-Purple-600"></div>
  <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">طبيب</span>
</label>
        </div>
        <div className="form-row mb-3 sizttextarea  w-30  m-auto ">
          <div className="col-md-12 justify-content-center   text-end    font-sembold position-relative">
            <label htmlFor="additionalInfo">في خاله الاجابه بنعم ماهي تشخيص حالتك وما هي الاحتياجات التي تود ان نوفرها لك</label>
            <textarea className="form-control shadow-sm  bg-white rounded" id="additionalInfo" name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} rows="4"></textarea>
          </div>
        </div>

        

        <div className="form-group d-flex gap-5 mb-2  justify-content-center ">
        <button type="reset" className="btn btn-secondary px-4" onClick={() => setFormData({})}>إلغاء</button>
          <button type="submit" className="btn btn-primary px-4">التالي</button>
       
        </div>
      </form>
 </div>
 
 </>
    
  );
 
}
  

