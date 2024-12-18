import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  color: string;
  autoFocus?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  color,
  autoFocus,
}) => {
  const style = {
    background:
      color === "blue"
        ? "#2463FF"
        : "linear-gradient(to bottom, #FE71FE 0%, #7199FF 100%)",
    color: "white",
    borderRadius: "40px",
    boxShadow: `inset 0px 6px 0px ${color === "blue" ? "#3C74FF" : "#C642FB"} `,
  };

  return (
    <>
      <div
        style={{
          background: "#140E66",
          borderRadius: "40px",
          padding: "0 2px 5px 2px",
        }}
      >
        <div className="relative overflow-auto rounded-[40px]">
          <button
            className="uppercase hover-effect py-2 px-12 sm:px-16 text-2xl md:text-4xl"
            style={style}
            autoFocus={autoFocus}
            onClick={onClick}
          >
            {children}
          </button>
        </div>
      </div>
    </>
  );
};

export default Button;
