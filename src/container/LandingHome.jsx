import React from "react";
import GradientText from "../component/GradientText";
import WhiteButton from "../component/WhiteButton";

function LandingHome() {
  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center h-[100vh] "
    >
      <GradientText className="xl:!text-9xl !text-6xl mt-8" text="Hello," />
      <GradientText
        className="xl:!text-9xl !text-3xl xl:mt-8"
        text="I'm Vaia Sanu Aulia"
      />
      <GradientText
        className="xl:!text-3xl !text-xl xl:mt-8"
        text="Frontend Web Developer"
      />
      <div className="flex gap-8 mt-8 font-medium tracking-wider">
        <WhiteButton text="Mail" link="mailto:vaia.sanu@yahoo.com" />
        <WhiteButton
          text="LinkedIn"
          link="https://www.linkedin.com/in/vaia-sanu-ba7507225/"
        />
        <WhiteButton
          text="Resume"
          link="https://drive.google.com/file/d/1ZMH1EBC5vY2reiuHmK31ok6ZOAaa7A6B/view?usp=sharing"
        />
      </div>
    </div>
  );
}

export default LandingHome;
