import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import brandImg from "/brandImg.webp";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 md:py-4">
        <div className="navbar-start">
          {/* Mobile vide */}
          <div></div>

          {/* Mobile vide */}
          <a className="btn btn-ghost text-xl">
            <img src={brandImg} alt="" />
          </a>
        </div>
        {/* dekstop view  */}

        <div className="w-full">
          <label className="input input-bordered border flex items-center px-1 pl-2 w-3/5 shadow-md focus-within:outline-yellow-200">
            <input
              type="text"
              className="grow outline-none border-none focus:ring-0 focus:outline-none py-2"
              placeholder="Search Text"
            />
            <div className="p-2 rounded bg-yellow-400">
              <CiSearch className="text-white font-extrabold text-lg"></CiSearch>
            </div>
          </label>
        </div>

        <div className="navbar-end w-full max-w-sm gap-4 text-gray-700">
          <div className="flex flex-col gap-1">
            <div>
              <select className="select rounded  w-36 text-sm  border-0 outline-none focus:ring-0 focus:border-0 focus:outline-none">
                <option disabled selected>
                  Show The Price
                </option>
                <option>Shaw Prices Tag Exclusive</option>
                <option>Shaw Prices Tag Inclusive</option>
              </select>

              <select className="select w-28 text-sm  border-0 outline-none focus:ring-0 focus:border-0 focus:outline-none">
                <option disabled selected>
                  EURO
                </option>
                <option>US Dollar</option>
                <option>Euro</option>
              </select>
              <select className="select w-20 text-sm  border-0 outline-none focus:ring-0 focus:border-0 focus:outline-none">
                <option disabled selected>
                  En
                </option>
                <option>EN</option>
                <option>Ar</option>
              </select>
            </div>

            {/* wish list */}
            <div className="flex justify-around">
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


      <div className="bg-[#333333] flex justify-between md:px-10">
        <div className="flex gap-2 md:w-1/4 items-center justify-left bg-white/20 ">
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
                <a>Gift Cards</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
              <li>
                <a>Brands</a>
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
