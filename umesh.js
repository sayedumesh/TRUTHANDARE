const truthButton = document.getElementById('truthButton');
const dareButton = document.getElementById('dareButton');
const challengeText = document.getElementById('challengeText');

const truthChallenges = [
    "Have you ever cheated on a test?",
    "What's the most embarrassing thing you've done in public?",
    "Tell us your biggest secret.",
];

const dareChallenges = [
    "Dance like nobody's watching for 1 minute.",
    "Call a random contact from your phone and sing them a song.",
    "Do your best impersonation of a celebrity.",
];

truthButton.addEventListener('click', () => {
    const randomTruthIndex = Math.floor(Math.random() * truthChallenges.length);
    challengeText.textContent = truthChallenges[randomTruthIndex];
});

dareButton.addEventListener('click', () => {
    const randomDareIndex = Math.floor(Math.random() * dareChallenges.length);
    challengeText.textContent = dareChallenges[randomDareIndex];
});
