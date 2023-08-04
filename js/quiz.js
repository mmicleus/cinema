const quizData = [
    {
      question: "Which actor won the Academy Award for Best Actor in the movie 'The Revenant'?",
      options: ["Leonardo DiCaprio", "Johnny Depp", "Brad Pitt", "Tom Hanks"],
      answer: "Leonardo DiCaprio"
    },
    {
      question: "In the 'Harry Potter' film series, who plays the character Hermione Granger?",
      options: ["Emma Watson", "Dakota Fanning", "Natalie Portman", "Keira Knightley"],
      answer: "Emma Watson"
    },
    {
      question: "Which director is known for creating the movie 'Inception'?",
      options: ["James Cameron", "Christopher Nolan", "Martin Scorsese", "Quentin Tarantino"],
      answer: "Christopher Nolan"
    },
    {
      question: "In the 'The Godfather' film series, who plays the character Michael Corleone?",
      options: ["Marlon Brando", "Al Pacino", "Robert De Niro", "Joe Pesci"],
      answer: "Al Pacino"
    },
    {
      question: "Which movie won the Academy Award for Best Picture in 2019?",
      options: ["La La Land", "Moonlight", "Parasite", "Green Book"],
      answer: "Green Book"
    },
    {
      question: "What is the name of the fictional African country in the movie 'Black Panther'?",
      options: ["Wakanda", "Zamunda", "Genovia", "Agrabah"],
      answer: "Wakanda"
    },
    {
      question: "Who played the role of Jack Dawson in the movie 'Titanic'?",
      options: ["Tom Cruise", "Brad Pitt", "Leonardo DiCaprio", "Johnny Depp"],
      answer: "Leonardo DiCaprio"
    },
    {
      question: "Which movie is about a young musician who is transported to the Land of the Dead?",
      options: ["Moana", "Coco", "Frozen", "Brave"],
      answer: "Coco"
    },
    {
      question: "Who directed the movie 'The Shawshank Redemption'?",
      options: ["Martin Scorsese", "Christopher Nolan", "Frank Darabont", "Quentin Tarantino"],
      answer: "Frank Darabont"
    },
    {
      question: "In the 'Star Wars' franchise, who is Luke Skywalker's father?",
      options: ["Darth Vader", "Emperor Palpatine", "Obi-Wan Kenobi", "Han Solo"],
      answer: "Darth Vader"
    },
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const option1Text = document.getElementById("option1-text");
  const option2Text = document.getElementById("option2-text");
  const option3Text = document.getElementById("option3-text");
  const option4Text = document.getElementById("option4-text");
  
  const option1 = document.getElementById("option1");
  const option2 = document.getElementById("option2");
  const option3 = document.getElementById("option3");
  const option4 = document.getElementById("option4");
  
  
  const submitButton = document.getElementById("submit-btn");
  const resultElement = document.getElementById("result");
  
  // Function to load the next question
  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    option1Text.innerText = currentQuizData.options[0];
    option2Text.innerText = currentQuizData.options[1];
    option3Text.innerText = currentQuizData.options[2];
    option4Text.innerText = currentQuizData.options[3];
  
    option1.value = currentQuizData.options[0];
    option2.value = currentQuizData.options[1];
    option3.value = currentQuizData.options[2];
    option4.value = currentQuizData.options[3];
  
  }
  
  // Function to check the selected answer
  function checkAnswer() {
  
    console.log("checking answer!")
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) return;
  
    const selectedAnswer = selectedOption.value;
    console.log("Selected Answer:" +selectedAnswer);
    const currentQuizData = quizData[currentQuestion];
  
    if (selectedAnswer === currentQuizData.answer) {
      score++;
      console.log("score" + score)
    }
  
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  // Function to show the final result
  function showResult() {
    questionElement.innerText = `Your score: ${score} out of ${quizData.length}`;
    submitButton.style.display = "none";
    resultElement.innerHTML = "<strong>Thanks for playing!</strong>";
  }
  
  // Event listener for the submit button
  submitButton.addEventListener("click", checkAnswer);
  
  // Load the first question
  loadQuestion();