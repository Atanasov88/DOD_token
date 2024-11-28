import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<Props> = ({ children, className, onClick }) => {
  return (
    <button
      className={`rounded-full border-0 w-[210px] h-[52px] ${className} -mx-4`}
      onClick={onClick}
      style={{
        background: `url(/button.png) no-repeat center`,
        backgroundSize: "contain",
      }}
    >
      <span
        className={`text-white font-semibold hover:underline hover:underline-offset-4`}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
