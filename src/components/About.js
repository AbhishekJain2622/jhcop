"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

export default function About() {
  return (
    <>
  <section
  id="about-section"
  className="bg-cover bg-center py-16 px-6 md:px-16"
  style={{ backgroundImage: "url('/background.png')" }} // Change this to your new image
>
  <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
    {/* Left Image Section */}
    <div className="w-full md:w-1/2 flex justify-center md:justify-start">
      <Image
        src="/4.png"
        alt="Engineer working"
        width={600}
        height={400}
        className="w-full max-w-[550px] rounded-lg shadow-xl"
      />
    </div>

    {/* Right Content Section */}
    <div className="w-full md:w-1/2 text-black text-center md:text-left bg-white bg-opacity-80 p-6 rounded-lg">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">
        About Jash Corporation
      </h2>
      <p className="text-lg mt-4 leading-relaxed text-gray-800">
        Jash Corporation is your trusted partner for premium industrial
        electrical solutions. Our innovative products are engineered for
        reliability, precision, and efficiency, meeting the toughest
        industrial challenges.
      </p>
      <p className="text-lg mt-4 leading-relaxed text-gray-800">
        With a legacy of expertise, we deliver advanced electrical systems that empower businesses worldwide. From innovative circuitry to robust power solutions, we cater to the evolving needs of modern industries.
      </p>

      {/* Small Image Inside Text */}
      <div className="my-4 flex justify-center md:justify-start">
        <Image
          src="/3.png"
          alt="Industrial Worker"
          width={250}
          height={150}
          className="rounded-lg shadow-md"
        />
      </div>

      <p className="text-lg leading-relaxed text-gray-800">
        At Jash Corporation, quality and innovation are our benchmarks. Join
        us in building solutions that drive industrial excellence and shape
        a brighter, electrified future.
      </p>

      {/* More Button */}
      <button className="bg-blue-600 hover:bg-blue-800 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-md mt-6">
        More
      </button>
    </div>
  </div>
</section>
      {/* Separate Scrolling Banner with Wavy Motion */}
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="bg-gradient-to-r from-blue-600 to-blue-900 text-white text-center py-2 shadow-lg relative overflow-hidden mt-10"
>
  <motion.p
    initial={{ x: "100%", y: 0 }}
    animate={{ x: "-100%", y: [0, -5, 5, 0] }} // Wavy effect
    transition={{
      repeat: Infinity,
      duration: 25, // Slower scrolling speed
      ease: "linear",
      repeatType: "loop",
    }}
    className="whitespace-nowrap text-sm font-semibold"
  >
    ⭐ Our Happy Customers Would Love to Buy Again! | 98% Customer
    Satisfaction Rate | Trusted by Industry Leaders ⭐
  </motion.p>
</motion.div>

    </>
  );
}
