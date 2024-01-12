import Tour from "../models/Tour.js";
export async function createTour(req, res) {
  const newTour = new Tour(req.body);

  try {
    const saveTour = await newTour.save();
    res.status(200).json({
      success: true,
      message: "Success Created",
      data: saveTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Fail Created",
    });
  }
}
// delete
export async function deleteTour(req, res) {
  const id = req.params.id;

  try {
    await Tour.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Success deleted Tour",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Fail to deleted Tour",
    });
  }
}
// update
export async function updateTour(req, res) {
  const id = req.params.id;

  try {
    const newTour = await Tour.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Success update Tour",
      data: newTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Fail to update Tour",
    });
  }
}
// getSingle
export async function getSingle(req, res) {
  const id = req.params.id;

  try {
    const newTour = await Tour.findOne({_id: id}).populate('reviews');

    res.status(200).json({
      success: true,
      message: "Success get Tour Tour",
      data: newTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Fail to get tour Tour",
    });
  }
}
// Get all tour
export async function getAll(req, res) {
  try {
    const newTour = await Tour.find({}).populate('reviews');

    res.status(200).json({
      success: true,
      message: "Success get Tour for panagation",
      data: newTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Fail to get tour for panagation",
      err : error
    });
  }
}
// Get all tour for panagation
export async function getAllForPanagation(req, res) {
  const page = parseInt(req.query.page)
  try {
    const newTour = await Tour.find({}).populate('reviews').skip(page * 8).limit(8);

    res.status(200).json({
      success: true,
      message: "Success get Tour Tour",
      data: newTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Fail to get tour Tour",
    });
  }
}
// get all tour by serach
export async function getAllBySearch(req, res) {
  const city = new RegExp(req.query.city , 'i')
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);
  console.log(city)
  try {
    const newTour = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate('reviews');

    res.status(200).json({
      success: true,
      message: "Success get Tour Tour",
      data: newTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Fail to get tour Tour search",
    });
  }
}
// get all tour by featured
export async function getAllByFeatured(req, res) {
  
  try {
    const newTour = await Tour.find({}).populate('reviews').limit(8)

    res.status(200).json({
      success: true,
      message: "Success get Tour Tour",
      data: newTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Fail to get tour Tour search",
    });
  }
}
// get Count tour
export async function getCountTours(req, res) {
  
  try {
    const size = await Tour.estimatedDocumentCount()

    res.status(200).json({
      success: true,
      message: "Success get Count tour",
      data: size,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Fail to get count tour",
      data: error
    });
  }
}
