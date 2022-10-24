import React from "react";
import CountryBox from "./CountryBox";

const CountriesBox = ({ countries, openCountryDescription }) => {
    return (
        <div className="content w-full flex justify-center p-5 py-10 lg:px-0">
            <div className="grid w-full gap-10 grid-cols-1 grid-flow-raw sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-16">
                {countries.length === 0 ? (
                    <p>Countries fetching...</p>
                ) : (
                    countries.map((country, key) => (
                        <CountryBox
                            key={key}
                            country={country}
                            openCountryDescription={openCountryDescription}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default CountriesBox;
