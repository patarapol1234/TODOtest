import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import * as itemActions from "../actions/item.action";
import "../style/Additem.css";

const Additem = ({ setPopup, setItem, item, initialValue }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    setPopup(false);
    setItem(initialValue);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((pre) => {
      return {
        ...pre,
        id: Math.floor(Math.random() * 1000000000000 + 1),
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(itemActions.itemData(item));
    handleClick();
  };

  return (
    <>
      <div className="additem">
        <div className="window" onClick={handleClick} />
        <div className="content">
          <h3>Add Your Complex Thing</h3>
          <form className="form-controll" onSubmit={handleSubmit}>
            {Object.keys(item).map((data, i) => {
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
                        value={item[data]}
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
                Submit
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

export default Additem;
