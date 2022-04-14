// API URLs
const API_URL = "https://api.tvmaze.com/shows/82/episodes";

// Grabbing the Elements
const form = document.getElementById("form"),
  search = document.getElementById("search"),
  main = document.getElementById("main");

// Fetched data
let data;
let searchTerm = "";
// Get Movies
getMovies(API_URL);
async function getMovies(url) {
  data = await fetch(url).then((res) => res.json());
  displayMovies(data);
}

// Display Movies
async function displayMovies(movies) {
  main.innerHTML = "";

  movies
    .filter(
      (country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.summary.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .forEach((movie) => {
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
    <h3>Summary</h3>
    ${summary}
    </div>
    </div>
    `;

      main.appendChild(movieElement);
    });
}

// Search Form

search.addEventListener("input", (e) => {
  searchTerm = e.target.value;

  displayMovies(data);
});
