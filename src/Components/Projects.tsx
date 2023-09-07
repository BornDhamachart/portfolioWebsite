import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { MdLogout } from "react-icons/md";

const Projects: React.FC = () => {
  const items1 = [
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Antd",
    "Framer motion",
    "Vite",
  ];
  const items2 = [
    "TypeScript",
    "NextJS",
    "Tailwind CSS",
    "Antd",
    "Tanstack Query",
  ];
  const items3 = [
    "TypeScript",
    "NextJS",
    "Tailwind CSS",
    "Antd",
    "React Query",
  ];

  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1.6,
      },
    },
  };

  const itemHead = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 2,
      },
    },
  };

  const rightToLeft = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 1.6,
      },
    },
  };

  const picture = {
    hidden: { width: 420 },
    show: {
      width: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  const container = {
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const pictureControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
      pictureControls.start("show");
      // console.log("Inview Projects");
    }
  }, [isInView]);

  return (
    <>
      <div ref={ref}>
        <motion.div
          initial="hidden"
          animate={mainControls}
          variants={container}
        >
          <motion.div className="flex items-center" variants={container}>
            <motion.div variants={itemHead}>
              <div className="flex items-center">
                <div className="md:text-4xl text-2xl text-custom-gray2 font-bold">
                  Projects
                </div>
                <div className="text-8xl text-custom-blue1 pb-12">.</div>
              </div>
            </motion.div>
            <motion.div
              className="border border-custom-gray-2 w-full mx-6"
              variants={rightToLeft}
            ></motion.div>
          </motion.div>

          <div className="flex-col flex justify-center items-center">
            <div className="flex-col md:flex-row flex md:p-8 justify-center w-full xl:w-2/3 gap-6">
              <motion.div
                className="md:w-1/2 w-full md:order-1"
                variants={item}
              >
                <div className="flex items-center gap-6">
                  <div className="text-white font-bold text-xl hover:text-custom-blue1">
                    H6 Homesix
                  </div>
                  <div className="text-white text-xl hover:text-custom-blue1 cursor-pointer hover:translate-x-1 duration-150">
                    <a href="https://h6homesix.vercel.app/" target="_blank">
                      <MdLogout />
                    </a>
                  </div>
                </div>
                <div className="text-white bg- w-full mt-4 p-6 bg-slate-600 rounded-md">
                  <p className="break-words">
                    Simple architectural firm website specializing in the design
                    and renovation of houses, with a strong focus on minimal
                    Japanese and Scandinavian aesthetics
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {items1.map((r: string) => (
                    <div className="rounded-2xl py-1 px-2 text-custom-blue2 bg-gray-700 text-sm">
                      {r}
                    </div>
                  ))}
                </div>
              </motion.div>
              <div className="md:w-1/2 w-full relative md:order-2 md:pt-11">
                <img
                  alt="h6homesix website"
                  src="./h6homesix.png"
                  className="w-[420px] h-[250px] hover:scale-105 duration-200 rounded-md"
                />
                <motion.div
                  className="absolute top-0 left-0 w-[420px] h-[250px] bg-custom-blue1 opacity-90 rounded-md"
                  variants={picture}
                ></motion.div>
              </div>
            </div>

            <div className="flex-col md:flex-row flex md:p-8 justify-center  w-full xl:w-2/3 gap-6 mt-6">
              <motion.div
                className="md:w-1/2 w-full md:order-2"
                variants={item}
              >
                <div className="flex items-center gap-6">
                  <div className="text-white font-bold text-xl hover:text-custom-blue1">
                    Car Rental Website
                  </div>
                  <div className="text-white text-xl hover:text-custom-blue1 cursor-pointer hover:translate-x-1 duration-150">
                    <a href="https://car-rental-dc.vercel.app/" target="_blank">
                      <MdLogout />
                    </a>
                  </div>
                </div>
                <div className="text-white bg- w-full mt-4 p-6 bg-slate-600 rounded-md">
                  <p className="break-words">
                    Experience seamless car rental with our user-friendly
                    website mockup. Explore a wide range of vehicles, easily
                    book your preferred car. Discover transparent pricing,
                    convenient search options, and a responsive design for a
                    smooth online car rental experience
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {items2.map((r: string) => (
                    <div className="rounded-2xl py-1 px-2 text-custom-blue2 bg-gray-700 text-sm">
                      {r}
                    </div>
                  ))}
                </div>
              </motion.div>
              <div className="md:w-1/2 w-full relative md:order-1 md:pt-11">
                <img
                  alt="carRental"
                  src="./carRental.png"
                  className="w-[420px] h-[250px] hover:scale-105 duration-200 rounded-md"
                />
                <motion.div
                  className="absolute top-0 left-0 w-[420px] h-[250px] bg-custom-blue1 opacity-90 rounded-md"
                  variants={picture}
                ></motion.div>
              </div>
            </div>

            <div className="flex-col md:flex-row flex md:p-8 justify-center w-full xl:w-2/3 gap-6">
              <motion.div
                className="md:w-1/2 w-full md:order-1"
                variants={item}
              >
                <div className="flex items-center gap-6">
                  <div className="text-white font-bold text-xl hover:text-custom-blue1">
                    TikTrack
                  </div>
                  <div className="text-white text-xl hover:text-custom-blue1 cursor-pointer hover:translate-x-1 duration-150"></div>
                </div>
                <div className="text-white bg- w-full mt-4 p-6 bg-slate-600 rounded-md">
                  <p className="break-words">
                    TikTrack is a comprehensive HR management solution with
                    mobile apps for employees and a web platform for
                    administrators. Streamline HR tasks effortlessly, from
                    attendance and leave management to organizing organizational
                    details. Stay updated with notifications and efficiently
                    manage employee data, making HR tasks a breeze
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {items3.map((r: string) => (
                    <div className="rounded-2xl py-1 px-2 text-custom-blue2 bg-gray-700 text-sm">
                      {r}
                    </div>
                  ))}
                </div>
              </motion.div>
              <div className="md:w-1/2 w-full relative md:order-2 md:pt-11">
                <img
                  alt="tiktrack website"
                  src="./tikTrack.png"
                  className="w-[420px] h-[250px] hover:scale-105 duration-200 rounded-md"
                />
                <motion.div
                  className="absolute top-0 left-0 w-[420px] h-[250px] bg-custom-blue1 opacity-90 rounded-md"
                  variants={picture}
                ></motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Projects;
