document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.draggable-image');
    const droppables = document.querySelectorAll('.droppable');
    const result = document.getElementById('result');
    const checkButton = document.getElementById('check-match');

    images.forEach(image => {
        image.addEventListener('dragstart', dragStart);
    });

    droppables.forEach(droppable => {
        droppable.addEventListener('dragover', dragOver);
        droppable.addEventListener('drop', drop);
    });

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.dataset.sila);
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function drop(e) {
        e.preventDefault();
        const silaNumber = e.dataTransfer.getData('text/plain');
        if (e.target.classList.contains('droppable')) {
            e.target.textContent = `Sila ${silaNumber}`;
            e.target.dataset.matched = silaNumber;
        }
    }

    checkButton.addEventListener('click', checkMatch);

    function checkMatch() {
        let allCorrect = true;
        droppables.forEach(droppable => {
            if (droppable.dataset.sila !== droppable.dataset.matched) {
                allCorrect = false;
            }
        });

        if (allCorrect) {
            result.textContent = "Semua jawaban benar!";
            result.style.color = "green";
        } else {
            result.textContent = "Beberapa jawaban salah, coba lagi.";
            result.style.color = "red";
        }
    }
});
