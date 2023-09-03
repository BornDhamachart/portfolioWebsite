import { motion } from "framer-motion";

const TechStack = () => {
  const frontEndItems = [
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "React",
    "NextJS",
    "Tailwind CSS",
    "Antd",
    "NodeJS",
    "Express",
    "Postgres",
    "Github",
    "GitLab",
  ];

  const item = {
    hidden: { opacity: 0, x: -150 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  return (
    <>
      <motion.div initial="hidden" animate="show" variants={item}>
        <div className="my-2">
          <span className="md:text-4xl text-2xl text-custom-gray2 font-bold">
            Tech stack that I've used
          </span>
          <span className="text-8xl text-custom-blue1">.</span>
        </div>
        <div className="flex md:gap-6 gap-2 mt-4 flex-wrap md:w-3/4 w-full">
          {frontEndItems.map((r: string) => (
            <div className="rounded-2xl py-1 px-2  text-custom-gray2 bg-gray-700">
              {r}
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default TechStack;
