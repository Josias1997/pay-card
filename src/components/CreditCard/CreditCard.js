import React, { Component } from "react";
import CreditCardNumber from "./CreditCardNumber/CreditCardNumber";
import CreditCardInfo from "./CreditCardInfo/CreditCardInfo";

class CreditCard extends Component {
    render() {
        const { imageSource, activeClass, detection, validateName, validateDate } = this.props;
        return(
            <div id={"data-credit-card"}
                 className={"mdc-card mdc-card--outlined" + " " + activeClass}>
                <div className="mdc-card__primary-action">
                    <img id={"data-card-type"} src={imageSource} alt={"Credit Card Image"}/>
                    <CreditCardNumber detectCardType={detection}/>
                    <CreditCardInfo validateName={validateName}
                                    validateExpiryDate={validateDate}
                    />
                </div>
            </div>
        )
    }
}

export default CreditCard;