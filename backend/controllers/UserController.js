import User from "../models/User.js";

// create
export async function createUser(req, res) {
  const newUser = new User(req.body);

  try {
    const saveUser = await newUser.save();
    res.status(200).json({
      success: true,
      message: "Success Created",
      data: saveUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Fail Created",
    });
  }
}
// delete
export async function deleteUser(req, res) {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Success deleted User",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Fail to deleted User",
    });
  }
}
// update
export async function updateUser(req, res) {
  const id = req.params.id;

  try {
    const newUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Success update User",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Fail to update User",
    });
  }
}
// getSingle
export async function getSingle(req, res) {
  const id = req.params.id;

  try {
    const newUser = await User.findById(id);

    res.status(200).json({
      success: true,
      message: "Success get User User",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Fail to get User User",
    });
  }
}
// allUser
export async function getAll(req, res) {
  try {
    const newUser = await User.find();

    res.status(200).json({
      success: true,
      message: "Success get User User",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Fail to get User User",
    });
  }
}