'use client';
import Image from 'next/image';
import ScrollNav from '@/components/ScrollNav';

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
          <h1 className="text-3xl font-open-sans text-pink-400 hover:text-midnight-green">Welcome to</h1>
          <h2 className="text-6xl font-unbounded text-midnight-green hover:text-red-200">Montessori Home Page</h2>
          <p className="text-xl font-unbounded text-midnight-green hover:text-red-200">
            Empowering kids to code and create for the future.
          </p>
        </div>
      </div>

      {/* Section 1 */}
      <section id="section1" className="min-h-screen bg-green-100 px-12 py-16">
        <div className="flex flex-col items-center">
          <div className="flex flex-row w-full justify-center items-start gap-12">
            {/* Image on left */}
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

            {/* Text Box beside Image */}
            <div className="bg-midnight-green p-12 w-1/2 text-center rounded-3xl">
              <h1 className="text-5xl text-red-950 font-extrabold mb-4">Montessori Kinderworld</h1>
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

         
          <div className="flex justify-start mt-12">
            <div className="bg-midnight-green p-12 w-1/2 rounded-3xl">
              <p className="text-5xl text-red-400 font-stretch-expanded mb-4 ml-10">
                Montessori Kinderworld
              </p>
              <p className="text-2xl text-pink-300 text-left">
                <strong>Is</strong> the brand name of a chain of model pre-schools run by the Nepal Montessori Training Centre (NMTC). 
                The Montessori Kinderworld was founded in 2002 and currently operates five Branches. Montessori Kinderworld is Nepal’s first and largest Montessori Pre-school.At present there are more than 700 children ages beginning from 2 years until they are ready for primary school. After the establishment of the NMTC it was strongly felt that its trainees as well as the people interested to work in the early childhood education needed a place where they could practically observe the theories of child center education in reality. 
              </p>
            </div>
            <div className="w-1/2 flex justify-end">
              <Image
                src="/sam.jpg"
                alt="Kid learning"
                className="rounded-xl object-cover"
                width={500}
                height={500}
                priority
              />
            </div>
          </div>
        </div>
      </section>

    
      <section id="section2" className="min-h-screen bg-light-purple text-center py-16 relative">
  {/* Horizontal image stack */}
  <div className="relative z-10">
    <h1 className="text-3xl font-extrabold text-blue-950 mb-8">How Are We Different?</h1>
    <h2 className="text-xl font-open-sans text-pink-600 mb-8">Leader in Early Childhood Education</h2>
</div>
    

    <div className="flex flex-row justify-center items-center space-x-60 mb-8 ">
  <div className="flex flex-col items-center">
    <Image
      src="/teacher.png"
      alt="Teacher 1"
      width={100}
      height={100}
      className="rounded-xl object-cover"
      priority
    /> <br /> 
    <p className="mt-2 text-center text-xl  text-pink-400 font-unbounded">Dedicated Professional Team
    </p>
  </div>

  <div className="flex flex-col items-center">
    <Image
      src="/cap.png"
      alt="Teacher 2"
      width={100}
      height={100}
      className="rounded-xl object-cover"
      priority
    /> <br />
    <p className="mt-2 text-center text-xl  text-pink-400 font-unbounded">Best Appropriate Curriculum
    </p>
  </div>

  <div className="flex flex-col items-center">
    <Image
      src="/earth.png"
      alt="Teacher 3"
      width={100}
      height={100}
      className="rounded-xl object-cover"
      priority
    /> <br />
    <p className="mt-2 text-center text-xl text-pink-400 font-unbounded">Child Friendly Teaching Method
    </p>
  </div>

  <div className="flex flex-col items-center">
    <Image
      src="/love.png"
      alt="Teacher 4"
      width={100}
      height={100}
      className="rounded-xl object-cover"
      priority
    /> <br />
    <p className="mt-2 text-center text-xl text-pink-400 font-unbounded">Safe and Stimulating Environment
    </p>
  </div>
</div>
<br />

<div className='container text-4xl text-blue-950 text-center font-semibold ml-20'>Founder Director</div>
 
  <br /> <br />
  <div className="flex flex-row items-center ml-20">
  <Image
    src="/mam.jpg"
    alt="Messi"
    width={400}
    height={400}
    className="rounded-xl object-cover"
    priority
  />
  <div className="container text-2xl ml-36 bg-pink-100 p-12 w-1/2  text-center rounded-3xl">
  <h1 className='text-2xl text-green-800 font-extrabold font-open-sans'>Ms. Pawitra Limbu</h1>
  <br />
  <h2 className='text-xl font-serif text-blue-950'>FOUNDER DIRECTOR</h2> <br />
  <p className='text-shadow-xs text-rato font-open-sans text-left'>Premier International IB Continuum School, Montessori Kinderworld, Nepal Montessori Training Centre, Teach & More, Junkiree Nepal.  </p>
  <br />
  <p className='text-shadow-xs font-open-sans text-left text-rato'>Nepal Montessori  Training Centre (NMTC) is founded in 2001 by Ms. Pawitra Limbu (B.A., B.Ed., M.Ed., Diploma in Montessori Method of Education MMI, MCI London) who has a long experience of working in education field as school Principal, Director and teacher traine</p>
  </div>
</div>



  
</section>


      
      <section id="section3" className="h-screen bg-fuchsia-50">
        
      <div className=' relative w-full h-[600]'>
        
        <Image
          src="/contact.jpg"
          alt="contact" 
          
        
          className="rounded-xl object-cover relative w-min"
          fill
          priority
      
        />
        <div className='absolute top-[25%] left-[10%] z-10 flex flex-col text-white font-extrabold  text-4xl'>
          <p>Contact Us</p>
        </div>
        
        
      </div>
      <br />  
      <div className='bg-white text-orange-300 text-3xl font-light w-1/2 ml-96'>
        <p className='text-balck font-unbounded ml-96'>Contact US </p> <br />
        <h1 className='text-black text-center text-xl'>Please fill out the form below and one of our school representatives will contact you soon.
        </h1>
      </div>
     


      </section>
    </div>
  );
}
