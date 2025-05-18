'use client';

import Image from 'next/image';
import { useEffect, useState } from "react";
import program from "../../../public/sliding-images/program.jpeg";
import program2 from "../../../public/sliding-images/program2.jpeg";
import program3 from "../../../public/sliding-images/program3.jpeg";
import program4 from "../../../public/sliding-images/program4.jpeg";
import { div } from 'motion/react-client';

export default function ProgrammesPage() {
  const images = [program, program2, program3, program4];
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
  <div className='bg-fuchsia-50'>
    <div className="text-center p-4 ">
      <Image
        src={images[selectedImage]}
        width={410}
        height={400}
        alt="Slideshow"
        className="rounded-xl shadow-lg mx-auto"
      />

      <div className="mt-4 flex flex-col items-center gap-4">
        <div className="flex gap-4">
          <button
            onClick={() =>
              setSelectedImage((prev) =>
                prev > 0 ? prev - 1 : images.length - 1
              )
            }
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700"
          >
            PREV
          </button>
          <button
            onClick={() =>
              setSelectedImage((prev) => (prev + 1) % images.length)
            }
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700"
          >
            NEXT
          </button>
        </div>

        <p className="text-3xl text-cyan-900 font-serif text-center">
          Browse through our program highlights and get inspired!
        </p>
        <h1 className="text-l font-serif text-center">
          *As per RTE- Right to Education and NEP- National Education Policy from state to state.
        </h1>
        <h2>
          Children in this age group are identified as <strong>Toddlers.</strong> Kidzee’s playgroup
          <strong> age appropriate </strong>curriculum plays an important role in helping children
          continue their exploration.
        </h2>
        <h3 className="text-l font-serif text-left hover:bg-amber-200">
          At Kidzee, the Playgroup programme prepares a child for developmental and academic progress.
        </h3>
        <h4 className="text-l font-serif text-left">
          Playgroup curriculum provides a safe and stimulating environment for a child to learn and
          improve in all developmental domains.
        </h4>

        {/* Two-column section */}
        <div className="flex flex-col md:flex-row justify-between gap-12 px-4 w-full mt-6  bg-fuchsia-50">
          {/* Left Column */}
          <div className="md:w-1/2 mr-200">
            <p className="text-2xl font-semibold mb-2">Key Areas In Playgroup Curriculum</p>
            <ul className="list-disc list-inside text-gray-700 ml-4">
              <li>Promoting positive peer social interaction</li>
              <li>Opportunities for basic motor development</li>
              <li>Exploration based learning</li>
              <li>Math Readiness (Number Recognition)</li>
              <li>Language Readiness (Letter Recognition)</li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 text-left">
            <p className="text-2xl font-semibold mb-2">Kidzee Sessions
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 bg-fuchsia-50">
              <li>Circle Time
              </li>
              <li>Free Play
              </li>
              <li>Knowledge Time
              </li>
              <li>Language Time
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

    
  );
}
