import React from "react";

const Badges = ({
  shade = "#FEE2E2",
  textColor = "#991B1B",
  buttonText = "Badge",
}) => {
  const btnStyle = {
    backgroundColor: shade,
    color: textColor,
  }
  return (
    <button style={btnStyle} className="px-6 py-3 font-bold rounded-md">{buttonText}</button>
  );
};

export default Badges;
