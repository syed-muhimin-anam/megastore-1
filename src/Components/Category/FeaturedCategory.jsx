import React, { useEffect, useState } from 'react'
import Swiper from 'react-id-swiper';


const FeaturedCategory = () => {
    const [category , setCategory] = useState([]);
    useEffect(()=>{
        fetch('/category.json')
        .then(res => res.json())
        .then(data => {
            setCategory(data)
        })
    },[])
    console.log(category);
  return (
    <div className='my-6'>
        <h2 className='text-center font-semibold text-lg md:text-2xl text-[#333333]'>Featured Categories</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
         {
            category && category.map((cat , idx) =>  <div key={idx} className='bg-[#db9e2d] p-4'>
                <img src={cat.image} alt="" />
                <h2>{cat.category}
                  <hr className='w-1/5 font-semibold mx-' />
                </h2>
            </div> )
         }
        </div>
    </div>
  )
}

export default FeaturedCategory