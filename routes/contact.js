const express = require("express");

const ContactRouter = express.Router();
const {
  addUser,
  getUser,
  useUpdate,
  deleteUser,
  getUserId,
} = require("../controles/contact");

// route get all user
ContactRouter.get("/", getUser);

// route post a user
ContactRouter.post("/adduser", addUser);

// route put or update a user
ContactRouter.put("/:id", useUpdate);

// route delete user
ContactRouter.delete("/:id", deleteUser);

// route get by id  a user
ContactRouter.get("/:id", getUserId);

module.exports = ContactRouter;
