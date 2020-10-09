import React from 'react';
import './styles.css';

function Button(props) {
    return (
        <div className="button-container">
            <button className={props.buttonAtr.className}>Button</button>
        </div>
    )
}

export default Button;