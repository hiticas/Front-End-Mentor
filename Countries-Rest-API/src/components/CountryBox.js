import React from "react";

const CountryBox = ({ country, openCountryDescription }) => {
    return (
        <div
            onClick={() => openCountryDescription(country)}
            className="country cursor-pointer mx-auto w-[270px] bg-[var(--header-color)] shadow-[0_0_7px_rgba(0,0,0,0.3)] rounded-md hover:shadow-xl hover:translate-y-[-10px] transition duration-50 delay-50 md:w-full lg:w-full"
        >
            <img
                className="w-full h-40 object-cover rounded-t-md shadow-lg"
                src={country.flags.svg}
                alt={country.name.common}
            />

            <div className="p-6 pb-12 text-white">
                <p className="text-lg font-bold mb-3">{country.name.common}</p>
                <p>
                    Population:
                    <span className="text-gray-300">
                        {" "}
                        {country.population.toLocaleString("en-US")} mil
                    </span>
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
