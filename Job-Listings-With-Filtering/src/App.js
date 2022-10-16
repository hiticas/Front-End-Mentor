import React from "react";
import "./App.scss";
import data from "./data/data.json";

export const App = () => {
    return (
        <>
            <div className="app">
                {data.map((el, key) => {
                    return (
                        <div key={key}>
                            <h1>{el.company}</h1>
                            <h2>{el.position}</h2>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default App;
