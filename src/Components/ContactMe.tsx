import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const ContactMe = () => {
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
      <motion.div
        className=""
        initial="hidden"
        animate={mainControls}
        ref={ref}
        variants={container}
      >
        <motion.div
          className="flex justify-center w-full"
          initial="hidden"
          animate={mainControls}
        ref={ref}
          variants={item}
        >
          <div className="flex items-center mb-10 mt-16 w-3/5 justify-center">
            <div className="border border-white w-1/5 mx-6"></div>
            <div className="text-white text-4xl font-bold ">Contact Me</div>
            <div className="border border-white w-1/5 mx-6"></div>
          </div>
        </motion.div>
        <motion.div
          className="text-white w-full text-center"
          initial="hidden"
          animate={mainControls}
        ref={ref}
          variants={item}
        >
          <div>dfgdsfghdshgshghdhdfghfgdhhdfghhfgh</div>
          <div>dfgdsfghdshgshghdhdfghfgdhhdfghhfgh</div>
          <div>dfgdsfghdshgshghdhdfghfgdhhdfghhfgh</div>
        </motion.div>
        <motion.div
          className="w-full flex justify-center mt-6"
          initial="hidden"
          animate={mainControls}
        ref={ref}
          variants={item}
        >
          <a
            className="border border-white px-4 py-1 rounded-lg cursor-pointer text-white"
            href=""
            target="_blank"
          >
            Test
          </a>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ContactMe;
