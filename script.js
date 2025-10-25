document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            
            // Close mobile menu after clicking a link
            const mainNav = document.getElementById('main-nav');
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
        });
    });

    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const mainNav = document.getElementById('main-nav');

    mobileMenu.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

    // Handle "Agendar Cita" buttons
    const scheduleButtons = document.querySelectorAll('#schedule-btn-nav, #schedule-btn-hero');
    scheduleButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            // Aquí puedes redirigir a un formulario de agendamiento
            // o abrir un modal con tu asistente virtual de n8n.
            alert('¡Hola! Estás a punto de agendar una cita. Pronto podrás interactuar con Anto, nuestra asistente virtual.');
            // O si tienes el enlace de tu asistente virtual:
            // window.open('URL_DE_TU_ASISTENTE_VIRTUAL_AQUI', '_blank');
        });
    });

    // Placeholder for actual WhatsApp integration if needed
    const whatsappBtn = document.querySelector('.btn-whatsapp');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const whatsappLink = whatsappBtn.getAttribute('href');
            // Abre WhatsApp con el enlace configurado
            window.open(whatsappLink, '_blank');
        });
    }

    // Optional: Form submission handler (for demo, just shows alert)
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mensaje enviado. El Dr. Carlos Juárez Cestoni se pondrá en contacto pronto.');
            contactForm.reset(); // Clear the form
        });
    }
});