"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_route_1 = require("../module/books/book.route");
const wishlist_route_1 = require("../module/wishlist/wishlist.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/books",
        route: book_route_1.BookRoutes,
    },
    {
        path: "/wishlist",
        route: wishlist_route_1.WishlistRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
