import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const ContactMe = () => {
  const item = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 1.6,
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

  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
      console.log("Inview Contact Me");
    }
  }, [isInView]);

  return (
    <>
      <div ref={ref}>
        <motion.div
          className=""
          initial="hidden"
          animate={mainControls}
          variants={container}
        >
          <motion.div
            className="flex justify-center w-full"
            initial="hidden"
            animate={mainControls}
            variants={item}
          >
            <div className="flex items-center w-full justify-center">
              <div className="border border-white md:w-1/5 w-1/6 md:mx-6 mx-4"></div>
              <div className="md:text-4xl text-2xl text-custom-gray2 font-bold">
                Contact Me
              </div>
              <div className="text-8xl text-custom-blue1 pb-12">.</div>
              <div className="border border-white md:w-1/5 w-1/6 md:mx-6 mx-4"></div>
            </div>
          </motion.div>
          <motion.div
            className="text-custom-gray2 w-full flex justify-center"
            initial="hidden"
            animate={mainControls}
            variants={item}
          >
            <p className="md:w-1/3 w-full text-center break-words">
              testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
            </p>
          </motion.div>
          <motion.div
            className="w-full flex justify-center md:mt-6"
            initial="hidden"
            animate={mainControls}
            variants={item}
          >
            <a
              className="mt-8 border border-white hover:border-custom-blue1 px-4 py-1 rounded-md cursor-pointer hover:text-custom-blue1 text-white"
              href="mailto:dhamachart.c@gmail.com"
              target="_blank"
            >
              Email Me!
            </a>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default ContactMe;
