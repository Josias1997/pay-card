import {countries} from "../mocks";

export const formatAsMoney = (amount, buyerCountry) => {
    const countryDetails = countries.filter(countryDetails => (
        countryDetails.country === buyerCountry
    ))[0];

    if(countryDetails !== undefined) {
        return amount.toLocaleString(`en-${countryDetails.code}`, {
            style: "currency",
            currency: countryDetails.currency
        })
    }
    else {
        return amount.toLocaleString(`en-MO`, {
            style: "currency",
            currency: "MAD"
        })
    }
};
