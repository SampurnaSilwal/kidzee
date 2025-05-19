'use client';

import Image from 'next/image';
import graduate from '../../../public/newgraduate.png';

const Login = () => {
  return (
    <div className="w-full h-screen relative">
      {/* Background Image */}
      <Image
        src={graduate}
        alt="newgraduate"
        fill
        className="object-cover"
        priority
      />

      {/* Transparent Login Box */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="bg-white bg-opacity-30 backdrop-blur-md p-10 rounded-xl shadow-xl w-full max-w-md">
          <h1 className="text-2xl text-black mb-8 text-center font-bold">
            Apply for Admission Now
          </h1>

          <div className="w-full flex flex-col mb-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">Login</h3>
            <p className="text-sm mb-4">Welcome, please enter your details</p>

            <input
              type="email"
              placeholder="Email"
              className="w-full text-black py-3 px-4 mb-4 border border-black outline-none bg-white bg-opacity-60"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full text-black py-3 px-4 mb-6 border border-black outline-none bg-white bg-opacity-60"
            />

            <button className="bg-black text-white py-3 rounded hover:bg-gray-800 transition">
              Login
            </button>
          </div>

          <div className="text-sm text-center">
            Don&apos;t have an account?{' '}
            <span className="font-semibold underline underline-offset-2 cursor-pointer">
              Sign up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
