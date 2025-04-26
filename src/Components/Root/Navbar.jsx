import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import brandImg from "/brandImg.webp";
import { FaArrowAltCircleDown, FaArrowDown, FaRegArrowAltCircleDown, FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaArrowDown91 } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";
const Navbar = () => {
  return (
    <div>
      <div className="navbar  md:px-[40px] ">
        <div className="navbar-start">
          {/* Mobile vide */}
          <div></div>

          {/* Mobile vide */}
          <a className="btn btn-ghost text-xl">
            <img src={brandImg} alt="" className="w-[129px] h-[70px]" />
          </a>
        </div>
        {/* dekstop view  */}

        <div className="w-full">
          <label className="input input-bordered border flex items-center px-1 pl-2 w-[490px] shadow-md focus-within:outline-yellow-500 focus-within:outline-2 focus-within:outline">
            <input
              type="text"
              className="grow outline-none border-none focus:outline-none focus:ring-0 py-2"
              placeholder="Search Store"
            />
            <div className="p-2 rounded bg-yellow-500">
              <CiSearch className="text-white font-extrabold text-lg" />
            </div>
          </label>

        </div>

        <div className="navbar-end w-full max-w-sm gap-4 text-gray-700">
          <div className="flex flex-col ">
            <div className="flex justify-between">

              <details className="dropdown">
                <summary className="btn bg-none border-none shadow-none bg-base-100  text-xs text-gray-600 p-5">Show prices tax inclusive <IoIosArrowDown /> </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1]  p-2 shadow">
                  <li><a className="text-xs text-gray-700">Shaw Prices Tag Exclusive</a></li>
                  <li><a className="text-xs text-gray-700">Shaw Prices Tag Exclusive</a></li>
                </ul>
              </details>

              <details className="dropdown">
                <summary className="btn bg-none border-none shadow-none bg-base-100 text-xs text-gray-600 p-5">US Dollar<IoIosArrowDown /> </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1]  p-2 shadow">
                  <li ><a>US Dollar</a></li>
                  <li><a>Euro</a></li>
                </ul>
              </details>

              <details className="dropdown">
                <summary className="btn bg-none border-none shadow-none bg-base-100  text-xs text-gray-600 p-0">EN<IoIosArrowDown /> </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1]  p-2 shadow">
                  <li><a>EN</a></li>
                  <li><a>AR</a></li>
                </ul>
              </details>



            </div>

            {/* wish list */}
            <div className="flex justify-end space-x-5 mb-1">
              <div className="flex justify-center items-center gap-1">
                <CiHeart className="text-yellow-500 text-3xl font-extrabold"></CiHeart>
                <p className="text-gray-600 hover:text-yellow-500">
                  Wish List (0)
                </p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <FaUserCircle className="text-yellow-500 text-2xl font-extrabold"></FaUserCircle>
                <p className="text-gray-600 hover:text-yellow-500">Account</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-[#333333] flex justify-between md:px-12">
        <div className="flex gap-2 md:w-1/5 items-center justify-left bg-white/20 ">
          <div className="dropdown dropdown-hover text-white">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
          <h2 className="text-white font-semibold">Categories</h2>
        </div>


        <div>
          <ul
            tabIndex={0}
            className="flex gap-4 text-white  mt-2  "
          >
            <li>
              <NavLink to={'about-us'}>About us</NavLink>
            </li>
            <li>
              <NavLink to={'gift-cards'}>Gift Cards</NavLink>
            </li>
            <li>
            <NavLink to={'contact-us'}>Contact us</NavLink>
            </li>
            <li>
              {/* <a className="flex items-center justify-center">Brands </a> */}
              <div className="dropdown dropdown-hover bg-none">
                <div tabIndex={0} role="button " className="btn m-1 bg-[#333333] border-none shadow-none text-white ">Brands <RiArrowDownSLine className="text-2xl"/></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 z-[1] w-[1420px] -ml-[1220px] p-2 shadow text-black grid grid-cols-5  [&>li>a:hover]:bg-transparent">
                  <li><a>Sony</a></li>
                  <li><a>Apple</a></li>
                  <li><a>Casio</a></li>
                  <li><a>Philips</a></li>
                  <li><a>Acer</a></li>
                  <li><a>Panasonic</a></li>
                </ul>
              </div>
            </li>
            <li>
              <a>Samsang</a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
