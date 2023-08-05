
let movies = 
[
    {
        title:"13 Minutes",
        description:"Four families in a Heartland town are tested in a single day when a tornado hits, forcing paths to cross and redefining the meaning of survival.",
        releaseDate:"October 29, 2021",
        runningTime:"1h 48m",
        director:"Lindsay Gossling",
        cast:["Amy Smart","Thora Birch","Anne Heche"],
        rating:4.7
    },
    {
        title:"300",
        description:"King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
        releaseDate:"December 9,2006",
        runningTime:"1h 57m",
        director:"Zack Snyder",
        cast:["Gerard Butler","Lena Headey","David Wenham"],
        rating:7.6 
    },
    {
        title:"Babylon",
        description:"A tale of outsized ambition and outrageous excess, it traces the rise and fall of multiple characters during an era of unbridled decadence and depravity in early Hollywood.",
        releaseDate:"December 15, 2022",
        runningTime:"3h 9m",
        director:"Damien Chazelle",
        cast:["Brad Pitt","Margot Robbie","Jean Start"],
        rating:7.2 
    },
    {
        title:"Cocaine Bear",
        description:"An oddball group of cops, criminals, tourists and teens converge on a Georgia forest where a huge black bear goes on a murderous rampage after unintentionally ingesting cocaine.",
        releaseDate:"February 22, 2023",
        runningTime:"1h 35m",
        director:"Elizabeth Banks",
        cast:["Keri Russell","Alden Ehrenreich","O'Shea Jackson Jr."],
        rating:6.0 
    },
    {
        title:"Creed 3",
        description:"Adonis has been thriving in both his career and family life, but when a childhood friend and former boxing prodigy resurfaces, the face-off is more than just a fight.",
        releaseDate:"March 1, 2023",
        runningTime:"1h 56m",
        director:"Michael B. Jordan",
        cast:["Michael B. Jordan","Tessa Thompson","Jonathan Majors"],
        rating:6.8
    },
    {
        title:"Fast and Furious 6",
        description:"Hobbs has Dominic and Brian reassemble their crew to take down a team of mercenaries: Dominic unexpectedly gets sidetracked with facing his presumed deceased girlfriend, Letty.",
        releaseDate:"May 7, 2013",
        runningTime:"2h 10m",
        director:"Justin Lin",
        cast:["Vin Diesel","Paul Walker","Dwayne Johnson"],
        rating:7.0
    },
    {
        title:"Insidious - The Red Door",
        description:"The Lamberts must go deeper into The Further than ever before to put their demons to rest once and for all.",
        releaseDate:"June 27, 2023",
        runningTime:"1h 47m",
        director:"Patrick Wilson",
        cast:["Ty Simpkins","Patrick Wilson","Rose Bryne"],
        rating:6.0
    },
    {
        title:"Jackass 3",
        description:"Johnny Knoxville and company return for the third installment of their TV show spin-off, where dangerous stunts and explicit public displays rule.",
        releaseDate:"October 11, 2010",
        runningTime:"1h 34m",
        director:"Jeff Tremaine",
        cast:["Johnny Knoxville","Steve-O","Bam Margera"],
        rating:7.0
    },
    {
        title:"Jumanji",
        description:"Four teenagers are sucked into a magical video game, and the only way they can escape is to work together to finish the game.",
        releaseDate:"December 5, 2017",
        runningTime:"1h 59m",
        director:"Jake Kasdan",
        cast:["Dwayne Johnson","Karen Gillan","Kevin Hart"],
        rating:6.9
    },
    {
        title:"Madagascar 3",
        description:"The Madagascar animals join a struggling European circus to get back to New York, but find themselves being pursued by a psychotic animal-control officer.",
        releaseDate:"May 18, 2012",
        runningTime:"1h 33m",
        director:"Eric Darnell",
        cast:["Ben Stiller","Jada Pinkett Smith","Chris Rock"],
        rating:6.9
    },
    {
        title:"Saving Private Ryan",
        description:"Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
        releaseDate:"July 21, 1998",
        runningTime:"2h 49m",
        director:"Steven Spielberg",
        cast:["Tom Hanks","Matt Damon","Tom Sizemore"],
        rating:8.6
    },
    {
        title:"The Expendables 4",
        description:"The Expendables will square up against: an arms dealer who commands the might of a massive private army.",
        releaseDate:"September 20, 2023",
        runningTime:"1h 30m",
        director:"Scott Waugh",
        cast:["Jason Statham","50 Cent","Megan Fox"],
        rating:8.6
    },
    {
      title:"The Revenant",
      description:"A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
      releaseDate:"December 16, 2015",
      runningTime:"2h 36m",
      director:"Alejandro Inarritu",
      cast:["Leonardo DiCaprio","Tom Hardy","Will Poulter"],
      rating:8.0
  },
    {
        title:"Titanic",
        description:"A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
        releaseDate:"November 1, 1997",
        runningTime:"3h 14m",
        director:"James Cameron",
        cast:["Leonardo DiCaprio","Kate Winslet","Billy Zane"],
        rating:7.9
    },
    {
        title:"Top Gun - Maverick",
        description:"After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.",
        releaseDate:"May 18, 2022",
        runningTime:"2h 10m",
        director:"Joseph Kosinski",
        cast:["Tom Cruise","Jennifer Connelly","Miles Teller"],
        rating:8.3
    },

]

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
  return `<div class="col-12 col-sm-6 col-md-4 mt-3">
  <div
    class="image"
    onmouseover="onImageHover(this)"
    onmouseleave="onMouseLeave(this)"
    onclick="loadMovieDetails(event)"
    data-name="${name}"
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
    content += generateMovie(movie.title);
  });

  container.innerHTML = content;
}

function displayCarousel() {
  const container = document.querySelector(".carousel-inner");
  container.innerHTML = "";
  let content = "";

  for (let i = 0; i < 6; i++) {
    content += generateCarouselItem(movies[i].title, i);
  }

  container.innerHTML = content;
}


function search() {
  let term = document.querySelector(".movie-search").value;

  let list = movies.filter((movie) => movie.title.toLowerCase().includes(term.toLowerCase()));

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
  localStorage.setItem("booking",JSON.stringify({movieTime:null, movieData:{title:name,src:name},seats:null,cost:null,custName:null,email:null}));
  window.location.replace("times.html");
}

function getMovieByName(name){
  return movies.find((movie) => movie.title == name)
}

function loadMovieDetails(event){

  if(event.target.classList.contains("bookNow") ) 
    return
  

  let elem = event.currentTarget;
  let name = elem.dataset.name;
  let movieData = getMovieByName(name);


  localStorage.setItem("movie",JSON.stringify(movieData))
  localStorage.setItem("booking",JSON.stringify({movieTime:null, movieData:{title:name,src:name},seats:null,cost:null,custName:null,email:null}));
  
  window.location.replace("movie-details.html");

}
