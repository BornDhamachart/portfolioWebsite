import { motion } from "framer-motion";

import {
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
} from "@ant-design/icons";

const SideLink = () => {
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
      className="flex-col flex justify-evenly gap-4 text-white px-6"
      initial="hidden"
      animate="show"
      variants={item}
    >
      <a
        className="cursor-pointer text-xl flex justify-center"
        href=""
        target="_blank"
      >
        <LinkedinOutlined />
      </a>
      <a
        className="cursor-pointer text-xl flex justify-center"
        href=""
        target="_blank"
      >
        <GithubOutlined />
      </a>
      <a
        className="cursor-pointer text-xl flex justify-center"
        href=""
        target="_blank"
      >
        <MailOutlined />
      </a>
      <div className="h-[150px] border border-white mx-auto"></div>
    </motion.div>
  );
};

export default SideLink;
