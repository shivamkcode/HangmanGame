"use client";
import React from "react";

interface KeyboardButtonProps {
  letter: string;
  setClickedKey: React.Dispatch<React.SetStateAction<string>>;
  disabled?: boolean;
}

const KeyboardButton: React.FC<KeyboardButtonProps> = ({
  setClickedKey,
  letter,
  disabled,
}) => {
  const style = {
    opacity: disabled ? ".25" : "1",
  };

  const handleClick = (e: React.MouseEvent) => {
    setClickedKey(e.currentTarget.innerHTML);
  };

  return (
    <div
      className={`text-dark-navy bg-white ${disabled ? "cursor-not-allowed" : "cursor-pointer"} flex justify-center items-center rounded-lg sm:rounded-3xl uppercase text-2xl sm:text-5xl w-7 sm:w-16 md:w-28 h-14 sm:h-[84px] ${disabled ? "" : `hover:bg-[#2463FF] hover:text-white`} `}
      style={style}
      onClick={handleClick}
    >
      {letter}
    </div>
  );
};

export default KeyboardButton;
