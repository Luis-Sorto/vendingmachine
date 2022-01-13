import React from "react";
import "./App.css";
import VendingMachine from "./Components/VendingMachine";

const App: React.FC = () => {
    return (
        <div className="app">
            <VendingMachine />
        </div>
    );
};

export default App;
