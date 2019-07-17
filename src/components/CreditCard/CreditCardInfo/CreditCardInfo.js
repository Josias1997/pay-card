import React, { Component } from "react";
import Input from "../../UI/Input/Input";

const CreditCardInfo = props => {
    return(
        <div id={"data-cc-info"}>
           <Input type={"text"} size={20}
                  placeholder={"Name Surname"} blur={props.validateName}/>
           <Input type={"text"} size={6}
                  placeholder={"MM/YY"} blur={props.validateExpiryDate}/>
        </div>
    )
};

export default CreditCardInfo;