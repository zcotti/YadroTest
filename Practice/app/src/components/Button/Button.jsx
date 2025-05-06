import React from "react";
import "./Button.scss";

function Button({ text, onClickFunction, type}) {
  const buttonClass = `button button--${type}`;

  return (
    <button
      className={buttonClass}
      onClick={onClickFunction}
    >
      {text}
    </button>
  );
}

export default Button;
