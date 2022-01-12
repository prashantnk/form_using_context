import React from "react";
import UserCreate from "./UserCreate";
import { LanguageStore } from "../contexts/LanguageContext";
import ColorContex from "../contexts/ColorContex";
import LanguageSelector from "./LanguageSelector";
import { ColorStore } from "../contexts/ColorContex";
import ColorToggler from "./ColorToggler";

class App extends React.Component {
    static contextType = ColorContex;
    render() {
        return (
            <LanguageStore >
                <ColorStore >
                    <div className="ui container">
                        <div className="ui header" style={{ marginTop: "20px" }}>
                            <LanguageSelector />
                            <br />
                            <ColorToggler />
                        </div>
                        <UserCreate />
                    </div>
                </ColorStore>
            </LanguageStore>
        );
    }
}
export default App;



// {/* <LanguageContext.Provider value="xyz">
//                     <UserCreate />
//                 </LanguageContext.Provider> new pipeline is created */}

// {/* <UserCreate /> // this will have default value always */ }