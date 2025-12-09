document.addEventListener('DOMContentLoaded', () => {
    console.log("Dashboard CodiPlay + Modo Oscuro Cargado");

    // --- LÓGICA DEL MODO OSCURO ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    const body = document.body;

    // 1. Verificar si hay una preferencia guardada
    const savedTheme = localStorage.getItem('codiplay-theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    // 2. Evento Click del Botón
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Cambiar Icono y Guardar preferencia
        if (body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('codiplay-theme', 'dark');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('codiplay-theme', 'light');
        }
    });


    // --- LÓGICA ORIGINAL ---

    // Menú Lateral
    const menuItems = document.querySelectorAll('.sidebar-menu li');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Botón Continuar
    const continueBtn = document.querySelector('.btn-continue');
    if(continueBtn) {
        continueBtn.addEventListener('click', () => {
            // Animación simple de click
            continueBtn.style.transform = "scale(0.95)";
            setTimeout(() => continueBtn.style.transform = "scale(1)", 100);
            console.log("Continuando curso...");
        });
    }

    // Botones Bloqueados
    const lockedBtns = document.querySelectorAll('.btn-locked');
    lockedBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            // Animación de sacudida (shake) usando CSS inline temporal
            btn.style.transition = "transform 0.1s";
            btn.style.transform = "translateX(5px)";
            setTimeout(() => btn.style.transform = "translateX(-5px)", 100);
            setTimeout(() => btn.style.transform = "translateX(0)", 200);
        });
    });
});
