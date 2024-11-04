let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let ampmElement = document.getElementById("ampm");
let dateElement = document.getElementById("date");
let themeButton = document.querySelector('.theme-button');
let timeZoneSelect = document.getElementById('timeZone');

function updateClock() {
    let selectedZone = timeZoneSelect.value;
    let currentTime = selectedZone === 'Local' ? new Date() : new Date(new Date().toLocaleString('en-US', { timeZone: selectedZone }));

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // Convert 0 to 12

    hrs.innerHTML = (hours < 10 ? "0" : "") + hours;
    min.innerHTML = (minutes < 10 ? "0" : "") + minutes;
    sec.innerHTML = (seconds < 10 ? "0" : "") + seconds;
    ampmElement.innerHTML = ampm;

    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.innerHTML = currentTime.toLocaleDateString('en-US', options);
}

setInterval(updateClock, 1000);
updateClock();

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});

function playSound() {
    let sound = new Audio('path/to/sound.mp3'); // Update with your sound file path
    sound.play();
}
setInterval(() => {
    let currentTime = new Date();
    if (currentTime.getMinutes() === 0 && currentTime.getSeconds() === 0) {
        playSound();
    }
}, 1000);
