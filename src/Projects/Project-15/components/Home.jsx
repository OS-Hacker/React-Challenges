import React, { useState, useEffect } from "react";
import User from "./User";
import ShowUsers from "./ShowUsers";
import Pagination from "./Pagination";

const Home = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "45vh",
    gap: "20px",
  };
  const subContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  };

  const initalUser = () => {
    return localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : [];
  };

  const [data, setData] = useState(initalUser);

  // localStorage
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(data));
  }, [data]);

  // Edit
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setId] = useState("");
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editGender, setEditGender] = useState("");

  const handleUpdate = (id, user) => {
    setIsEdit(true);
    setId(id);
    setEditName(user.name);
    setEditEmail(user.email);
    setEditGender(user.gender);
  };

  // pagination

  const [currentPage, setCurrentPage] = useState(1);
  const [ItemsPerPage, setItemsPerPage] = useState(4);
  const totalPages = Math.ceil(data?.length / ItemsPerPage);

  const lastIndex = currentPage * ItemsPerPage;
  const firstIndex = lastIndex - ItemsPerPage;

  const currentItem = data?.slice(firstIndex, lastIndex);

  return (
    <>
      <User
        containerStyle={containerStyle}
        setData={setData}
        isEdit={isEdit}
        editId={editId}
        editName={editName}
        editEmail={editEmail}
        editGender={editGender}
        setEditName={setEditName}
        setEditEmail={setEditEmail}
        setEditGender={setEditGender}
        setIsEdit={setIsEdit}
        data={data}
      />
      <ShowUsers
        containerStyle={containerStyle}
        subContainerStyle={subContainerStyle}
        data={data}
        setData={setData}
        handleUpdate={handleUpdate}
        currentItem={currentItem}
      />

      <Pagination
        subContainerStyle={subContainerStyle}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default Home;
