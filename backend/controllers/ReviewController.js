import Review from "../models/Review.js";
import Tour from "../models/Tour.js";
export const createReview = async (req , res)=>{
    const tourID = req.params.id 
    const newReview = new Review({...req.body})

    try {
        // create new review 
        const review = await newReview.save()
        // push review in tour
        const newTour = await Tour.findByIdAndUpdate(tourID , {
            $push: {reviews: review._id}
        }, {new: true})
        res.status(200).json({success: true , message: "Update successfully" ,  data: newTour})
    } catch (error) {
        res.status(401).json({success: fals , message: "Update failed" })
    }
}