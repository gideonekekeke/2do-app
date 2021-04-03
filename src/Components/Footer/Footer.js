import React from "react";
// import foot from "../Components/img/11.png";
// import foot1 from "../Components/img/12.png";
// import foot2 from "../Components/img/13.png";
// import foot3 from "../Components/img/14.png";
import log from "../img/code.png";

function Footer() {
  return (
    <div
      style={{
        height: "%",
        backgroundColor: "#0a1885",
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "80%",
          // background: "red",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          color: "white",
          fontFamily: "poppins",
          flexWrap: " wrap",
          // height: "80%",
          margin: "10px",
        }}
      >
        <div style={{ margin: "10px" }}>
          <div style={{}}>Home</div>
          {/* <br /> */}
          {/* <div>How it works</div>
          <div>Testimonial</div>
          <div>Investors</div>
          <div>Terms of Service</div> */}
        </div>
        <div style={{ margin: "10px" }}>
          <div style={{}}>Report Case</div>
          {/* <br />
          <div>How it works</div>
          <div>Testimonial</div>
          <div>Investors</div>
          <div>Terms of Service</div> */}
        </div>
        <div style={{ margin: "10px" }}>
          <div style={{}}>Contact</div>
          {/* <br />
          <div>How it works</div>
          <div>Testimonial</div>
          <div>Investors</div>
          <div>Terms of Service</div> */}
        </div>
        <div style={{ margin: "10px" }}>
          <div style={{}}>Services</div>
          {/* <br />
          <div>How it works</div>
          <div>Testimonial</div>
          <div>Investors</div>
          <div>Terms of Service</div> */}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "80%",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-around",
          margin: "20px",
        }}
      >
        <div style={{ height: "40px", width: "100px" }}>
          <img src={log} style={{ height: "100%", width: "100%" }} />
        </div>
        <div style={{ color: "white" }}>
          {" "}
          Developed by Codelab 🚀 | © {new Date().getFullYear()} All rights
          reserved
        </div>
        <div
          style={{
            width: "10%",
            display: "flex",
            justifyContent: "space-beween",

            alignItems: "center",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Footer;
