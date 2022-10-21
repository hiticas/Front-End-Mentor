import React from "react";

const Description = ({ country, onClose }) => {
    function log(country) {
        console.log(country);
    }
    return (
        <div>
            <h4 onClick={() => log(country)}>Description</h4>
            <h4>{country.name.common}</h4>
            <button onClick={onClose}>Back</button>
        </div>
    );
};

export default Description;
