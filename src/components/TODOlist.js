import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useSelector } from "react-redux";
import "../style/TODO.css";
const TODOlist = ({ handleEditData, setTodo, todo }) => {
  const [edit, setEdit] = useState(false);
  const [sort, setSort] = useState("ASC");
  const itemData = useSelector(({ itemReducer }) => itemReducer);
  const todoList = itemData.result;

  const handleEditClicked = () => {
    setEdit(!edit);
  };

  const handleDelete = (id) => {
    const removeItem = todo.filter((data) => {
      return data.id !== id;
    });
    setTodo(removeItem);
  };

  const handleSortClicked = (col) => {
    if (sort === "ASC") {
      const sorted = [...todo].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setTodo(sorted);
      setSort("DESC");
    } else if (sort === "DESC") {
      const sorted = [...todo].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setTodo(sorted);
      setSort("ASC");
    }
  };

  useEffect(() => {
    if (todoList) {
      setTodo([...todo, todoList]);
    }
  }, [todoList]);

  return (
    <>
      <div className="container todo">
        <Stack spacing={2} direction="row">
          <Button
            className="button"
            sx={{ backgroundColor: "red", color: "white" }}
            onClick={handleEditClicked}
            variant="contained"
          >
            Edit
          </Button>
        </Stack>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Number</th>
              <th onClick={() => handleSortClicked("Task")}>
                Your Complex Thing
              </th>
              <th onClick={() => handleSortClicked("Date")}>Finish Date</th>
              <th onClick={() => handleSortClicked("Time")}>Time End</th>
              <th onClick={() => handleSortClicked("Detail")}>Detail</th>
              {edit && <th>Edit</th>}
            </tr>
          </thead>
          <tbody>
            {todo.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{data.Task}</td>
                  <td>{data.Date}</td>
                  <td>{data.Time}</td>
                  <td>{data.Detail}</td>
                  {edit && (
                    <td>
                      <Tooltip title="Edit">
                        <IconButton onClick={() => handleEditData(data)}>
                          <ModeIcon sx={{ color: "blue" }} />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton onClick={() => handleDelete(data.id)}>
                          <DeleteIcon sx={{ color: "red" }} />
                        </IconButton>
                      </Tooltip>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TODOlist;
