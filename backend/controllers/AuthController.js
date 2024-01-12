import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
  //hash code
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(req.body.password , salt)
  try {
    const newUser = new User({
      email: req.body.email,
      username: req.body.username,
      password: hash,
      photo: req.body.photo,
    });

    await newUser.save();

    res.status(200).json({
      success: true,
      message: "Success Created",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed Created , try it again",
    });
  }
};
export const Login = async (req, res) => {
    const email = req.body.email

    try {
        const user = await User.findOne({email: email})

        if(!user){
            res.status(404).json({success: false , message: "Not found user"})
        }
        // check password
        const checkCorrectPassword = bcrypt.compare(req.body.password , user.password)

        if(!checkCorrectPassword){
            res.status(404).json({success: false , message: "Password is not correct"})
        }
        const {password , role , ...rest} = user._doc
        // create token
        const token = jwt.sign({
            id: user._id,
            role: user.role
        }, process.env.JWT_SECRET_KEY, {expiresIn: '15d'})
        // add cookied to browner and respon to client
        res.cookie('accessToken', token, {
            httpOnly: true,
            expires: token.expiresIn
        }).status(200).json({ success: true , message: "Login sucessfully", data: {...rest} , token , role})
    } catch (error) {
        res.status(401).json({ success: true , message: "Login failed"})
    }
}