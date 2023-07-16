let movies = [
  "13 Minutes",
  "300",
  "Creed 3",
  "Fast and Furious 6",
  "Insidious - The Red Door",
  "Jumanji",
  "Saving Private Ryan",
  "Titanic",
  "Top Gun - Maverick",
  "The Revenant",
  "The Expendables 4",
  "Madagascar 4",
  "Babylon",
  "Cocaine Bear",
  "Jackass 3",
];

onStart();

//this function is called as soon as the file is loaded
function onStart() {
  //rendering the list of movies available in the 'movies' array
  displayMovies(movies);
  //the first 6 movies in the 'movies' array are displayed on the slides
  displayCarousel();
  document.querySelector(".search-btn").addEventListener("click", search);
}

//takes in the name of a movie (a string) and embeds it into html code
function generateMovie(name) {
  return `<div class="col-12 col-sm-2 col-md-4 mt-3">
  <div
    class="image"
    onmouseover="onImageHover(this)"
    onmouseleave="onMouseLeave(this)"
  >
    <img src="assets/images/${name}.jpg" alt="" />

    <div
      class="bookNow"
      onclick="bookNow(this)"
      data-name="${name}"
    >
      BOOK NOW
    </div>
  </div>
</div>`;
}

//takes in the name of a movie (a string) and embeds it into html code
function generateCarouselItem(movie, index) {
  let elem = document.createElement("div");
  elem.classList.add("carousel-item");

  if (index === 0) elem.classList.add("active");

  elem.innerHTML = `<img
    src="assets/images/${movie}.jpg"
    class="d-block w-100"
    alt="..."
  />
  <div class="carousel-footer">
    <h2>${movie}</h2>
    <button class="book-btn" data-name="${movie}" onclick="bookNow(this)">BOOK NOW</button>
  </div>`;

  return elem.outerHTML;
}

function displayMovies(list) {
  const container = document.querySelector(".movies-row");
  container.innerHTML = "";
  let content = "";

  list.forEach((movie) => {
    content += generateMovie(movie);
  });

  container.innerHTML = content;
}

function displayCarousel() {
  const container = document.querySelector(".carousel-inner");
  container.innerHTML = "";
  let content = "";

  for (let i = 0; i < 6; i++) {
    content += generateCarouselItem(movies[i], i);
  }

  container.innerHTML = content;
}

//this function is called when clicking the 'search' button
function search() {
  let term = document.querySelector(".movie-search").value;

  let list = movies.filter((movie) => movie.includes(term));

  displayMovies(list);
}

// the 3 functions below make the 'book now' button pop up when hovering over a movie
function onImageHover(elem) {
  elem.classList.add("hovered");
}

function onMouseLeave(elem) {
  elem.classList.remove("hovered");
}

function bookNow(elem) {
  let name = elem.dataset.name;
  // localStorage.setItem("movieName", name);
  localStorage.setItem("booking",JSON.stringify({movieTime:"Mon 17 Jul, 2:10pm - 2:20pm", movieData:{title:name,src:name}}));
  window.location.replace("book-tickets.html");
}
