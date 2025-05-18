import Wrapper from "@/components/wrapper"; 

export default function LegacySection() {
  return (
    <main className="min-h-screen bg-[#CBC3E3] text-black">
    <section className="bg-[#CBC3E3] text-black py-20">
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center gap-10">
        
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-30 ml-100 absolute top-1/5 font-unbounded text-gray-800 ">Legacy</h2> <br />
            <p className="text-2xl font-semibold mb-4 pl-92  absolute top-1/3 font-unbounded ">Kidzee Preschool</p> <br /> <br /> <br />
            <p className="text-2xl leading-relaxed pl-12 ">
              We believe that there is ‘unique potential’ in every child; and Kidzee nurtures it.
              Touted to be one of the best preschools in India, we nurture and shape minds with the help
              of our best-in-class age appropriate progressive curriculum.
              <br /><br />
              We are changing the face of early childhood education with consistent upgradation and innovation
              to meet the current needs with a proactive future, focussed on grooming them to be ‘ever-ready for life’.
              Our commitment towards quality education also values aspects like self-reliance, peer interaction,
              and individual growth.
              <br /><br />
              Our solid foundation and polished business model makes it profitable for all the stakeholders involved.
            </p>
          </div>

 
          <div className="md:w-1/2">
          <img
              src="/threeChild.png" 
              alt="Kidzee Preschool Legacy"
              className="rounded-3xl  w-full"
            

            />
            
          </div>
        </div>
      </Wrapper>
    </section>
    </main>
  );
}
