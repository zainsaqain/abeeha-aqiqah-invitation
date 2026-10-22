const card = document.getElementById('card');
const replay = document.getElementById('replay');
const curtainIntro = document.getElementById('curtainIntro');
function restart() {
  card.querySelectorAll('.scene, .progress span').forEach((el) => {
    el.style.animation = 'none';
    void el.offsetWidth;
    el.style.animation = '';
  });
}
replay.addEventListener('click', restart);
// Keep the curtains visible on every fresh opening, then open them automatically.
window.setTimeout(() => curtainIntro.classList.add('open'), 900);
window.setTimeout(() => card.classList.add('started'), 2500);
