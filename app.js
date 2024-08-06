const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const statusController = require("./controllers/page-status");
const db = require("./database/database");

// const expHandlebars = require('express-handlebars');

const app = express();

// app.engine('hbs', expHandlebars.engine({
//     defaultLayout: false,
// }));
app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const userRouter = require("./routes/user");

db.execute("SELECT * FROM products").then().catch();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use(adminRoutes);
app.use(userRouter);

app.use(statusController.get404);

app.listen(3000);
