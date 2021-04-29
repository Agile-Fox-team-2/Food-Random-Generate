const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
if (process.env.NODE_ENV === "development") require("dotenv").config();
const routes = require("./routes");
const errorHandler = require("./middlewares/errorHandler");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(errorHandler);

app.listen(port, () => {
	console.log(`Aplikasi jalan di port ${port}`);
});
