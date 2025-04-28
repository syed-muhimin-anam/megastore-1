import React from 'react';
import brandImg from "../assets/New folder/brandImg.webp";
import { FaEnvelope, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { TiWiFi } from 'react-icons/ti';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
            <aside>
                <img src={brandImg} alt="" />
                <div className='flex gap-x-3'>
                    <div className='p-2 rounded-md bg-gray-800 text-white flex items-center justify-center text-2xl '><FaFacebookF /></div>
                    <div className='p-2 rounded-md bg-gray-800 text-white flex items-center justify-center text-2xl '><FaTwitter /></div>
                    <div className='p-2 rounded-md bg-gray-800 text-white flex items-center justify-center text-2xl '><TiWiFi className="rotate-45" /></div>
                    <div className='p-2 rounded-md bg-gray-800 text-white flex items-center justify-center text-2xl '><FaYoutube /></div>
                </div>

                <div>
                    <p>Newsletter</p>
                    <button className=' flex items-center gap-x-1 px-14 bg-yellow-500 rounded-sm text-white py-2'><FaEnvelope className='text-xl' />Subscribe</button>
                </div>
            </aside>
            <nav>
                <h6 className="text-xl font-bold text-black">Contact Us</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="text-xl font-bold text-black">Information</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="text-xl font-bold text-black">Customer service</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="text-xl font-bold text-black">My account</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
          
        </footer>
    );
};

export default Footer;