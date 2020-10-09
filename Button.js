import React from 'react';
import './styles.css';

function Button(props) {
    let thisClass="";
    if (props.variant) {
        thisClass= `${props.variant}`
    } else if (props.startIcon) {
        thisClass= `${props.startIcon}`
    }
    else if (props.endIcon) {
        thisClass =`${props.endIcon}`
    }
    else if (props.size && props.color) {
        thisClass= `${props.size} ${props.color}`
    }
    else if(props.disabledShadow) {
        thisClass= `${props.disabledShadow}`
    }
    else if(props.disabled) {
        thisClass=`${props.disabled}`
    }
    else if (props.variant && props.disabled) {
        thisClass = `${props.variant} ${props.disabled}`
    } 

    return ( 
        <div className = "button-container" >
            <button className={thisClass}>
            { props.children }
            </button> 
        </div>
    )
}

export default Button;