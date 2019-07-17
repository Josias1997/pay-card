import React from 'react';

const Input = ({type, size, placeholder, blur}) => (
    blur !== undefined ?
        <input
            type={type}
            size={size}
            placeholder={placeholder}
            onBlur={(event) => blur(event)}/> :
        <input type={type}
               size={size} placeholder={placeholder}/>
);

export default Input;