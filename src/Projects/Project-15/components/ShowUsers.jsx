import React from "react";

const ShowUsers = ({
  containerStyle,
  subContainerStyle,
  data,
  setData,
  handleUpdate,
  currentItem,
}) => {
  // delete
  const handleDelete = (id) => {
    setData((prevData) => prevData?.filter((ele) => ele.id !== id));
  };

  return (
    <div style={containerStyle}>
      <h1>User List</h1>
      {currentItem?.length > 0 ? (
        <>
          {currentItem?.map((user, idx) => {
            const { id, name, email, gender } = user;
            return (
              <ul key={id} style={subContainerStyle}>
                <span>{idx + 1}</span>
                <span>{name}</span>
                <span>{email}</span>
                <span>{gender}</span>
                <div className="div">
                  <button onClick={() => handleUpdate(id, user)}>Update</button>
                  <button onClick={() => handleDelete(id)}>Delete</button>
                </div>
              </ul>
            );
          })}
        </>
      ) : (
        <>
          <p>User Not Avaliable</p>
        </>
      )}
    </div>
  );
};

export default ShowUsers;
