// navbar.js
document.addEventListener('DOMContentLoaded', function() {
    const navbarElement = document.getElementById('navbar');
    if (navbarElement) {
        fetch('navbar.html')
            .then(response => response.text())
            .then(data => {
                navbarElement.innerHTML = data;
            });
    }
});