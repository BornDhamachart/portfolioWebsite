import { motion } from "framer-motion";

import {
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
} from "@ant-design/icons";

const SideLink: React.FC = () => {
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

  return (
    <motion.div
      className="lg:flex-col flex justify-evenly gap-4 text-custom-blue1 lg:px-6"
      initial="hidden"
      animate="show"
      variants={item}
    >
      <a
        className="cursor-pointer text-xl flex justify-center rounded-full p-2 hover:bg-gray-400 hover:bg-opacity-50  hover:text-white"
        href="https://www.linkedin.com/in/dchanprasartsuk/"
        target="_blank"
      >
        <LinkedinOutlined />
      </a>
      <a
        className="cursor-pointer text-xl flex justify-center rounded-full p-2 hover:bg-gray-400 hover:bg-opacity-50  hover:text-white"
        href="https://github.com/BornDhamachart"
        target="_blank"
      >
        <GithubOutlined />
      </a>
      <a
        className="cursor-pointer text-xl flex justify-center rounded-full p-2 hover:bg-gray-400 hover:bg-opacity-50  hover:text-white"
        href="mailto:dhamachart.c@gmail.com"
        target="_blank"
      >
        <MailOutlined />
      </a>
      <div className="lg:h-[150px] lg:border lg:border-custom-blue1 mx-auto"></div>
    </motion.div>
  );
};

export default SideLink;
