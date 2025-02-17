import React from "react";

const Button = ({ buttonText }) => {
  return (
    <button className={`van-btn ${buttonText?.toLowerCase()}`}>
      {buttonText?.charAt(0).toUpperCase() + buttonText?.slice(1)}
    </button>
  );
};

export default Button;
