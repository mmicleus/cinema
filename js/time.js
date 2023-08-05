let data;

onStart()

function onStart(){
    loadMovieData()
    displayMovieNameAndPoster()
}

function loadMovieData(){
    data = JSON.parse(localStorage.getItem("booking"))
}

function writeToLocalStorage(key,value){
    localStorage.setItem(key,value)
}

function displayMovieNameAndPoster(){
    let img = document.querySelector("img");
    let movieTitle = document.querySelector(".hero-name");

    img.src = `assets/images/${data.movieData.src}.jpg`

    movieTitle.innerHTML = data.movieData.title;
}


flatpickr("#datepicker", {
  minDate: "today",
  dateFormat: "Y-m-d",
  locale: "default",
});


flatpickr("#timepicker", {
  enableTime: true,
  noCalendar: true,
  dateFormat: "H:i",
  time_24hr: true,
});

function getMonthByIndex(index){
    let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

    return month[index];
}

function getWeekdayByIndex(index){
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
    return days[index]
}

function getFormattedTime(date, time){
    let dateObj = new Date(date);

    let weekday = getWeekdayByIndex(dateObj.getDay());
    let monthDate = dateObj.getDate();
    let month = getMonthByIndex(dateObj.getMonth());

    return `${weekday} ${monthDate} ${month}, ${time}`
}


function submitBooking() {
  const selectedDate = document.getElementById("datepicker").value;
  const selectedTime = document.getElementById("timepicker").value;

  // Add your booking logic here, e.g., sending the data to a backend server

  let bookingTime = getFormattedTime(selectedDate,selectedTime);

  data.movieTime = bookingTime;

  writeToLocalStorage('booking',JSON.stringify(data))

  window.location.replace("book-tickets.html");
}

