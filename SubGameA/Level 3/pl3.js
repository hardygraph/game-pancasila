document.getElementById('check-answers').addEventListener('click', () => {
    const correctAnswers = {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5"
    };

    let correct = true;
    document.querySelectorAll('.question').forEach(question => {
        const sila = question.getAttribute('data-sila');
        const answer = question.querySelector('.answer').value;
        if (correctAnswers[sila] !== answer) {
            correct = false;
        }
    });

    const result = document.getElementById('result');
    if (correct) {
        result.textContent = "Selamat! Semua jawaban benar.";
        result.style.color = "green";
    } else {
        result.textContent = "Maaf, ada jawaban yang salah. Coba lagi.";
        result.style.color = "red";
    }
});
