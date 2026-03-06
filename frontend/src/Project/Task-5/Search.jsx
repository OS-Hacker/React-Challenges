import React, { useEffect, useState } from "react";

const Search = ({ Data }) => {
  const [data, setData] = useState(Data);

  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const filterData = data.filter((ele) => {
      const textMakeLower = inputText.toLowerCase();
      return (
        ele.Student_Name.toLowerCase().includes(textMakeLower) ||
        ele.Branch.toLowerCase().includes(textMakeLower) ||
        ele.College_Name.toLowerCase().includes(textMakeLower)
      );
    });

    inputText ? setData(filterData) : setData(Data);
  }, [inputText]);

  return (
    <>
      <input
        placeholder="Search..."
        onChange={(e) => setInputText(e.target.value)}
        style={{ margin: "10px" }}
      />

      {data?.map((ele) => {
        const { id, Student_Name, Branch, College_Name } = ele;
        return (
          <div key={id} style={{ margin: "10px" }}>
            <h4>{Student_Name}</h4> <span>{Branch}</span>
            <h5>{College_Name}</h5>
          </div>
        );
      })}
    </>
  );
};

export default Search;
