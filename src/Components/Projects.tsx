import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Projects = () => {
  const items = [
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Antd",
    "Framer motion",
    "Vite",
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
    hidden: { opacity: 0, x: 500 },
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
        ease: "easeIn",
        duration: 0.5,
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
      console.log("Inview Projects");
    }
  }, [isInView]);

  return (
    <>
      <div ref={ref}>
        <motion.div
          className="flex items-center mb-10 mt-16"
          initial="hidden"
          animate={mainControls}
          variants={container}
        >
          <motion.div
            className="text-white text-4xl font-bold"
            initial="hidden"
            animate={mainControls}
            variants={itemHead}
          >
            Projects
          </motion.div>
          <motion.div
            className="border border-white w-full mx-6"
            initial="hidden"
            animate={mainControls}
            variants={rightToLeft}
          ></motion.div>
        </motion.div>

        <div className="flex justify-between">
          <motion.div
            className="w-1/2"
            initial="hidden"
            animate={mainControls}
            variants={item}
          >
            <div className="text-white font-bold text-xl">H6 Homesix</div>
            <div className="text-white  bg-blue-900 w-3/4 mt-4">
              <p>A website for achitexture house dfgdfgdfgdfgdfgg</p>
              <p>A website for achitexture house dfgdfgdfgdfgdfgg</p>
              <p>A website for achitexture house dfgdfgdfgdfgdfgg</p>
              <p>A website for achitexture house dfgdfgdfgdfgdfgg</p>
            </div>
            <div className="flex gap-4 mt-4">
              {items.map((r: string) => (
                <div className=" text-gray-500">{r}</div>
              ))}
            </div>
          </motion.div>
          <div className="w-1/2 relative">
            <img
              alt="h6homesix"
              src="./h6homesix.png"
              className="w-[420px] h-[250px]"
            />
            <motion.div
              className="absolute top-0 left-0 w-[420px] h-[250px] bg-white opacity-90"
              initial="hidden"
              animate={mainControls}
              variants={picture}
            ></motion.div>
          </div>
        </div>

        <motion.div
          className="flex justify-between mt-16"
          initial="hidden"
          animate={mainControls}
          variants={item}
        >
          <div className="w-1/2">
            <img
              alt="h6homesix"
              src="./h6homesix.png"
              className="w-[420px] h-[250px]"
            />
          </div>
          <div className="w-1/2">
            <div className="text-white font-bold text-xl">H6 Homesix</div>
            <div className="text-white  bg-blue-900 w-3/4 mt-4">
              <p>A website for achitexture house dfgdfgdfgdfgdfgg</p>
              <p>A website for achitexture house dfgdfgdfgdfgdfgg</p>
              <p>A website for achitexture house dfgdfgdfgdfgdfgg</p>
              <p>A website for achitexture house dfgdfgdfgdfgdfgg</p>
            </div>
            <div className="flex gap-4 mt-4">
              {items.map((r: string) => (
                <div className=" text-gray-500">{r}</div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Projects;
