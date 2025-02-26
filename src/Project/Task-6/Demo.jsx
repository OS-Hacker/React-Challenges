import React, { useState } from "react";

const Demo = () => {
  const [data, setData] = useState([
    { id: 1, name: "india", checked: false },
    { id: 2, name: "pakistan", checked: false },
    { id: 3, name: "china", checked: false },
  ]);

  const handleClicked = (id) => {
    const checked = data.map((ele) => {
      if (ele.id === id) {
        ele.checked = !ele.checked;
      }
      return ele;
    });
    setData(checked);
  };

  const handleDelete = (id) => {
    setData(data.filter((ele) => ele.id !== id));
  };

  return (
    <>
      {data?.map((ele) => {
        return (
          <div key={ele.id} style={{ margin: "10px" }}>
            <input
              type="checkbox"
              checked={ele.checked}
              onClick={() => handleClicked(ele.id)}
            />
            <span>{ele.name}</span>
            {ele.checked && (
              <span onClick={() => handleDelete(ele.id)}>❌</span>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Demo;
