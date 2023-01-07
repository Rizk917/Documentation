const express = require("express");
const app = express();
const port = 3000; // port can be put in .env
let date_ob = new Date();
// openining the port
app.listen(port, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", port);
});

//main page localhost
app.get("/", (req, res) => {
  console.log("ok");
  res.send("OK");
});
//test req
app.get("/test", (req, res) => {
  console.log("ok");
  res.send({ status: 200, message: "ok" });
});
// time req
app.get("/time", (req, res) => {
  console.log("ok");
  // current hours
  let hours = date_ob.getHours();

  // current minutes
  let minutes = date_ob.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  //time time response
  const timeResponse = { status: 200, message: hours + ":" + minutes };
  res.send(timeResponse);
});

//hello req
app.get("/hello/:id", (req, res) => {
  console.log("ok");

  res.send({ status: 200, message: `Hello, ${req.params.id} ` });
});

//search request
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

//movies array
const movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الإرهاب والكباب‎", year: 1992, rating: 6.2 },
];

// get array req
app.get("/movies/read", (req, res) => {
  console.log("ok");
  res.send({ status: 200, data: movies });
});

// sort by date
let sortedByDate = movies.sort((p1, p2) =>
  p1.year < p2.year ? 1 : p1.year > p2.year ? -1 : 0
);
// sort by ratig
let sortedByRating = movies.sort((p1, p2) =>
  p1.rating < p2.rating ? 1 : p1.rating > p2.rating ? -1 : 0
);
// sort by title
let sortedByTitle = movies.sort((p1, p2) =>
  p1.title < p2.title ? 1 : p1.title > p2.title ? -1 : 0
);
//route for specific sort
app.get("/movies/read/:id", (req, res) => {
  console.log("ok");
  if (req.params.id === "by-date") {
    res.send({ status: 200, data: sortedByDate });
  } else if (req.params.id === "by-rating") {
    res.send({ status: 200, data: sortedByRating });
  } else if (req.params.id === "by-title") {
    res.send({ status: 200, data: sortedByTitle });
  }
});

// get movie by specific id
app.get("/movies/read/id/:id", (req, res) => {
  console.log("ok");
  const specificMovie = movies.find(
    (specificMovie) => specificMovie.title == req.params.id
  );
  // console.log(specificMovie)
  if (specificMovie) {
    res.send({ status: 200, data: specificMovie });
  } else {
    res.send({
      status: 404,
      error: true,
      message: `the movie ${req.params.id} does not exist`,
    });
  }
});

//route to create
app.get("/movies/create", (req, res) => {
  console.log("ok");
  res.send({ status: 200, message: "create" });
});

//route to update
app.get("/movies/update", (req, res) => {
  console.log("ok");
  res.send({ status: 200, message: "update" });
});

//route to delete
app.get("/movies/delete", (req, res) => {
  console.log("ok");
  res.send({ status: 200, message: "delete" });
});
