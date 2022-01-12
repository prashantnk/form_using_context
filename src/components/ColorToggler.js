import React from "react";
import ColorContext from '../contexts/ColorContex';

const ColorToggler = () => {
    const renderButton = (onToggleColor) => {
        return (
            <button className="ui button" onClick={onToggleColor}>
                Toggle Color
            </button>
        );
    }
    return (
        <ColorContext.Consumer>
            {({ onToggleColor }) => renderButton(onToggleColor)}
        </ColorContext.Consumer>
    );
}

export default ColorToggler;
