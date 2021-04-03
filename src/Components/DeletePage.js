import React from "react";
import {
  DeleteOutlined,
  EditOutlined,
  ProfileOutlined,
} from "@ant-design/icons";

import { app } from "./Base";
const db = app.firestore().collection("todo");
const listing = app.firestore().collection("todolist");

const removingTask = async ({ postedBy, id }) => {
  const removing = await app.auth().currentUser;

  if (removing) {
    await listing.doc(postedBy).delete(id);
    console.log(postedBy);
  }
};

function DeletePage() {
  return <></>;
}

export default DeletePage;
