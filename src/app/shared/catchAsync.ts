import { NextFunction, Request, RequestHandler, Response } from "express";

const catchAsync = (functions: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await functions(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

export default catchAsync;
