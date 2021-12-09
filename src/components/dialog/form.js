import React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";

function Form() {
  // this is to use later when I want to pass information into database
  const [name, setName] = useState(""); 

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
        {/* textfields set to specified width */}
          <TextField
            required
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            style={{ width: "267px" }}
          />
          <TextField
            required
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            style={{ width: "267px" }}
          />
          <TextField
            required
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            style={{ width: "267px" }}
          />
          <TextField
            required
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            style={{ width: "267px" }}
          />
          {/* comment section */}
          <TextareaAutosize
            aria-label="minimum height"
            minRows={10}
            placeholder="Comment"
            style={{ width: "567px", marginTop: "10px" }}
          />
        </div>
      </Box>
    </div>
  );
}

export default Form;
