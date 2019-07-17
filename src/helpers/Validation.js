export const validateCartExpiryDate = ({target}) => {
    let test = false;
    if(expiryDateFormatIsValid(target.value)) {
        const [month, year] = target.value.split("/");
        let now = new Date();
        if ((parseInt("20" + year) >= now.getFullYear()) && (parseInt(month) <= 12) && (parseInt(month) >= now.getMonth() + 1)) {
            test = true;
            flagIfInvalid(target, test);
        }
        else {
            flagIfInvalid(target, test);
        }
    }
    else {
        flagIfInvalid(target, test);
    }
    return test;
};

export const validateCardHolderName = ({target}) => {
    let value = target.value.split(" ");
    let test = false;
    if(value.length !== 2) {
        flagIfInvalid(target, test);
    }
    else {
        const [name, surname] = value;
        if(name.length >= 3 && surname.length >= 3) {
            test = true;
            flagIfInvalid(target, test);
        }
        else {
            flagIfInvalid(target, test);
        }
    }
    return test;
};

export const validateWithLuhn = digits => {
    let sum = parseInt(digits[digits.length - 1]);
    let parity = digits.length % 2;
    for (let i = 0; i < digits.length - 1; i++) {
        let digit = parseInt(digits[i]);
        if (i % 2 === parity) {
            digit = digit * 2;
        }
        if (digit > 9) {
            digit = digit - 9;
        }
        sum = sum + digit;
    }
    return sum % 10 === 0;
};

export const validateCardNumber = numbers => {
    let cardNumber = numbers.split("");
    if (validateWithLuhn(cardNumber)) {
        digits.classList.remove("is-invalid");
    }
    else {
        digits.classList.add("is-invalid");
    }
    return validateWithLuhn(cardNumber);
};

export const flagIfInvalid = (field, isValid) => {
  if(isValid) {
      field.classList.remove("is-invalid");
  }
  else {
      field.classList.remove("is-invalid")
  }
};

export const expiryDateFormatIsValid = target => {
    let arr = target.split("/");
    return arr.length === 2 && arr[0].length === 2 && arr[1].length === 2;
};