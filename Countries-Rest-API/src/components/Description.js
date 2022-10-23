import React from "react";

const Description = ({ country, onClose }) => {
    function log(country) {
        console.log(country);
    }
    return (
        <div className="w-full h-full absolute bg-[var(--container-color)] top-16 left-16">
            <h4 onClick={() => log(country)}>Description</h4>
            <h4>{country.name.common}</h4>
            <img
                className="h-48"
                src={country.flags.svg}
                alt={country.name.common}
            />
            <button onClick={onClose}>Back</button>
        </div>
    );
};

export default Description;
