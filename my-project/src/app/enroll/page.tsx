import React from "react";

export default function EnrollFormPage() {
  return (
    <div className="min-h-screen bg-[#7c0000] text-white flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full max-w-6xl">
        {/* Left: Form */}
        <div className="bg-white text-black rounded-xl shadow-lg p-8 w-full md:w-2/3">
          <h1 className="text-3xl font-bold mb-6 text-center text-[#7c0000]">Enquire Now</h1>
          <form className="space-y-4">
            <div>
              <label htmlFor="firstname" className="block font-semibold">First Name</label>
              <input type="text" id="firstname" name="firstname" placeholder="Enter First Name" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label htmlFor="lastname" className="block font-semibold">Last Name</label>
              <input type="text" id="lastname" name="lastname" placeholder="Enter Last Name" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold">Email*</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label htmlFor="contact" className="block font-semibold">Contact Number</label>
              <input type="tel" id="contact" name="contact" placeholder="Enter your phone number" className="w-full border rounded px-3 py-2" />
            </div>

            <div>
              <label className="block font-semibold mb-1">Country</label>
              <div className="space-x-4">
                <label><input type="radio" name="Country" value="Nepal" /> Nepal</label>
                <label><input type="radio" name="Country" value="India" /> India</label>
              </div>
            </div>

            <div>
              <label htmlFor="Pin Code" className="block font-semibold">Pin Code</label>
              <input type="text" id="Pin Code" name="Pin Code" placeholder="Enter Pin Code" className="w-full border rounded px-3 py-2" />
            </div>

            <div>
              <label className="block font-semibold mb-1">Gender</label>
              <div className="space-x-4">
                <label><input type="radio" name="gender" value="male" /> Male</label>
                <label><input type="radio" name="gender" value="female" /> Female</label>
                <label><input type="radio" name="gender" value="other" /> Other</label>
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block font-semibold">Subject</label>
              <select id="subject" name="subject" className="w-full border rounded px-3 py-2">
                <option value="maths">Maths</option>
                <option value="physics">Physics</option>
                <option value="chemistry">Chemistry</option>
              </select>
            </div>

            <div>
              <label htmlFor="resume" className="block font-semibold">Old School Certificate</label>
              <input type="file" id="resume" name="resume" className="w-full" />
            </div>

            <div>
              <label htmlFor="about" className="block font-semibold">About</label>
              <textarea id="about" name="about" placeholder="Enter description" rows={4} className="w-full border rounded px-3 py-2" />
            </div>

            <div className="flex justify-between mt-6">
              <button type="reset" className="px-6 py-2 bg-gray-300 rounded hover:bg-gray-400 text-black">Reset</button>
              <button type="submit" className="px-6 py-2 bg-yellow-400 rounded hover:bg-yellow-300 text-black font-semibold">Submit</button>
            </div>
          </form>
        </div>

        {/* Right: Message */}
        <div className="md:w-1/3 text-white text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">Kidzee Preschool</h2>
          <p className="text-xl">Admissions Open for 2025-26.</p>
          <p className="text-lg mt-2">Enquire Now</p>
        </div>
      </div>
    </div>
  );
}
