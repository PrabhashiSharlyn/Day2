import React from "react";
import PropTypes from "prop-types";

const Editor = ({ type, onChange }) => {
    return (
        <textarea className={`editor editor-${type}`} onChange={onChange}>
        </textarea>
    );
};

Editor.prototype = {
    type: PropTypes.string,
    onChange: PropTypes.func
}


export default Editor;
