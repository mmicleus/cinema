let seats = [];
let selectedSeats = [];
let htmlSeats;
let seatsDisplay;
let selectedSeatsContainer;
let totalDisplay;
let booking;


let nrOfSeatsToSelect = 1;
let nrOfSeatsSelected = 0;


onStart();


function onStart(){
    htmlSeats = document.querySelectorAll('.seat');
    seatsDisplay = document.querySelector('#seatsDisplay');
    selectedSeatsContainer = document.querySelector("#selected-seats-container");
    totalDisplay = document.querySelector(".totalDisplay");

    htmlSeats.forEach((seat) => seat.addEventListener('click',onSeatClicked))

    //getting the 'booking' object from local storage
    booking = JSON.parse(localStorage.getItem("booking"));

    // displaying the movie thumbnail, title and the date and time of reservation
    renderHeroData();

    //setting the 'data-id' attribute of each '.seat' element
    setSeatsId();
    //populating the 'seats' array with random boolean values
    getSeatAvailability();
    // coloring seats based on the values in the 'seats' array
    displaySeatAvailability();
}


// inserts data into the 'hero' section
function renderHeroData(){
    document.querySelector('.hero-name').innerHTML = booking.movieData.title;
    document.querySelector('.movie-time').innerHTML = booking.movieTime;
    document.querySelector('.hero-image img').src = `assets/images/${booking.movieData.src}.jpg`
}


// sets the 'data-id' attribute of '.seat' elements
function setSeatsId(){
    htmlSeats.forEach((seat,index) => {
        let row =  String.fromCharCode("A".charCodeAt() + (index / 15));
        let column = (index % 15) + 1;

        seat.dataset.id = row + column;

        console.log(seat.dataset.id);

    })
}


// populates the 'seats' array with random boolean values
function getSeatAvailability(){
    for(let i1 = 0; i1 < 11; i1++){
        seats.push([]);
        for(let i2 = 0;i2 < 15;i2++){
            seats[i1].push(getRandomNumber(2) == 0 ? false : true);
        }
    }
}

// colors 'available' seats in black and 'occupied' seats in red
function displaySeatAvailability(){
    let count = 0;
    for(let i1 = 0;i1 < 11;i1++){
        for(let i2 = 0;i2 < 15;i2++){

            htmlSeats[count].classList.add(seats[i1][i2] == true ? "available" : "occupied");
            count++;
        }
    }
}

//function trigered when a seat is clicked
function onSeatClicked(event){
    let elem = event.currentTarget;


    if(elem.classList.contains("occupied")){
        alert("Seat Occupied!")
        return;
    }else if(elem.classList.contains("selected")){
        elem.classList.remove("selected");
        selectedSeats = selectedSeats.filter((seat) => seat != elem);
        nrOfSeatsSelected -= 1;
    }else{
        if(nrOfSeatsSelected + 1 > nrOfSeatsToSelect){
            let aux = selectedSeats.pop()
            aux.classList.remove("selected");
            nrOfSeatsSelected--;
        }
        elem.classList.add("selected")
        selectedSeats.push(elem)
        nrOfSeatsSelected+=1;
    }


    // updating the content of the 'selectedSeats' container
    displaySelectedSeats();
    // updating the total cost of the booking
    updateTotalCost();
}


// generates random number in the [0,num) range
function getRandomNumber(num){
    return Math.floor(Math.random() * num);
}


//clamps the value of 'num'
function clamp(num,min,max){
    return Math.min(Math.max(num, min), max);
}

//keeps the value of the 'nrOfSeatsToSelect' variable between 1 and 165
function validateInput(nr){
    return clamp(nr,1,165);
}

//function triggered when clicking the '+' button
function incrementNrOfSeats(){
    
    nrOfSeatsToSelect = validateInput(nrOfSeatsToSelect + 1)
    seatsDisplay.innerHTML = nrOfSeatsToSelect;
}


// //function triggered when clicking the '-' button
function decrementNrOfSeats(){
    nrOfSeatsToSelect = validateInput(nrOfSeatsToSelect - 1)
    
    seatsDisplay.innerHTML = nrOfSeatsToSelect;
}

// displays the total cost of the booking in the 'totalDisplay' element
function updateTotalCost(){
    totalDisplay.innerHTML = `€${(selectedSeats.length * 5).toFixed(2)}`;
}

// returns the new content (innerHTML) of the 'selectedSeatsContainer'
//the content of the 'selectedSeatsContainer' gets updated whenever a new seat is booked
function displaySelectedSeats(){

    console.log("called");
    console.log(selectedSeatsContainer)
    selectedSeatsContainer.innerHTML = "";
    let htmlContent="";


  htmlContent += selectedSeats.map((seat) => `<div class="selected-seat">
                                 <i class="fa-solid fa-couch"></i>
                                 <br>
                                 <span>${seat.dataset.id}</span>
                                 </div>`).join('')

                                 console.log(htmlContent);

selectedSeatsContainer.innerHTML = htmlContent;

}

