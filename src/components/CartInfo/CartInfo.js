import React from "react";

const CartInfo =({bill}) => {
    return (
        <div id={"data-cart-info"}>
            <h1 className="mdc-typography--headline4">
                <span className="material-icons">shopping_cart</span>
                <span id={"data-bill"}>
                    {bill}
                </span>
            </h1>
        </div>
    )
};

export default CartInfo;