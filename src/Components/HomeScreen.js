import React, { useState, useEffect, useContext } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import pic from "../Components/img/4.png";
import moment from "moment";
import { app } from "./Base";
import ReactCalendar from "../Components/CalenderPage";
import {
  DeleteOutlined,
  EditOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import SignUp from "./Signup";
import { GlobalContext } from "./AuthState/GlobalContext";
import AddingTodo from "./AddingTodo";

import DeletePage from "./DeletePage";
const db = app.firestore().collection("todo");
const listing = app.firestore().collection("todolist");

function HomeScreen() {
  // const { current, Delect_user } = useContext(GlobalContext);
  const [getTask, setGetTask] = useState([]);

  const gettingTask = async () => {
    const gotTask = await app.auth().currentUser;

    if (gotTask) {
      await db
        .doc()
        .collection("todolist")
        .orderBy("time", "desc")

        .onSnapshot((snap) => {
          const item = [];
          snap.forEach((doc) => {
            item.push(doc.data());
          });
          setGetTask(item);
        });
    }
  };

  const removingTask = (id) => {
    listing.doc(id).delete();
  };

  useEffect(() => {
    gettingTask();
  }, []);
  return (
    <>
      <div className="thefirsPart">
        <div className="backGoundOpacity">
          <div style={{ fontSize: "15px", fontWeight: "bold" }}>Welcome </div>

          <p className="todo_text">
            this is a todo app where your future lies. create, edit and delete
          </p>
          <SignUp />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          fontFamily: "poppins",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            // background: "red",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: "30px",
            fontSize: "poppins",
          }}
        >
          <AddingTodo />
          <ReactCalendar />
        </div>
        <div style={{ marginTop: "40px" }}>All Todos</div>
        {getTask.map(({ id, task, createdAt, postedBy }) => (
          <div key={id} className="todo_back">
            <div className="todo_holder">
              <div
                style={{
                  width: "90%",
                  // backgroundColor: "white",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    color: "white",
                    fontSize: "10px",
                    // fontWeight: "bold",
                  }}
                >
                  {" "}
                  {moment().calendar()}
                </div>
                <div
                  style={{
                    height: "30px",
                    width: "30px",
                    // backgroundColor: "white",
                    display: "flex",
                    // borderRadius: "50px",

                    // marginTop: "10px",
                  }}
                >
                  {/* <img
                    src={pic}
                    style={{ heigth: "100%", width: "100%", objectFit: "cover" }}
                  /> */}

                  <ProfileOutlined
                    style={{
                      fontSize: "20px",
                      color: "#840A60",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  marginTop: "10px",
                  color: "white",
                  fontSize: "13px",
                }}
              >
                {task}
              </div>
              <div style={{ display: "flex", marginTop: "10px" }}>
                <div
                  style={{
                    height: "20px",
                    width: "40px",
                    border: "1px solid silver",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <EditOutlined
                    style={{ color: "#840A60", fontSize: "17px" }}
                  />
                </div>
                {/* <div
                  style={{
                    height: "20px",
                    width: "40px",
                    border: "1px solid silver",
                    marginLeft: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <DeleteOutlined
                    onClick={() => {
                      removingTask(postedBy);
                    }}
                    style={{ color: "red", fontSize: "17px" }}
                  />
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomeScreen;
