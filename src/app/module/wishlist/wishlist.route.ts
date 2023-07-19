import express from "express";
import { WishListControllers } from "./wishlist.controllr";

const router = express.Router();

router.post("/", WishListControllers.addToWishList);

router.get("/", WishListControllers.getAllBookList);

router.patch("/:id", WishListControllers.updateWishListBook);

export const WishlistRoutes = router;
