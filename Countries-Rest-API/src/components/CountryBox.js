import React from "react";

const CountryBox = ({ country, openCountryDescription }) => {
    return (
        <div
            onClick={() => openCountryDescription(country)}
            className="cursor-pointer p-2 hover:bg-sky-700 w-1/4"
        >
            <img
                className="w-full h-36 object-cover"
                src={country.flags.svg}
                alt={country.name.common}
            />
            <p>{country.name.common}</p>
            <p>{country.population} mil</p>
            <p>{country.capital}</p>
            <p>{country.region}</p>
        </div>
    );
};

export default CountryBox;
