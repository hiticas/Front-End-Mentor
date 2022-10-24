import React, { useState } from "react";
import Container from "./components/Container";
import Header from "./components/Header";

export const App = () => {
    const [darkToggle, setDarkToggle] = React.useState(false);

    const handleDarkMode = () => {
        setDarkToggle(!darkToggle);
    };

    return (
        <div className={`${darkToggle ? "darkmode" : ""} app h-screen`}>
            <Header handleDarkMode={() => handleDarkMode()} />
            <Container />
        </div>
    );
};

export default App;
