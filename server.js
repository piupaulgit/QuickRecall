const cookieSession = require("cookie-session");
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");
const authRoute = require("./routes/auth");
require ('./passport.js');
const app = express();

app.use(session({
  secret: 'SessionSecret',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);


app.listen("8000", () => {
  console.log("Server is running!");
});
