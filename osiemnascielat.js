const startDate = new Date("November 14, 2008 23:59:59").getTime(); // Data początkowa
const targetDate = new Date("November 14, 2026 23:59:59").getTime(); // Data końcowa
const totalTime = targetDate - startDate; // Całkowity czas trwania odliczania

const countdownInterval = setInterval(() => {
    const now = new Date().getTime(); // Aktualny czas
    const timeLeft = targetDate - now; // Pozostały czas
    const timeElapsed = now - startDate; // Miniony czas

    // Obliczanie dni, godzin, minut i sekund
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Obliczanie całościowych jednostek czasu
    const totalDays = (timeLeft / (1000 * 60 * 60 * 24)).toFixed(0);
    const totalHours = (timeLeft / (1000 * 60 * 60)).toFixed(0);
    const totalMinutes = (timeLeft / (1000 * 60)).toFixed(0);
    const totalSeconds = (timeLeft / 1000).toFixed(3);

    // Obliczanie procentów
    const percentLeft = ((timeLeft / totalTime) * 100).toFixed(4); // Ile czasu pozostało
    const percentElapsed = ((timeElapsed / totalTime) * 100).toFixed(2); // Ile czasu minęło

    const weeks = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    
    document.getElementById("countdown").innerHTML = 
        `${weeks} tygodni`;
    document.getElementById("days").innerHTML =
        `${totalDays} dni`;
    document.getElementById("hours").innerHTML =
        `${totalHours} godzin`;
    document.getElementById("minutes").innerHTML =
        `${totalMinutes} minut`;
    document.getElementById("seconds").innerHTML =
        `${totalSeconds} sekund`;
    document.getElementById("percent").innerHTML =
        `${percentLeft}%`;

    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Urodziny!!!";
        document.getElementById("percent").innerHTML = "100.00% czasu minęło.";
    }
}, 100);