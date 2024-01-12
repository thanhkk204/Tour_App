import express from 'express';
import {
    createUser,
    getSingle,
    getAll,
    updateUser,
    deleteUser,
  } from "../controllers/UserController.js";
import { verifyAdmin , verifyUser } from '../untils/verifyToken.js';
  const router = express.Router();
  
  router.get("/",verifyAdmin , getAll);
  router.get("/:id", verifyUser ,getSingle);
  router.post("/", verifyUser, createUser);
  router.delete("/:id", verifyUser, deleteUser);
  router.put("/:id", verifyUser, updateUser);
  
  export default router;

