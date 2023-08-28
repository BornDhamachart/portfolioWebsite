import React from "react";

const Projects = () => {
  const frontEndItems = [
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Antd",
    "Framer motion",
    "Vite",
  ];

  return (
    <>
      <div className="flex items-center mb-10 mt-16">
        <div className="text-white text-4xl font-bold">Projects</div>
        <div className="border border-white w-full mx-6"></div>
      </div>
      <div className="flex justify-between ">
        <div className="w-1/2">
          <div className="text-white font-bold text-xl">H6 Homesix</div>
          <div className="text-white  bg-blue-900 w-3/4 mt-4">
            <p>A website for achitexture house dfgdfgdfgdfgdfgg</p>
            <p>A website for achitexture house dfgdfgdfgdfgdfgg</p>
            <p>A website for achitexture house dfgdfgdfgdfgdfgg</p>
            <p>A website for achitexture house dfgdfgdfgdfgdfgg</p>
          </div>
          <div className="flex gap-4 mt-4">
            {frontEndItems.map((r: string) => (
              <div className=" text-gray-500">{r}</div>
            ))}
          </div>
        </div>
        <div className="w-1/2">
          <img
            alt="h6homesix"
            src="./h6homesix.png"
            className="w-[420px] h-[250px]"
          />
        </div>
      </div>

      <div className="flex justify-between mt-16">
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
            {frontEndItems.map((r: string) => (
              <div className=" text-gray-500">{r}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
