import express from "express";
const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import tour from "./routers/Tour.js";
import user from "./routers/User.js"
import auth from "./routers/Auth.js"
import review from './routers/Review.js'
import booking from './routers/Booking.js'
dotenv.config();
const port = process.env.PORT || 8000;
const corsOption ={
  origin: true,
  cridentials : true
}
// middle ware
app.use(cookieParser());
app.use(cors());
app.use(express.json());

async function connectToMongodb() {
  try {
    const connect = await mongoose.connect(
      `mongodb://localhost:27017/BookingTour`
    );
    connect && console.log("Connected to MongoDB")
  } catch (error) {
    console.log("Can not connect to MongoDB")
    console.log(error)
  }
}

app.use("/tour", tour)
app.use("/user" , user)
app.use("/auth", auth )
app.use("/reviews", review)
app.use("/booking", booking)
app.listen(port, () => {
    connectToMongodb();
    console.log(`Sever is listening on port ${port}`)
});
