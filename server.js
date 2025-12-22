const express = require("express");
const app = express();

app.get("/", (res, req) => {
  req.send("Hello from the backend of our portfolio project");
});

app.get("/about", (res, req) => {
  req.send("This is the about page");
});
app.listen(3000, () => {
  console.log("Server is runing...");
});
