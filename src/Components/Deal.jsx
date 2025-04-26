
import background from '../assets/Deal/background.jpg';
import sale from '../assets/Deal/sale.jpg';
import Cards from './Cards';
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';


const Deal = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <div
            className="bg-cover bg-center h-[550px] p-5  w-full"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="flex gap-5">
                <div className='bg-base-100 p-5 rounded-md'>
                    {/* count down */}
                    <div className="grid grid-flow-col gap-5 text-center auto-cols-max ml-5 ">
                        <div className="flex flex-col">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": 15 }} aria-live="polite">
                                    15
                                </span>
                            </span>
                            days
                        </div>
                        <div className="flex flex-col">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": 10 }} aria-live="polite">
                                    10
                                </span>
                            </span>
                            hours
                        </div>
                        <div className="flex flex-col">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": 24 }} aria-live="polite">
                                    24
                                </span>
                            </span>
                            min
                        </div>
                        <div className="flex flex-col">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": 59 }} aria-live="polite">
                                    59
                                </span>
                            </span>
                            sec
                        </div>
                    </div>
                    {/* Image */}
                    <img
                        src={sale}
                        className="w-full object-cover max-h-[380px] mt-5"
                        alt="Sale"
                    />
                </div>


                <div>
                   <div className='flex justify-between'>
                   <h1 className='text-2xl'>Deal of the days</h1>  
                    {/* Custom Navigation Buttons */}
                            <div className="space-x-4  mb-4">
                                <button ref={prevRef} className="bg-yellow-500  text-white   rounded">
                                <MdKeyboardArrowLeft className='text-3xl' />
                                </button>
                                <button ref={nextRef} className="bg-yellow-500  text-white   rounded">
                                <MdKeyboardArrowRight className='text-3xl' />
                                </button>
                            </div>
                   </div>
                    <div className='flex'>
                        {/* <Cards></Cards> */}
                        <div className="relative w-[1100px]"> {/* Adjust width to fit your Cards */}
                           

                            {/* Swiper Slider with Cards */}
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={0}
                                loop={true}
                                speed={1000}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false,
                                }}
                                navigation={{
                                    prevEl: prevRef.current,
                                    nextEl: nextRef.current,
                                }}
                                onInit={(swiper) => {
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    swiper.params.navigation.nextEl = nextRef.current;
                                    swiper.navigation.init();
                                    swiper.navigation.update();
                                }}
                                modules={[Pagination, Autoplay, Navigation]} // Removed FreeMode
                                className="mySwiper"
                            >
                                {Array.from({ length: 5 }, (_, i) => (
                                    <SwiperSlide key={i}>
                                        <Cards />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deal;
