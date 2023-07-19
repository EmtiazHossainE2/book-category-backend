"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wishlist = void 0;
const mongoose_1 = require("mongoose");
const wishlistSchema = new mongoose_1.Schema({
    bookId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "book",
    },
    plantoRead: {
        type: Boolean,
    },
    finishRead: {
        type: Boolean,
    },
}, {
    timestamps: true,
});
exports.Wishlist = (0, mongoose_1.model)("wishlist", wishlistSchema);
