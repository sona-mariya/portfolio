// Initialize particles.js for the background
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#0f0" },
        shape: { type: "circle" },
        opacity: { value: 0.5, anim: { enable: true, speed: 1 } },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#0f0", opacity: 0.5, width: 1 },
        move: { enable: true, speed: 2 }
    },
    interactivity: {
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } }
    },
    retina_detect: true
});

// Scroll-based fade-in effect
window.addEventListener("scroll", function() {
    let elements = document.querySelectorAll(".fade-in");
    elements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add("visible");
        }
    });
});

// Process the message typed in the Contact Section
function processMessage() {
    const input = document.getElementById("contact-input");
    const response = document.getElementById("terminal-response");

    if (input.value) {
        response.innerHTML = `> Processing your message: ${input.value}...`;
        setTimeout(() => {
            response.innerHTML = `> Message received: "${input.value}". Thank you for reaching out!`;
        }, 2000);
        input.value = ""; // Clear the input field
    } else {
        response.innerHTML = "> Please type a message before sending.";
    }
}

// Typing effect for terminal text
let welcomeText = "> Welcome to My Portfolio...";
let index = 0;
let speed = 100;

function typeWriter() {
  if (index < welcomeText.length) {
    document.querySelector(".terminal-text").innerHTML += welcomeText.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
