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

    // Zamykanie menu po kliknięciu w jakikolwiek link nawigacji
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
// Oczekujemy na załadowanie strony (ten nasłuch pewnie już masz na górze pliku, ale można to dodać na dole)
document.addEventListener('DOMContentLoaded', () => {
    
    // --- ANIMACJE SCROLLOWANIA (Scroll Reveal) ---
    // Pobieramy wszystkie elementy, które mają klasę .animate-on-scroll
    const observerElements = document.querySelectorAll('.animate-on-scroll');

    // Tworzymy obserwatora
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Jeśli element pojawi się w oknie przeglądarki (isIntersecting)
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Dodaj klasę animującą
                observer.unobserve(entry.target); // Przestań obserwować po pierwszej animacji (animuje się tylko raz)
            }
        });
    }, {
        threshold: 0.1 // Animacja odpala się, gdy 10% elementu wejdzie na ekran
    });

    // Przypinamy obserwatora do każdego elementu
    observerElements.forEach(element => {
        observer.observe(element);
    });

});