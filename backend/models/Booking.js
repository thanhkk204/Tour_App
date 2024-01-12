import mongoose from "mongoose";
const Booking = new mongoose.Schema({
  userID: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  tourID: {
    type: mongoose.Types.ObjectId,
    ref: "Tour",
  },
},{timestamps: true});

export default mongoose.model('booking', Booking)
