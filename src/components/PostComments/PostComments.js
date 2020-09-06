import React from "react";
import Image from "../../images/dp.jpeg";

const PostComments = (props) => {
  const { name, email, body } = props.comment;

  const commentStyle = {
    borderTop: "1px solid lightgrey",
    display: "flex",
  };

  const imgStyle = {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    marginTop: "25px",
    marginRight: "10px",
  };
  return (
    <div style={commentStyle}>
      <div>
        <img style={imgStyle} src={Image} alt="" />
      </div>
      <div>
        <h3 style={{ color: "blue" }}>{name}</h3>
        <p>
          <strong style={{ color: "purple" }}>{email}</strong> - {body}
        </p>
      </div>
    </div>
  );
};

export default PostComments;
