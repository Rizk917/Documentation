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
  1;
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
    //search query
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

//route for specific sort
app.get("/movies/read/:id", (req, res) => {
  console.log("ok");
  if (req.params.id === "by-date") {
    // sort by date
    let sortedByDate = movies.sort((p1, p2) => p1.year - p2.year);
    res.send({ status: 200, data: sortedByDate });
  } else if (req.params.id === "by-rating") {
    // sort by rating
    let sortedByRating = movies.sort((p1, p2) => p1.rating - p2.rating);
    res.send({ status: 200, data: sortedByRating });
  } else if (req.params.id === "by-title") {
    // sort by title
    let sortedByTitle = movies.sort((p1, p2) => p1.title - p2.title);
    res.send({ status: 200, data: sortedByTitle });
  }
});

// get movie by specific id
app.get("/movies/read/id/:id", (req, res) => {
  console.log("ok");
  const specificMovie = movies.find(
    (specificMovie) =>
      specificMovie.title.toLowerCase() == req.params.id.toLowerCase()
  );
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

// /movies/add?title=<TITLE>&year=<YEAR>&rating=<RATING>
app.get("/movies/add", (req, res) => {
  console.log("ok");
  const t = req.query.title;
  const y = req.query.year;
  const r = req.query.rating;

  if (!t || !y || y.length !== 4 || isNaN(y)) {
    res.send({
      status: 403,
      error: true,
      message: "you cannot create a movie without providing a title and a year",
    });
  } else {
    if (!r) {
      movies.push(t, y, 4);
    } else movies.push(t, y, r);
  }
  // Send the updated list of movies as the response
  res.send({ status: 200, data: movies });
});

//route to update
app.get("/movies/update", (req, res) => {
  console.log("ok");
  res.send({ status: 200, message: "update" });
});

//route to delete
app.get("/movies/delete/:id", (req, res) => {
  const id = req.params.id;
  // get specific id to index
  const index = movies.findIndex(
    (movie) => movie.title.toLowerCase() == id.toLowerCase()
  );
  // If the movie was not found, send an error message
  if (index === -1) {
    res.send({
      status: 404,
      error: true,
      message: `The movie ${id} does not exist.`,
    });
  }
  // Remove the movie from the array
  movies.splice(index, 1);

  // Send the updated list of movies as the response
  res.send({ status: 200, data: movies });
});

// route for update
app.get("/movies/update/:id", (req, res) => {
  console.log("ok");
  const id = req.params.id;
  const newTitle = req.query.title;
  const newRating = req.query.rating;
  const newYear = req.query.year;
  // get specific index
  const index = movies.findIndex(
    (movie) => movie.title.toLowerCase() == id.toLowerCase()
  );
  // to update title
  if (newTitle) movies[index].title = newTitle;
  
  //to update year
  if (newYear && newYear.length == 4) movies[index].year = newYear;

  // to update rating
  if (newRating) movies[index].rating = newRating;

  // Send the updated list of movies as the response
  res.send({ status: 200, data: movies });
});
