import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import chalk from "chalk";
import exphbs from "express-handlebars";
import maintainRoutes from "./routes/maintainRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import pageRoutes from "./routes/pageRoutes.js";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const log = console.log;
const PORT = process.env.PORT || 8080;
const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    log(chalk.green("Connected to MongoDB"));
  })
  .catch((err) => log(chalk.red(err.message)));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("static"));
app.use(cookieParser());

app.engine(
  "hbs",
  exphbs.engine({
    extname: "hbs",
    partialsDirs: join(__dirname, "views", "partials"),
    defaultLayout: null,
  })
);

app.use("/", pageRoutes);
app.use("/auth", authRoutes);
app.use("/api", maintainRoutes);
app.set("view engine", "hbs");

app.listen(PORT, () => {
  log(
    chalk.white(
      "\n------------------------------------------\nStarting server ...\n"
    )
  );
  log(chalk.green("Server running on port " + PORT));
  log(chalk.blue("\nAccess the server at http://localhost:" + PORT));
});
