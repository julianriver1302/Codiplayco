document.addEventListener('DOMContentLoaded', () => {
    console.log("Dashboard CodiPlay + Modo Oscuro Cargado");

    // --- LÓGICA DEL MODO OSCURO ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;
    const body = document.body;

    // 1. Verificar si hay una preferencia guardada
    const savedTheme = localStorage.getItem('codiplay-theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }

    if (themeToggleBtn && themeIcon) {
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
    }

    // --- SIDEBAR COLAPSABLE EN MÓVIL ---
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggles = document.querySelectorAll('.mobile-nav-toggle');

    if (sidebar && sidebarToggles.length > 0) {
        sidebarToggles.forEach(btn => {
            btn.addEventListener('click', () => {
                sidebar.classList.toggle('sidebar--open');
            });
        });

        // Cerrar el sidebar al hacer clic fuera en móvil
        document.addEventListener('click', (e) => {
            if (!sidebar.classList.contains('sidebar--open')) return;
            const target = e.target;
            if (sidebar.contains(target) || (target.closest && target.closest('.mobile-nav-toggle'))) {
                return;
            }
            sidebar.classList.remove('sidebar--open');
        });
    }


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

    // --- PROGRESO DE MÓDULOS (lecciones completadas / totales) ---
    const modulesConfig = {
        1: { key: 'modulo1_maxLesson', total: 9 },
        2: { key: 'modulo2_maxLesson', total: 6 },
        3: { key: 'modulo3_maxLesson', total: 10 },
        4: { key: 'modulo4_maxLesson', total: 15 }
    };

    Object.entries(modulesConfig).forEach(([num, cfg]) => {
        const maxFromStorage = parseInt(localStorage.getItem(cfg.key) || '0', 10);
        const completed = isNaN(maxFromStorage) ? 0 : Math.min(maxFromStorage, cfg.total);

        const progressText = document.getElementById(`mod${num}-progress-text`);
        const lessonsText = document.getElementById(`mod${num}-lessons-text`);
        const progressBar = document.getElementById(`mod${num}-progress-bar`);

        if (progressText) {
            progressText.textContent = `${completed} / ${cfg.total}`;
        }

        if (lessonsText) {
            lessonsText.textContent = `Completado ${completed} de ${cfg.total} lecciones`;
        }

        if (progressBar) {
            const percent = cfg.total > 0 ? (completed / cfg.total) * 100 : 0;
            progressBar.style.width = `${percent}%`;
        }
    });
});
