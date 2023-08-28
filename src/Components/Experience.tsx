import React, { useState, useEffect } from "react";


const Experience = () => {
    const [chooseCompany, setChooseCompany] = useState<number>(1);
  const exp = [
    {
      companyName: "Company 1",
      position: "Position 1",
      date: "Date 1",
      jobResp: "jobResp 1",
    },
    {
      companyName: "Company 2",
      position: "Position 2",
      date: "Date 2",
      jobResp: "jobResp 2",
    },
    {
      companyName: "Company 3",
      position: "Position 3",
      date: "Date 3",
      jobResp: "jobResp 3",
    },
  ];
  return (
    <>
      <div className="text-4xl font-bold text-white">Experience</div>
      <div className="flex">
        <div className="w-1/4">
            {exp.map((r:any, idx:number) => (
                <div 
                className="cursor-pointer"
                onClick={() => setChooseCompany(idx)}
                >{r.companyName}</div>
            ))}
        </div>
        <div className="w-3/4">

        </div>
      </div>
    </>
  );
};

export default Experience;
