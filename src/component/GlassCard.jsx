import React from "react";
import GradientText from "./GradientText";
import WhiteButton from "./WhiteButton";

const GlassCard = (props) => {
  const { id, key, title, description, image, link } = props;
  return (
    <div
      className="xl:w-4/5 w-full rounded-3xl h-fit p-4 text-center flex flex-wrap
    bg-gradient-to-r from-[rgba(255,255,255,0.15)]
      to bg-[rgba(255,255,255,0.15)]"
    >
      <div className="xl:w-1/3 w-full min-h-36 rounded-xl flex justify-center">
        <img className="h-full rounded-xl object-cover" alt="" src={image} />
      </div>
      <div className="xl:w-2/3 text-center w-full xl:text-left pl-4 py-4 h-fit !items-center">
        <GradientText
          className="!xl:text-3xl !text-xl"
          text={title}
          key={key}
          id={id}
        />
        <p className="text-white font-thin mt-2">{description}</p>
        <WhiteButton text="View Project" link={link} />
      </div>
    </div>
  );
};

export default GlassCard;
