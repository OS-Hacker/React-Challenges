import React, { useState } from "react";
import { countries } from "./ConfigData";

const App_22 = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const selectedCountryObj = countries?.find(
    (country) => country.name === selectedCountry
  );

  // cities array

  const cities = selectedCountryObj ? selectedCountryObj.cities : [];

  console.log(cities);

  // vaillage object
  const villages = selectedCountryObj ? selectedCountryObj.village : [];

  console.log(Object.keys(villages).map((ele) => villages[ele]));

  return (
    <>
      {/* countrys */}
      <select onChange={(e) => setSelectedCountry(e.target.value)}>
        <option hidden>Country</option>
        {countries?.map((country, idx) => (
          <option value={country.name} key={idx}>
            {country.name}
          </option>
        ))}
      </select>

      {/* cities */}

      <select>
        <option hidden>Cities</option>
        {cities?.map((city) => {
          return <option value={city}>{city}</option>;
        })}
      </select>

      {/* Villages */}
      <select>
        <option hidden>Villages</option>
        {Object.keys(villages).map((key) => (
          <option value={villages[key]} key={key}>
            {villages[key]}
          </option>
        ))}
      </select>
    </>
  );
};

export default App_22;





