import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "antd";
// import { app } from "./Base";
import "./sign.css";
// import "./mod.css";
import { motion } from "framer-motion";
import { useHistory } from "react-router";
import { render } from "react-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function ReactCalendar() {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  const hist = useHistory();

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,

      // border: "2px solid #000",
      // backgroundImage: "linear-gradient(#4c87df, #1854b1, #2233ac)",
      backgroundColor: "white",
      // color: "white",

      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: "30%",
      height: "70%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
  }));
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        style={{
          height: "50px",
          width: "100px",
          color: "white",
          borderRadius: "10px",
          backgroundColor: "#840A60",
          fontSize: "15px",
        }}
      >
        Calendar
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <motion.div
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            className="thin1"
          >
            <div>
              <Calendar showWeekNumbers onChange={onChange} value={date} />
              {console.log(date)}
              {date.toString()}
            </div>
          </motion.div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ReactCalendar;
