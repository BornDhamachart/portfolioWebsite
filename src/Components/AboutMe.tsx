import { motion } from "framer-motion";
import { FaRegHandSpock } from "react-icons/fa";

const AboutMe: React.FC = () => {
  const item = {
    hidden: { opacity: 0, y: 50 },
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

  const letterAnimation = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.2,
      },
    },
  };

  const hello = "Hey!";

  return (
    <>
      <motion.div initial="hidden" animate="show" variants={container}>
        <motion.div className="flex items-center" variants={container}>
          {hello.split("").map((letter: string, idx: number) => (
            <motion.span
              className="md:text-2xl text-xl text-custom-blue1"
              variants={letterAnimation}
              key={idx}
            >
              {letter}
            </motion.span>
          ))}
          <motion.span
            className=" text-yellow-400 text-xl ml-2"
            variants={letterAnimation}
          >
            <FaRegHandSpock />
          </motion.span>
        </motion.div>

        <motion.div className="font-bold" variants={item}>
          <span className="md:text-4xl text-2xl text-custom-blue1">I am</span>
          <span className="md:text-6xl text-4xl text-custom-gray2">
            {" "}
            Dhamachart Chanprasartsuk
          </span>
          <span className="md:text-8xl text-6xl text-custom-blue1">.</span>
        </motion.div>

        <motion.div variants={item}>
          <div className="mt-4">
            <span className="text-custom-gray2 text-4xl">- - </span>
            <span className="md:text-5xl text-2xl font-bold text-custom-blue1">
              {" "}
              FULLSTACK DEVELOPER
            </span>
          </div>
          <p className="text-custom-gray2 mt-8 break-words md:w-1/2 text-lg">
            I am a Full Stack Developer who dedicated to continuous learning and
            growth, transitioning from a career in mechanical engineering.
            Passionate about technology and the financial industry, driven to
            make a meaningful impact.
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default AboutMe;
