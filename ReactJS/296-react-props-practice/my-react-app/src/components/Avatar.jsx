import React from "react";

function Avatar (props) {
  console.log(props.img)
  return (
    <img className="circle-img" src={props.img} alt="avatar_img" />
  )
}

export default Avatar;