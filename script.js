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

    // --- LIGHTBOX DLA GALERII ---
const galleryImages = document.querySelectorAll('.gallery-grid img');
const lightbox = document.getElementById('lightbox');

if (galleryImages.length > 0 && lightbox) {
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-lightbox');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0; // Zapamiętuje, które zdjęcie oglądamy

    // Kliknięcie w zdjęcie w galerii otwiera Lightbox
    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentIndex = index;
            updateLightboxImage();
            lightbox.classList.add('active');
        });
    });

    // Funkcja podmieniająca źródło powiększonego zdjęcia
    function updateLightboxImage() {
        lightboxImg.src = galleryImages[currentIndex].src;
    }

    // Zamknięcie "X"
    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    // Zamknięcie po kliknięciu w ciemne tło poza zdjęciem
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });

    // Strzałka w prawo (następne)
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % galleryImages.length; // Zapętla do pierwszego, gdy dotrze do końca
        updateLightboxImage();
    });

    // Strzałka w lewo (poprzednie)
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length; // Zapętla do ostatniego
        updateLightboxImage();
    });

    // Obsługa klawiatury
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return; // Działa tylko gdy lightbox jest otwarty
        
        if (e.key === 'Escape') {
            lightbox.classList.remove('active');
        } else if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % galleryImages.length;
            updateLightboxImage();
        } else if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
            updateLightboxImage();
        }
    });
}
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