import React, { useEffect, useState } from 'react'
import { IoIosArrowDropright } from 'react-icons/io';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { TfiArrowCircleRight } from 'react-icons/tfi';
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
    // console.log(category);
  return (
    <div className='my-6'>
        <h2 className='text-center font-semibold text-lg md:text-2xl text-[#333333]'>Featured Categories</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-24 mt-20'>
         {
            category && category.map((cat , idx) => 
             <div key={idx} className='bg-[#db9e2d] rounded-xl p-4 flex justify-between items-center h-32'>
                <img className='w-2/5 -mt-20' src={cat.image} alt="" />
                <h2 className='text-xl text-white'>{cat.category}
                <hr className="w-3/5 mx-auto h-[2px] bg-white border-0" />
                </h2>
                <div className='flex -mb-[90px] -mr-[10px]'>
                {/* <TfiArrowCircleRight className='bg-white rounded-full border-none text-3xl' /> */}
                 <MdKeyboardArrowRight className='text-3xl bg-white rounded-full border-none opacity-70 ' />
                </div>
            </div> ) 
         }
        </div>
    </div>
  )
}

export default FeaturedCategory