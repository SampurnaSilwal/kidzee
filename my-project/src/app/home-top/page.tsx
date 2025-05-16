// src/app/page.tsx
import Wrapper from "@/components/wrapper";
import Link from "next/link";

export default function HomePage() {
  return (
<main className="min-h-screen bg-fuchsia-50 scroll-smooth">
{/* Hero Section */}
      <section className="h-screen flex items-center relative" id="hero">
        <Wrapper>
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Left content */}
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-4 pl-12">
                Build a foundation for a lifetime of learning
              </h1>
              <p className="text-lg text-white mb-6">Admission Open</p>
              <Link href="/enroll">
  <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-2 rounded-xl shadow-md transition ml-22">
    Enroll Now →
  </button>
</Link>

            </div>

           
            <div className="w-full md:w-1/2 flex justify-end">
              <img
                src="/kid.png"
                alt="Kid"
                className="w-200 h-200 rounded-full object-cover"
              />
            </div>
          </div>
        </Wrapper>

      
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        >
          ↓
        </a>
      </section>

      
    </main>
  );
}
