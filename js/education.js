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

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".education-timeline h1");
    const timelineItems = document.querySelectorAll(".timeline-item");

    function animateHeader() {
        header.style.opacity = "0";
        header.style.transform = "translateY(20px)";
        header.style.transition = "all 1s ease-in-out";

        setTimeout(() => {
            header.style.opacity = "1";
            header.style.transform = "translateY(0)";
        }, 100);
    }

    function animateTimelineItems() {
        timelineItems.forEach((item, index) => {
            item.style.opacity = "0";
            item.style.transform = "translateY(20px)";
            item.style.transition = `all 0.7s ease-in-out ${index * 0.3}s`; 

            setTimeout(() => {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            }, index * 300); 
        });
    }

    animateHeader();
    animateTimelineItems();
});

function openModal(title, imageSrc, description) {
    const modal = document.getElementById('modal');
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-image').src = imageSrc;
    document.getElementById('modal-description').innerText = description;

    modal.style.display = 'block';
    document.querySelector('.bg-color').classList.add('blur');
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.querySelector('.bg-color').classList.remove('blur');
}

window.addEventListener('click', (e) => {
    const modal = document.getElementById('modal');
    if (e.target === modal) {
        closeModal();
    }
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