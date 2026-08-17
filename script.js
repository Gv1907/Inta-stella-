const confettiLayer = document.getElementById('confetti-layer');
const introScreen = document.getElementById('intro-screen');

const createConfetti = () => {
  const colors = ['#5ecf9a', '#8fe0bc', '#d4f7e5', '#eaf9f0', '#f6d365', '#7bdff2'];

  for (let i = 0; i < 40; i += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetti';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = `${(Math.random() * 0.5).toFixed(2)}s`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    confettiLayer.appendChild(piece);

    setTimeout(() => piece.remove(), 2600);
  }
};

window.addEventListener('load', () => {
  setTimeout(() => {
    introScreen.classList.add('hidden');
    createConfetti();
  }, 2100);
});
