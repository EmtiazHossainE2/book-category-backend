import { IBook, IBooksFilters } from "./book.interfce";
import { Book } from "./book.model";
import { bookSearchingFields } from "./bookConstant";

const createBook = async (paylode: IBook): Promise<IBook | any> => {
  const result = await Book.create(paylode);
  return result;
};
export type IPagenaionOptions = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
};
export const bookSearchingFieldsaa = ["title", "author", "genre"];

const getBooks = async (
  filters: IBooksFilters,
  pageinationOptions: IPagenaionOptions
) => {
  const { searchTerm, ...filtersData } = filters;
  const andCondation = [];
  console.log(searchTerm, filtersData);

  if (searchTerm) {
    andCondation.push({
      $or: bookSearchingFieldsaa.map((field) => ({
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
  console.log(andCondation);

  const requestCondetion =
    andCondation.length > 0 ? { $and: andCondation } : {};

  const result = await Book.find(requestCondetion);
  // console.log(result);

  return {
    data: result,
  };
};

const getSingleBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findById(id);
  return result;
};

const updateBookById = async (
  id: string,
  paylode: IBook
): Promise<IBook | any> => {
  console.log(id);

  const result = await Book.findByIdAndUpdate({ _id: id }, paylode, {
    new: true,
  });
  return result;
};
const deleteBookById = async (id: string): Promise<IBook | null> => {
  console.log(id, "deleted id");

  const result = await Book.findByIdAndDelete({ _id: id });
  return result;
};

const createReview = async (
  id: string,
  paylode: string
): Promise<IBook | any> => {
  console.log(paylode);

  const result = await Book.findByIdAndUpdate(
    { _id: id },
    { $push: { reviews: paylode } }
  );
  return result;
};

export const BookServices = {
  createBook,
  getBooks,
  getSingleBook,
  updateBookById,
  deleteBookById,
  createReview,
};
