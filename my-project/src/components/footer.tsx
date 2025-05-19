"use client";

import Image from "next/image";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF, FaLinkedinIn, FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='px-8 bg-gray-100 py-8'>
      <div className="flex justify-between items-start relative">
        <div className="absolute -top-6  left-0">
          <Image
            src="/newlogo.png"
            alt="logo"
            className="rounded-xl"
            height={180}
            width={180}
            priority
          />
        </div>

        <div className="flex items-start justify-between gap-28 ml-[200px] w-full">
          <div className="text-left text-l font-serif">
            <h1 className="text-l text-gray-800 font-serif ">Zee Learning Limited</h1>
            <p>135, Continental Building, B wing, Worli,</p>
            <p>Dhumbarahi, Kathmandu 4</p>
            <p>Mumbai, Maharashtra 400 018</p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <MdOutlineMailOutline className="w-6 h-6 text-blue-600" />
              <span className='font-serif'>Email</span>
            </div>
            <div className="flex items-center gap-2">
              <GrInstagram className="w-6 h-6 text-pink-600" />
              <span className='font-serif'>Instagram</span>
            </div>
            <div className="flex items-center gap-2">
              <FaFacebookF className="w-6 h-6 text-blue-700" />
              <span className='font-serif'>Facebook</span>
            </div>
            <div className="flex items-center gap-2">
              <FaLinkedinIn className="w-6 h-6 text-blue-500" />
              <span className='font-serif'>LinkedIn</span>
            </div>
          </div>

          <div className='flex flex-col gap-3'>
            <p className='text-xl font-unbounded'>Contact Details</p>
            {["MKW Elementary", "MKW Baneshwor Height", "MKW Jhamsikhel", "MKW Tahachal"].map((location, idx) => (
              <div key={idx} className='flex items-center gap-2'>
                <FaLocationDot className='w-6 h-6 text-blue-500' />
                <span className='font-serif'>{location}</span>
              </div>
            ))}
          </div>

          <div>
            <p className='text-xl font-unbounded mb-2'>SUBSCRIBE</p>
            <form>
              <input
                type="text"
                placeholder="Email"
                className="w-full px-3 py-2 border border-purple-400 text-black outline-none text-base font-unbounded rounded"
              />
              <button
                type="submit"
                className="w-full mt-3 bg-gray-700 hover:bg-green-700 text-white font-semibold py-2 rounded-2xl text-base font-unbounded"
              >
                I Am In!
              </button>
              <div className="mt-4 flex items-start gap-2">
                <input
                  type="checkbox"
                  id="agree"
                  className="w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-400 mt-1"
                />
                <label htmlFor="agree" className="font-open-sans text-black text-sm">
                  I agree to the terms and conditions
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
