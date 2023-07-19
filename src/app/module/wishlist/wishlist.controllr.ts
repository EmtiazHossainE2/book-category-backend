import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import httpStatus from "http-status";
import { WishlistServices } from "./wishlist.service";

const addToWishList: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...OrderData } = req.body;
    console.log(OrderData);

    const result = await WishlistServices.addWishlist(OrderData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "successfully add to wishlist",
      data: result,
    });
  }
);

const getAllBookList: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await WishlistServices.getWishList();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "successfully get wishlist",
      data: result,
    });
  }
);

const updateWishListBook: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const updatedData = req.body;

    console.log(id, updatedData);

    const result = await WishlistServices.updateWishList(id, updatedData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "successfully update wishlist book",
      data: result,
    });
  }
);

export const WishListControllers = {
  addToWishList,
  getAllBookList,
  updateWishListBook,
};
