'use client';

import Marquee from 'react-fast-marquee';

const images = [
  '/marquee-images/images.png',
  '/marquee-images/Unknown.png',
  '/marquee-images/Unknown1.png',
  '/marquee-images/Unknown2.png',
  '/marquee-images/Unknown3.png',
  '/marquee-images/Unknown9.png'
];

export default function ImageMarquee() {
  return (
    <>
      <div className="w-full bg-white py-6 text-3xl font-unbounded text-purple-900 px-6">
        HIGHLIGHTING OUR SCHOOLS AWARDS – KIDZEE MONTESSORI
      </div>

      <div className="bg-purple-100 border border-purple-300 rounded-xl p-6 mx-4 flex flex-col md:flex-row items-start gap-6">
        {/* Left: Text */}
        <div className="md:w-1/2 text-left">
          <p className="font-open-sans text-red-700 text-lg leading-relaxed">
            As we head into our 46th year at Ghent Montessori School in Norfolk, Virginia, we look
            back and celebrate our incredible school community that is stronger than ever. We have
            supportive and committed families from many countries around the world who have come to
            GMS. We have an incredible staff with a shared vision. Our teachers have over 300 years
            of shared experience working with children, and our trained Montessori teachers have
            over 80 years of experience in Montessori education. We are inclusive and diverse,
            accepting children who have as many different learning styles and birth stories as there
            are children. We celebrate children as individuals and strive daily to meet their needs
            with joy and love. We are Ghent Montessori School, and we are proud of who we are!
          </p><br /><br />
          <br />
          <p className='font-open-sans text-red-700 text-lg leading-relaxed'>The Hampton Roads area, which includes the Naval Station Norfolk, has one of the largest military populations in the world, with over 46,000 active-duty military. We embrace our military families, even though this can be seen as a challenge in a Montessori school, where we want families committed to Montessori for more than a few years. We believe that the children of our military families, who must move often, benefit from Montessori education. When so much in these children’s lives change with a move, it is nice for them to transfer to another Montessori school where their education will stay somewhat the same. We take the challenge and embrace it because it benefits these children.</p>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2">
          <img
            src="/messi.jpeg"
            alt="Kidzee Preschool Legacy"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>
      </div>
      <p className='font-unbounded text-3xl text-shadow-red-300 pl-140'>
        Nepal's Most Recognized School for <br />
        <br /><button className="bg-light hover:bg-yellow-300 text-black font-unbounded px-6 py-2 rounded-xl shadow-md transition">
   2021 </button>
   <button className="bg-light hover:bg-yellow-300 text-black font-unbounded px-6 py-2 rounded-xl shadow-md transition">
   2022
  </button>
  <button className="bg-light hover:bg-yellow-300 text-black font-unbounded px-6 py-2 rounded-xl shadow-md transition">
   2023 </button>
      </p>

      {/* Marquee Section */}
      <div className="w-full bg-white py-6">
        <Marquee speed={60} pauseOnHover gradient={false}>
          {images.map((src, index) => (
            <div key={index} className="mx-6">
              <img
                src={src}
                alt={`Marquee Image ${index + 1}`}
                className="h-32 w-auto rounded-xl shadow-md object-cover"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
}
