
document.addEventListener('DOMContentLoaded', () => {
    let currentQuestionIndex = 0;
    const questions = [
        {
            question: "What is the capital of France?",
            answer: "Paris"
        },
        {
            question: "What is the largest ocean on Earth?",
            answer: "Pacific"
        },
        {
            question: "Which country is known as the Land of the Rising Sun?",
            answer: "Japan"
        },
        {
            question: "Which sport uses terms like “spare” and “strike”?",
            answer: "Bowling"
        },
        {
            question: "How does the ocean say hello?",
            answer: "It Waves"
        },
        {
            question: "In the movie “Finding Nemo,” what kind of fish is Nemo?",
            answer: "Clownfish"
        },
        {  
            question: "In the Harry Potter series, what is the name of Harrys pet owl?",
            answer: "Hedwig"
        },
        {  
            question: "Which band released the hit song “Bohemian Rhapsody?",
            answer: "Queen"
        },  
        { 
            question: "What is the name of the worlds highest mountain??",
            answer: "Mount Everest"
        },
        {  
            question: "In what year did the Titanic sink?",
            answer: "1912"
        },
        {
            question: "Who discovered America in 1492?",
            answer: "Christopher Columbus"
        },
        {
            question: "What force keeps us on the ground and not floating in space?",
            answer: "Gravity"
        },
        {
            question: "In the periodic table, what is the symbol for gold?",
            answer: "Au"
        },
        {
            question: "What is the name of the galaxy that Earth is part of?",
            answer: "The Milky Way Galaxy"
        },
        {
            question: "“The Hobbit” was written by which author?",
            answer: "J.R.R. Tolkien"
        },
        {
            question: "What is the main ingredient in traditional Italian pesto sauce?",
            answer: "Basil"
        },
        {
            question: "“The Hobbit” was written by which author?",
            answer: "J.R.R. Tolkien"
        },
        {
            question: "Which TV show features characters named Rachel, Ross, Monica, Chandler, Joey, and Phoebe?",
            answer: "Friends"
        },
        {
            question: "What is the name of the fictional kingdom in “Game of Thrones” where the Iron Throne is situated?",
            answer: "Westeros"
        },
        {
            question: "What is the name of the famous Mexican painter known for her self-portraits and distinct unibrow?",
            answer: "Frida Kahlo"
        },
        {
            question: "Who painted the Mona Lisa?",
            answer: "Leonardo da Vinci"
        },
        {
            question: "Which Dutch artist painted “The Starry Night”?",
            answer: "Vincent van Gogh"
        },
        {
            question: "Which planet is known as the Red Planet?",
            answer: "Mars"
        },
        {
            question: "What is the name of the day after Thanksgiving, known for being a big shopping day?",
            answer: "Black Friday"
        },
        {
            question: "What is the fastest land animal in the world?",
            answer: "Cheetah"
        },
        {
            question: "What is the tallest building in the world?",
            answer: "Burj Khalifa"
        },
        {
            question: "What is the hardest natural substance on Earth?",
            answer: "Diamond"
        },
        {
            question: "What is the main language spoken in Brazil?",
            answer: "Portuguese"
        },
        {
            question: "In which city would you find the Statue of Liberty?",
            answer: "New York"
        },
        {
            question: "Which holiday involves dressing up in costumes and trick-or-treating?",
            answer: "Hallowen"
        },
        {
            question: "What is the smallest planet in our Solar System? (Not Pluto)",
            answer: "Mercury"
        },
        {
            question: "What is the Japanese art of folding paper called?",
            answer: "Origami"
        },
        {
            question: "Which fruit is known as the ‘king of fruits’ and is notorious for its strong smell?",
            answer: "Durian"
        },
        {
            question: "What is the process by which plants make their food using sunlight?",
            answer: "Photosynthesis"
        },
        {
            question: "What is the chemical symbol for water?",
            answer: "H2O"
        },
        {
            question: "In which year did the Berlin Wall fall?",
            answer: "1989"
        },
        {
            question: "Which ancient civilization built the pyramids?",
            answer: "The Egyptian"
        },
        {
            question: "Which desert is the largest in the world?",
            answer: "The Sahara Desert"
        },
        {
            question: "Which British band sang “Hey Jude”?",
            answer: "The Beatles"
        },
        
        


    ];

    // DOM 
    const questionElement = document.getElementById('question');
    const answerInput = document.getElementById('answer');
    const submitButton = document.getElementById('submit');
    const messageElement = document.getElementById('message');

    // Closure example: This function will have a closure function that stores game data.
    function nextQuestion() {
        if (currentQuestionIndex < questions.length) {
            const currentQuestion = questions[currentQuestionIndex];
            questionElement.textContent = currentQuestion.question;
            answerInput.value = '';  // Input'u temizle
            messageElement.textContent = '';  // Mesajı temizle
        } else {
            messageElement.textContent = "Congratulations, you've completed the game!";
            submitButton.disabled = true;
        }
    }

    // Event Handler: When you click the button
    submitButton.addEventListener('click', function() {
        const userAnswer = answerInput.value.trim();
        const correctAnswer = questions[currentQuestionIndex].answer;

        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            messageElement.textContent = "Correct! Well done.";
        } else {
            messageElement.textContent = "Wrong answer. Try again.";
        }

        // Pass the next question to move forward
        currentQuestionIndex++;
        setTimeout(nextQuestion, 1000); // wait a second and show the next question
    });

    
    nextQuestion();
});