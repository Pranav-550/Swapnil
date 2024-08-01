document.addEventListener('DOMContentLoaded', () => {
    const textToTypeElement = document.getElementById('text-to-type');
    const typingArea = document.getElementById('typing-area');
    const wpmElement = document.getElementById('wpm');
    const accuracyElement = document.getElementById('accuracy');
    const keys = document.querySelectorAll('.key');

    // Add event listeners to virtual keyboard buttons
    keys.forEach(key => {
        key.addEventListener('click', () => {
            typingArea.value += key.dataset.key;
            typingArea.focus();
            updateStats();
        });
    });

    // Update statistics
    function updateStats() {
        const textToType = textToTypeElement.innerText;
        const typedText = typingArea.value;
        const correctText = textToType.slice(0, typedText.length);

        // Words per Minute (WPM)
        const words = typedText.split(' ').length;
        const wpm = Math.max(0, words - 1); // Simple example calculation
        wpmElement.textContent = wpm;

        // Accuracy
        let correctChars = 0;
        for (let i = 0; i < typedText.length; i++) {
            if (typedText[i] === typedText[i]) {
                correctChars++;
            }
        }
        const accuracy = (correctChars / textToType.length) * 100;
        accuracyElement.textContent = `${Math.round(accuracy)}%`;
    }

    // Update stats on text input
    typingArea.addEventListener('input', updateStats);
});
