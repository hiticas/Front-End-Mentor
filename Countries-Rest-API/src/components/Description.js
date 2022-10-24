import React from "react";

const Description = ({ country, onClose }) => {
    // function getLanguages() {
    //     let leng = [];
    //     leng.push(country.languages);
    //     console.log("test", leng);
    // }

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
                <div className="font-bold text-white flex flex-col gap-3 py-5 tracking-wider md:pl-10 lg:pl-0 lg:w-full">
                    <p className="text-2xl mb-3">{country.name.common}</p>
                    <p>
                        Native Name:
                        <span className="text-gray-300 font-normal">
                            {" "}
                            {/* {country.name.nativeName.bul.common} */}
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
                            {country.tld}
                        </span>
                    </p>
                    <p>
                        Languages:
                        <span className="text-gray-300 font-normal">
                            {" "}
                            {country.tld}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Description;
