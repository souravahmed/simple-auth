import React from "react";
import "./Button.scss";
export const Button = ({ children, text, type, classes, ...props }) => {
  return (
    <button
      type={type ?? "button"}
      className={`btn ${classes ?? ""}`}
      {...props}
    >
      {text ? text : children}
    </button>
  );
};
