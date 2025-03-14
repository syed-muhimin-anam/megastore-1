import React from 'react';
import img1 from '../assets/about-us/0002420_icon-4.png';
import img2 from '../assets/about-us/0002424_icon-3.png';
import img3 from '../assets/about-us/0002425_icon-2.png';
import img4 from '../assets/about-us/0002426_icon-1.png';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <>
            <div className='text-center bg-white py-[15px] shadow-[2px_3px_3px_rgba(119,118,121,0.25)]'>
                <h2 className='text-[24px] text-[#E6B534] font-semibold'>About us</h2>
                <div className='flex items-center justify-center text-black '>
                    <Link to={'/'}> <p>Home</p></Link> <p className='mx-[5px]'> / </p> <p>About us</p>
                </div>
            </div>

            <div class="shadow-[0_3px_8px_rgba(119,118,121,0.25)] rounded-[3px] my-[30px] mb-[60px] p-[15px] bg-[var(--white)] max-w-[1400px] min-h-[40vh] mx-auto list-inside">
                <div className='pt-[10px] pb-[35px] px-[35px]'>

                    <h3 className='font-bold text-xl mb-[15px]'>We Deliver Splendid nopCommerce Stores
                    </h3>
                    <p className='mb-[15px]'>About nopStation.</p>

                    <p className='mb-[15px]'>As a concern of BrainStation-23 we have a dedicated e-commerce (nopCommerce) team providing e-commerce solutions (both web and mobile) to the e-commerce store owners. We have been helping local and global eCommerce businesses for more than 10 years now. We have 3 nopMVPs (nopCommerce most valuable person awarded by the nopCommerce team) in the team along with 52+ certified developers. We have now 60+ people team with the talented front-end, backend, and database developers. At the same time, we have our free and premium products which can help you to build an excellent sales-driven online shop in the shortest time possible. We have our unique native apps nop mobile apps for iOS, Android, and windows platform which will help the store owners to release native apps for their shop in no time. Therefore, we help e-commerce businesses making the best imaginable e-commerce site possible for their desired customization with our MVP developers (declared by NopCommerce) to acquire the highest customer satisfaction.</p>
                    <h2 className='mb-[15px] text-lg font-semibold italic'>No compromise to quality</h2>
                    <p className='mb-[15px]'>From the very beginning, nopStation has maintained 4 basic functionalities which are - honesty & transparency, defined recruitment & training of the developers, direct communication with the developer while a project is running and finally 100% overlapping time for any project. All these four elements altogether accompanied nopStation to help the top quality service & products of nopCommerce from the very beginning. nopStation is also a name for a loyal, adaptive, and safe offshore software development center that gets adapted to one's IT and business practices, methods, and culture. By leveraging enormous assets of highly qualified Software Engineers and a well-defined and robust infrastructure.</p>
                </div>
            </div>


            <div className=' my-[36px]'>
                <div className='grid grid-cols-4 gap-x-4 mx-[40px] items-center justify-center'>


                    <div className="border border-[#e1e5e8] shadow-[0_2px_8px_rgba(0,0,0,.1)] p-[10px_15px] rounded-[3px] mb-[10px]">
                        <div className="grid grid-cols-5 justify-center items-center">
                            <div className="border-2 border-[#7359bb] rounded-full w-[53px] p-2">
                                <img src={img1} alt="Support 24/7" className="mx-auto" />
                            </div>

                            <div className="col-span-4 w-full max-w-[300px]">
                                <h3 className="text-[13px] font-semibold">Support 24/7</h3>
                                <p className="text-[14px] overflow-hidden overflow-ellipsis whitespace-nowrap">
                                    Lorem ipsum dolor sit amet, ei vix <br /> mucius nominavi, sea ut causae regione
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="border border-[#e1e5e8] shadow-[0_2px_8px_rgba(0,0,0,.1)] p-[10px_15px] rounded-[3px] mb-[10px]">
                        <div className="grid grid-cols-5 justify-center items-center">
                            <div className="border-2 border-[#7359bb] rounded-full w-[53px] p-2">
                                <img src={img2} alt="Support 24/7" className="mx-auto" />
                            </div>

                            <div className="col-span-4 w-full max-w-[300px]">
                                <h3 className="text-[13px] font-semibold">Support 24/7</h3>
                                <p className="text-[14px] overflow-hidden overflow-ellipsis whitespace-nowrap">
                                    Lorem ipsum dolor sit amet, ei vix <br /> mucius nominavi, sea ut causae regione
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="border border-[#e1e5e8] shadow-[0_2px_8px_rgba(0,0,0,.1)] p-[10px_15px] rounded-[3px] mb-[10px]">
                        <div className="grid grid-cols-5 justify-center items-center">
                            <div className="border-2 border-[#7359bb] rounded-full w-[53px] p-2">
                                <img src={img3} alt="Support 24/7" className="mx-auto" />
                            </div>

                            <div className="col-span-4 w-full max-w-[300px]">
                                <h3 className="text-[13px] font-semibold">Support 24/7</h3>
                                <p className="text-[14px] overflow-hidden overflow-ellipsis whitespace-nowrap">
                                    Lorem ipsum dolor sit amet, ei vix <br /> mucius nominavi, sea ut causae regione
                                </p>
                            </div>
                        </div>
                    </div>

                       <div className="border border-[#e1e5e8] shadow-[0_2px_8px_rgba(0,0,0,.1)] p-[10px_15px] rounded-[3px] mb-[10px]">
                        <div className="grid grid-cols-5 justify-center items-center">
                            <div className="border-2 border-[#7359bb] rounded-full w-[53px] p-2">
                                <img src={img4} alt="Support 24/7" className="mx-auto" />
                            </div>

                            <div className="col-span-4 w-full max-w-[300px]">
                                <h3 className="text-[13px] font-semibold">Support 24/7</h3>
                                <p className="text-[14px] overflow-hidden overflow-ellipsis whitespace-nowrap">
                                    Lorem ipsum dolor sit amet, ei vix <br /> mucius nominavi, sea ut causae regione
                                </p>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </>
    );
};

export default AboutUs;