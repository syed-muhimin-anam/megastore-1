import React from 'react';
import tab from '../assets/featured-categories/tab.jpg'
import { TiArrowShuffle } from 'react-icons/ti';
import { IoMdHeartEmpty } from 'react-icons/io';
import { LiaShoppingCartSolid } from 'react-icons/lia';
import { Link, NavLink } from 'react-router-dom';

const Cards = () => {
  return (
    <Link to={'details'}>
      <div className="card bg-base-100 w-64 shadow-sm group relative overflow-hidden">

        {/* Icons */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 text-lg text-gray-600">
          <div><LiaShoppingCartSolid className="h-[40px] w-[40px] bg-purple-600 p-1 rounded-full text-white hover:bg-gray-800 cursor-pointer" /></div>
          <div><TiArrowShuffle className="h-[40px] w-[40px] bg-yellow-400 p-1 rounded-full text-white hover:bg-purple-600 cursor-pointer" /></div>
          <div><IoMdHeartEmpty className="h-[40px] w-[40px] bg-yellow-400 p-1 rounded-full text-white hover:bg-purple-600 cursor-pointer" /></div>
        </div>

        {/* Images */}
        <figure className="px-4 relative w-full">
          {/* default image */}
          <img
            src={tab}
            alt="Shoes"
            className="rounded-xl transition-opacity duration-300 group-hover:opacity-0 w-full"
          />
          {/* hover image */}
          <img
            src={tab}
            alt="Shoes Hover"
            className="absolute top-0 left-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 w-[90%] ml-[5%]"
          />
        </figure>

        {/* Card Body */}
        <div className="card-body items-center text-center">
          <h2 className="text-[16px] font-semibold">Neoflam Retro 5pc Ceramic Nonstick Cookware Set</h2>

          {/* Rating */}
          <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-[10px]" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-[10px]" defaultChecked />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-[10px]" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-[10px]" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-[10px]" />
          </div>

          {/* Color Swatches */}
          <div className='flex justify-center items-center gap-x-2'>
            <div className='w-[15px] h-[15px] bg-purple-800 rounded-full'></div>
            <div className='w-[15px] h-[15px] bg-red-800 rounded-full'></div>
          </div>

          {/* Price */}
          <h2 className='text-yellow-500 text-[18px] font-bold'>$1,500.00 incl tax</h2>

          {/* Quantity + Buy */}
          <div className="card-actions">
            <div className='bg-gray-200 flex gap-x-1 p-1 rounded-sm'>
              <h1 className='bg-white flex items-center py-0 px-5 rounded-sm'>1</h1>
              <div className='flex flex-col gap-1'>
                <button className='bg-white h-[15px] w-[15px] flex justify-center items-center'>+</button>
                <button className='bg-white h-[15px] w-[15px] flex justify-center items-center'>-</button>
              </div>
            </div>
            <button className="btn bg-gray-300 w-[120px] text-white transition-colors duration-300 group-hover:bg-purple-700">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </Link>

  );
};

export default Cards;