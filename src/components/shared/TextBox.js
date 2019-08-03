import React from "react";
import PropTypes from "prop-types";

const TextBox = ({ label, onChange, name, text }) => {
    return (
        <div>
            <label for={name}>{label}</label>
            <input type="text" onChange={onChange} text={text} ></input>
        </div>
    );
};

TextBox.prototype = {
    label: PropTypes.string,
    text: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func
}

export default TextBox;