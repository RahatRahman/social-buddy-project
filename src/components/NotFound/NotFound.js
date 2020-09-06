import React from "react";
import Image from "../../images/bg-img.jpg";

const NotFound = () => {
  const imgStyle = {
    width: "100%",
    height: "100vh",
  };
  return (
    <div>
      <img style={imgStyle} src={Image} alt="" />
    </div>
  );
};

export default NotFound;
