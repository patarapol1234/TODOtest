import React, { useState } from "react";
import Content from "./Content";
import TODOlist from "./TODOlist";
import "../style/Components.css";
import Additem from "./Additem";
import Edititem from "./Edititem";
const Components = () => {
  const initialValue = { Task: "", Date: "", Time: "", Detail: "" };
  const [item, setItem] = useState(initialValue);
  const [popup, setPopup] = useState(false);
  const [isEditing, setisEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const [todo, setTodo] = useState([]);
  const handleEditData = (data) => {
    setisEditing(true);
    setCurrentTodo({ ...data });
  };
  return (
    <>
      <div className="components">
        <Content setPopup={setPopup} />
        <TODOlist
          setisEditing={setisEditing}
          handleEditData={handleEditData}
          setTodo={setTodo}
          todo={todo}
          popup={popup}
        />
        {popup && (
          <Additem
            setPopup={setPopup}
            setItem={setItem}
            item={item}
            initialValue={initialValue}
          />
        )}
        {isEditing && (
          <Edititem
            setisEditing={setisEditing}
            isEditing={isEditing}
            setItem={setItem}
            item={item}
            initialValue={initialValue}
            currentTodo={currentTodo}
            setCurrentTodo={setCurrentTodo}
            setTodo={setTodo}
            todo={todo}
          />
        )}
      </div>
    </>
  );
};

export default Components;
