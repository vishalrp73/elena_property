import React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";

function Form() {
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
          <TextField
            required
            id="outlined-basic"
            label="First Name"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
          />
          <TextareaAutosize
            aria-label="minimum height"
            minRows={10}
            placeholder="Comment"
            style={{ width: 400}}
          />
        </div>
        
      </Box>
    </div>
  );
}

export default Form;
