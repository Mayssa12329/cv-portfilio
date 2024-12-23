const readMoreButton = document.getElementById("read-more-btn");
const moreText = document.getElementById("more-text");
const aboutText = document.getElementById("about-text");
let isExpanded = false;

readMoreButton.addEventListener("click", () => {
    if (isExpanded) {
        moreText.style.display = "none";
        aboutText.style.whiteSpace = "nowrap";
        readMoreButton.textContent = "Read More";
    } else {
        moreText.style.display = "inline";
        aboutText.style.whiteSpace = "normal";
        readMoreButton.textContent = "Read Less";
    }
    isExpanded = !isExpanded;
});

const darkModeIcon = document.getElementById("darkMode-icon");
darkModeIcon.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const header = document.querySelector(".header");
    header.classList.toggle("dark-header");

    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("dark-navbar");

    const logo = document.querySelector(".logo");
    logo.classList.toggle("dark-logo");

    const main = document.querySelector("main");
    const aside = document.querySelector("aside");
    main.classList.toggle("dark-main-aside");
    aside.classList.toggle("dark-main-aside");

    const socialLinks = document.querySelectorAll(".social-media a");
    socialLinks.forEach((link) => {
        link.classList.toggle("dark-social");
    });

    const downloadBtn = document.querySelector(".btn");
    downloadBtn.classList.toggle("dark-btn");

    const moonIcon = darkModeIcon.querySelector(".bx-moon");
    const sunIcon = darkModeIcon.querySelector(".bx-sun");

    if (document.body.classList.contains("dark-mode")) {
        moonIcon.style.display = "none";
        sunIcon.style.display = "block";
    } else {
        moonIcon.style.display = "block";
        sunIcon.style.display = "none";
    }
});

const sections = document.querySelectorAll(
    ".section, .header, .home-content, .home_img, .scroll-down-icon"
);

const animateOnScroll = () => {
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.classList.add("animate-fade");
        }
    });
};

document.addEventListener("DOMContentLoaded", animateOnScroll);
window.addEventListener("scroll", animateOnScroll);
darkModeIcon.addEventListener("click", () => {
    if (document.body.classList.contains("dark-mode")) {
        const sections = document.querySelectorAll(
            ".section, .header, main, aside, .home-content, .scroll-down-icon"
        );
        sections.forEach((section) => {
            section.style.animation = "fadeIn 0.5s ease-in-out";
            section.style.opacity = "1";

            section.addEventListener(
                "animationend",
                () => {
                    section.style.animation = "";
                }, { once: true }
            );
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const homeImg = document.querySelector(".home_img");
    const toggleBtn = document.getElementById("read-more-btn");

    toggleBtn.addEventListener("click", () => {
        if (homeImg.classList.contains("paused")) {
            homeImg.classList.remove("paused");
            toggleBtn.textContent = "Read more";
        }
    });
});