import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <>
        <div className='text-center bg-white py-[15px] shadow-[2px_3px_3px_rgba(119,118,121,0.25)]'>
            <h2 className='text-[24px] text-[#E6B534] font-semibold'>About us</h2>
            <div className='flex items-center justify-center text-black '>
                <Link to={'/'}> <p>Home</p></Link> <p className='mx-[5px]'> / </p> <p>Contact us</p>
            </div>
        </div>

        <div class="shadow-[0_3px_8px_rgba(119,118,121,0.25)] rounded-[3px] my-[30px] mb-[60px] p-[15px] bg-[var(--white)] max-w-[1400px] min-h-[40vh] mx-auto list-inside">
            <div className='pt-[10px] pb-[35px] px-[35px]'>
                <p>Put your contact information here. You can edit this in the admin site.</p>
                <fieldset className="fieldset">
                <label className="label flex justify-between">Your name:<span className='text-red-600 text-xl'>*</span></label>
          <input type="text"  className="input rounded-none w-full border-0 border-b-2 focus:border-black focus:outline-none" placeholder="Enter your name" />
          <label className="label flex justify-between">Your email:<span className='text-red-600 text-xl'>*</span></label>
          <input type="email" className="input rounded-none w-full border-0 border-b-2 focus:border-black focus:outline-none" placeholder="Enter your email address" />
          <label className="label flex justify-between">Subject:<span className='text-red-600 text-xl'>*</span></label>
          <input type="email" className="input rounded-none w-full border-0 border-b-2 focus:border-black focus:outline-none" placeholder="Enter subject" />
          <label className="label flex justify-between">Enquiry: <span className='text-red-600 text-xl'>*</span></label>
          <textarea className="textarea  border-0 w-full rounded-none border-b-2 focus:border-black focus:outline-none" placeholder="Enter your enquiry"></textarea>
          </fieldset>
          <button className="btn btn-neutral text-xl mt-3">Submit</button>
            </div>
        </div>


       
    </>
    );
};

export default ContactUs;