import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Experience = () => {
  const [chooseCompany, setChooseCompany] = useState<Exp>({
    companyName: "Company 1",
    position: "Position 1",
    date: "Date 1",
    jobResp: ["jobResp 1", "jobResp 1", "jobResp 1", "jobResp 1", "jobResp 1"],
  });

  interface Exp {
    companyName: string;
    position: string;
    date: string;
    jobResp: string[];
  }
  const exp: Exp[] = [
    {
      companyName: "Company 1",
      position: "Position 1",
      date: "Date 1",
      jobResp: [
        "jobResp 1",
        "jobResp 1",
        "jobResp 1",
        "jobResp 1",
        "jobResp 1",
      ],
    },
    {
      companyName: "Company 2",
      position: "Position 2",
      date: "Date 2",
      jobResp: [
        "jobResp 1",
        "jobResp 1",
        "jobResp 1",
        "jobResp 1",
        "jobResp 1",
      ],
    },
    {
      companyName: "Company 3",
      position: "Position 3",
      date: "Date 3",
      jobResp: [
        "jobResp 1",
        "jobResp 1",
        "jobResp 1",
        "jobResp 1",
        "jobResp 1",
      ],
    },
  ];

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

  const leftToRight = {
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
      console.log("Inview Experiences");
    }
  }, [isInView]);

  return (
    <>
      <motion.div
        className="flex items-center mb-10 mt-16"
        initial="hidden"
        animate={mainControls}
        ref={ref}
        variants={container}
      >
        <motion.div
          className="text-white text-4xl font-bold"
          initial="hidden"
          animate={mainControls}
        ref={ref}
          variants={item}
        >
          Experiences
        </motion.div>
        <motion.div
          className="border border-white w-full mx-6"
          initial="hidden"
          animate={mainControls}
        ref={ref}
          variants={leftToRight}
        ></motion.div>
      </motion.div>

      <motion.div
        className="flex"
        initial="hidden"
        animate={mainControls}
        ref={ref}
        variants={item}
      >
        <div className="w-1/4 flex flex-col gap-6">
          {exp.map((r: Exp) => (
            <div className="cursor-pointer" onClick={() => setChooseCompany(r)}>
              {r.companyName}
            </div>
          ))}
        </div>
        <div className="w-3/4">
          <div className="text-white font-bold text-lg">
            {chooseCompany.companyName}
          </div>
          <div className="text-white">{chooseCompany.position}</div>
          <div className="text-white">{chooseCompany.date}</div>
          {chooseCompany.jobResp.map((r: string) => (
            <div className="text-white">{r}</div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Experience;
