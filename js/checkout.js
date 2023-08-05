    // boolean variables used for form validation
    validFullName = false;
    validEmail = false;
    validPhone = false;
    validNameOnCard = false;
    validCreditCardNumber = false;
    validExpMonth = false;
    validExpYear = false;
    validCVV = false;

    let data;

    onStart();


    
    // the functions below use regular expressions to validate input values 
    function isValidEmail(value){
        let pattern = /.+@.+/

        return pattern.test(value);
    }

    function isValidPhone(value){
        let pattern = /\+353 \d{9}/

        return pattern.test(value);
    }

    function isValidCardNumber(value){
        let pattern = /\d{4} \d{4} \d{4} \d{4}/

        return pattern.test(value);
    }

    function isValidExpMonth(value){
        let pattern = /\d{2}/
        return pattern.test(value);
    }

    function isValidExpYear(value){
        let pattern = /\d{2}/
        return pattern.test(value);
    }

    function isValidCVV(value){
        let pattern = /\d{3}/
        return pattern.test(value);
    }

    // the functions below validate input values and update the UI
    function validateFullName(){
        const fullNameInput = document.querySelector("#name");

        if(fullNameInput.value === "") {
            fullNameInput.classList.add("is-invalid")
            validFullName = false;
        }
        else {
            fullNameInput.classList.remove("is-invalid")
            validFullName = true;
        }
    }



    function validateEmail(){
        const input = document.querySelector("#email");

        if(!isValidEmail(input.value)) {
            input.classList.add("is-invalid")
            validEmail = false;
        }
        else {
            input.classList.remove("is-invalid")
            validEmail = true;
        }
    }


    function validateNameOnCard(){
        const input = document.querySelector("#cardName");

        if(input.value === "") {
            input.classList.add("is-invalid")
            validNameOnCard = false;
        }
        else {
            input.classList.remove("is-invalid")
            validNameOnCard = true;
        }
    }

    function validatePhone(){
        const input = document.querySelector("#phone");

        if(!isValidPhone(input.value)) {
            input.classList.add("is-invalid")
            validPhone = false;
        }
        else {
            input.classList.remove("is-invalid")
            validPhone = true;
            
        }
    }


    function validateCreditCardNumber(){
        const input = document.querySelector("#cardNumber");

        if(!isValidCardNumber(input.value)) {
            input.classList.add("is-invalid")
            validCreditCardNumber = false;
        }
        else {
            input.classList.remove("is-invalid")
            validCreditCardNumber = true;
            
        }
    }

    function validateExpMonth(){
        const input = document.querySelector("#exp-month");

        if(!isValidExpMonth(input.value)) {
            input.classList.add("is-invalid")
            validExpMonth = false;
        }
        else {
            input.classList.remove("is-invalid")
            validExpMonth = true;
            
        }
    }

    function validateExpYear(){
        const input = document.querySelector("#exp-year");

        if(!isValidExpYear(input.value)) {
            input.classList.add("is-invalid")
            validExpYear = false;
        }
        else {
            input.classList.remove("is-invalid")
            validExpYear = true;
            
        }
    }


    function validateCVV(){
        const input = document.querySelector("#cvv");

        if(!isValidCVV(input.value)) {
            input.classList.add("is-invalid")
            validCVV = false;
        }
        else {
            input.classList.remove("is-invalid")
            validCVV = true;
        }
    }
    

    function validateEverything(){
        validateFullName();
        validateEmail();
        validatePhone();
        validateNameOnCard();
        validateCreditCardNumber();
        validateExpMonth();
        validateExpYear();
        validateCVV();
    }

    function writeToLocalStorage(key,value){
        localStorage.setItem(key,value);
    }


    function onSubmit(){

        if( !(validFullName && validEmail && validPhone && validNameOnCard && validCreditCardNumber && validExpMonth && validExpYear && validCVV) ){

            validateEverything();
            return
        }   
    
        // If the form is complete and valid, we update the "booking" object in the local storage and redirect the user to the "confirmation" page
        data.custName = document.querySelector("#name").value;
        data.email = document.querySelector("#email").value;

        writeToLocalStorage('booking',JSON.stringify(data));
        //redirect to confirmation page
        window.location.replace("confirmation.html");
        
    }

    // reads from local storage
    function loadMovieData(){
        data = JSON.parse(localStorage.getItem('booking'));
    }

    
    // outputs the data read from the local storage
    function displayBookingData(){
        let movieName = document.querySelector('.hero-name');
        let bookingDate = document.querySelector('.movie-time');
        let seatsContainer = document.querySelector('.seats-container');
        let nrOfSeatsDisplay = document.querySelector('.nr-of-seats');
        let image = document.querySelector(".movie-img");
        let totalDisplay = document.querySelector(".total-euros");
    

        movieName.innerHTML = data.movieData.title;
        bookingDate.innerHTML = data.movieTime;
        nrOfSeatsDisplay.innerHTML = data.seats.length;
        image.src= `assets/images/${data.movieData.src}.jpg`
        totalDisplay.innerHTML = data.cost;

        seatsContainer.innerHTML = data.seats.map((seat) => `<span>${seat}</span>`).join('');
    }
    
    
    function onStart(){
        loadMovieData()

        displayBookingData();
    }

    


