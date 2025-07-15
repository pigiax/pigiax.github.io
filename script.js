const weddingDate = new Date('2025-07-19');
const countdownEl = document.getElementById('countdown');
const updateCountdown = () => {
    const now = new Date();
    const diff = weddingDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days < 0)
        countdownEl.textContent = `Grazie di essere stati con noi!`;
    else
        countdownEl.textContent = `Mancano ${days} giorni!`;
};
updateCountdown();
setInterval(updateCountdown, 1000 * 60 * 60);