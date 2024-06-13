document.addEventListener("DOMContentLoaded", () => {
    // Welcome message
    const welcomeMessage = () => {
        alert("Bienvenue dans le dossier des applications les plus utilisées !");
    };
    
    // Animate cards on hover
    const animateCards = () => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.classList.add('hovered');
            });
            card.addEventListener('mouseleave', () => {
                card.classList.remove('hovered');
            });
        });
    };

    // Alert for non-defined links
    const checkLinks = () => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('click', (event) => {
                if (!card.querySelector('a') && !card.onclick) {
                    event.preventDefault();
                    alert("Cette fonctionnalité n'est pas encore disponible.");
                }
            });
        });
    };

    // Initialize functions
    welcomeMessage();
    animateCards();
    checkLinks();
});
