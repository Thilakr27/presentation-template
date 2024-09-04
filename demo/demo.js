// JavaScript for Theme Toggling
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    // Save the theme preference in local storage
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Apply the theme based on user preference on page load
window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
};

// Slide Navigation (optional)
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

// Python Code Execution (assuming you have Skulpt or similar library)
function runPythonCode() {
    const code = document.getElementById("python-code").value;
    // Assuming Skulpt or a similar library is included for Python execution
    Skulpt.run(code, output => document.getElementById("python-output").innerText = output);
}

setInterval(() => {
    document.querySelector('.next').click();
  }, 5000); // Change slides every 5 seconds
  

