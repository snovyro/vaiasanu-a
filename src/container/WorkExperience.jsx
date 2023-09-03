import React from "react";
import GradientText from "../component/GradientText";

const WorkExperience = () => {
  return (
    <div
      id="experience"
      className="flex flex-col items-center justify-center h-screen px-10 text-center"
    >
      <GradientText className="my-8" text="Work Experience" />
      <div className="w-[57.5%] text-center xl:text-left">
        <GradientText
          className="xl:!text-3xl !text-xl"
          text="Home Credit Indonesia (Internship)"
        />
        <GradientText
          className="xl:!text-xl !text-lg text-white"
          text="Frontend Web Developer"
        />
        <GradientText
          className="xl:!text-xl !text-lg text-white"
          text="Aug 2022 - Dec 2022"
        />
      </div>
    </div>
  );
};

export default WorkExperience;
