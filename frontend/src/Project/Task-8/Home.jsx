import React, { useState } from "react";

const Home = ({ data }) => {
  // get for Object.keys we use key
  const countries = Object.keys(data.countries);

  const [selectedCountry, setSelectedCountry] = useState("");

  // states
  // we filter base on thier country and get their keys
  const states = Object.keys(data.states).filter(
    (state) => data.states[state].country === selectedCountry
  );

  const [selectedStates, setSelectedStates] = useState("");

  // cities
  const cities = Object.keys(data.cities).filter((cities) => {
    return (
      data.cities[cities].state === selectedStates &&
      data.cities[cities].country === selectedCountry
    );
  });

  console.log(cities);

  return (
    <>
      {/* countries */}
      <select onChange={(e) => setSelectedCountry(e.target.value)}>
        <option value="" hidden>
          Select Country
        </option>
        {countries?.map((country) => {
          return (
            <option value={country} key={country}>
              {country}
            </option>
          );
        })}
      </select>

      {/* states */}

      <select onChange={(e) => setSelectedStates(e.target.value)}>
        <option value="" hidden>
          Select State
        </option>
        {states?.map((states) => {
          return (
            <option value={states} key={states}>
              {states}
            </option>
          );
        })}
      </select>

      {/* cities */}
      <select>
        <option value="" hidden>
          Select cities
        </option>
        {cities?.map((cities) => {
          return (
            <option value={cities} key={cities}>
              {cities}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Home;
