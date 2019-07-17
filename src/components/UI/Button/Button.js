import React from "react";

const Button = ({value, id}) => (
    <button className={"mdc-button"} id={id}>{value}</button>
);

export default Button;