import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import dialogpic from "../../img/dialog/dialogpic.png";

import Form from '../dialog/form';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" size="small"  onClick={handleClickOpen}>
        Open
      </Button>
      <div>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle style={{padding: "5%"}}>You are booking a viewing for:</DialogTitle>
        <div style={{paddingLeft: "10%"}}>
            <img src={dialogpic} alt="Logo" style={{width: "200px"}} />
          </div>
        <DialogContent style={{ width: "602px", height: "886px", padding: "10%"}}>
        
          <Form/>
       
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
      </div>
    </div>
  );
}