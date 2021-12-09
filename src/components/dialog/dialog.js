import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useState, useEffect } from "react";
import "./dialog.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import bed_icon from "../../img/propertyPanel/bed-icon.png";
import bath_icon from "../../img/propertyPanel/bath-icon.png";
import parks_icon from "../../img/propertyPanel/parks-icon.png";
import dialog from "../../img/dialog.PNG";
import Form from "../dialog/form";
import { makeStyles } from "@material-ui/core/styles";

// making modal into specified width using paper
const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    height: "886px",
    width: "742px",
  },
}));

// maybe change this down the line annoying to work with
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false); 
  const [property, setProperty] = useState();

  const handleClickOpen = () => {
    setOpen(true);
    console.log("hello");
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    try {
      setProperty(props.property);
    } catch {
      console.log("not found error");
    }
  }, []);

  const classes = useStyles(); // how to assign UseStyles

  console.log(props);

  return (
    <div>
      <button
        type="button"
        className="body-right-apply-btn"
        onClick={handleClickOpen}
      >
        Apply Online
      </button>
      <div>
      {/* calling in values for the properties from property body window */}
        {property ? (
          <>
            <Dialog
              open={open}
              onClose={handleClose}
              maxWidth={"900px"}
              classes={{ paper: classes.dialogPaper }}
            >
              <DialogContent
                style={{
                  width: "742px",
                  height: "886px",
                  padding: "10%",
                  paddingTop: "5px",
                }}
              >
                <h4>You are booking a viewing for:</h4>
                <Grid container rowSpacing={1}>
                  <Grid item xs="auto">
                    <Item>
                      {" "}
                      <img
                        src={property.image}
                        className="guide-photos"
                        alt=""
                        style={{ width: "300px" }}
                      />
                    </Item>
                  </Grid>
                  <Grid item xs="4">
                    <Item>
                    {/* The most annoying part */}
                      <div className="hello">
                        {property.address}
                        <div className="price-wrap-bot">
                          <p className="price-text">
                            ${property.price}/per week
                          </p>
                          <p className="available-text">
                            Available: {property.availability}
                          </p>
                        </div>
                      </div>
                      <div className="bottom_details-wrapper">
                        <div className="bot-wrap">
                          <img src={bed_icon} className="bot-icon" />
                          <p className="num-text">{property.beds}</p>
                        </div>

                        <div className="bot-wrap">
                          <img src={bath_icon} className="bot-icon" />
                          <p className="num-text">{property.baths}</p>
                        </div>

                        <div className="bot-wrap">
                          <img src={parks_icon} className="bot-icon" />
                          <p className="num-text">{property.parks}</p>
                        </div>
                      </div>
                    </Item>
                  </Grid>
                </Grid>
                {/* temp solution to enter required details */}
                <img
                  src={dialog}
                  style={{
                    width: "600px",
                    paddingBottom: "10px",
                    paddingTop: "15px",
                  }}
                />

                <Form />
                {/* for now the submit button just closes the modal */}
                <DialogActions>
                  <button
                    type="button"
                    className="submit"
                    onClick={handleClose}
                  >
                    Submit
                  </button>
                </DialogActions>
              </DialogContent>
            </Dialog>{" "}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
