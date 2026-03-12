// Oczekujemy na pełne załadowanie struktury strony (DOM)
document.addEventListener('DOMContentLoaded', () => {
    
    // Pobieramy elementy menu z HTML
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    // Obsługa kliknięcia w ikonę "hamburgera" (telefony komórkowe)
    mobileMenuBtn.addEventListener('click', () => {
        // Dodaje lub usuwa klasę 'active', która wyświetla/ukrywa menu w CSS
        navLinks.classList.toggle('active');
        
        // Zmiana ikony z "hamburgera" na "krzyżyk"
        const icon = mobileMenuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Zamykanie menu po kliknięciu w jakikolwiek link nawigacji (dla wygody użytkownika mobilnego)
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });
});