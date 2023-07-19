import { Schema, model } from "mongoose";
import { IBook } from "./book.interfce";

export const bookSchema = new Schema<IBook>(
  {
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
  },
  {
    timestamps: true,
  }
);

export const Book = model("Book", bookSchema);
