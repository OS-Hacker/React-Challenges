import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Play = () => {
  const [selectedYear, setselectedYear] = useState(null);
  const [matches, setMatches] = useState([]);

  const years = [2011, 2012, 2013, 2014, 2015, 2016, 2017];

  const URL = `https://jsonmock.hackerrank.com/api/football_competitions?year=${selectedYear}`;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      setMatches(data?.data);
    };
    fetchData();
  }, [selectedYear]);

  return (
    <Wrapper>
      <div className="container">
        <div>
          {years.map((year, idx) => {
            return (
              <div key={idx}>
                <h3 className="year" onClick={() => setselectedYear(year)}>
                  {year}
                </h3>
              </div>
            );
          })}
        </div>
        {/* Show Matches Data */}
        <div>
          {matches.length > 0 ? (
            <>
              <h1 className="match">Total Matches {matches.length} </h1>
              {matches?.map((match) => {
                const { country, name, winner, year } = match;
                return (
                  <h4 className="match" key={name}>
                    Match {name} Won By {winner} in this year {year}
                  </h4>
                );
              })}
            </>
          ) : (
            <h1>Match Not Found!</h1>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Play;

const Wrapper = styled.section`
  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .year {
    margin: 15px;
    cursor: pointer;
  }

  .match {
    margin: 10px;
  }
`;
