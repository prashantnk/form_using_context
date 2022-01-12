import React from "react";

class Field extends React.Component {
    render() {
        return (
            <div className="field" >
                <label htmlFor="name">Name : </label>
                <input id="name" />
            </div>
        );
    }
}
export default Field;