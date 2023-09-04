import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AiOutlineCaretRight } from "react-icons/ai";

const Experience: React.FC = () => {
  interface Exp {
    companyName: string;
    position: string;
    date: string;
    jobResp: string[];
  }
  const exp: Exp[] = [
    {
      companyName: "SIAMRAJATHANEE",
      position: "Fullstack Developer",
      date: "May 2023 - Present",
      jobResp: [
        "jobResp 1 jobResp 1jobResp 1jobResp 1jobResp 1jobResp 1",
        "jobResp 1jobResp 1jobResp 1jobResp 1jobResp 1jobResp 1",
        "jobResp 1jobResp 1jobResp 1jobResp 1jobResp 1jobResp 1jobResp 1jobResp 1",
        "jobResp 1jobResp 1jobResp 1jobResp 1jobResp 1jobResp 1",
        "jobResp 1jobResp 1jobResp 1jobResp 1jobResp 1jobResp 1jobResp 1jobResp 1jobResp 1",
      ],
    },
    {
      companyName: "FULLSTACK DEV BOOTCAMP",
      position: "Student",
      date: "Jan 2023 - Mar 2023",
      jobResp: [
        "Completed a 3-months intensive coding bootcamp focused on Full Stack Web Development",
        "Gained hands-on experience working with React, TailwindCSS, NodeJS, TypeScript, Prisma, Jest, Git, SQL, and Docker",
        "Developed several full-stack projects, including a dashboard, restaurant menu, and restaurant reservation system, utilizing Restful API with Express and Postman",
        "Deployed projects on well-known cloud services, such as Vercel and Firebase",
      ],
    },
    {
      companyName: "INNOVESTX",
      position: "Product Manager",
      date: "Jul 2021 - Mar 2022",
      jobResp: [
        "Oversaw the foreign exchange system for the Easy Invest application",
        "Resolved issues related to all offshore products and implemented effective solutions",
        "Developed and implemented a streamlined process for adding new foreign exchange currencies to the application",
        "Designed a new process for Thai mutual fund margin loans product",
        "Collaborated with stakeholders to reconcile FX conversion transactions",
      ],
    },
    {
      companyName: "TOYOTA MOTOR THAILAND",
      position: "Chief Quality Engineer",
      date: "Jun 2016 - Jun 2021",
      jobResp: [
        "Analyzed and visualized aftermarket problems, and collaborated with other departments to identify and implement effective solutions to reduce warranty claims and improve customer satisfaction",
        "Led and organized a problem-handling committee for new vehicle models, working closely with other departments to quickly resolve customer complaints and issues",
        "Facilitated the prevention of vehicle problems through recurrent analysis and collaboration with relevant departments.",
      ],
    },
  ];

  const [chooseCompany, setChooseCompany] = useState<Exp>(exp[0]);
  const [chooseTab, setChooseTab] = useState<number>(0);

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 1.6,
      },
    },
  };

  const leftToRight = {
    hidden: { opacity: 0, x: -500 },
    show: {
      opacity: 1,
      x: 0,
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
      console.log("Inview Experiences");
    }
  }, [isInView]);

  return (
    <>
      <div ref={ref}>
        <motion.div
          className="flex items-center md:mb-10 "
          initial="hidden"
          animate={mainControls}
          variants={container}
        >
          <motion.div
            className="border border-custom-gray-2 w-full mx-6"
            variants={leftToRight}
          ></motion.div>
          <motion.div className="md:mr-8" variants={item}>
            <div className="flex items-center">
              <div className="md:text-4xl text-2xl text-custom-gray2 font-bold">
                Experiences
              </div>
              <div className="text-8xl text-custom-blue1 pb-12">.</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial="hidden"
          animate={mainControls}
          variants={item}
        >
          <div className="md:w-4/5 flex flex-col md:flex-row w-full">
            <div className="md:w-1/2 w-full flex flex-col gap-6 md:text-left text-center border-b border-custom-blue1 pb-8 md:pb-0 md:border-none">
              {exp.map((r: Exp, idx: number) => (
                <div
                  className={`cursor-pointer  hover:text-custom-blue1 hover:border-l-2 hover:border-custom-blue1 md:px-4 font-bold ${
                    chooseTab === idx
                      ? "text-custom-blue1 border-custom-blue1 border-l-2"
                      : "text-custom-gray2"
                  }`}
                  onClick={() => {
                    setChooseCompany(r);
                    setChooseTab(idx);
                  }}
                >
                  {r.companyName}
                </div>
              ))}
            </div>
            <div className="md:w-1/2 w-full mt-8 md:mt-0 ">
              <div className="font-bold md:text-xl text-lg">
                <span className="text-custom-gray2">
                  {chooseCompany.position}
                </span>
                <span className="text-custom-blue1">
                  {" "}
                  @ {chooseCompany.companyName}
                </span>
              </div>
              <div className="text-custom-gray2 mb-6">{chooseCompany.date}</div>
              {chooseCompany.jobResp.map((r: string) => (
                <div className="flex items-center gap-4">
                  <div className="text-custom-blue1">
                    <AiOutlineCaretRight />
                  </div>
                  <div className="text-custom-gray2 break-words mt-2">{r}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Experience;
