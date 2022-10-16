import React from "react";
import "./App.scss";
import data from "./data/data.json";

export const App = () => {
    return (
        <>
            <div className="app">
                {data.map((el, key) => {
                    return <h1 key={key}>{el.company}</h1>;
                })}
            </div>
        </>
    );
};

export default App;
