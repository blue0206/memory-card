function createConfetti() {
    const confettiContainer = document.querySelector("#confetti-container");

    for (let i=0; i<50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = getRandomColor();

        confettiContainer?.appendChild(confetti);
    }
}

function getRandomColor() {
    const colors = ['#ff6347', '#ffa500', '#32cd32', '#1e90ff', '#ff69b4'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function executeConfetti() {
    createConfetti();
    const confettiContainer = document.querySelector('#confetti-container');
    confettiContainer?.classList.add('active');

    setTimeout(() => {
        (confettiContainer as Element).innerHTML = '';
        confettiContainer?.classList.remove('active');

    }, 8000);
}

export default executeConfetti;