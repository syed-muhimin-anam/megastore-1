import img1 from '../../assets/about-us/0002420_icon-4.png';
import img2 from '../../assets/about-us/0002424_icon-3.png';
import img3 from '../../assets/about-us/0002425_icon-2.png';
import img4 from '../../assets/about-us/0002426_icon-1.png';

const Features = () => {
    return (
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
    );
};

export default Features;