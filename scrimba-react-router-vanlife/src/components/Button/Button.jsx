import React from "react";

const Button = ({ buttonText, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className={`van-btn ${buttonText?.toLowerCase()}`}
    >
      {buttonText?.charAt(0).toUpperCase() + buttonText?.slice(1)}
    </button>
  );
};

export default Button;
