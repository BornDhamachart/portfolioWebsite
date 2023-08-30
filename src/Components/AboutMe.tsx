import { motion } from "framer-motion";
import { FaRegHandSpock } from 'react-icons/fa';

const AboutMe = () => {
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

  const letterAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
  };

  const hello = "Hi Test test";

  return (
    <>
      <motion.div initial="hidden" animate="show" variants={container}>
        <motion.div
          className=""
          initial="hidden"
          animate="show"
          variants={item}
        >
          {hello.split("").map((letter: string, idx: number) => (
            <motion.span
              className="text-2xl text-custom-blue2"
              variants={letterAnimation}
              key={idx}
            >
              {letter}
            </motion.span>
          ))}
          <motion.span
          className="hover:rotate-3 text-yellow-600 hover:scale-105"
          initial="hidden"
          animate="show"
          variants={item}
          >
            <FaRegHandSpock />
          </motion.span>
        </motion.div>
        <motion.div className="font-bold text-6xl text-white mt-2">
          Test Test{" "}
        </motion.div>
        <motion.div>
          <p className="text-blue-200 mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="text-blue-200">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="text-blue-200">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default AboutMe;
