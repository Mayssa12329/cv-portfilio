function submitQuiz() {
    const answers = {
      q1: 'C',
      q2: 'C',
      q3: 'B',
      q4: 'C',
      q5: 'D',
      q6: 'D',
      q7: 'A',
      q8:'B',
      q9:'A',
      q10: 'A',
      q11: 'D',
      q12: 'B',
      q13: 'B ',
      q14: 'D',
      q15:'D'
    };
  
    const form = document.getElementById('quiz-form');
    let score = 0;
    let resultsHTML = '<h2>Results:</h2><ol>';
  
    for (const [question, correctAnswer] of Object.entries(answers)) {
      const selectedAnswer = form.elements[question].value;
      if (selectedAnswer === correctAnswer) {
        score++;
        resultsHTML += `<li>${question} - Correct</li>`;
      } else {
        resultsHTML += `<li>${question} - Incorrect (Correct: ${correctAnswer})</li>`;
      }
    }
  
    resultsHTML += `</ol><p>Your score: ${score} / ${Object.keys(answers).length}</p>`;
    document.getElementById('results').innerHTML = resultsHTML;
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