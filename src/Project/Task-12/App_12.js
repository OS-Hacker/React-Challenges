import React, { useState } from "react";
import Expense from "./Expense";
import Trasections from "./Trasections";
import History from "./History";

const App_12 = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();
  const [data, setData] = useState([]);

  const handleEnter = () => {
    if (text.trim() === "" || amount.trim() === "") {
      alert("Please Enter Valid Values");
    } else {
      setData([
        ...data,
        { id: new Date().getTime(), text: text, amount: +amount },
      ]);
      setText("");
      setAmount("");
    }
  };

  console.log(data)

  const [selectedId, setSelecetdId] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState("");
  const [editAmount, setEditAmount] = useState();

  // edit
  const handleEdit = (id, text, amount) => {
    setSelecetdId(id);
    setEditMode(true);
    setEditText(text);
    setEditAmount(amount);
  };

  const handleUpdate = () => {
    setData(
      data.map((ele) =>
        ele.id === selectedId
          ? { ...ele, text: editText, amount: +editAmount }
          : ele
      )
    );
     setSelecetdId(null);
     setEditMode(false);
     setEditText("");
     setEditAmount();
  };

  return (
    <>
      <Trasections data={data} />
      <Expense
        text={text}
        amount={amount}
        setText={setText}
        setAmount={setAmount}
        handleEnter={handleEnter}
        editMode={editMode}
        editText={editText}
        editAmount={editAmount}
        handleUpdate={handleUpdate}
        setEditText={setEditText}
        setEditAmount={setEditAmount}
      />
      <History data={data} setData={setData} handleEdit={handleEdit} />
    </>
  );
};

export default App_12;
