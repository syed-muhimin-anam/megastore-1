import React from 'react';

const Reviews = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold'>Existing reviews</h1>
            <hr />
            <div>
                <div className='bg-gray-200'>
                    <h1 className='font-bold'>good</h1>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-[10px]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-[10px]" defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-[10px]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-[10px]" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 h-[10px]" />
                    </div>
                </div>
                <div>
                    <p>Perfect</p>
                    <p>From: John Smith Date: 4/7/2020 7.55 PM</p>
                    <p>Was this review helpful?</p>
                </div>
                <div className='flex gap-x-5'>
                    <button className='bg-yellow-500 text-white px-5 py-2'>Yes </button>
                    <button className='bg-yellow-500 text-white px-5 py-2'>No </button>
                </div>

                <div className='flex gap-x-5'>
                    <h1> <span className='font-bold text-xl'>Yes:</span> 0</h1>
                    <h1> <span className='font-bold text-xl'>No:</span> 0</h1>
                </div>

                <p>Only registered users can write reviews</p>
            </div>

        </div>
    );
};

export default Reviews;