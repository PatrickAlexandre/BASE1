document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    const navItems = document.querySelectorAll('nav a');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            document.querySelectorAll('section').forEach(section => {
                section.style.display = 'none';
            });
            targetSection.style.display = 'block';
        });
    });

    // Afficher/Masquer les cartes
    const cards = document.querySelectorAll('.card h3');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const cardContent = this.nextElementSibling;
            cardContent.style.display = cardContent.style.display === 'none' ? 'block' : 'none';
        });
    });

    // Notifications
    function showNotification(message, type='info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Formulaire de contact
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const formEntries = Object.fromEntries(formData.entries());
            console.log('Form Data:', formEntries);
            showNotification('Votre message a été envoyé avec succès!', 'success');
        });
    }
});
