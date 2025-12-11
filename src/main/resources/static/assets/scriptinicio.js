 // Animación de entrada del header y enlaces de navegación
document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('main-header');
    const navLinks = document.querySelectorAll('.nav-link-glass');

    if (header && navLinks.length > 0) {
        navLinks.forEach((link, index) => {
            link.style.opacity = '0';
            link.style.transform = 'translateY(20px)';
            setTimeout(() => {
                link.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                link.style.opacity = '1';
                link.style.transform = 'translateY(0)';
            }, 300 + index * 100);
        });
    }

    // Menú hamburguesa responsive (compartido en index, quienes somos, FAQ, etc.)
    const navToggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (navToggle && mobileMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            // Bloquear scroll cuando el menú está abierto
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
        });

        // Cerrar menú al hacer click en un enlace
        mobileMenu.addEventListener('click', (e) => {
            if (e.target.closest('.nav-link-glass')) {
                navToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        // Cerrar menú con ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
});