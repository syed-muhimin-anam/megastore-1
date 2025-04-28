import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import payment from '../assets/New folder/payment.jpg'
import oven from '../assets/featured-categories/oven.jpg';
import { ImBin } from 'react-icons/im';
import { PiTrolleySuitcaseFill } from 'react-icons/pi';
import Swal from 'sweetalert2';
const Checkout = () => {
    const [isChecked, setIsChecked] = useState(true);
    const [isCheckedTerms, setIsCheckedTerms] = useState(false);
    const [selectedShipping, setSelectedShipping] = useState('ground');
    const [selectedDiscount, setSelectedDiscount] = useState('one');

    return (
        <div>
            <div className='text-center bg-white py-[15px] shadow-[2px_3px_3px_rgba(119,118,121,0.25)]'>
                <h2 className='text-[24px] text-[#E6B534] font-semibold'>THANK YOU</h2>
                <div className='flex items-center justify-center text-black '>
                    <Link to={'/'}> <p>Home</p></Link> <p className='mx-[5px]'> / </p> <p>Checkout</p>
                </div>
            </div>

            <div class="shadow-[0_3px_8px_rgba(119,118,121,0.25)] rounded-[3px] my-[30px] mb-[60px] p-[15px] bg-[var(--white)] max-w-[1400px] min-h-[40vh] mx-auto list-inside">
                <div className='grid grid-cols-3'>
                    {/* left part */}
                    <div className='border-r border-gray-300 p-3'>
                        {/*  billing address*/}
                        <div>
                            <h1 className=' text-white bg-black'> Billing address</h1>


                            <label className="label">

                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={(e) => setIsChecked(e.target.checked)}
                                    className={`checkbox checkbox-xs rounded-sm ${isChecked
                                        ? "border-yellow-500 text-yellow-500"
                                        : "border-gray-300 text-gray-400"
                                        }`}
                                />
                                <p className='text-black text-sm'> Ship to the same address</p>
                            </label>
                            <p className='text-sm'>Select a billing address from your address book or enter a new address.</p>

                            <details className="dropdown w-full">
                                <summary className="w-full flex justify-between items-center bg-base-100 border-b border-gray-300 text-xs text-gray-600 p-2">
                                    <span>New Address</span>
                                    <IoIosArrowDown className="text-base" />
                                </summary>
                                <ul className="menu dropdown-content bg-base-100 rounded-box shadow p-2 mt-1 w-full">
                                    <li>New Address</li>
                                </ul>
                            </details>

                            {/* input field Billing address*/}

                            <div className='grid grid-cols-2 gap-4'>

                                <div className="flex items-center gap-1">
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        className="border rounded-sm shadow-md w-full  "
                                        placeholder="First Name"
                                    />
                                    <span className="text-red-500 -ml-4">*</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        className="border rounded-sm shadow-md w-full "
                                        placeholder="Last Name"
                                    />
                                    <span className="text-red-500 -ml-4">*</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        className="border rounded-sm shadow-md w-full "
                                        placeholder="Last Name"
                                    />
                                    <span className="text-red-500 -ml-4">*</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        className="border rounded-sm shadow-md w-full "
                                        placeholder="Last Name"
                                    />
                                    <span className="text-red-500 -ml-4">*</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        className="border rounded-sm shadow-md w-full "
                                        placeholder="Last Name"
                                    />
                                    <span className="text-red-500 -ml-4">*</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        className="border rounded-sm shadow-md w-full "
                                        placeholder="Last Name"
                                    />
                                    <span className="text-red-500 -ml-4">*</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        className="border rounded-sm shadow-md w-full "
                                        placeholder="Last Name"
                                    />
                                    <span className="text-red-500 -ml-4">*</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        className="border rounded-sm shadow-md w-full "
                                        placeholder="Last Name"
                                    />
                                    <span className="text-red-500 -ml-4">*</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        className="border rounded-sm shadow-md w-full "
                                        placeholder="Last Name"
                                    />
                                    <span className="text-red-500 -ml-4">*</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        className="border rounded-sm shadow-md w-full "
                                        placeholder="Last Name"
                                    />
                                    <span className="text-red-500 -ml-4">*</span>
                                </div>
                                <div className="flex items-center gap-1 col-span-2">
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        className="border rounded-sm shadow-md w-full "
                                        placeholder="Last Name"
                                    />
                                    <span className="text-red-500 -ml-4">*</span>
                                </div>
                                <div className="flex items-center gap-1 col-span-2">
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        className="border rounded-sm shadow-md w-full "
                                        placeholder="Last Name"
                                    />
                                    <span className="text-red-500 -ml-4">*</span>
                                </div>

                            </div>

                            {/* billing address */}
                            {
                                !isChecked && (
                                    <>
                                        <h1 className=' text-white bg-black'> Shipping address</h1>



                                        <p className='text-sm'>Select a shipping address from your address book or enter a new address.</p>

                                        <details className="dropdown w-full">
                                            <summary className="w-full flex justify-between items-center bg-base-100 border-b border-gray-300 text-xs text-gray-600 p-2">
                                                <span>New Address</span>
                                                <IoIosArrowDown className="text-base" />
                                            </summary>
                                            <ul className="menu dropdown-content bg-base-100 rounded-box shadow p-2 mt-1 w-full">
                                                <li>New Address</li>
                                            </ul>
                                        </details>

                                        {/* input field Billing address*/}

                                        <div className='grid grid-cols-2 gap-4'>

                                            <div className="flex items-center gap-1">
                                                <input
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    className="border rounded-sm shadow-md w-full  "
                                                    placeholder="First Name"
                                                />
                                                <span className="text-red-500 -ml-4">*</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <input
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    className="border rounded-sm shadow-md w-full "
                                                    placeholder="Last Name"
                                                />
                                                <span className="text-red-500 -ml-4">*</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <input
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    className="border rounded-sm shadow-md w-full "
                                                    placeholder="Last Name"
                                                />
                                                <span className="text-red-500 -ml-4">*</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <input
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    className="border rounded-sm shadow-md w-full "
                                                    placeholder="Last Name"
                                                />
                                                <span className="text-red-500 -ml-4">*</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <input
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    className="border rounded-sm shadow-md w-full "
                                                    placeholder="Last Name"
                                                />
                                                <span className="text-red-500 -ml-4">*</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <input
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    className="border rounded-sm shadow-md w-full "
                                                    placeholder="Last Name"
                                                />
                                                <span className="text-red-500 -ml-4">*</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <input
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    className="border rounded-sm shadow-md w-full "
                                                    placeholder="Last Name"
                                                />
                                                <span className="text-red-500 -ml-4">*</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <input
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    className="border rounded-sm shadow-md w-full "
                                                    placeholder="Last Name"
                                                />
                                                <span className="text-red-500 -ml-4">*</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <input
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    className="border rounded-sm shadow-md w-full "
                                                    placeholder="Last Name"
                                                />
                                                <span className="text-red-500 -ml-4">*</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <input
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    className="border rounded-sm shadow-md w-full "
                                                    placeholder="Last Name"
                                                />
                                                <span className="text-red-500 -ml-4">*</span>
                                            </div>
                                            <div className="flex items-center gap-1 col-span-2">
                                                <input
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    className="border rounded-sm shadow-md w-full "
                                                    placeholder="Last Name"
                                                />
                                                <span className="text-red-500 -ml-4">*</span>
                                            </div>
                                            <div className="flex items-center gap-1 col-span-2">
                                                <input
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    className="border rounded-sm shadow-md w-full "
                                                    placeholder="Last Name"
                                                />
                                                <span className="text-red-500 -ml-4">*</span>
                                            </div>

                                        </div>
                                    </>
                                )
                            }

                            {/* Shipping method */}
                            <div>
                                <h1 className="text-white bg-black">Shipping method</h1>

                                <div className="">
                                    <div className="flex items-center gap-x-1 border rounded-sm shadow-md py-2 px-2">
                                        <input
                                            type="radio"
                                            name="shipping"
                                            value="ground"
                                            className="radio radio-xs radio-warning"
                                            checked={selectedShipping === 'ground'}
                                            onChange={() => setSelectedShipping('ground')}
                                        />
                                        <h1 className="font-bold">Ground ($10.00 incl tax)</h1>
                                    </div>
                                    <p className="text-gray-400">Shipping by land transport</p>

                                    <div className="flex items-center gap-x-1 border rounded-sm shadow-md py-2 px-2">
                                        <input
                                            type="radio"
                                            name="shipping"
                                            value="nextDayAir"
                                            className="radio radio-xs radio-warning"
                                            checked={selectedShipping === 'nextDayAir'}
                                            onChange={() => setSelectedShipping('nextDayAir')}
                                        />
                                        <h1 className="font-bold">Next Day Air ($10.00 incl tax)</h1>
                                    </div>
                                    <p className="text-gray-400">The one day air shipping</p>

                                    <div className="flex items-center gap-x-1 border rounded-sm shadow-md py-2 px-2">
                                        <input
                                            type="radio"
                                            name="shipping"
                                            value="secondDayAir"
                                            className="radio radio-xs radio-warning"
                                            checked={selectedShipping === 'secondDayAir'}
                                            onChange={() => setSelectedShipping('secondDayAir')}
                                        />
                                        <h1 className="font-bold">2nd Day Air ($10.00 incl tax)</h1>
                                    </div>
                                    <p className="text-gray-400">The two day air shipping</p>
                                </div>
                            </div>

                            {/* Estimate shipping */}
                            <div>
                                <h1 className=' text-white bg-black'>  Estimate shipping</h1>

                                <div>
                                    <h1>Country:</h1>
                                    <div className="flex items-center relative">
                                        <details className="dropdown w-full">
                                            <summary className="w-full flex justify-between items-center bg-base-100 border rounded-sm border-gray-300 text-xs text-gray-600 p-2">
                                                <span>Country</span>
                                                <IoIosArrowDown className="text-base" />
                                            </summary>
                                            <ul className="menu dropdown-content bg-base-100 rounded-box shadow p-2 mt-1 w-full">
                                                <li>Bangladesh</li>
                                            </ul>
                                        </details>

                                        {/* This * now has pointer-events-none so it won't block clicks */}
                                        <h1 className="text-red-500 -ml-5 z-20 pointer-events-none">*</h1>
                                    </div>
                                </div>


                                <div>
                                    <h1>State / Province:</h1>
                                    <div className="flex items-center relative">
                                        <details className="dropdown w-full">
                                            <summary className="w-full flex justify-between items-center bg-base-100 border rounded-sm border-gray-300 text-xs text-gray-600 p-2">
                                                <span>other</span>
                                                <IoIosArrowDown className="text-base" />
                                            </summary>
                                            <ul className="menu dropdown-content bg-base-100 rounded-box shadow p-2 mt-1 w-full">
                                                <li>Bangladesh</li>
                                            </ul>
                                        </details>

                                        {/* This * now has pointer-events-none so it won't block clicks */}
                                        <h1 className="text-red-500 -ml-5 z-20 pointer-events-none">*</h1>
                                    </div>
                                </div>

                                <div className="">
                                    <h1>City:</h1>
                                    <div className='flex items-center gap-1'>
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            className="border rounded-sm  w-full p-1 border-gray-300 "
                                            placeholder=""
                                        />
                                        <span className="text-red-500 -ml-6">*</span>
                                    </div>
                                </div>

                                <button className='bg-black text-white rounded-sm px-4 py-2'>Estimate Shipping</button>


                            </div>
                        </div>
                    </div>
                    {/* right part */}
                    <div className='col-span-2 p-3'>
                        {/* Payment method */}
                        <div>
                            <h1 className='bg-black text-white'>Payment method</h1>
                            <div className='border rounded-sm shadow-md w-fit pr-20 py-4 pl-4'>
                                <div className='flex items-center gap-x-3'>
                                    <input type="radio" name="radio-8" className="radio radio-xs radio-warning" defaultChecked />
                                    <img src={payment} alt="" srcset="" />
                                    <div>
                                        <p className='text-sm'>Check / Money Order</p>
                                        <p className='text-sm'>Pay by cheque or money order</p>
                                    </div>

                                </div>
                            </div>

                            <p className='text-sm'>Mail Personal or Business Check, Cashier's Check or money order to:</p>
                            <p className='font-bold'>NOP SOLUTIONS</p>
                            <p className='font-bold text-sm'>your address here,</p>
                            <p className='font-bold '>New York, NY 10001 <br />
                                USA</p>
                            <p className='text-sm'>Notice that if you pay by Personal or Business Check, your order may be held for up to 10 days after we receive your check to allow enough time for the check to clear. If you want us to ship faster upon receipt of your payment, then we recommend your send a money order or Cashier's check.</p>
                            <p className='text-sm'>P.S. You can edit this text from admin panel.</p>
                        </div>

                        {/* Confirm order */}
                        <div >
                            <h1 className='bg-black text-white'>Payment method</h1>
                            <div className='grid grid-cols-2'>
                                <div>
                                    <h1 className='text-xl font-bold'>Billing Address</h1>
                                    <p>Email:</p>
                                    <h1 className='text-xl font-bold'>Payment</h1>
                                    <p>Payment Method: Check / Money Order</p>

                                </div>

                                <div>
                                    <h1 className='text-xl font-bold'>Shipping Address</h1>
                                    <p>Email:</p>
                                    <h1 className='text-xl font-bold'>Shipping</h1>
                                    <p>Shipping Method: Ground</p>

                                </div>

                            </div>

                            {/* order table  */}
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead className="bg-gray-400 text-black">
                                        <tr>
                                            <th>Image</th>
                                            <th>Products</th>
                                            <th>Qty.</th>
                                            <th>Total</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody className=''>
                                        {/* single row */}
                                        <tr>
                                            <td className="border border-gray-400">
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask  h-12 w-12">
                                                            <img
                                                                src={oven}
                                                                alt="Avatar Tailwind CSS Component"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="border border-gray-400">
                                                <h1 className="font-bold">
                                                    K2MG3EPYX - KONKA MICROWAVE OVEN (23 LITER)
                                                </h1>
                                                <p className="text-sm font-thin">SKU : K2MG3EPYX</p>
                                                <p className="text-sm font-thin">Price : $2,005.00 incl tax</p>
                                                <p className="text-sm font-thin">Color: Grey</p>
                                                <p className="text-sm font-thin">Size: Small</p>
                                                <button className="text-yellow-500">Remove</button>
                                            </td>
                                            <td className="border border-gray-400">
                                                <div className="bg-gray-200 flex gap-x-1 p-1 rounded-sm w-fit">
                                                    <h1 className="bg-white flex items-center py-0 px-5 rounded-sm">1</h1>
                                                    <div className="flex flex-col gap-1">
                                                        <button className="bg-white h-[15px] w-[15px] flex justify-center items-center">+</button>
                                                        <button className="bg-white h-[15px] w-[15px] flex justify-center items-center">-</button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="border border-gray-400">
                                                <p className="font-thin">$2,005.00 incl tax</p>
                                            </td>
                                            <td className="border border-gray-400 ">
                                                <div className='flex'><button className='mx-auto'><ImBin className="text-2xl" /></button></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>


                        </div>


                        {/* Checkout attributes */}

                        <div className='grid grid-cols-2 gap-x-3'>
                            <div>
                                <h1 className='bg-black text-white'>Checkout attributes</h1>
                                <div className='flex justify-between border-b-2 border-gray-400'>
                                    <h1 className='flex gap-x-1 items-center text-sm'><PiTrolleySuitcaseFill className='text-2xl' /> Discount</h1>
                                    <p className='text-red-600'>*</p>
                                </div>

                                <div>
                                    <div>
                                        <h1 className="text-white bg-black">Shape</h1>
                                        <div className="flex items-center gap-x-1  text-sm">
                                            <input
                                                type="radio"
                                                name="shape" // Different name to separate this group
                                                value="one"
                                                className="radio radio-xs radio-warning"
                                                checked={selectedDiscount === 'one'}
                                                onChange={() => setSelectedDiscount('one')}
                                            />
                                            <h1 className="">Shape-01</h1>
                                        </div>
                                        <div className="flex items-center gap-x-1  text-sm">
                                            <input
                                                type="radio"
                                                name="shape" // Different name to separate this group
                                                value="two"
                                                className="radio radio-xs radio-warning"
                                                checked={selectedDiscount === 'two'}
                                                onChange={() => setSelectedDiscount('two')}
                                            />
                                            <h1 className="">Shape-02</h1>
                                        </div>
                                        <div className='flex justify-between border-b-2 border-gray-400'>
                                            <h1 className='flex gap-x-1 items-center text-sm'><PiTrolleySuitcaseFill className='text-2xl' /> Gift Wrapping</h1>
                                            <p className='text-red-600'>*</p>
                                        </div>
                                        <details className="dropdown w-full">
                                            <summary className="w-full flex justify-between items-center bg-base-100 border rounded-sm border-gray-300 text-xs text-gray-600 p-2">
                                                <span>No</span>
                                                <IoIosArrowDown className="text-base" />
                                            </summary>
                                            <ul className="menu dropdown-content bg-base-100 rounded-box shadow p-2 mt-1 w-full">
                                                <li>No</li>
                                                <li>Yes</li>
                                            </ul>
                                        </details>
                                        <p>Discount: shape-01</p>
                                        <p>Gift wrapping: No</p>

                                        <h1 className='text-xl border-b-2'>Discount Code</h1>
                                        <h1>Enter your coupon here</h1>
                                        <div className='flex items-center'>
                                            <input type="text" name="" id="" className='border border-gray-400 rounded-sm w-full py-1' />
                                            <button className='bg-purple-600 text-white -ml-32 text-sm px-4 py-1 rounded-sm'>Apply Coupon</button>
                                        </div>
                                        <h1 className='text-xl border-b-2'>Gift Cards</h1>
                                        <h1>Enter gift card code</h1>
                                        <div className='flex items-center'>
                                            <input type="text" name="" id="" className='border border-gray-400 rounded-sm w-full py-1' />
                                            <button className='bg-purple-600 text-white -ml-32 text-sm px-4 py-1 rounded-sm'>Apply Coupon</button>
                                        </div>




                                    </div>
                                </div>


                            </div>

                            {/* confirm ********************************* */}
                            <div>
                                <div className='p-2 border border-yellow-400 shadow-md'>
                                    <div className='flex items-center justify-between'>
                                        <h1 className=''>Sub-Total:</h1>
                                        <h1 className=''>$3,960.00 incl tax</h1>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <h1 className=''>Shipping: (Ground)</h1>
                                        <h1 className=''>$10.00 incl tax</h1>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <h1 className=''>Tax:</h1>
                                        <h1 className=''>$0.00</h1>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <h1 className=''>Total:</h1>
                                        <h1 className='font-bold'>$3,970.00</h1>
                                    </div>

                                    <div className='flex  gap-x-2'>
                                        <input
                                            type="checkbox"
                                            checked={isCheckedTerms}
                                            onChange={(e) => setIsCheckedTerms(e.target.checkedTerms)}
                                            className={`checkbox checkbox-xs rounded-sm mt-1 ${isCheckedTerms
                                                ? " border-gray-300 text-gray-400"
                                                : "border-yellow-500"
                                                }`}
                                        />
                                        <p>I agree with the terms of service and I adhere to them unconditionally <button className="text-yellow-500" onClick={() => document.getElementById('my_modal_3').showModal()}>(read)</button></p>
                                    </div>

                                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                    
                                    <dialog id="my_modal_3" className="modal">
                                        <div className="modal-box">
                                            <form method="dialog" className='flex items-center bg-gray-300'>
                                                {/* if there is a button in form, it will close the modal */}
                                                <h3 className="font-bold text-lg">Terms of service</h3>
                                                <button className="  btn-ghost absolute right-8 text-sm font-bold rounded-sm px-1 bg-white">✕</button>
                                            </form>

                                            <p className="py-4">THIS SITE, NOP-STATION.COM, (HEREAFTER REFERRED TO AS NOPSTATION) IS A CONCERN OF BRAINSTATION-23 LTD. PLEASE CAREFULLY READ, REVIEW AND BE SURE YOU UNDERSTAND OUR TERMS OF USE PRIOR TO DOWNLOADING OR USING ANY OF THE MATERIALS OR PRODUCTS FROM NOP-STATION.COM. BY CHECKING THE “I HAVE READ AND AGREE TO THE END USER LICENSE AGREEMENT” BOX BEFORE PURCHASING A PRODUCT AND/OR BY PURCHASING, DOWNLOADING, INSTALLING OR OTHERWISE USING THE SOFTWARE MADE AVAILABLE BY NOPSTATION THROUGH THIS WEBSITE, YOU ACKNOWLEDGE (1) THAT YOU HAVE READ THIS AGREEMENT, (2) THAT YOU UNDERSTAND IT, (3) THAT YOU AGREE TO BE BOUND BY ITS TERMS AND CONDITIONS, AND (4) TO THE EXTENT YOU ARE ENTERING INTO THIS AGREEMENT ON BEHALF OF A COMPANY, YOU HAVE THE POWER AND AUTHORITY TO BIND THAT COMPANY.</p>
                                            <h1 className='text-4xl font-bold'>Terms and Definitions</h1>
                                            <p>nopStation is the only owner of all software rights for the software, made available through this web site, which rights are granted by the law of a jurisdiction, including right of property as well as exclusive author and interest rights.

                                                The software shall mean themes, templates, modules, plugins, apps, extensions or any other software made available by nopStation through this web site.
                                                You (or “Your”) or Licensee shall mean you or the company you represent and are authorized to bind.</p>
                                            <h1 className='text-4xl font-bold'>1. The Agreement Grant and the Software usage</h1>
                                            <p>nopStation grants you a nonexclusive, non-transferable, revocable, limited license to view, print and distribute content retrieved from the website in accordance with this LICENSE AGREEMENT.</p>
                                            <h2 className='text-xl font-bold'>1.1 Unauthorized Use</h2>
                                            <p>We strongly discourage you to offer our themes, plugins or any products to be modified or unmodified, for redistribution or resale of any kind without prior consent from nopStation.

                                                Creating any derivative works of the software, or disclosing the source codes of the software in any way, porting of the software to other software platforms and systems without prior written approval from nopStation is prohibited.</p>
                                            <h2 className='text-xl font-bold'>1.2 Assignability</h2>
                                            <p>The license key ensures updates from our servers. You may not sub-license, assign, or transfer this license to anyone else without prior consent from nopStation.</p>
                                            <h2 className='text-xl font-bold'>1.3 Ownership</h2>
                                            <p>You may not claim intellectual or exclusive ownership to any of our products, modified or unmodified. All products are the property of nopStation. Our products are provided “as is” without warranty of any kind, either expressed or implied. In no event shall our juridical person be liable for any damages including, but not limited to, direct, indirect, special, incidental or consequential damages or other losses arising out of the use of or inability to use our products.</p>
                                            <p>User Accounts and Product Licenses are not transferable.
                                                If you are a contractual developer or a representative of a person, please ask them to purchase the product from us directly. It saves time on both sides when we follow up support tickets.</p>

                                            <h2 className='text-xl font-bold'>1.4 Illegal Use</h2>
                                            <p>You may use the software from this website only for lawful purposes and in accordance with these Terms of Use. Transmission, distribution or storage of any material in violation of any applicable law or regulation is prohibited. This includes, without limitation, material protected by copyright, trademark, trade secret or other intellectual property right used without proper authorization, and material that is obscene, defamatory, constitutes an illegal threat, or violates export control laws. We will be the sole arbiters as to what constitutes a violation of this provision, provided that all such determinations shall be made reasonably in good faith based on applicable law, regulation and the accepted norms of the Internet community.</p>
                                            

                                            <h1 className='text-4xl font-bold'>2. The License Types</h1>
                                            <p className='text-xl font-bold'>2.1 Single URL License</p>
                                            <p>This terms and conditions section is applied only if you have obtained a Single URL License for the software from nopStation. They do not apply to your use if you have obtained a Multiple URL license.</p>
                                            <p>For the software, licensed under this Single Domain License, nopStation hereby grants to Licensee and Licensee hereby accepts, a non-transferable, non-sublicensable, perpetual, non-exclusive license (the “Single URL License”) to install and use this software and any accompanying documentation only on a single web site domain and by strictly adhering to the terms and conditions set forth in this Agreement.</p>
                                            
                                            <h2 className='text-xl font-bold'>
                                            2.2 Multiple URL License</h2>
                                            <p>or the software, licensed under this Single Domain License, nopStation hereby grants to Licensee and Licensee hereby accepts, a non-transferable, non-sublicensable, perpetual, non-exclusive license (the “Single URL License”) to install and use this software and any accompanying documentation only on a single web site domain and by strictly adhering to the terms and conditions set forth in this Agreement.</p>
                                            <p>For the software, licensed under this Multiple URL License, nopStation hereby grants to Licensee and Licensee hereby accepts, a non-transferable, non-sublicensable, perpetual, non-exclusive license (the “Multiple URL License”) to install and use this software and any accompanying documentation on one or several web site domains and by strictly adhering to the terms and conditions set forth in this Agreement.</p>

                                            <h2 className='text-xl font-bold'>3. Software Updates</h2>
                                            <p>If you have purchased the software licensed under the Single URL License or the Multiple URL License, you are entitled to free updates of the software within 365 days if there is any version upgrade from nopcommerce within the given time, condition added if the version is upgraded from nopStation. The 365 days time period will be counted since the date of purchasing the software. After that period you will get 50% discount for getting the latest version update of the respective product. Any version upgrade requires additional charge to upgrade from the current version.</p>

                                            <h2 className='text-xl font-bold'>4. Software Support</h2>
                                            <p>After purchasing any software licensed under the Single URL License or the Multiple URL License, you are entitled to a free software support 30 days after the date of purchasing the software. nopStation will provide an initial response (but not necessarily a resolution) to each support inquiry via support ticket from the website within twenty-four (24) hours of receipt of such support inquiry, and will resolve the issue as soon as is reasonably possible. You will lose the right to receive support after a 30 days period, unless you purchase additional support from nopStation at additional cost.</p>
                                            <p>All support inquiries must only be related to the software products offered on this web site.</p>
                                            
                                            <h2 className='text-xl font-bold'>5. Refund</h2>
                                            <p>Once the Software is delivered/downloaded we do not generally offer any refund. Before you purchase any Software make sure you have read carefully the description, specifications and all other information published on the software product page of the software product, which you intend to buy and that you have carefully tested the demo of the software product.</p>
                                            <p>However, if there are claims for refunds, nopStation will carefully examine every individual claim. nopStation will refund your purchase in 14 days after receiving your purchase refund claim, if it is found reasonable by nopStation.</p>
                                        </div>
                                    </dialog>

                                </div>
                            </div>
                        </div>



                    </div>

                </div>
            </div>

        </div>
    );
};

export default Checkout;