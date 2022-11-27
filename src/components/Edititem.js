import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "../style/Additem.css";

const Edititem = ({
  setItem,
  initialValue,
  setisEditing,
  currentTodo,
  setCurrentTodo,
  setTodo,
  todo,
}) => {
  const handleClick = () => {
    setisEditing(false);
    setItem(initialValue);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentTodo({
      ...currentTodo,
      [name]: value,
    });
  };

  const handleUpdateTodo = (id, updatedTodo) => {
    const updatedItem = todo.map((data) => {
      return data.id === id ? updatedTodo : data;
    });

    setisEditing(false);
    setTodo(updatedItem);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateTodo(currentTodo.id, currentTodo);
    handleClick();
  };

  return (
    <>
      <div className="additem">
        <div className="window" onClick={handleClick} />
        <div className="content">
          <h3>Edit Your Complex Thing</h3>
          <form className="form-controll" onSubmit={handleSubmit}>
            {Object.keys(currentTodo).map((data, i) => {
              return (
                <div className="form" key={i}>
                  {data === "id" ? (
                    ""
                  ) : (
                    <>
                      <h5>{`${data} : `} </h5>

                      <TextField
                        onChange={handleChange}
                        name={data}
                        id={data}
                        label={data}
                        value={currentTodo[data]}
                        variant="outlined"
                      />
                    </>
                  )}
                </div>
              );
            })}

            <div>
              <Button
                sx={{ marginTop: "20px" }}
                color="success"
                variant="contained"
                endIcon={<SendIcon />}
                type="submit"
              >
                Update
              </Button>

              <Button
                sx={{ marginTop: "20px", marginLeft: "50px" }}
                variant="outlined"
                color="error"
                onClick={handleClick}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Edititem;
