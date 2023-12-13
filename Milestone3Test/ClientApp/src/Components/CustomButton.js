
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'
import React from 'react';

const Button = (props) => {
    return (
        <div className="container">
            <button
                type={props.type}
                disabled={props.disabled}
                className="btn"
                onClick={props.onClick}
                style={{
                    background: `linear-gradient(90deg, #4F4381, #8D81C7)`,
                    color: '#fff',
                }}
            >
                {props.label}
            </button>
        </div>
    );
};

export default Button;


