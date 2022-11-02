import React from "react";

const Description = ({ country, onClose }) => {
    const currenciesKeys = Object.keys(country.currencies);
    const languageKeys = Object.keys(country.languages);
    const nativeNameKeys = Object.keys(country.name.nativeName);

    const languages = [];
    languageKeys.forEach((element) => {
        languages.push(country.languages[element]);
    });

    const currencies = [];
    currenciesKeys.forEach((element) => {
        currencies.push(country.currencies[element].name);
    });

    const nativeNames = [];
    nativeNameKeys.forEach((element) => {
        nativeNames.push(country.name.nativeName[element].common);
    });

    const borders = [];
    country.borders?.forEach((element) => {
        borders.push(element);
    });

    return (
        <div className="description px-4 bg-[var(--container-color)]">
            <button
                className="text-white text-xs py-2 px-8 my-10 bg-[var(--header-color)] shadow-[0_0_7px_rgba(0,0,0,0.3)] rounded-sm"
                onClick={onClose}
            >
                Back
            </button>
            <div className="flex flex-col md:flex-row md:items-start lg:gap-28 lg:justify-between">
                <img
                    className="mt-5 mb-5 min-h-[250px] max-w-[600px] md:w-1/2 lg:w-45% lg:min-h-[300px] xl:min-h-[350px]"
                    src={country.flags.svg}
                    alt={country.name.common}
                />
                <div>
                    <p className="font-bold text-white text-3xl mb-3">
                        {country.name.common}
                    </p>
                    <div className="flex justify-between gap-28">
                        <div className="font-bold text-white flex flex-col gap-3 py-5 tracking-wider md:pl-10 lg:pl-0 lg:w-full">
                            <p>
                                Native Name:
                                <span className="text-gray-300 font-normal">
                                    {" "}
                                    {nativeNames.length === 0 ? (
                                        <p>No native names...</p>
                                    ) : (
                                        nativeNames.map((element, key) => (
                                            <span key={key}>{element} </span>
                                        ))
                                    )}
                                </span>
                            </p>
                            <p>
                                Population:
                                <span className="text-gray-300 font-normal">
                                    {" "}
                                    {country.population}
                                </span>
                            </p>
                            <p>
                                Region:
                                <span className="text-gray-300 font-normal">
                                    {" "}
                                    {country.region}
                                </span>
                            </p>
                            <p>
                                Sub Region:
                                <span className="text-gray-300 font-normal">
                                    {" "}
                                    {country.subregion}
                                </span>
                            </p>
                            <p className="mb-5">
                                Captital:
                                <span className="text-gray-300">
                                    {" "}
                                    {country.capital}
                                </span>
                            </p>
                        </div>
                        <div className="font-bold text-white flex flex-col gap-3 py-5 tracking-wider md:pl-10 lg:pl-0 lg:w-full">
                            <p>
                                Top Level Domain:
                                <span className="text-gray-300 font-normal">
                                    {" "}
                                    {country.tld}
                                </span>
                            </p>
                            <p>
                                Currencies:
                                <span className="text-gray-300 font-normal">
                                    {" "}
                                    {currencies.length === 0 ? (
                                        <p>No currencies...</p>
                                    ) : (
                                        currencies.map((element, key) => (
                                            <span key={key}>{element} </span>
                                        ))
                                    )}
                                </span>
                            </p>
                            <p>
                                Languages:
                                <span className="text-gray-300 font-normal">
                                    {" "}
                                    {languages.length === 0 ? (
                                        <p>No languages...</p>
                                    ) : (
                                        languages.map((element, key) => (
                                            <span key={key}>{element} </span>
                                        ))
                                    )}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-start box-country">
                        <p className="font-bold text-white text-xl mb-3 mr-3">
                            Border countries:
                        </p>
                        {borders.length === 0 ? (
                            <p className="font-bold text-white text-xl">
                                No borders...
                            </p>
                        ) : (
                            borders.map((element, key) => (
                                <span
                                    className="text-white text-xs p-2 px-8 h-full mr-3 bg-[var(--header-color)] shadow-[0_0_7px_rgba(0,0,0,0.3)] rounded-sm"
                                    key={key}
                                >
                                    {element}{" "}
                                </span>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;
