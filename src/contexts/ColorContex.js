import React from "react";
const Context = React.createContext({});

export class ColorStore extends React.Component {
    state = { color: "primary" };
    onToggleColor = () => {
        let now = "";
        if (this.state.color === 'primary') now = "negative";
        else now = "primary";
        this.setState({ color: now });
    }
    render() {
        return (
            <Context.Provider value={{ ...this.state, onToggleColor: this.onToggleColor }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}


export default Context;