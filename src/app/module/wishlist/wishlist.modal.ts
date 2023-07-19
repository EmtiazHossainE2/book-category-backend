import { Schema, Types, Model, model } from "mongoose";
import { IBook } from "../books/book.interfce";

export type IWishlist = {
  bookId: Types.ObjectId | IBook;
  plantoRead: boolean;
  finishRead: boolean;
};
type WishlistModal = Model<IWishlist>;

const wishlistSchema = new Schema<IWishlist>(
  {
    bookId: {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
    plantoRead: {
      type: Boolean,
    },
    finishRead: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

export const Wishlist = model<IWishlist, WishlistModal>(
  "wishlist",
  wishlistSchema
);
