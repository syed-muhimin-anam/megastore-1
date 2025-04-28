import React from 'react';

const Specification = () => {
    return (
        <div>
            <h1 className='text-2xl'>Products specifications</h1>
            <div>
               <div className='grid grid-cols-4 bg-gray-800 text-white'>
                    <h1>Attribute name</h1>
                    <h1>Attribute value</h1>
               </div>
               <div className='grid grid-cols-4'>
                   <div>
                    <h1>Color</h1>
                    <h1>Refrigerator</h1>
                    <h1>Doors</h1>
                   </div>

                   <div>
                   <div className='w-[15px] h-[15px] mt-2 bg-red-800 '></div>
                   <h1>&nbsp;</h1>
                   <h1>single</h1>
                   </div>
               </div>
            </div>
            
        </div>
    );
};

export default Specification;