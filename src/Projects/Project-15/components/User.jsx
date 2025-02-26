import { useState } from "react";

const User = ({
  containerStyle,
  setData,
  isEdit,
  editId,
  editName,
  editEmail,
  editGender,
  setEditName,
  setEditEmail,
  setEditGender,
  setIsEdit,
}) => {
  const [users, setUsers] = useState({
    id: new Date().getTime(),
    name: "",
    email: "",
    gender: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;

    setUsers((prevUser) => {
      return { ...prevUser, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, gender } = users;

    if (name.trim() === "" || email.trim() === "" || gender.trim() === "") {
      alert("All Fields Required");
    } else {
      alert("User Successfully Created");

      // add data
      setData((prevData) => {
        return [...prevData, users];
      });

      // clear fields
      setUsers({ name: "", email: "", gender: "" });
    }
  };

  // Edit
  const handleEdit = (e) => {
    e.preventDefault();
    setData((prev) => {
      const updated = prev?.map((ele) =>
        ele.id === editId
          ? { ...ele, name: editName, email: editEmail, gender: editGender }
          : ele
      );
      localStorage.setItem("user", JSON.stringify(updated));
      return updated;
    });
    setEditName("");
    setEditEmail("");
    setEditGender("");
    setIsEdit(false);
  };

  return (
    <>
      <div style={containerStyle}>
        <form>
          <div>
            <label>User Name </label> <br />
            <input
              type="text"
              name="name"
              onChange={
                isEdit ? (e) => setEditName(e.target.value) : handleChange
              }
              value={isEdit ? editName : users.name}
            />
          </div>
          <br />
          <div>
            <label>User Email </label> <br />
            <input
              type="email"
              name="email"
              onChange={
                isEdit ? (e) => setEditEmail(e.target.value) : handleChange
              }
              value={isEdit ? editEmail : users.email}
            />
          </div>
          <br />
          <div>
            <input
              type="radio"
              name="gender"
              onChange={
                isEdit ? (e) => setEditGender(e.target.value) : handleChange
              }
              value="male"
              checked={isEdit ? editGender === "male" : users.gender === "male"}
              id="male"
            />
            <label htmlFor="male">Male</label> <br />
            <br />
            <input
              type="radio"
              name="gender"
              onChange={
                isEdit ? (e) => setEditGender(e.target.value) : handleChange
              }
              value="female"
              checked={
                isEdit ? editGender === "female" : users.gender === "female"
              }
              id="female"
            />
            <label htmlFor="female">Female</label>
          </div>
          <br />
          <button
            type="submit"
            onClick={isEdit ? (e) => handleEdit(e) : handleSubmit}
          >
            {isEdit ? "Edit" : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default User;
