import React from "react";
import Avatar from "./Avatar";
import Info from "./Info";




function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <p>{props.id}</p>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Info detail={props.tel} />
        <Info detail={props.email} />
      </div>
    </div>
  );
}

export default Card;
