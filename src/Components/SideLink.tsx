import React from "react";
import {
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
} from "@ant-design/icons";

const SideLink = () => {
  return (
    <div className="flex-col flex justify-evenly gap-4 text-white px-6">
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
      <div className="h-[100px] border border-white mx-auto"></div>
    </div>
  );
};

export default SideLink;
