import { motion } from "framer-motion";

const TechStack = () => {
  const frontEndItems = [
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "React",
    "Tailwind CSS",
    "Antd",
  ];
  const backEndItems = ["NodeJS", "Express", "Postgres"];

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

  return (
    <>
      <motion.div
        initial="hidden"
        animate="show"
        variants={item}
      >
        <div className="my-2">Front End :</div>
        <div className="flex gap-6">
          {frontEndItems.map((r: string) => (
            <div className="rounded-xl py-1 px-2 border border-gray-500 text-gray-500">
              {r}
            </div>
          ))}
        </div>
        <div className="my-2">Back End :</div>
        <div className="flex gap-6">
          {backEndItems.map((r: String) => (
            <div className="rounded-xl py-1 px-2 border border-gray-500 text-gray-500">
              {r}
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default TechStack;
