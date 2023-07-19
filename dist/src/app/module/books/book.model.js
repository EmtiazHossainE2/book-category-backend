"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = exports.bookSchema = void 0;
const mongoose_1 = require("mongoose");
exports.bookSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    publicationDate: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    reviews: {
        type: [],
        required: true,
    },
}, {
    timestamps: true,
});
exports.Book = (0, mongoose_1.model)("Book", exports.bookSchema);
