import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContex from "../contexts/ColorContex";
class Button extends React.Component {

    renderTextByConsumer = (value) => {
        return value === "english" ? "Submit" : "निवेदन करें";
    }

    renderButton = (color) => {
        return <div className={`ui button ${color}`} >
            <LanguageContext.Consumer >
                {(value) => this.renderTextByConsumer(value.language)}
            </LanguageContext.Consumer>
        </div>
    }


    render() {
        return (
            <ColorContex.Consumer >
                {(value) => this.renderButton(value.color)}
            </ColorContex.Consumer>
        );
    }
}
export default Button;