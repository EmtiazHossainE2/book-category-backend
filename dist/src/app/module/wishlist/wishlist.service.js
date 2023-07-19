"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistServices = void 0;
const wishlist_modal_1 = require("./wishlist.modal");
const addWishlist = (paylode) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield wishlist_modal_1.Wishlist.create(paylode);
    return result;
});
const getWishList = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield wishlist_modal_1.Wishlist.find();
    return result;
});
const updateWishList = (id, paylode) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield wishlist_modal_1.Wishlist.findByIdAndUpdate({ _id: id }, paylode, {
        new: true,
    });
    return result;
});
exports.WishlistServices = {
    addWishlist,
    getWishList,
    updateWishList,
};
