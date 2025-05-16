import Image from "next/image";
import ScrollNav from "@/components/ScrollNav";
import { Oi } from 'next/font/google';

const oi = Oi({
  weight: '400',
  subsets: ['latin'],
});


export default function Page() {
  return (
    <div className="">
      <ScrollNav />
      
      

      <div className="relative w-full">
       
   
        <Image
          src="/pant4.png"
          alt="Péntemind"
          className="w-full"
          height={300}
          width={300}
          priority
          
          
        />
        

        <Image
          src="/pant.png"
          alt="Péntemind"
          className="rounded-xl absolute top-10 right-10 "
          height={400}
          width={400}
          priority
        />
         <div>
         <p className={`${oi.className} text-4xl  absolute top-1/5 pl-32 text-center text-fuchsia-200`}>
         Péntemind
</p>

        </div>
      </div>
      <div>
        <br />
        <p className="text-xl text-left text-gray-500 ml-22 font-serif">Our pedagogy Péntemind - The Learning Minds, resonates the belief that <strong>"the empires of the future will be empires of the mind,"</strong> as eloquently stated by Winston Churchill. Inspired by this profound insight, Péntemind is dedicated to nurturing the 'Learning Minds' in every child with a vision of creating life long learners, by fostering their holistic development in an engaging and inspiring manner.

</p>
<br />
        <p className=" text-xl text-left text-gray-500 ml-22 font-serif">Péntemind, aims to shape future global leaders with a mindset of <strong>'We First' rather than 'Me First,'</strong> instilling in them the <strong>values of collaboration, empathy, and constructive contribution to society.</strong> Through guided discovery, we empower children to become adaptive, critically diligent individuals who are poised to make a positive impact on the world.</p> <br /> <br />
      <p className="font-extrabold font-serif text-left ml-22 text-gray-500 text-2xl">Péntemind is a set of 5 minds which are:</p>  <br />
      </div>
      <div className="flex items-start space-x-6 ml-20 mt-4">
  
  <Image
    src="/g1.png"
    alt="god"
    className="rounded-xl"
    height={100}
    width={100}
  />

  <br />
  <div>
    <p className="text-lg font-medium text-gray-800">
      Empathetic Mind: Emotional Balance propagates real learning.
    </p>
    <p className="mt-2 text-base text-gray-600 font-medium">
    Balancing self-awareness with consideration for others, the empathetic mind promotes both inward reflection and outward compassion, nurturing a sense of empathy and interconnectedness.
    </p>
  </div>
</div>
<div className="flex items-start space-x-6 ml-20 mt-4">
  
  <Image
    src="/g2.png"
    alt="god"
    className="rounded-xl"
    height={100}
    width={100}
  />
<br />
  
  <div>
    <p className="text-lg font-medium text-gray-800">
    Conscientious Mind : Knowledge Acquisition.    </p>
    <p className="mt-2 text-base text-gray-600 font-medium">
    Grounded in informed decision-making, the conscientious mind prioritises cognitive precision, equipping children with the discernment and responsibility to make thoughtful choices.

</p>
  </div>
</div>
<div className="flex items-start space-x-6 ml-20 mt-4">
  
  <Image
    src="/g3.png"
    alt="god"
    className="rounded-xl"
    height={100}
    width={100}
  />

  <br />
  <div>
    <p className="text-lg font-medium text-gray-800">
    Focused Mind : Knowledge Retention.
    </p>
    <p className="mt-2 text-base text-gray-600 font-medium">
    This is the mind that approaches tasks logically and persistently strives for mastery through dedicated practice and effort, emphasising both willpower and skill development.    </p>
  </div>
</div>
<div className="flex items-start space-x-6 ml-20 mt-4">
  
  <Image
    src="/g4.png"
    alt="god"
    className="rounded-xl"
    height={100}
    width={100}
  />

  <br />
  <div>
    <p className="text-lg font-medium text-gray-800">
    Analytical Mind : Knowledge Application.
    </p>
    <p className="mt-2 text-base text-gray-600 font-medium">
    The analytical mind is adept at making decisions based on logic, employing a process of observation, analysis, synthesis, and evaluation to tackle challenges and solve problems effectively.    </p>
  </div>
</div>
<div className="flex items-start space-x-6 ml-20 mt-4">
  <Image
    src="/g5.png"
    alt="god"
    className="rounded-xl"
    height={100}
    width={100}
  />

  <br />
  <div>
    <p className="text-lg font-medium text-gray-800">
    Inventive Mind : Knowledge Development.    </p>
    <p className="mt-2 text-base text-gray-600 font-medium">
    Encouraging creative thinking beyond conventional boundaries, the inventive mind fosters imagination and innovation, inspiring children to explore new ideas and possibilities. By cultivating these five minds in tandem.

</p>
  </div>
</div>
 <br /> <br />
<div>
  <Image
    src="/pant2.svg"  
    alt="he"
    className="rounded xl w-300 pl-50 ml-42"
    height={100}
    width={100}
    />
</div>
<div> <br /> <br />
  <p className="text-center font-serif text-xl">To foster the development of the minds, we have taken the approach of Metacognition which emphasise on Learn-Unlearn-Relearn.

</p> <br />
<p className="text-left font-serif text-xl ml-64">Péntemind's Unique Offerings as an Integrated Curriculum

</p> <br />
<p className="text-left font-serif text-xl ml-64">Artsy - A path breaking art program that will teach children not only art but also appreciation of art

</p>
<br /> <br />
</div>
</div>


    
  );
}
