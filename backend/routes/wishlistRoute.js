import express from "express";

import {
  addToWishlist,
  removeFromWishlist,
  getUserWishlist,
} from "../controllers/wishlistController.js";
import authUser from "../middleware/Auth.js";

const wishlistRouter = express.Router();

wishlistRouter.post("/add", authUser, addToWishlist);
wishlistRouter.post("/remove", authUser, removeFromWishlist);
wishlistRouter.get("/get", authUser, getUserWishlist);

export default wishlistRouter;
