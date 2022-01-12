import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
    static contextType = LanguageContext;
    render() {
        const text = this.context.language === "english" ? "Name" : "नाम";
        return (
            <div className="field" >
                <label htmlFor="name">{text} : </label>
                <input id="name" />
            </div>
        );
    }
}
export default Field;