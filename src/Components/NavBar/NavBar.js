import React, { useContext, useState } from "react";
import log from "../img/code.png";
import log1 from "../img/5.png";
import { Link, useHistory } from "react-router-dom";

import "./nav.css";
import { GlobalContext } from "../AuthState/GlobalContext";

function NavBar() {
  const { current, currentData } = useContext(GlobalContext);
  const hist = useHistory();

  const [moveNav, setMoveNav] = useState(false);

  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onMoveNav = () => {
    if (window.scrollY >= 70) {
      setMoveNav(true);
    } else {
      setMoveNav(false);
    }
  };
  window.addEventListener("scroll", onMoveNav);

  return (
    <>
      <div
        className={moveNav ? "your_nav" : "my_nav"}
        style={{
          height: "70px",
          top: 0,
          position: "sticky",
          zIndex: "20",
          // backgroundColor: "red",
        }}
      >
        <div
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            height: "100%",
            top: 0,
            position: "sticky",
            zIndex: "20",

            // backgroundColor: "white",

            cursor: "pointer",
          }}
        >
          {moveNav ? (
            <div
              className="image_move"
              style={{ height: "60px", width: "80px" }}
            >
              <img
                src={log1}
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
              />
            </div>
          ) : (
            <div
              className="image_move"
              style={{ height: "60px", width: "80px" }}
            >
              <img
                src={log}
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
              />
            </div>
          )}

          <div
            className="navtext"
            style={{
              width: "50%",
              // background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              height: "100%",
              fontFamily: "poppins",
              fontSize: "15px",
            }}
          >
            {/* <Link to="/" style={{ textDecoration: "none", color: "white" }}> */}
            <div
              onClick={() => {
                hist.push("/");
              }}
              className="navtext"
            >
              Home
            </div>
            {/* </Link> */}

            <div
              onClick={() => {
                hist.push("/contact");
              }}
            >
              {current ? (
                <div>{currentData && currentData.name}</div>
              ) : (
                <div>Todo</div>
              )}
            </div>
          </div>
          {current ? (
            <div
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "50px",
                backgroundColor: "#840A60",
              }}
            >
              <img
                src={currentData && currentData.avatar}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "50px",
                }}
              />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default NavBar;
