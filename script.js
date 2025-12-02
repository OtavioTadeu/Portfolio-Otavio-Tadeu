document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = toggleBtn.querySelector('i');

    // Verifica se já existe preferência salva no navegador
    const savedTheme = localStorage.getItem('portfolio-theme');
    
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
        updateIcon(savedTheme);
    }

    toggleBtn.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio-theme', newTheme); // Salva a escolha
        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun'); // Ícone de sol para voltar ao claro
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon'); // Ícone de lua para ir ao escuro
        }
    }
});
