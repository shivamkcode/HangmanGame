"use client";
import React from "react";

interface LettersButtonProps {
  letter?: string;
  setSelectedBox: React.Dispatch<React.SetStateAction<number>>;
  active: number;
  index: number;
}

const LettersButton: React.FC<LettersButtonProps> = ({
  index,
  letter,
  active,
  setSelectedBox,
}) => {
  const style = {
    background: "#2463FF",
    color: "white",
    opacity: letter === "_" ? ".5" : "1",
    border: index === active ? "4px solid white" : "",
    boxShadow: `inset 2px 6px 0px #3C74FF, inset -2px 6px 0px #3C74FF`,
    cursor: letter === "_" ? "pointer" : "not-allowed",
  };

  return (
    <>
      <div
        style={{ opacity: letter === "_" ? ".5" : "1" }}
        className="bg-[#140E66] rounded-xl sm:rounded-[32px] md:rounded-[40px] px-[2px] pt-0 pb-[2px]"
        onClick={() => (letter === "_" ? setSelectedBox(index) : {})}
      >
        <button
          className="uppercase w-10 sm:w-[88px] md:w-28 h-16 sm:h-28 md:h-32 rounded-xl sm:rounded-[32px] md:rounded-[40px] text-[40px] sm:text-[64px] md:text-[88px]"
          style={style}
        >
          {letter === "_" ? "" : letter}
        </button>
      </div>
    </>
  );
};

export default LettersButton;
