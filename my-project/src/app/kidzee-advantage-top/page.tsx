import Wrapper from "@/components/wrapper"; 

export default function Page() {
  return (
    <main className="min-h-screen bg-[#CBC3E3] text-black">
      <section className="bg-[#CBC3E3] text-black py-20">
        <Wrapper>
          <div className="flex flex-col md:flex-row items-start gap-10">
            
            {/* LEFT COLUMN */}
            <div className="md:w-1/2">
              <h2 className="text-4xl font-unbounded mb-6 pl-12">
                Ranked amongst the top 100 franchise opportunity by Franchise India for 2022, we are the experts in Early Childhood Care and Education
              </h2>
              <br />
              <h3 className="text-2xl font-unbounded mb-4 pl-12">
                We encourage, educate, and equip today's children to be tomorrow's leaders
              </h3>
              <br />
              <h4 className="text-xl font-unbounded mb-2 pl-12">
                The Golden Five-Point Kidzee Edges
              </h4>
              <br />
              <h5 className="text-2xl font-bold mb-4 text-black pl-12">Benefits of Enrolling:</h5>
              <ul className="list-disc list-inside text-black space-y-2 pl-12">
                <li>Structured curriculum designed for young minds</li>
                <li>Experienced and caring educators</li>
                <li>Safe and engaging learning environment</li>
                <li>Personalized attention to each child</li>
              </ul>
              <br /><br />
              <button className="bg-orange-400 hover:bg-yellow-300 text-black font-semibold px-6 py-2 rounded-xl shadow-md transition ml-22">
    JOIN NOW→
  </button>
            </div>
            <div className="md:w-1/2">
          <img
              src="/photo.png" 
              alt="Kidzee Preschool Legacy"
              className="rounded-3xl w-full"
            

            />
       
            
          </div>

            
            
              
          

          </div>
        </Wrapper>
      </section>
    </main>
  );
}
