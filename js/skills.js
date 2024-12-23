function openTab(event, tabId) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabs = document.querySelectorAll('.tab');

    tabContents.forEach(content => content.classList.remove('active'));
    tabs.forEach(tab => tab.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}
const darkModeIcon = document.getElementById("darkMode-icon");

darkModeIcon.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const header = document.querySelector(".header");
    header.classList.toggle("dark-header");

    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("dark-navbar");

    const logo = document.querySelector(".logo");
    logo.classList.toggle("dark-logo");

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