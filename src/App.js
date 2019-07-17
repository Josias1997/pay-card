import React, {Component} from "react";
import CartInfo from "./components/CartInfo/CartInfo";
import CreditCard from "./components/CreditCard/CreditCard";
import Button from "./components/UI/Button/Button";
import './App.css';
import {formatAsMoney, validateCardHolderName, validateCartExpiryDate} from "./helpers";
import { supportedCards } from "./mocks";

class App extends Component {
    state = {
        items: [],
        bill: 0,
        billFormatted: 0,
        country: '',
        imageSource: 'https://placehold.it/120x60.png?text=Card',
        creditCardActiveClass: '',
        cardHolderName: '',
        expiryDate: '',
        cardNumber: '',
    };
    componentDidMount() {
        const api = "https://randomapi.com/api/006b08a801d82d0c9824dcfdfdfa3b3c";
        fetch(api)
            .then(response => response.json())
            .then(data => {
                this.displayCartTotal(data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    displayCartTotal = ({results}) => {
        const [data] = results;
        const {itemsInCart, buyerCountry} = data;
        const bill = itemsInCart.reduce((accumulator, item) => (
            accumulator + (item.price * item.qty)
        ), 0);
        this.setState({
            items: itemsInCart,
            country: buyerCountry,
            bill: bill,
            billFormatted: formatAsMoney(bill, buyerCountry)
        });
    };
    detectCardType = ({target}) => {
       if(target.value.startsWith("4")) {
           this.setState({
               creditCardActiveClass: "is-visa",
               imageSource: supportedCards.visa
           });
           return "is-visa";
       }
       else if (target.value.startsWith("5")) {
           this.setState({
               creditCardActiveClass: "is-mastercard",
               imageSource: supportedCards.mastercard
           });
           return "is-mastercard";
       }
       else {
           this.setState({
               creditCardActiveClass: "",
               imagesSource: 'https://placehold.it/120x60.png?text=Card'
           })
       }
    };
    validateCardHolderName = (event) => {
        validateCardHolderName(event)
    };
    validateCardExpiryDate = (event) => {
        validateCartExpiryDate(event);
    };

    render() {
        return(
            <div className={"container"}>
                <CartInfo bill={this.state.billFormatted}/>
                <CreditCard detection={this.detectCardType}
                            imageSource={this.state.imageSource}
                            validateName={this.validateCardHolderName}
                            validateDate={this.validateCardExpiryDate}
                activeClass={this.state.creditCardActiveClass}/>
                <Button value={"Pay & Checkout"} id={"data-pay-btn"}/>
            </div>
        )
    }
}

export default App;