import React from "react";

function Form(props) {
  console.log(props.isLogIn);
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!props.isLogIn ? (
        <input type="password" placeholder="Confirm Password" />
      ) : null}
      <button type="submit">{props.type}</button>
    </form>
  );
}

export default Form;
