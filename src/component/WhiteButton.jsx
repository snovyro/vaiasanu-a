import React from "react";

const WhiteButton = (props) => {
  const { text, link, className } = props;
  return (
    <div className="w-full">
      <a target="_blank" rel="noopener noreferrer" href={link}>
        <p
          className={
            "w-full xl:w-fit rounded-xl px-4 py-2 mt-4 gradient-to-rfrom-[rgba(255,255,255,0.55)] to bg-[rgba(255,255,255,0.55)] hover:scale-105 transition ease-in-out cursor-pointer" +
            " " +
            className
          }
        >
          <p className="bg-gradient-to-r bg-clip-text  text-transparent from-pink-400 via-purple-400 to-indigo-500 animate-text">
            {text}
          </p>
        </p>
      </a>
    </div>
  );
};

export default WhiteButton;
