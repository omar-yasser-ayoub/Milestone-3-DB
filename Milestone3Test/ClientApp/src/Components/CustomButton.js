
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React from 'react';

const Button = (props) => {
    return (
        <div className="btnContainer">
        <div className="btnContainer">
            <button
                type={props.type}
                disabled={props.disabled}
                className="customBtn"
                onClick={props.onClick}
                
            >
                {props.label}
            </button>
        </div>
    );
};

export default Button;


