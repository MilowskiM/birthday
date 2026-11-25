const confetti = document.querySelector('.confetti');
const colors = ['#ff681b', '#fff7eb', '#163461'];
// A light layer of falling confetti brings the artwork to life.
for (let i = 0; i < 32; i++) {
  const piece = document.createElement('b');
  const values = {
    '--x': `${(i * 37.7) % 100}%`,
    '--w': `${5 + i % 5}px`, '--h': `${9 + i % 7}px`,
    '--color': colors[i % colors.length],
    '--duration': `${9 + i % 7}s`, '--delay': `${-(i * 1.13)}s`,
    '--drift': `${(i % 2 ? 1 : -1) * (25 + i % 80)}px`,
    '--spin': `${(i % 2 ? 1 : -1) * (360 + i * 23)}deg`
  };
  Object.entries(values).forEach(([key, value]) => piece.style.setProperty(key, value));
  confetti.append(piece);
}
const motion = document.querySelector('.motion');
motion.addEventListener('click', () => {
  const paused = document.body.classList.toggle('paused');
  motion.setAttribute('aria-pressed', String(paused));
  motion.textContent = paused ? 'Play animation' : 'Pause animation';
});
