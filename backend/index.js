const express = require("express");
const app = express();
const connection = require("./config");
const usersRouter = require("./routes/users");


const port = process.env.PORT || 5000;

connection.connect((err) => {
  if (err) throw err;
  console.log("Successfully connected to the database");
});

app.use(express.json());

app.use("/users", usersRouter);

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`App is listening at ${port}`);
});




