const contactSchema = require("../model/contact");

const getUser = async (req, res) => {
  try {
    const contact = await contactSchema.find();
    res.status(200).json({ msg: "this is the users list", contact });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, msg: "you have no user to get" });
  }
};

const addUser = async (req, res) => {
  try {
    console.log("add user", req.body);
    const NewContact = await new contactSchema(req.body);
    NewContact.save();
    res.status(200).json({ msg: "il a bien été rajouté ", NewContact });
  } catch (err) {
    // console.log(err);
    res.status(500).json({ err, msg: "could not add a user" });
  }
};

const useUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const userUpdate = await contactSchema.findByIdAndUpdate(id, {
      $set: { ...req.body },
    });
    res.status(200).json({ msg: "the user is update", userUpdate });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, msg: `you coulnt update it` });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteContact = await contactSchema.findByIdAndDelete(id);
    res.status(200).json({ msg: "il a bien été supprimé", deleteContact });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, msg: "n'est pas supprimé" });
  }
};
const getUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const contactUnique = await contactSchema.findById(id);
    res.status(200).json({ msg: "this is the user", contactUnique });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, msg: "you have no user to get" });
  }
};

module.exports = { getUser, getUserId, deleteUser, useUpdate, addUser };
