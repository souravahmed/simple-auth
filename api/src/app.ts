import express, {
  Application,
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from "express";
import cors from "cors";
import apiRoute from "./routes";
import ErrorHandlerMiddleware from "./middlewares/errorHandlerMiddleware";
import path from "path/posix";

export const app: Application = express();
const PORT = process.env.PORT || 4000;
export const __dirname = path.resolve();
//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", apiRoute);

app.use(<ErrorRequestHandler>(
  function (err: any, req: Request, res: Response, next: NextFunction) {
    return ErrorHandlerMiddleware(err, req, res, next);
  }
));

app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`);
});
