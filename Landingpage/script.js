let currentCardIndex = 0;

function prevCard() {
    currentCardIndex = Math.max(currentCardIndex - 1, 0);
    updateSlider();
}

function nextCard() {
    currentCardIndex = Math.min(currentCardIndex + 1, document.querySelectorAll('.card').length - 1);
    updateSlider();
}

function updateSlider() {
    document.querySelector('.cards').style.setProperty('--card-translate-x', `-${currentCardIndex * 320}px`);
}



