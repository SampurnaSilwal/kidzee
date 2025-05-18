'use client';
import Image from 'next/image';
import ScrollNav from '@/components/ScrollNav';
import Marquee from 'react-fast-marquee';
import { GrInstagram } from "react-icons/gr";
import { motion } from "framer-motion";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";





const MyComponent = ({ isVisible }: { isVisible: boolean }) => {
  return isVisible ? <div>Visible</div> : null;
};

export default function Page() {
  return (
    <div>
      <ScrollNav />

      <div className="relative w-full h-screen">
        <Image
          src="/homepage.jpg"
          alt="Kid learning"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-white text-center">
          <h1 className="text-3xl font-open-sans text-pink-400 hover:text-midnight-green">
            Welcome to
          </h1>
          <h2 className="text-6xl font-unbounded text-midnight-green hover:text-red-200">
            Montessori Home Page
          </h2>
          <p className="text-xl font-unbounded text-midnight-green hover:text-red-200">
            Empowering kids to code and create for the future.
          </p>
        </div>
      </div>

      <section id="section1" className="min-h-screen bg-fuchsia-50 px-12 py-16">
        <div className="flex flex-col items-center">
          <div className="flex flex-row w-full justify-center items-start gap-12">
            <div>
              <Image
                src="/homepic.png"
                alt="Kid learning"
                className="object-cover rounded-lg"
                width={500}
                height={500}
                priority
              />
            </div>
            <div className="bg-midnight-green p-12 w-1/2 text-center rounded-3xl">
              <h1 className="text-5xl font-serif text-red-950 font-extrabold mb-4">Montessori Kinderworld</h1>
              <p className="text-2xl text-pink-400 font-normal mb-4">
                We provide the best early childhood education with experienced staff and a nurturing environment.
              </p>
              <h2 className="text-2xl font-serif text-pink-400 text-center">
                Montessori Kinderworld is run by a team of dedicated teachers who have years of experience working with children.
                They are either chosen among the best trainees of the NMTC or being hired and trained due to their excellent aptitude
                and skills required to be a teacher.
              </h2>
            </div>
          </div>

          <div className="flex justify-start mt-12 w-full gap-12">
            <div className="bg-midnight-green p-12 w-1/2 rounded-3xl">
              <p className="text-5xl font-serif text-red-950 font-bold mb-4 ml-10">
                Montessori Kinderworld
              </p>
              <p className="text-2xl text-pink-400 text-center ">
                <strong>Is</strong> the brand name of a chain of model pre-schools run by the Nepal Montessori Training Centre (NMTC).
                Founded in 2002, Montessori Kinderworld is Nepal’s first and largest Montessori Pre-school. It operates five branches
                and serves over 700 children starting from age 2. The NMTC created it as a practical environment to demonstrate
                child-centered education.This way the childern can study well as well as develop their mind from the early age which helps them in the future.
              </p>
            </div>
            <div className="w-1/2 flex justify-end">
              <Image
                src="/sam.jpg"
                alt="Child learning"
                className="rounded-xl object-cover"
                width={500}
                height={500}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section id="section2" className="min-h-screen bg-purple-100 text-center py-16 relative">
        <div className="relative z-10">
          <h1 className="text-3xl font-unbounded text-blue-950 mb-8">How Are We Different?</h1>
          <h2 className="text-xl font-open-sans text-pink-600 mb-8">Leader in Early Childhood Education</h2>
        </div>

        <div className="flex flex-row justify-center items-center space-x-20 mb-8">
          {[
            { src: "/teacher.png", label: "Dedicated Professional Team" },
            { src: "/cap.png", label: "Best Appropriate Curriculum" },
            { src: "/earth.png", label: "Child Friendly Teaching Method" },
            { src: "/love.png", label: "Safe and Stimulating Environment" },
          ].map((item, index) => (
            <div className="flex flex-col items-center" key={index}>
              <Image
                src={item.src}
                alt={item.label}
                width={100}
                height={100}
                className="rounded-xl object-cover"
                priority
              />
              <p className="mt-2 text-center text-xl text-pink-400 font-unbounded">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="text-4xl text-blue-950 font-semibold mb-10 font-serif">Founder Director</div>

        {/* ✅ Motion Added Here */}
        <motion.div
          className="flex flex-row items-center justify-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image
            src="/mam.jpg"
            alt="Founder"
            width={400}
            height={400}
            className="rounded-xl object-cover"
            priority
          />
          <div className="container text-2xl ml-36 bg-pink-100 p-12 w-1/2  text-center rounded-3xl">
            <h1 className='text-2xl text-green-800 font-extrabold font-open-sans text-left'>Ms. Pawitra Limbu</h1>
            <br />
            <h2 className='text-xl font-serif text-blue-950 text-left'>FOUNDER DIRECTOR</h2> <br />
            <p className='text-shadow-xs text-red-950 font-open-sans text-left'>Premier International IB Continuum School, Montessori Kinderworld, Nepal Montessori Training Centre, Teach & More, Junkiree Nepal.  </p>
            <br />
            <p className='text-shadow-xs font-open-sans text-left text-red-950'>Nepal Montessori  Training Centre (NMTC) is founded in 2001 by Ms. Pawitra Limbu (B.A., B.Ed., M.Ed., Diploma in Montessori Method of Education MMI, MCI London) who has a long experience of working in education field as school Principal, Director and teacher trainee</p>
          </div>
        </motion.div>
      </section>

      <section id="section4" className="min-h-screen bg-fuchsia-50 text-center py-16 relative">
        <div className='text-center font-serif font-bold text-red-900 text-3xl'> Our Branches</div> <br />
        <p className='text-xl font-open-unbounded text-gray-500 '>We are located in all the major area of Kathmandu Lalitpur & Bhaktapur</p> <br /><br />
        <div className="flex flex-row justify-center items-center gap-8 mb-8 ml-10 border-amber-300">
  {["/school1.jpeg", "/school2.png", "/school3.jpeg", "/school4.png", "/school5.png"].map((src, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <Image
        src={src}
        alt={`school${index + 1}`}
        className="rounded-xl shadow-xl"
        height={300}
        width={300}
        priority
      />
    </motion.div>
  ))}
</div>
     
        <p className='text-5xl text-gray-700 font-bold font-stretch-ultra-condensed'>
          OUR SISTER ORGANIZATIONS
        </p> <br />
        <div className="bg-fuchsia-50 py-10 rounded-2xl">
          <Marquee pauseOnHover={true} speed={100}>
            {[
              "/h1.png", "/h2.jpeg", "/h3.png", "/h4.png", "/h5.jpeg", "/h6.png", "/h7.jpeg",
              "/h8.png", "/h9.png", "/h10.jpeg", "/h11.png"
            ].map((src, index) => (
              <div key={index} className="mx-8">
                <img
                  src={src}
                  alt={`h${index + 1}`}
                  className="h-24 w-auto object-contain hover:scale-105 transition-transform duration-300 rounded-xl"
                />
              </div>
            ))}
          </Marquee>
        </div>

        <section id="section3" className="min-h-screen bg-fuchsia-50">
          <div className="relative w-full h-[600px]">
            <Image
              src="/contact111.png"
              alt="contact"
              fill
              className="object-cover rounded-xl"
              priority
            />
            
          </div>

          <div className="bg-white text-orange-300 text-3xl font-light w-full md:w-1/2 mx-auto mt-10 p-6 rounded-xl shadow-lg">
            <p className="text-red-950 font-unbounded text-center text-4xl mb-4">Contact Us</p>
            <h1 className="text-center text-base text-gray-700 mb-6">
              Please fill out the form below and one of our school representatives will contact you soon.
            </h1>

            <form className="space-y-4">
              <input type="text" placeholder="Enter your First Name" className="w-full px-4 py-3 rounded-xl border border-purple-400 text-black outline-none text-xl font-unbounded" />
              <input type="text" placeholder="Enter your Middle Name" className="w-full px-4 py-3 rounded-xl border border-purple-400 text-black outline-none text-xl font-unbounded" />
              <input type="tel" placeholder="Enter your Phone Number" className="w-full px-4 py-3 rounded-xl border border-purple-400 text-black outline-none text-xl font-unbounded" />
              <input type="text" placeholder="Enter your Address" className="w-full px-4 py-3 rounded-xl border border-purple-400 text-black outline-none text-xl font-unbounded" />
              <button type="submit" className="w-1/4 mt-4 bg-yellow-700 hover:bg-green-700 text-white font-semibold py-3  text-xl rounded-xl font-unbounded m-0">
                Submit
              </button>
            </form>
          </div>
        </section>

        <br /> <br />
        <div className="w-full h-px bg-rato mb-4"></div> 
        <div className='px-8 '>
          <div className="flex justify-between items-center relative h-[200px]">
            <Image
              src="/newlogo.png"
              alt="logo"  
              className="rounded-xl absolute -top-1/6 "
              height={300}
              width={300}
              priority
            />  
            <div className="flex items-start justify-between  gap-40  mt-6">
  <div className="pt-10 text-left"> <br />
    <h1 className="text-xl font-open-sans text-gray-800 ">Zee Learning Limited</h1>
    <p>135, Continental Building, B wing, Worli,</p>
    <p>Dhumbarahi, Kathmandu 4</p>
    <p>Mumbai, Maharashtra 400 018</p>
  </div>  
  <div className="flex flex-col gap-4">
  <div className="flex items-center gap-2">
    <MdOutlineMailOutline className="w-7 h-7 text-blue-600" />
    <span className='font-serif'>Email</span>
  </div>

  <div className="flex items-center gap-2">
    <GrInstagram className="w-7 h-7 text-pink-600" />
    <span className='font-serif'>Instagram</span>
  </div>

  <div className="flex items-center gap-2">
    <FaFacebookF className="w-7 h-7 text-blue-700" />
    <span className='font-serif'>Facebook</span>
  </div>

  <div className="flex items-center gap-2">
    <FaLinkedinIn className="w-7 h-7 text-blue-500" />
    <span className='font-serif'>LinkedIn</span>
  </div>
</div>
  
<div className='flex flex-col gap-4'>
<p className='text-xl font-unbounded'>Contact Details</p>
    <div className='flex items-center gap-2'>
     
    <FaLocationDot className='flex items-center gap-2 w-7 h-7 text-blue-500' />
    <span>MKW Elementary</span>
    
    </div>
    <div className='flex items-center gap-2'>
    <FaLocationDot className='flex items-center gap-2 w-7 h-7 text-blue-500' />
    <span className='font-serif'>MKW Baneshwor Height</span>
</div>
<div className='flex items-center gap-2'>
    <FaLocationDot className='flex items-center gap-2 w-7 h-7 text-blue-500' />
    <span className='font-serif'>MKW Jhamsikhel</span>
</div>
<div className='flex items-center gap-2'>
    <FaLocationDot className='flex items-center gap-2 w-7 h-7 text-blue-500' />
    <span className='font-serif'>MKW Tahachal</span>
</div>

    
    </div>
    
    <div>
      <p className='text-xl font-unbounded'>SUBSCRIBE</p>
      <br />
      <form>
        <input type="text" placeholder="Email" className="w-100 px-2  border border-purple-400 text-black outline-none text-l font-unbounded" />
        <button type="submit" className="w-1/4 mt-4 bg-gray-700 hover:bg-green-700 text-white font-semibold py-3  text-l font-unbounded m-0 ml-12"> I Am In!</button>
        <br /> <br />    
        <div className="flex items-center space-x-2">
          
        <div className="w-full flex justify-end mr-36">
  <div className='flex items-centre gap-2'>
    <input
      type="checkbox"
      id="agree"
      className="w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-400"
    />
    <label htmlFor="agree" className="text-sm text-gray-700 font-open-sans">
      I agree to the terms and conditions
    </label>
  </div>
</div>

  
</div>

      </form>
    </div>
  
</div>

          </div>
        </div>
      </section>
    </div>
  );
}
