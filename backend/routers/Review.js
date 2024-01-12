import express from 'express'
import { createReview } from '../controllers/ReviewController.js'
const Router = express.Router();
Router.post('/:id', createReview)
export default Router
