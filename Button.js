import React from 'react';
import './styles.css';

function Button(props) {
    let thisClass="";
    if (props.variant) {
        thisClass= `${props.variant}`
    } else if (props.startIcon) {
        thisClass= "start-icon local_gocery_store"
    }
    else if(props.default) {
        thisClass="default"
    }
    else if (props.endIcon) {
        thisClass ="end-icon local_gocery_store"
    }
    else if (props.size && props.color) {
        thisClass= `${props.size} ${props.color}`
    }
    else if(props.disabledShadow) {
        thisClass= "disabled-shadow";
    }
    else if(props.disabled) {
        thisClass="disabled";
    }
    else if (props.variant && props.disabled) {
        thisClass = "text-disabled";
    } 
    else if(props.color === "default") {
        thisClass=`default-color`;
    }
    else if(props.color === "primary") {
        thisClass=`primary`;
    }
    else if (props.color === "secondary") {
        thisClass=`secondary`;
    }
    else if(props.color === "danger") {
        thisClass = `danger`;
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