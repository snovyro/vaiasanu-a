import React from "react";

const GradientText = (props) => {
  const { text, className } = props;

  return (
    <>
      <div
        className={
          "xl:text-9xl text-6xl font-semibold bg-gradient-to-r bg-clip-text  text-transparent from-pink-400 via-purple-400 to-indigo-500 animate-text" +
          " " +
          className
        }
      >
        {text}
      </div>
    </>
  );
};

export default GradientText;
