import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "antd";
import { app } from "./Base";
import "./sign.css";
import { motion } from "framer-motion";

import { useHistory } from "react-router";
import SignUp from "./Signup";
const db = app.firestore().collection("todo");
function Login() {
  const hist = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      height: "50%",
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

  const LogInNewUser = async () => {
    await app.auth().signInWithEmailAndPassword(email, password);
    hist.push("/");
  };

  return (
    <div>
      <div
        onClick={handleOpen}
        style={{
          marginTop: "5px",
          // height: "40px",
          // width: "100px",
          // backgroundColor: "#DE6316",
          // color: "white",
          // border: "none",
          // fontWeight: "bold",
          fontSize: "12px",
        }}
      >
        LOG IN
      </div>
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ fontSize: "20px", fontWeight: "bold" }}>LOG IN</div>
              <br />
              <br />
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                placeholder="Email"
                style={{ height: "30px", width: "70%", paddingLeft: "20px" }}
              />

              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                style={{
                  color: "black",
                  height: "30px",
                  width: "70%",
                  paddingLeft: "20px",
                  margin: "10px",
                }}
                type="password"
                placeholder="Password"
              />
              <br />
              <Button
                onClick={() => {
                  LogInNewUser();
                  handleClose();
                }}
                style={{
                  width: "50%",
                  height: "50px",
                  borderRadius: "5px",
                  backgroundColor: "#34384A",
                  color: "white",
                  border: "1px solid gray",
                  fontFamily: "poppins",
                  outline: "none",
                  cursor: "pointer",
                  // marginTop: "20px",
                }}
              >
                Log in
              </Button>
              <br />
              <div style={{ display: "flex" }}>
                Don't Have an Account ?
                {/* <Link style={{ textDecoration: "none" }} to="/signup"> */}
                <div
                  style={{
                    marginLeft: "10px",
                    color: "red",
                    cursor: "pointer",
                  }}
                >
                  Sign up{" "}
                </div>
                {/* <SignModal /> */}
                {/* Sign up */}
                {/* </Link> */}
              </div>
            </div>
          </motion.div>
        </Fade>
      </Modal>
    </div>
  );
}

export default Login;
