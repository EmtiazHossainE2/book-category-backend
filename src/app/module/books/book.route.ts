import express from "express";
import { BookControllers } from "./book.controller";

const router = express.Router();

router.post("/", BookControllers.createBook);

router.patch("/review/:id", BookControllers.addReview);

router.patch("/:id", BookControllers.updateBook);

router.delete("/:id", BookControllers.deleteBook);

router.get("/:id", BookControllers.getBookById);

router.get("/", BookControllers.getAllBooks);

export const BookRoutes = router;
