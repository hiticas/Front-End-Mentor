import React from "react";

const CountryBox = ({ country, openCountryDescription }) => {
    return (
        <div
            onClick={() => openCountryDescription(country)}
            className="cursor-pointer w-[280px] bg-[var(--header-color)] shadow-md rounded-lg hover:shadow-xl lg:w-[30%] xl:w-[22%]"
        >
            <img
                className="w-full h-44 object-cover rounded-t-lg shadow-lg"
                src={country.flags.svg}
                alt={country.name.common}
            />

            <div className="p-6 pb-12 text-white">
                <p className="text-lg font-bold mb-3">{country.name.common}</p>
                <p>
                    Population:
                    <span className="text-gray-300"> {country.population}</span>
                </p>
                <p>
                    Region:
                    <span className="text-gray-300"> {country.region}</span>
                </p>
                <p>
                    Capital:
                    <span className="text-gray-300"> {country.capital}</span>
                </p>
            </div>
        </div>
    );
};

export default CountryBox;
