import React from "react";
import Container from "./components/Container";
import Header from "./components/Header";

export const App = () => {
    return (
        <div className="app">
            <Header />
            <Container />
        </div>
    );
};

export default App;
