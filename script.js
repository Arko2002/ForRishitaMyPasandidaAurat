const compliments = [
    "You light up the room!",
    "Your smile is contagious!",
    "You make the world a better place!",
    "You are unique and special!",
    "You have an amazing soul!",
    "You radiate positivity!",
    "You are stronger than you think!",
    "You're a true gem!"
];

let complimentIndex = 0;

document.getElementById('complimentButton').addEventListener('click', function () {
    const complimentDiv = document.getElementById('compliment');
    const heartContainer = document.getElementById('heartContainer');

    // Show compliment in order
    const currentCompliment = compliments[complimentIndex];
    complimentDiv.textContent = currentCompliment;
    complimentDiv.style.opacity = 1;

    complimentIndex = (complimentIndex + 1) % compliments.length;

    // Hide compliment after 3s
    setTimeout(() => {
        complimentDiv.style.opacity = 0;
    }, 3000);

    // Generate floating hearts
    for (let i = 0; i < 5; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '80%';
        heart.style.animationDuration = `${2 + Math.random()}s`;
        heartContainer.appendChild(heart);

        // Remove after animation
        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
});
