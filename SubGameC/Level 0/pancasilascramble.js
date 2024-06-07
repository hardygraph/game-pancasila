// File: pancasilascramble.js

document.addEventListener('DOMContentLoaded', (event) => {
    const silaContainer = document.getElementById('sila-container');
    const timerElement = document.getElementById('time');
    const checkButton = document.getElementById('check-sentence');
    const resultElement = document.getElementById('result');
    
    const correctSentence = "Ketuhanan yang Maha Esa";
    let scrambledWords = ["yang", "Esa", "Ketuhanan", "Maha"];
    scrambledWords = scrambledWords.sort(() => Math.random() - 0.5); // Shuffle words

    let draggedWord = null;

    // Function to create word elements
    function createWordElement(word) {
        const wordElement = document.createElement('div');
        wordElement.className = 'word';
        wordElement.textContent = word;
        wordElement.setAttribute('draggable', true);

        wordElement.addEventListener('dragstart', (e) => {
            draggedWord = e.target;
        });

        wordElement.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        wordElement.addEventListener('drop', (e) => {
            if (e.target.classList.contains('word')) {
                let temp = draggedWord.textContent;
                draggedWord.textContent = e.target.textContent;
                e.target.textContent = temp;
            }
        });

        return wordElement;
    }

    // Create sentence container
    const sentenceContainer = document.createElement('div');
    sentenceContainer.className = 'sentence';

    // Add words to sentence container
    scrambledWords.forEach(word => {
        const wordElement = createWordElement(word);
        sentenceContainer.appendChild(wordElement);
    });

    // Add sentence container to the DOM
    silaContainer.appendChild(sentenceContainer);

    // Timer functionality
    let timeLeft = 60;
    const timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            checkSentence();
        } else {
            timerElement.textContent = --timeLeft;
        }
    }, 1000);

    // Check sentence function
    function checkSentence() {
        const userSentence = Array.from(sentenceContainer.children).map(wordElement => wordElement.textContent).join(' ');
        if (userSentence === correctSentence) {
            resultElement.textContent = "Jawaban Benar!";
            resultElement.style.color = "green";
        } else {
            resultElement.textContent = "Jawaban Salah!";
            resultElement.style.color = "red";
        }
    }

    // Add event listener to check button
    checkButton.addEventListener('click', checkSentence);
});
