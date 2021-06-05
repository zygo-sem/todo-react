import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle2 = {
    color,
    fontSize: "20px"
  };

  return <p style={contentStyle2}>{children}</p>;
};

// export default ColorfulMessage;
