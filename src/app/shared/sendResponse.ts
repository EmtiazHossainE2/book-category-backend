import { Response } from "express";

const sendResponse = (res: Response, data: any): void => {
  const responseData = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message,
    data: data.data || null,
  };
  res.status(data.statusCode).json(responseData);
};

export default sendResponse;
