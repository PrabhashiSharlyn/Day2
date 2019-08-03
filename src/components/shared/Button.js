import React from "react";
import PropTypes from "prop-types";

//const Button = ({text,...rest}) => <button {...rest}>{text}</button>;

const Button = ({ text, type, onClick }) => //{

//return(

<button className={`btn btn-${type}`} onClick={onClick}>
    {text}
</button>


/*);
};*/

Button.prototype = {
    text: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;