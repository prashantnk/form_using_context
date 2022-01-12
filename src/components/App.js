import React from "react";
import UserCreate from "./UserCreate";

class App extends React.Component {
    state = { language: "english" };
    onLanguageChange = (language) => {
        this.setState({ language });
    }
    render() {
        return (
            <div className="ui container">
                <div className="ui header" style={{ marginTop: "20px" }}>
                    Select language :
                    <i className="us flag" onClick={() => this.onLanguageChange("english")} />
                    <i className="in flag" onClick={() => this.onLanguageChange("hindi")} />
                </div>
                <UserCreate />
            </div>
        );
    }
}
export default App;