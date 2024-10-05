import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
 
  const [spproduct, setspproduct] = useState(null)
  let {id}=useParams()
  function getspcproduct(id) {
  axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  .then((res)=>{
    setspproduct(res.data.data)
  })
  .catch((res)=>{})
    
  }
  useEffect(() => {
  getspcproduct(id)
  },[])
  return (<>
   
    <h5 className='p-24'>rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr</h5>
    <h2>{spproduct?.title}</h2> 
   
    </>
  );
}
