import React, { Component } from "react";
import Input from "../../UI/Input/Input";

const CreditCardNumber = props => {
    const inputsNumber = 4;
    let inputs = [];
    for(let i = 0; i < inputsNumber; i++) {
        if(i === 0) {
            inputs.push(<Input
                key={i} type={"text"}
                size={4} placeholder={"----"}
                blur={props.detectCardType}/>)
        }
        else {
            inputs.push(<Input
                key={i} type={"text"}
                size={4} placeholder={"----"}
            />)
        }
    }
    return(
        <div id={"data-cc-digits"}>
            {inputs}
        </div>
    )
};

export default CreditCardNumber;