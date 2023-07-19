"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
router.post("/", book_controller_1.BookControllers.createBook);
router.patch("/review/:id", book_controller_1.BookControllers.addReview);
router.patch("/:id", book_controller_1.BookControllers.updateBook);
router.delete("/:id", book_controller_1.BookControllers.deleteBook);
router.get("/:id", book_controller_1.BookControllers.getBookById);
router.get("/", book_controller_1.BookControllers.getAllBooks);
exports.BookRoutes = router;
