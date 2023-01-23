import React from "react";
import '../App.css';
import { Link } from "react-router-dom";
import './Button.css';

const STYLES_Array = ['btn--primary', 'btn--outline'];
const SIZES_Array = ['btn--medium', 'btn--large'];

const Button = ({ children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {


    const checkButtonStyle = STYLES_Array.includes(buttonStyle) ? buttonStyle : STYLES_Array[0];
    const checkButtonSize = SIZES_Array.includes(buttonSize) ? buttonSize : SIZES_Array[0];

    console.log('------style wala---', typeof STYLES_Array);
    console.log('---size wala--', typeof SIZES_Array);


    // console.log('---style --', checkButtonStyle);
    // console.log('---size --', checkButtonSize);
    // console.log('---onClick --', onClick);
    // console.log('---type --', type);

    return (
        <Link to='/sign-up' className="btn-mobile">
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick} type={type}
            >
                {children}
            </button>
        </Link>
    )
}

export default Button;







// import React from 'react'

// const Button = () => {
//   return (
//     <div>Button</div>
//   )
// }

// export default Button