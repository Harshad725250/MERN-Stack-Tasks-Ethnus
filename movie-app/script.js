const movies = [
  {
    title: "Breaking Bad",
    type: "series",
    year: "2008–2013",
    image: "https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png"
  },
  {
    title: "The Good, the Bad and the Ugly",
    type: "movie",
    year: "1966",
    image: "https://upload.wikimedia.org/wikipedia/en/4/45/Good_the_bad_and_the_ugly_poster.jpg"
  },
  {
    title: "Bad Boys",
    type: "movie",
    year: "1995",
    image: "https://upload.wikimedia.org/wikipedia/en/9/90/Bad_Boys_1995_poster.jpg"
  },
  {
    title: "Bad Boys II",
    type: "movie",
    year: "2003",
    image: "https://upload.wikimedia.org/wikipedia/en/1/1e/Bad_Boys_2_poster.jpg"
  }
];

const movieList = document.getElementById("movieList");
const searchBox = document.getElementById("search");

function displayMovies(filter = "") {
  movieList.innerHTML = "";

  const filtered = movies.filter(movie =>
    movie.title.toLowerCase().includes(filter.toLowerCase())
  );

  filtered.forEach(movie => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <div class="card-content">
        <h3>${movie.title}</h3>
        <p>Type: ${movie.type}</p>
        <p>Release Year: ${movie.year}</p>
      </div>
    `;

    movieList.appendChild(card);
  });
}

// Initial display
displayMovies();

// Search filter
searchBox.addEventListener("input", e => {
  displayMovies(e.target.value);
});
