import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import chalk from "chalk";
import exphbs from "express-handlebars";
import maintainRoutes from "./routes/maintainRoutes.js";
import { join, dirname } from 'path'
import { fileURLToPath } from "url";
dotenv.config();

const app = express();
const log = console.log;
const PORT = process.env.PORT || 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("static"));

app.engine(
  "hbs",
  exphbs.engine({
    extname: "hbs",
      partialsDirs: join(__dirname, "views", "partials"),
    defaultLayout: null,
  })
);

app.get("/", (req, res) => {
  res.render("index");
});
app.use("/maintain", maintainRoutes);
app.set("view engine", "hbs");

app.listen(PORT, () => {
  log(chalk.green("\nServer is running on port 3000"));
});
