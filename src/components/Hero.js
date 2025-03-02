import Image from "next/image";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function Hero() {
  const counters = [
    { label: "Happy Clients", value: 500 },
    { label: "Projects Completed", value: 1200 },
    { label: "Years of Experience", value: 25 },
    { label: "Expert Engineers", value: 50 },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div
        id="hero-section"
        className="h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 relative px-4 md:px-16 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/background.png"
            alt="Background"
            fill
            className="object-cover"
            quality={100}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Left Side - Animated Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 text-center md:text-left px-4 md:px-12"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight">
              Powering Industries With <br /> Precision And Reliability.
            </h1>
            <p className="text-lg text-gray-700 mt-4 max-w-md md:max-w-xl">
              Delivering cutting-edge electrical solutions designed to enhance efficiency
              and ensure unwavering reliability in demanding industrial environments.
            </p>
          </motion.div>

          {/* Right Side - Image Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-[320px] md:w-[450px] h-[300px] md:h-[350px] flex items-center justify-center"
          >
            <div className="absolute top-0 left-6 md:left-20 h-full rounded-lg overflow-hidden">
              <Image
                src="/men2.png"
                alt="Industry Worker Background"
                width={350}
                height={280}
                className="rounded-lg shadow-xl"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-5 left-3 md:top-10 md:left-6 z-10"
            >
              <Image
                src="/men1.png"
                alt="Industry Worker"
                width={420}
                height={280}
                className="rounded-lg shadow-2xl  border-gray-300"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
 
 

      <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative bg-gray-100 py-6 sm:py-12"
    >
      {/* Top Decorative Line - Fully Left-Aligned */}
      <div className="w-full flex justify-start">
        <div className="w-full sm:w-1/3 border-t-[4px] border-[#496299]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-center justify-center mt-4 sm:mt-6 mb-4 sm:mb-6">
          {counters.map((counter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative bg-[#496299] text-white p-6 shadow-lg rounded-lg w-full sm:w-44 sm:h-44 flex flex-col items-center justify-center"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                <CountUp end={counter.value} duration={3} />+
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-center">{counter.label}</p>

              {/* Bottom Left Corner Fold Effect */}
              <div className="absolute bottom-0 left-0 w-4 sm:w-5 h-4 sm:h-5 bg-white transform rotate-180 origin-bottom-left"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Decorative Line - Fully Right-Aligned */}
      <div className="w-full flex justify-end">
        <div className="w-full sm:w-1/3 border-t-[4px] border-[#496299]"></div>
      </div>
    </motion.div>
    </div>
  );
}
