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
let bgIndex = 0;
let songStarted = false;

const complimentBtn = document.getElementById('complimentButton');
const complimentDiv = document.getElementById('compliment');
const heartContainer = document.getElementById('heartContainer');
const bgMusic = document.getElementById('bgMusic');
const backgrounds = document.querySelectorAll('.bg');

// Show Compliment and Change Background
complimentBtn.addEventListener('click', () => {
  if (!songStarted) {
    bgMusic.play().catch(err => console.log('Autoplay blocked'));
    songStarted = true;
  }

  // Show Compliment
  complimentDiv.textContent = compliments[complimentIndex];
  complimentDiv.style.opacity = 1;
  complimentIndex = (complimentIndex + 1) % compliments.length;

  setTimeout(() => {
    complimentDiv.style.opacity = 0;
  }, 5000);

  // Change Backgrounds
  backgrounds[bgIndex].classList.remove('active');
  bgIndex = (bgIndex + 1) % backgrounds.length;
  backgrounds[bgIndex].classList.add('active');

  // Floating Hearts
  for (let i = 0; i < 5; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '80%';
    heart.style.animationDuration = `${2 + Math.random()}s`;
    heartContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }

  // Generate Party Particles (Hearts, Stars, Confetti)
  generateParticles();
});

// Generate Particles like Hearts, Stars, Confetti
function generateParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {  // Increased from 25 to 50
      const particle = document.createElement('div');
      const randomChoice = Math.floor(Math.random() * 3);  // Randomly choose particle type
  
      if (randomChoice === 0) {
        particle.classList.add('heart');
      } else if (randomChoice === 1) {
        particle.classList.add('star');
      } else {
        particle.classList.add('confetti');
      }
  
      const size = Math.random() * 10 + 10;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.animationDuration = `${5 + Math.random() * 5}s`;
      particlesContainer.appendChild(particle);
  
      setTimeout(() => particle.remove(), 7000);
    }
  }
