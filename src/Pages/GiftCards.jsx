import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import banner from "../assets/Gift-Cards/logo.jpg";
import boxLight from "../assets/Gift-Cards/Screenshot 2025-03-16 0box11652.png";
import wBoxDull from "../assets/Gift-Cards/Screenshot 2025-03-16 wide box dull011652.png";
import wBoxLight from "../assets/Gift-Cards/wBoxLight.png";
import boxDull from "../assets/Gift-Cards/boxDull.png";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";



const GiftCards = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [ManufacturersIsOpen, setManufacturersIsOpen] = useState(true);
    const [vendorsIsOpen, setVendorsIsOpen] = useState(true);
    const [selectedBox, setSelectedBox] = useState(true);
    return (
        <div>
            <div className="text-center bg-white py-[15px] shadow-[2px_3px_3px_rgba(119,118,121,0.25)]">
                <h2 className="text-[24px] text-[#E6B534] font-semibold">Gift Cards</h2>
                <div className="flex items-center justify-center text-black ">
                    <Link to={"/"}>
                        <p>Home</p>
                    </Link>
                    <p className="mx-[5px]"> / </p>
                    <p>Gift Cards</p>
                </div>
            </div>

            <div className="grid grid-cols-5">
                <div>
                    <div className="border border-base-300 bg-base-100 rounded-lg">
                        {/* Header with Toggle Button */}
                        <div
                            className="flex items-center justify-between cursor-pointer font-semibold"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span>Categories</span>
                            {isOpen ? (
                                <AiOutlineMinus className="w-5 h-5 text-gray-600" />
                            ) : (
                                <AiOutlinePlus className="w-5 h-5 text-gray-600" />
                            )}
                        </div>

                        {/* Collapsible Content */}
                        <div
                            className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <ul className=" text-sm space-y-1">
                                <li><a>Smart TV</a></li>
                                <li><a>Washing machine</a></li>
                                <li><a>Mixer Grinders</a></li>
                                <li><a>Cell Phones & Accessories</a></li>
                                <li><a>Cooking pan</a></li>
                                <li><a>Micro woven</a></li>
                                <li><a>Room heater</a></li>
                                <li><a>Home Appliances</a></li>
                                <li><a>Test category</a></li>
                                <li><a>Property</a></li>
                                <li><a>Computers</a></li>
                                <li><a>Camera & photo</a></li>
                                <li><a>Refrigerators</a></li>
                                <li><a>Cell phones</a></li>
                                <li><a>Others</a></li>
                                <li><a>Apparel</a></li>
                                <li><a>Digital downloads</a></li>
                                <li><a>Books</a></li>
                                <li><a>Jewelry</a></li>
                                <li><a>Gift Cards</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Manufacturers  222222222222222222222222222222222222222222222222222222222222222222 */}
                    {/* Manufacturers Section */}
                    <div className="border border-base-300 bg-base-100 rounded-lg">
                        {/* Header with Toggle Button */}
                        <div
                            className="flex items-center justify-between p-4 cursor-pointer font-semibold"
                            onClick={() => setVendorsIsOpen(!vendorsIsOpen)}
                        >
                            <span>Manufacturers</span>
                            {vendorsIsOpen ? (
                                <AiOutlineMinus className="w-5 h-5 text-gray-600" />
                            ) : (
                                <AiOutlinePlus className="w-5 h-5 text-gray-600" />
                            )}
                        </div>

                        {/* Collapsible Content */}
                        <div
                            className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${vendorsIsOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >

                            <ul className="p-4 text-sm space-y-1">
                                <li><a>Acer</a></li>
                                <li><a>Casio</a></li>
                                <li><a className="underline text-[#E6B534]">View All</a></li>
                            </ul>

                        </div>
                    </div>
                    {/* vendors Section */}
                    <div className="border border-base-300 bg-base-100 rounded-lg">
                        {/* Header with Toggle Button */}
                        <div
                            className="flex items-center justify-between p-4 cursor-pointer font-semibold"
                            onClick={() => setManufacturersIsOpen(!ManufacturersIsOpen)}
                        >
                            <span>Vendors</span>
                            {ManufacturersIsOpen ? (
                                <AiOutlineMinus className="w-5 h-5 text-gray-600" />
                            ) : (
                                <AiOutlinePlus className="w-5 h-5 text-gray-600" />
                            )}
                        </div>

                        {/* Collapsible Content */}
                        <div
                            className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${ManufacturersIsOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <ul className="p-4 text-sm space-y-1">
                                <li><a>Jaber Kibria</a></li>
                                <li><a>test vendor</a></li>
                                <li><a>COMPUTERS PTY LTD</a></li>
                                <li><a>NopStation 10</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* popular tag sections */}
                    <div className="border border-base-300 bg-base-100 rounded-lg p-4 flex flex-wrap gap-2">
                        <span className="border border-gray-400 p-2 rounded-sm">awesome</span>
                        <span className="border  border-gray-400 p-2 rounded-sm">camera</span>
                        <span className="border  border-gray-400 p-2 rounded-sm">cell</span>
                        <span className="border  border-gray-400 p-2 rounded-sm">compact</span>
                        <span className="border  border-gray-400 p-2 rounded-sm">cool</span>
                        <span className="border  border-gray-400 p-2 rounded-sm">electronics</span>
                        <span className="border  border-gray-400 p-2 rounded-sm">food </span>
                        <span className="border  border-gray-400 p-2 rounded-sm">gift</span>
                        <span className="border  border-gray-400 p-2 rounded-sm">nice</span>
                        <span className="border  border-gray-400 p-2 rounded-sm">t-shirt</span>

                    </div>




                </div>

                <div className="col-span-4">
                    <img src={banner} alt="Gift Cards Banner" />

                    <div>
                        <div className="flex justify-between">
                            <div>
                                <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn m-1">
                                        Sort by <IoIosArrowDown />
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                                    >
                                        <li><a>Position</a></li>
                                        <li><a>Name: A to Z</a></li>
                                        <li><a>Name: Z to A</a></li>
                                        <li><a>Price: Low to High</a></li>
                                        <li><a>Price: High to Low</a></li>
                                        <li><a>Created on</a></li>
                                    </ul>
                                </div>
                                <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn m-1">
                                        Display <IoIosArrowDown />
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                                    >
                                        <li><a>20</a></li>
                                        <li><a>40</a></li>
                                        <li><a>60</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <div className="flex gap-x-2">
                                    {/* First Image - Clicking it makes it light and the second one dull */}
                                    <div onClick={() => setSelectedBox(true)} className="cursor-pointer">
                                        <img src={selectedBox ? boxLight : boxDull} alt="Box 1" />
                                    </div>

                                    {/* Second Image - Clicking it makes it light and the first one dull */}
                                    <div onClick={() => setSelectedBox(false)} className="cursor-pointer">
                                        <img src={selectedBox ? wBoxDull : wBoxLight} alt="Box 2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Outlet></Outlet>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default GiftCards;
