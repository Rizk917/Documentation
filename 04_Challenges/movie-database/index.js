const express = require("express");
const app = express();
const port = 3000; // port can be put in .env
const tResponse = { status: 200, message: "ok" };
let date_ob = new Date();

app.listen(port, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", port);
});
app.get("/", (req, res) => {
  console.log("ok");
  res.send("OK");
});

app.get("/test", (req, res) => {
  console.log("ok");
  res.send({ status: 200, message: "ok" });
});

app.get("/time", (req, res) => {
  console.log("ok");
  // current hours
  let hours = date_ob.getHours();

  // current minutes
  let minutes = date_ob.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  const timeResponse = { status: 200, message: hours + ":" + minutes };
  res.send(timeResponse);
});
app.get("/hello/:id", (req, res) => {
  console.log("ok");

  res.send({ status: 200, message: `Hello, ${req.params.id} ` });
});
app.get("/search", (req, res) => {
  console.log("ok");
  if (req.query.s) {
    res.send({ status: 200, message: "OK", data: req.query.s });
  } else {
    res.send({
      status: 500,
      error: true,
      message: "you have to provide a search",
    });
  }
});
const movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الإرهاب والكباب‎", year: 1992, rating: 6.2 },
];

app.get("/movies/:id", (req, res) => {
  console.log("ok");
  if (req.params.id === "read") {
    res.send({ status: 200, data: movies });
  } else if (req.params.id === "create") {
    res.send({ status: 200, message:"create" });
  } else if (req.params.id === "update") {
    res.send({ status: 200,  message:"update"});
  } else if (req.params.id === "delete") {
    res.send({ status: 200,  message:"delete"});
  }
});
