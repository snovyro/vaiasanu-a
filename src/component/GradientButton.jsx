import React from "react";

const GradientButton = (props) => {
  const { text, onClick } = props;

  return (
    <p
      onClick={onClick}
      className="hover:scale-110 transition-all ease-in-out duration-150
            cursor-pointer py-2.5 px-5 rounded-3xl  bg-gradient-to-r 
            from-[rgba(255,255,255,0.16)] to bg-[rgba(255,255,255,0.16)] "
    >
      {text}
    </p>
  );
};

export default GradientButton;
