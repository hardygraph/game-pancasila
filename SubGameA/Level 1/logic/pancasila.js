const list = document.getElementById('sila-list');
const items = list.querySelectorAll('li');
let draggingItem = null;

items.forEach(item => {
    item.addEventListener('dragstart', () => {
        draggingItem = item;
        item.classList.add('dragging');
    });

    item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
        draggingItem = null;
    });

    item.addEventListener('dragover', (e) => {
        e.preventDefault();
        const draggingOverItem = e.target;
        if (draggingOverItem && draggingOverItem !== draggingItem) {
            const bounding = draggingOverItem.getBoundingClientRect();
            const offset = bounding.y + (bounding.height / 2);
            if (e.clientY - offset > 0) {
                draggingOverItem.after(draggingItem);
            } else {
                draggingOverItem.before(draggingItem);
            }
        }
    });
});

document.getElementById('check-order').addEventListener('click', () => {
    const correctOrder = [
        "Ketuhanan yang Maha Esa",
        "Kemanusiaan yang adil dan beradab",
        "Persatuan Indonesia",
        "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan",
        "Keadilan sosial bagi seluruh rakyat Indonesia"
    ];

    const userOrder = Array.from(list.children).map(item => item.textContent);

    const result = document.getElementById('result');
    if (JSON.stringify(userOrder) === JSON.stringify(correctOrder)) {
        result.textContent = "Selamat! Urutan Anda benar.";
        result.style.color = "green";
    } else {
        result.textContent = "Maaf, urutan Anda salah. Coba lagi.";
        result.style.color = "red";
    }
});
