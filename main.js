
    const toggleDark = document.getElementById('toggleDark');
    toggleDark.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
    });


        let countdown;
        let timeLeft = 3600; // 1 hour in seconds
        const countdownDisplay = document.getElementById('countdown');
        const startBtn = document.getElementById('startBtn');
        const stopBtn = document.getElementById('stopBtn');
        const restartBtn = document.getElementById('restartBtn');

        function updateDisplay() {
            const hours = String(Math.floor(timeLeft / 3600)).padStart(2, '0');
            const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0');
            const seconds = String(timeLeft % 60).padStart(2, '0');
            countdownDisplay.textContent = `${hours}:${minutes}:${seconds}`;
        }

        function startCountdown() {
            if (countdown) return; // Prevent multiple intervals
            countdown = setInterval(() => {
                if (timeLeft <= 0) {
                    clearInterval(countdown);
                    countdown = null;
                    alert('Countdown finished!');
                } else {
                    timeLeft--;
                    updateDisplay();
                }
            }, 1000);
        }

        function stopCountdown() {
            clearInterval(countdown);
            countdown = null;
        }

        function restartCountdown() {
            stopCountdown();
            timeLeft = 3600; // Reset to 1 hour
            updateDisplay();
        }

        startBtn.addEventListener('click', startCountdown);
        stopBtn.addEventListener('click', stopCountdown);
        restartBtn.addEventListener('click', restartCountdown);
        updateDisplay(); // Initial display update
