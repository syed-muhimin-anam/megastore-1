import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Link, Navigate, NavLink, Outlet } from 'react-router-dom';
import tab from '../assets/featured-categories/tab.jpg';
import { FaFacebookF, FaShippingFast, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { IoShareSocial } from 'react-icons/io5';
import { LiaShoppingCartSolid } from 'react-icons/lia';
import { TfiEmail } from 'react-icons/tfi';
import { TiArrowShuffle } from 'react-icons/ti';
import { IoMdHeartEmpty } from 'react-icons/io';
import FullDes from '../Components/more details/FullDes';
import Cards from '../Components/Cards';

const Details = () => {
    const [selectedSize, setSelectedSize] = useState("Small");

    // New states for zoom effect
    const [backgroundPosition, setBackgroundPosition] = useState('center');
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
        setBackgroundPosition(`${x}% ${y}%`);
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div>
            <div className='text-center bg-white py-[15px] shadow-[2px_3px_3px_rgba(119,118,121,0.25)]'>
                <h2 className='text-[24px] text-[#E6B534] font-semibold'>Neoflam Retro 5pc Ceramic Nonstick Cookware Set</h2>
                <div className='flex items-center justify-center text-black '>
                    <Link to={'/'}><p>Home</p></Link><p className='mx-[5px]'> / </p><p>Tabs</p>
                </div>
            </div>

            <div className="shadow-[0_3px_8px_rgba(119,118,121,0.25)] rounded-[3px] my-[30px] mb-[60px] p-[15px] bg-white max-w-[1400px] min-h-[40vh] mx-auto">
                <div>
                    <div className='flex justify-between mb-4'>
                        <button className='hover:text-yellow-500 flex items-center text-gray-400 text-sm'>
                            <MdKeyboardArrowLeft className='text-3xl' />PREVIOUS PRODUCT
                        </button>
                        <button className='hover:text-yellow-500 flex items-center text-gray-400 text-sm'>
                            <MdKeyboardArrowRight className='text-3xl' />NEXT PRODUCT
                        </button>
                    </div>

                    <div className='grid grid-cols-3 gap-5'>
                        {/* Image */}
                        <div className="relative overflow-hidden">
                            <div
                                className="w-full h-[400px] bg-no-repeat bg-cover transition-all duration-300 cursor-crosshair"
                                style={{
                                    backgroundImage: `url(${tab})`,
                                    backgroundSize: isHovering ? '180%' : '100%',
                                    backgroundPosition: backgroundPosition,
                                }}
                                onMouseMove={handleMouseMove}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            />

                        </div>

                        {/* Description */}
                        <div>
                            <p className='mb-2 text-sm'>
                                Ethical presents a great utility product for your kitchen. It has a neat and simple, classic design, which looks great in any modern kitchen. Easy to use and clean, this product will make your cooking experience much more pleasurable. Made from high-quality Stainless Steel.</p>

                            {/* Rating */}
                            <div className="rating rating-xs mb-2">
                                <input type="radio" name="rating-1" className="mask mask-star" aria-label="1 star" />
                                <input type="radio" name="rating-1" className="mask mask-star" aria-label="2 star" defaultChecked />
                                <input type="radio" name="rating-1" className="mask mask-star" aria-label="3 star" />
                                <input type="radio" name="rating-1" className="mask mask-star" aria-label="4 star" />
                                <input type="radio" name="rating-1" className="mask mask-star" aria-label="5 star" />
                            </div>

                            {/* SKU / Vendor */}
                            <h1 className='mb-1'>SKU: <span className='ml-36 text-gray-400'>Neoflam125</span></h1>
                            <h1 className='mb-2'>Vendor: <span className='ml-[123px] text-yellow-400 border-b-2 border-yellow-400'>COMPUTERS PTY LTD</span></h1>

                            {/* Color */}
                            <h1>Color</h1>
                            <div className='rounded-sm w-fit flex items-center p-1 gap-x-2 border border-purple-600 mb-4'>
                                <div className='h-[25px] w-[25px] bg-pink-200'></div>
                                <h1 className='text-gray-400'>Pink</h1>
                            </div>

                            {/* Size */}
                            <h1 className='mb-1'>Size</h1>
                            <div className='flex items-center gap-x-3'>
                                <button
                                    onClick={() => setSelectedSize("Small")}
                                    className={`px-6 py-1 rounded-sm border ${selectedSize === "Small"
                                        ? " text-purple-600 border-purple-600"
                                        : " text-gray-400 border-gray-300"
                                        }`}
                                >
                                    Small
                                </button>
                                <button
                                    onClick={() => setSelectedSize("Large")}
                                    className={`px-6 py-1 rounded-sm border ${selectedSize === "Large"
                                        ? " text-purple-600 border-purple-600"
                                        : " text-gray-400 border-gray-300"
                                        }`}
                                >
                                    Large
                                </button>
                            </div>

                            {/* Social Links */}
                            <div className='flex gap-x-3 justify-center mt-5'>
                                <div className="w-[35px] h-[30px] bg-blue-600 text-white rounded-sm flex justify-center items-center transition-transform duration-200 hover:-translate-y-1"><FaFacebookF /></div>
                                <div className="w-[35px] h-[30px] bg-black text-white rounded-sm flex justify-center items-center transition-transform duration-200 hover:-translate-y-1"><FaXTwitter /></div>
                                <div className="w-[35px] h-[30px] bg-gray-500 text-white rounded-sm flex justify-center items-center transition-transform duration-200 hover:-translate-y-1"><HiOutlineEnvelope /></div>
                                <div className="w-[35px] h-[30px] bg-green-400 text-white rounded-sm flex justify-center items-center transition-transform duration-200 hover:-translate-y-1"><FaWhatsapp /></div>
                                <div className="w-[35px] h-[30px] bg-lime-400 text-white rounded-sm flex justify-center items-center transition-transform duration-200 hover:-translate-y-1"><IoShareSocial /></div>
                            </div>

                        </div>
                        {/* purchase cart */}
                        <div className='border border-gray-300 h-fit shadow-lg'>
                            <h1 className='my-3 text-center'>Availability: <span className='text-yellow-400'>In stock</span></h1>
                            <hr className='w-full  border-gray-300  mb-3' />
                            <div className='space-y-4'>
                                <h1 className='text-2xl text-center text-purple-500'>$500.00 incl tax</h1>
                                <div className='flex gap-2 justify-center'>
                                    <div className='bg-gray-200 flex gap-x-1 p-1 rounded-sm'>
                                        <h1 className='bg-white flex items-center py-0 px-5 rounded-sm'>1</h1>
                                        <div className='flex flex-col gap-1'>
                                            <button className='bg-white h-[15px] w-[15px] flex justify-center items-center'>+</button>
                                            <button className='bg-white h-[15px] w-[15px] flex justify-center items-center'>-</button>
                                        </div>
                                    </div>

                                    <button className='px-6 py-2 flex items-center gap-x-2 bg-yellow-500 text-white rounded-sm'><LiaShoppingCartSolid className='text-3xl'></LiaShoppingCartSolid> Add to cart</button>
                                    <button className='px-6 py-2 bg-purple-500 text-white rounded-sm'><NavLink  to='/checkout'>Buy Now</NavLink></button>
                                </div>

                                <div className='flex justify-center gap-x-2'>
                                    <button className='flex gap-x-1 items-center bg-gray-200 border-2 rounded-sm text-sm border-gray-300 py-2 px-5 ' ><IoMdHeartEmpty className='text-xl'></IoMdHeartEmpty> Wishlist</button>
                                    <button className='flex gap-x-1 items-center bg-gray-200 border-2 rounded-sm text-sm border-gray-300 py-2 px-5 ' ><TiArrowShuffle className='text-xl'></TiArrowShuffle> Compare</button>
                                    <button className='flex gap-x-1 items-center bg-gray-200 border-2 rounded-sm text-sm border-gray-300 py-2 px-5 ' ><TfiEmail className='text-xl' /> <NavLink to='/email'>Email a friend</NavLink> </button>

                                </div>
                                <hr className='w-full  border-gray-300' />
                                <h1 className='gap-x-1 pb-3 mt-0 pt-0 flex items-center justify-center'> <FaShippingFast className='text-xl' />Free shipping</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* more details */}

            <div className='border border-gray-300 h-fit'>

                <ul className="flex gap-x-7">
                    <li>
                        <NavLink
                            to="full-des"
                            className={({ isActive }) => isActive ? "text-purple-600" : "text-black"}
                        >
                            Full Description
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="spec"
                            className={({ isActive }) => isActive ? "text-purple-600" : "text-black"}
                        >
                            Specification
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="tags"
                            className={({ isActive }) => isActive ? "text-purple-600" : "text-black"}
                        >
                            Tags
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="reviews"
                            className={({ isActive }) => isActive ? "text-purple-600" : "text-black"}
                        >
                            Reviews
                        </NavLink>
                    </li>
                </ul>


                <hr className='w-full  border-gray-300  mb-3' />

                <div className='px-5'>
                    <Outlet></Outlet>

                </div>



            </div>

            {/* Customers who bought this item also bought */}
            <div>
                <h1 className='text-2xl'>Customers who bought this item also bought</h1>
                <div className="flex gap-5">
                    {[1, 2, 3, 4].map((item, index) => (
                        <Cards key={index} />
                    ))}
                </div>
            </div>


        </div>
    );
};

export default Details;
