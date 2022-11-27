import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import '../style/Content.css'
const Content = ({ setPopup }) => {
    const handleClick = () => {
        setPopup(true)
    }
  return (
    <>
      <div className="container">
        <h1>You Know What TODO</h1>
        <Stack direction="row" spacing={2}>
          <Button onClick={handleClick} variant="contained" color="success">
            Add More Thing
          </Button>
        </Stack>
      </div>
    </>
  );
};

export default Content;
