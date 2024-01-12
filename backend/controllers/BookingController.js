import Booking from "../models/Booking.js";

export const CreateBooking = async (req, res) => {
  const tourID = req.params.id;
  const userID = req.user.id;
  const newBooking = new Booking({ userID, tourID });
  try {
    const checkBooking = await newBooking.save();
    if (checkBooking) {
      res.status(200).json({
        success: true,
        message: "Create booking success",
        data: checkBooking,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: true,
      message: "Create booking fail",
    });
  }
}
export const getAllBooking = async (req , res)=>{
        
    try {
        const allBooking = await Booking.find({}).populate('userID').populate('tourID')

        if(allBooking){
            res.status(200).json({
                success: true,
                message: "Get all booking succesfully",
                data: allBooking
            })
        }
    } catch (error) {
        res.status(200).json({
            success: false,
            message: "Get all booking fail"
        })
    }
}