document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = toggleBtn.querySelector('i');

    // Verifica preferência salva no navegador
    const savedTheme = localStorage.getItem('portfolio-theme');
    
    if (savedTheme) {
        // Se tiver preferência salva, aplica
        body.setAttribute('data-theme', savedTheme);
        updateIcon(savedTheme);
    } else {
        // Se NÃO tiver preferência, assume o padrão Dark que está no HTML
        // Não precisamos fazer nada pois o HTML já está data-theme="dark"
        updateIcon('dark');
    }

    toggleBtn.addEventListener('click', () => {
        // Pega o tema atual (ou dark se for nulo)
        const currentTheme = body.getAttribute('data-theme') || 'dark';
        
        // Se for Dark, vira Light. Se for Light, vira Dark.
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio-theme', newTheme); // Salva escolha
        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        if (theme === 'dark') {
            // Se estiver Dark, mostra Sol (para ir pro Light)
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            // Se estiver Light, mostra Lua (para ir pro Dark)
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
});
