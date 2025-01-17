document.addEventListener('DOMContentLoaded', () => {
    const checkButton = document.getElementById('check-answers');
    const result = document.getElementById('result');
    const timerElement = document.getElementById('time');
    let timeRemaining = 120;
    let timer;

    checkButton.addEventListener('click', checkAnswers);

    function startTimer() {
        timer = setInterval(() => {
            timeRemaining--;
            timerElement.textContent = timeRemaining;
            if (timeRemaining <= 0) {
                clearInterval(timer);
                checkAnswers();
            }
        }, 1000);
    }

    function checkAnswers() {
        clearInterval(timer);
        const answers = {
            sila1: ['ketuhanan', 'maha', 'esa'],
            sila2: ['kemanusiaan', 'adil', 'beradab'],
            sila3: ['persatuan', 'indonesia'],
            sila4: ['kerakyatan', 'kebijaksanaan', 'permusyawaratan', 'perwakilan'],
            sila5: ['keadilan', 'sosial', 'seluruh', 'rakyat', 'indonesia']
        };

        const userAnswers = {
            sila1: [document.getElementById('sila1-1').value.trim().toLowerCase(), document.getElementById('sila1-2').value.trim().toLowerCase(), document.getElementById('sila1-3').value.trim().toLowerCase()],
            sila2: [document.getElementById('sila2-1').value.trim().toLowerCase(), document.getElementById('sila2-2').value.trim().toLowerCase(), document.getElementById('sila2-3').value.trim().toLowerCase()],
            sila3: [document.getElementById('sila3-1').value.trim().toLowerCase(), document.getElementById('sila3-2').value.trim().toLowerCase()],
            sila4: [document.getElementById('sila4-1').value.trim().toLowerCase(), document.getElementById('sila4-2').value.trim().toLowerCase(), document.getElementById('sila4-3').value.trim().toLowerCase(), document.getElementById('sila4-4').value.trim().toLowerCase()],
            sila5: [document.getElementById('sila5-1').value.trim().toLowerCase(), document.getElementById('sila5-2').value.trim().toLowerCase(), document.getElementById('sila5-3').value.trim().toLowerCase(), document.getElementById('sila5-4').value.trim().toLowerCase(), document.getElementById('sila5-5').value.trim().toLowerCase()]
        };

        let correct = true;
        for (let key in answers) {
            for (let i = 0; i < answers[key].length; i++) {
                if (answers[key][i] !== userAnswers[key][i]) {
                    correct = false;
                    break;
                }
            }
            if (!correct) break;
        }

        if (correct) {
            result.textContent = "Semua jawaban benar!";
            result.style.color = "green";
        } else {
            result.textContent = "Beberapa jawaban salah, coba lagi.";
            result.style.color = "red";
        }
    }

    startTimer();
});
