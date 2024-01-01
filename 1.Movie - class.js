// Class - Movie

//constructor for the class Movie with Movie_rating set "PG" by default.
class Movie {
  constructor(Movie_title, Movie_studio, Movie_rating = 'PG') {
    this.title = Movie_title;
    this.studio = Movie_studio;
    this.rating = Movie_rating;
  }

  //to filter the movies that have ratig "PG".
  getPG(moviesArr) {
    return moviesArr.filter(movie => movie.rating === "PG");
  }

}

//to create a Movie_1 instance for Casino Royale
let Movie_1 = new Movie("Casino Royale", "Eon Productions", "PG­13");
let Movie_2 = new Movie("KO", "Red Giant", "R"); //to create a Movie_2 instance of Movie class

console.log(Movie_1);
console.log(Movie_2);


// Moviesarray that contains all rated movies
let arrayOfMovies = [
  new Movie("Vikram", "Rajkamal", "PG"),
  new Movie("Logan", "Marvel", "R"),
  new Movie("Joker", "DC", "R"),
  new Movie("Home_Alone", "20th_century", "PG"),
  new Movie("Wall-E", "Pixar", "PG")
];

console.log(Movie_1.getPG(arrayOfMovies));