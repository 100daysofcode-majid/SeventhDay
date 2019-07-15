const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const adminData = require("./routes/admin");
const shopRouter = require("./routes/shop");
const rootDir = require("./util/path");



const app = express();

// const expressHbs = require("express-handlebars");
// app.engine(
//   'hbs',
//   expressHbs({
//     layoutsDir: 'views/layouts/',
//     defaultLayout: 'main-layout',
//     extname: 'hbs'
//   })
// );
// app.set("view engine", "hbs");
app.set("view engine", "ejs");
// app.set("view engine", "pug");
app.set("views", "views");


app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", adminData.routes);
app.use(shopRouter);
app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
  res.status(404).render("404", { pageTitle: "Not Found",activeMenu:"" });
});

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);
