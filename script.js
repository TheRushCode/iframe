function toggleMode() {
    const body = document.body;
    const button = document.querySelector('.toggle-btn');

    // If dark mode is active → switch to light
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        button.textContent = "🌙 Dark Mode";
    } 
    // If light mode is active → switch to dark
    else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        button.textContent = "☀️ Light Mode";
    }
}
