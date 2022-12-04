import React from "react";
import GradientText from "../component/GradientText";

const AboutProfile = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center h-screen px-10 text-center"
    >
      <GradientText className="my-8" text="About Me" />
      <GradientText
        className="xl:!text-3xl !text-xl"
        text="Student of Informatics Engineering who is interested in learning new things"
      />
      <GradientText
        className="xl:!text-3xl !text-xl"
        text="related to the frontend on the website, especially in the design section"
      />
      <GradientText
        className="xl:!text-3xl !text-xl"
        text="I have experience with HTML, CSS, JS, ReactJS, and Tailwind CSS"
      />
    </div>
  );
};

export default AboutProfile;
