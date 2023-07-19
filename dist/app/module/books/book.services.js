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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookServices = exports.bookSearchingFieldsaa = void 0;
const book_model_1 = require("./book.model");
const createBook = (paylode) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.create(paylode);
    return result;
});
exports.bookSearchingFieldsaa = ["title", "author", "genre"];
const getBooks = (filters, pageinationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = filters, filtersData = __rest(filters, ["searchTerm"]);
    const andCondation = [];
    if (searchTerm) {
        andCondation.push({
            $or: exports.bookSearchingFieldsaa.map((field) => ({
                [field]: {
                    $regex: searchTerm,
                    $options: "i",
                },
            })),
        });
    }
    if (Object.keys(filtersData).length) {
        andCondation.push({
            $and: Object.entries(filtersData).map(([field, value]) => ({
                [field]: value,
            })),
        });
    }
    const requestCondetion = andCondation.length > 0 ? { $and: andCondation } : {};
    const result = yield book_model_1.Book.find(requestCondetion);
    // console.log(result);
    return {
        data: result,
    };
});
const getSingleBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.findById(id);
    return result;
});
const updateBookById = (id, paylode) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    const result = yield book_model_1.Book.findByIdAndUpdate({ _id: id }, paylode, {
        new: true,
    });
    return result;
});
const deleteBookById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id, "deleted id");
    const result = yield book_model_1.Book.findByIdAndDelete({ _id: id });
    return result;
});
const createReview = (id, paylode) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(paylode);
    const result = yield book_model_1.Book.findByIdAndUpdate({ _id: id }, { $push: { reviews: paylode } });
    return result;
});
exports.BookServices = {
    createBook,
    getBooks,
    getSingleBook,
    updateBookById,
    deleteBookById,
    createReview,
};
