import React from 'react';

const Tags = () => {
    return (
        <div>
            <h1 className='text-2xl'>Product Tags</h1>

            <div className='flex gap-x-4'>
                <button className='border border-gray-300 px-4 py-1 rounded-sm'>awesome (135)</button>
                <button className='border border-gray-300 px-4 py-1 rounded-sm'>compact (135)</button>
                <button className='border border-gray-300 px-4 py-1 rounded-sm'>cell (135)</button>
            </div>
            
        </div>
    );
};

export default Tags;