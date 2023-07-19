import { bookFilterableFields } from "./bookConstant";
import httpStatus from "http-status";
import { NextFunction, Request, RequestHandler, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { BookServices } from "./book.services";
import { Book } from "./book.model";
import { IBook, IBooksFilters } from "./book.interfce";
import pick from "../../shared/pick";

const createBook: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...BookData } = req.body;
    console.log(BookData);

    const result = await BookServices.createBook(BookData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Book created successfully",
      data: result,
    });
  }
);
export const paginationKeys = ["page", "limit", "sortBy", "sortOrder"];

const getAllBooks: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const query = req.query;

    const paginationOptions = pick(query, paginationKeys);

    const filters = pick(query, bookFilterableFields);

    const result = await BookServices.getBooks(filters, paginationOptions);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "book retrieved successfully",
      data: result.data.reverse(),
    });
  }
);

const getBookById = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const result = await BookServices.getSingleBook(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Book retrieved successfully",
      data: result,
    });
  }
);
const updateBook = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const updatedData = req.body;

    const result = await BookServices.updateBookById(id, updatedData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Book updated Successfully",
      data: result,
    });
  }
);

const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await BookServices.deleteBookById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book deleted Successfully",
    data: result,
  });
});

const addReview: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const { ...review } = req.body;

    const result = await BookServices.createReview(id, review);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Review Added successfully",
      data: result,
    });
  }
);

export const BookControllers = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
  addReview,
};
