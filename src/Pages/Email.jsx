import React from 'react';
import { Link } from 'react-router-dom';

const Email = () => {
    return (
        <div>
            {/*  Email a friend */}
            <div className='text-center bg-white py-[15px] shadow-[2px_3px_3px_rgba(119,118,121,0.25)]'>
            <h2 className='text-[24px] text-[#E6B534] font-semibold'>About us</h2>
            <div className='flex items-center justify-center text-black '>
                <Link to={'/'}> <p>Home</p></Link> <p className='mx-[5px]'> / </p> <p>Email a friend</p>
            </div>
        </div>

        <div class="shadow-[0_3px_8px_rgba(119,118,121,0.25)] rounded-[3px] my-[30px] mb-[60px] p-[15px] bg-[var(--white)] max-w-[1400px] min-h-[40vh] mx-auto list-inside">
            <div className='pt-[10px] pb-[35px] px-[35px]'>
                <p className='text-2xl text-yellow-500 underline'>Samsung RS74R5101SL Side by Side with SpaceMax Technology 676l</p>
                <fieldset className="fieldset">
                <label className="label flex justify-between">Friend's email:<span className='text-red-600 text-xl'>*</span></label>
          <input type="text"  className="input rounded-none w-full border-0 border-b-2 focus:border-black focus:outline-none" placeholder="Enter friend's email." />
          <label className="label flex justify-between">Your email address:<span className='text-red-600 text-xl'>*</span></label>
          <input type="email" className="input rounded-none w-full border-0 border-b-2 focus:border-black focus:outline-none" placeholder="Enter your email address." />
          <label className="label flex justify-between">Personal message:</label>
          <textarea className="textarea  border-0 w-full rounded-none border-b-2 focus:border-black focus:outline-none" placeholder="Enter personal message (optional)"></textarea>
          </fieldset>
          <button className="btn btn-neutral text-xl mt-3">Send email</button>
            </div>
        </div>
            
        </div>
    );
};

export default Email;