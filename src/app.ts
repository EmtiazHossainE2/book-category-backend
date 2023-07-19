import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import httpStatus from "http-status";
import router from "./app/routes";

// parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Add this line to parse JSON data

app.use(cors());

// application routes

app.use("/api/v1/", router);

app.use("/", (req, res) => {
  res.send("Hello world");
});

// global error handler

app.use((req: Request, res: Response) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not Found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API Is not Found",
      },
    ],
  });
});

export default app;
