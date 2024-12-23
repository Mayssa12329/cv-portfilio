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
document
    .getElementById("scroll-link")
    .addEventListener("click", function(event) {
        event.preventDefault();
        const aboutPageUrl = this.getAttribute("href");
        window.location.href = aboutPageUrl;
    });
    

    document.addEventListener('DOMContentLoaded', function() {
        const dropdown = document.querySelector('.dropdown');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        dropdown.addEventListener('click', function(event) {
            event.stopPropagation();
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        });
        document.addEventListener('click', function() {
            dropdownMenu.style.display = 'none';
        });
    });