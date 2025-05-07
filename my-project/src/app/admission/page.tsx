import Image from 'next/image';
import graduate from '../../../public/graduate.jpg';

const Login = () => {
  return (
    <div className="w-full h-screen flex">

      <div className="relative w-1/2 h-full">
        <Image
          src={graduate}
          alt="graduate"
          className="object-cover"
          fill
        />
        <div className="absolute top-[25%] left-[10%] z-10 flex flex-col text-white">
          <h1 className="text-2xl font-bold my-4">Turn ideas into reality</h1>
          <p className="text-xl font-normal">This is the admission page for the kids</p>
        </div>
      </div>


      <div className="w-1/2 h-full bg-blue-200 flex flex-col p-20 justify-center">
        <h1 className="text-2xl text-black mb-8">Apply for Admission Now</h1>

        <div className="w-full flex flex-col mb-8">
          <h3 className="text-2xl font-semibold mb-2">Login</h3>
          <p className="text-sm mb-4">Welcome, please enter your details</p>

          <input
            type="email"
            placeholder="Email"
            className="w-full text-black py-3 px-4 mb-4 border border-black outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full text-black py-3 px-4 mb-6 border border-black outline-none"
          />

          <button className="bg-black text-white py-3 rounded hover:bg-gray-800 transition">Login</button>
        </div>

        <div className="text-sm text-center">
          Don't have an account?{' '}
          <span className="font-semibold underline underline-offset-2 cursor-pointer">
            Sign up
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
