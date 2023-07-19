import { IWishlist, Wishlist } from "./wishlist.modal";

const addWishlist = async (paylode: IWishlist): Promise<IWishlist | any> => {
  const result = await Wishlist.create(paylode);
  return result;
};

const getWishList = async (): Promise<IWishlist | any> => {
  const result = await Wishlist.find().populate("bookId");
  return result;
};

const updateWishList = async (
  id: string,
  paylode: any
): Promise<IWishlist | any> => {
  const result = await Wishlist.findByIdAndUpdate({ _id: id }, paylode, {
    new: true,
  });
  return result;
};

export const WishlistServices = {
  addWishlist,
  getWishList,
  updateWishList,
};
