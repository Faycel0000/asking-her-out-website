// Show a cute dancing GIF when "Yes" is clicked
document.getElementById("yes-button").addEventListener("click", () => {
    document.getElementById("yes-animation").classList.remove("hidden");
});

// Move "No" button to a random position on the screen
document.getElementById("no-button").addEventListener("mouseover", () => {
    const button = document.getElementById("no-button");
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
});

// Add animated Y2K stickers to the background
const stickers = ['✨', '💖', '🌈', '💫', '🌸', '🌺', '🎉'];
const stickerContainer = document.getElementById("dancing-stickers");

stickers.forEach((sticker) => {
    const span = document.createElement('span');
    span.innerText = sticker;
    span.classList.add('sticker');
    span.style.position = 'absolute';
    span.style.left = Math.random() * 100 + 'vw';
    span.style.top = Math.random() * 100 + 'vh';
    span.style.fontSize = Math.random() * 30 + 20 + 'px';
    span.style.animation = `dance ${Math.random() * 5 + 3}s infinite ease-in-out`;
    stickerContainer.appendChild(span);
});
