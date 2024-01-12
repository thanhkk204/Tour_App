import express from 'express'
import { CreateBooking, getAllBooking } from '../controllers/BookingController.js'
import { verifyUser , verifyAdmin } from '../untils/verifyToken.js';
const router = express.Router();

router.post('/:id',verifyUser , CreateBooking)
router.get('/', verifyAdmin , getAllBooking)

export default router