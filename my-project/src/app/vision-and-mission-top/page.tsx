import Wrapper from "@/components/wrapper";
import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#CBC3E3] text-black">
      <section className="bg-[#CBC3E3] text-black py-20">
        <Wrapper>
          <div className="flex flex-col md:flex-row items-start gap-10">
            {/* LEFT COLUMN — TEXT */}
            <div className="md:w-1/2">
              <h2 className="text-4xl font-open-sans text-purple-900 mb-6 pl-12">
                <strong>Vision of our Preschool Education</strong>
              </h2>
              <p className="text-xl font-unbounded pl-12">
                We are committed to instilling skills, knowledge, and values in our children in order to give them an inner voice to face the challenges of the twenty-first century.
              </p>
              <br />
              <p className="text-xl font-unbounded pl-12">
                Our learning environment allows each child to nurture the learning minds namely the Empathetic Mind, Conscientious Mind, Focused Mind, Analytical Mind, and Inventive Mind.
              </p>
              <br />

              <h2 className="text-4xl font-unbounded text-purple-900 mb-6 pl-12">
                <strong>Zee Learn Limited Vision</strong>
              </h2>
              <p className="text-xl font-unbounded pl-12">
                Backed by Zee Group, Zee Learn aims to empower India's children and youth
              </p>
              <br /><br />
              <p className="pl-12">
                <h3>
                  <em>“We provide the environment to ignite, nurture and unleash your potential and talent.”</em>
                </h3>
              </p>
            </div>

            {/* RIGHT COLUMN — IMAGE */}
            <div className="md:w-1/2 flex justify-end">
              <Image
                src="/vision.png"
                alt="Kidzee Preschool Legacy"
                className="rounded-2xl object-cover w-full"
                width={400}
                height={300}
                priority
              />
            </div>
          </div>
        </Wrapper>
      </section>
    </main>
  );
}
