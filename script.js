// script.js

// ===============================
// VINTAGE FLOWER WELCOME ANIMATION
// ===============================

document.addEventListener("DOMContentLoaded", () => {
    startFlowerIntro();
    enableSmoothScroll();
    activateButtons();
});

// Create floating flowers intro effect
function startFlowerIntro() {
    const intro = document.createElement("div");
    intro.classList.add("flower-intro");

    intro.innerHTML = `
        <h1 class="welcome-text">Welcome 🌸</h1>
        <p class="sub-text">Step into a vintage floral world...</p>
    `;

    document.body.appendChild(intro);

    // Create floating flowers
    for (let i = 0; i < 25; i++) {
        createFlower(intro);
    }

    // Remove intro after 4 seconds
    setTimeout(() => {
        intro.classList.add("fade-out");
        setTimeout(() => intro.remove(), 1500);
    }, 4000);
}

// Generate floating flower elements
function createFlower(container) {
    const flower = document.createElement("span");
    flower.classList.add("flower");

    // Random positioning and animation
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = 3 + Math.random() * 5 + "s";
    flower.style.fontSize = 10 + Math.random() * 25 + "px";

    const flowers = ["🌸", "🌺", "🌼", "🌷", "🌻"];
    flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];

    container.appendChild(flower);
}

// ===============================
// SMOOTH SCROLLING
// ===============================
function enableSmoothScroll() {
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
}

// ===============================
// BUTTON INTERACTIONS
// ===============================
function activateButtons() {
    const buttons = document.querySelectorAll("button");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.classList.add("clicked");

            setTimeout(() => {
                btn.classList.remove("clicked");
            }, 300);
        });
    });
}

// ===============================
// EXTRA: SCROLL REVEAL EFFECT
// ===============================
window.addEventListener("scroll", revealOnScroll);

function revealOnScroll() {
    const elements = document.querySelectorAll(".reveal");

    elements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const visiblePoint = 100;

        if (elementTop < windowHeight - visiblePoint) {
            el.classList.add("active");
        }
    });
}