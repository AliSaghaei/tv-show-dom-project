// API URLs
const API_URL = "https://api.tvmaze.com/shows/82/episodes";

// const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280/";
// const SEARCH_URL =
//   "https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=7c2ed6e1f883aaa7f6a2246351725c9a&query='";

// Grabbing the Elements
const form = document.getElementById("form"),
  search = document.getElementById("search"),
  main = document.getElementById("main");

// Get Movies
getMovies(API_URL);
async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  displayMovies(data);
  console.log(data);
}

// Display Movies
function displayMovies(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    let { name, image, season, number, summary } = movie;
    if (season < 10) {
      season = `0${season}`;
    }
    if (number < 10) {
      number = `0${number}`;
    }
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `
    <img src='${image.medium}' alt='${name}' />
    <div class="movie-info">
    <h3>${name}</h3>
    <span>S${season}E${number}</span>
    <div class='summary'>
    <h3>Overview</h3>
    ${summary}
    </div>
    </div>
    `;

    main.appendChild(movieElement);
  });
}
