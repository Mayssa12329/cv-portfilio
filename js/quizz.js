document.getElementById('ajouter-commentaire').addEventListener('click', function () {
    const nom = document.getElementById('nom').value.trim();
    const prenom = document.getElementById('prenom').value.trim();
    const commentaire = document.getElementById('commentaire').value.trim();
    if (!nom || !prenom || !commentaire) {
        alert("Veuillez remplir tous les champs !");
        return;
    }
    const commentsSection = document.getElementById('comments-section');
    const nouveauCommentaire = document.createElement('div');
    nouveauCommentaire.classList.add('comment');
    const maintenant = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const dateHeure = maintenant.toLocaleDateString('en-US', options);
    nouveauCommentaire.innerHTML = `
        <span class="comment-time">${dateHeure}</span> <strong>${prenom} ${nom}</strong>
        <p>${commentaire}</p>
    `;
    commentsSection.appendChild(nouveauCommentaire);
    document.getElementById('nom').value = '';
    document.getElementById('prenom').value = '';
    document.getElementById('commentaire').value = '';
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