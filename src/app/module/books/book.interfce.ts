import { Model } from "mongoose";

export type IBook = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  img: string;
  reviews?: [];
};

export type IBookModel = Model<IBook>;

export type IBooksFilters = {
  searchTerm?: string;
  title?: string;
  author?: string;
  genre?: string;
};
