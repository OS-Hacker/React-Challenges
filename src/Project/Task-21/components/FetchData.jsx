import React from "react";
import useFetchHook from "../CustomHook/useFetchHook";

const FetchData = () => {
  const URL = "https://jsonplaceholder.typicode.com/users";
  const [data, loading, error] = useFetchHook(URL);

  return (
    <>
      {data?.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.name}</h4>
          </div>
        );
      })}
      {loading && <h3>...Loading</h3>}
    </>
  );
};

export default FetchData;
