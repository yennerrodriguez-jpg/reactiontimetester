const reactionButton = document.getElementById('reactionButton');
const instruction = document.getElementById('instruction');
const reactionTimeDisplay = document.getElementById('reactionTime');

let startTime;
let endTime;
let isWaiting = false;

// Function to start the reaction test
function startReactionTest() {
    instruction.textContent = 'Wait for the button to appear...';

    // Random delay between 2 and 5 seconds
    const randomDelay = Math.floor(Math.random() * 3000) + 2000;

    setTimeout(() => {
        // Button appears after the delay
        reactionButton.classList.remove('hidden');
        reactionButton.classList.add('visible');
        startTime = Date.now();
    }, randomDelay);

    isWaiting = true;
}

// Function to calculate reaction time
reactionButton.addEventListener('click', () => {
    if (isWaiting) {
        endTime = Date.now();
        const reactionTime = endTime - startTime;
        reactionTimeDisplay.textContent = `Your reaction time is ${reactionTime} milliseconds!`;
        reactionButton.classList.remove('visible');
        reactionButton.classList.add('hidden');
        isWaiting = false;
        setTimeout(startReactionTest, 2000); // Restart after a short delay
    }
});

// Start the first test as soon as the page loads
startReactionTest();
