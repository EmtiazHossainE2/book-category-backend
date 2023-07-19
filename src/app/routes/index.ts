import express from "express";
import { BookRoutes } from "../module/books/book.route";
import { WishlistRoutes } from "../module/wishlist/wishlist.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/books",
    route: BookRoutes,
  },
  {
    path: "/wishlist",
    route: WishlistRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
