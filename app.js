const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
require("dotenv").config();
const routes = require("./routes");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(port, () => {
	console.log(`Applikasi jalan di port ${port}`);
});
